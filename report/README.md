# Đồ án cơ sở - Thế giới di động - Đặng Quốc Lai

## Hướng dẫn cài đặt phần mềm

### Cài đặt các phần mềm cần thiết
- Git: https://git-scm.com/downloads
- NodeJS: https://nodejs.org/en/ (Khuyến khích sử dụng phiên bản 12.18 LTS)
- Visual Studio Code: https://code.visualstudio.com/download
- PostgreSQL: https://www.postgresql.org/download/ 
  + Khi cài đặt để nguyên cổng http://localhost:5432/ để backend có thể kết nối đến.
  + Password cho tài khoản postge là `dqltlcs`
  + Sau khi cài đặt, mở PostgreSQL, thêm database tên `store`, mở file `database.txt`, copy toàn bộ nội dung và chạy trong PostgreSQL query.
    
### Tiến hành Download về máy
- Tạo thư mục mới bất kỳ
- Nhấn Alt + D -> `cmd` -> Enter.
- Nhập lệnh `git pull https://github.com/danglaiacc/doancoso` -> Enter
- Đợi chương trình tải source về máy.
- Tại cửa sổ cmd, nhập `code .` để mở Visual studio code tại thư mục vừa tạo (có thể vào VS Code, chọn Open folder rồi chỉ dẫn tới thư mục vừa tạo).
- Trong VS Code, mở cửa số Terminal bằng tổ hợp Ctrl + \` (Phím gần phím số 1 trên hàng phím số)
- Khởi động backend (điều kiện là đã cài đặt và thêm database `store` vào PostgreSQL)
  + `cd backend` : Chuyển đến thư mục backend điều kiện là đã cài đặt và thêm data trong postgreSQL.
  + `npm i` : Cài đặt các gói thư viện hỗ trợ chương trình.
  + `npm start` : Khởi động backend.
- Khởi động frontend
  + Trong cửa sổ Terminal hiện tại, nhấn tổ hợp Ctrl + Shift + \` (Mở cửa sổ Terminal khác)
  + `cd frontend` : Chuyển đến thư mục frontend.
  + `npm i` : Cài đặt các gói thư viện hỗ trợ chương trình.
  + `npm start` : Khởi động frontend.
 - Sau khi thực hiện xong các bước trên, chương trình sẽ mở trình duyệt trang http://localhost:2222/ để kiểm tra.
