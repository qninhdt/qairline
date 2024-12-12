<script setup lang="ts">
import { OpenAI } from 'openai'

const result = ref<string | null>('')

onMounted(async () => {
  console.log(process.env.OPENAI_API_KEY)
  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey:
      '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'
  })

  const tools: any[] = [
    {
      type: 'function',
      function: {
        name: 'get_weather',
        parameters: {
          type: 'object',
          properties: {
            location: { type: 'string' }
          }
        }
      }
    }
  ]
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'user', content: "What's the weather like in Paris today?" }
    ],
    tools
  })
  console.log(response.choices[0].message.tool_calls[0].function)
})
</script>

<template>
  <div>{{ result }}</div>
</template>
