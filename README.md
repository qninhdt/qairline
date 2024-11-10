# QAIRLINE

## Cách đặt tên branch
- Tạo branch mới từ `main` với tên `<prefix>/<description>`.
- Prefix:
  - `feature`: Tính năng mới hoặc cải thiện tính năng cũ.
  - `bugfix`: Sửa lỗi.
- Ví dụ: `feature/add-login-page`, `bugfix/fix-login-api`, `feature/update-booking-page`.
- Tạo pull request để merge branch vào `main` sau khi hoàn thành công việc.

## Cách đặt tên commit
- Commit message theo format: `<type>: <description>`.
- type:
  - `feat`: Tính năng mới.
  - `fix`: Sửa lỗi.
  - `refactor`: Refactor code.
  - `style`: Thay đổi style.
  - `docs`: Thay đổi document.
  - `test`: Thay đổi test.
  - `chore`: Thay đổi không liên quan đến code.
- Ví dụ: `feat: add login button`, `fix: stop loading when login failed`, `refactor: change app logo`, `chore: update README`.

## Lưu ý
- `npm run dev` trước khí bắt đầu code.
- `npm run lint` để format code và fix lỗi, **không commit code khi chưa chạy lệnh này**.
- `Shift + Alt + D` để mở devtool của Nuxt (khác devtool của browser).