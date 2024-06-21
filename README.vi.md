# 1. Công nghệ sử dụng
## 1.1. Công nghệ chính
Library: React 20<br/>
Language: TypeScript<br/>
Build tool: Vite<br/>
## 1.2. Khác
CSS styling: Tailwind<br/>
Code checking: Eslint<br/>
Library UI: Material UI<br/>
Mock API: Beeceptor<br/>

# 2. Thiết lập môi trường
- Bước 1: Cấu hình file .env
  ```typescript
  VITE_API_URL=123
  ```
- Bước 2: Cài đặt package
  ```sh
  npm install
  ```
  
Nếu chạy ở phía nội bộ
- Bước 3a: Chạy phía local
  ```sh
  npm run dev
  ```
- Bước 3b.1: build dự án cho môi trường production: 
  ```sh
  npm run build
  ```
- Bước 3b.2: Xem trước bản build: 
  ```sh
  npm run preview
  ```


# 3. Cấu trúc project
## 3.1. public: chứa dữ liệu công khai(hình ảnh, biểu tượng, font,...)
## 3.2. src: chứa phần logic code
### 3.2.1. Cơ bản
**_mock:** Chứa data mẫu cho mục đích testing.

**api:** các hàm gọi API
- **base.ts:** Khởi tạo cấu hình cho Axios.
- 
**components:** component sử dụng chung giữa các trang
- **helmet**: Cấu hình metadata cho các pages
- **hook-form**: Các component sử dụng trong react-hook-form.
- **provider:** các provider(thuộc tính, chức năng chung) của toàn bộ dự án
- ...


**layouts:** Chứa phần bố cục trang: header, navbar và content.<br/>
**page-section:** Chứa các thành phần được chia nhỏ trong một trang<br/>
**page:** Gồm các trang trong dự án<br/>
**route:** Quản lý đường dẫn đến các trang trong dự án<br/>
**styles:** Gồm các file CSS.<br/>
**types:** typescript types, interfaces<br/>
**utils:** quản lý các function dùng chung trong dự án<br/>

### 3.2.2. Nâng cao 

**context:** Quản lý các state giữa nested components mà không cần truyền props không cần thiết.<br/>
**redux:** Quản lý state chung cho dự án sử dụng Redux.<br/>
**guards:** Chứa các logic ngăn người dùng vào các trang không được phép truy cập.<br/>
**hooks:** Gồm các custom hooks gồm các hàm, thuộc tính để gắn vào component.<br/>
**theme:** ghi đè MUI style mặc định<br/>

### 3.2.3. Tùy chọn

tailwind.config.js<br/>
tsconfig.json<br/>
vite.config.ts<br/>
vercel.json<br/>

# 4. Todo
## 4.1. Nếu có sẵn backend api
Bước 1:
**api/auth.ts**: 
- Sử dụng axios, tạo request đến backend server thay vì dùng mock data

Bước 2: **utils/jwt.ts**:
- function inValidToken() : sử dụng jwt-decode library để xác thực token hợp lệ 
- Thêm function xử lý token hết hạn và tự động reset token
