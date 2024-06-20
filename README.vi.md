### Library: React 20
### Language: TypeScript
### Build tool: Vite
###

### CSS styling: Tailwind
### Code checking: Eslint
### Library UI: Material UI
### Mock API: Beeceptor

# Thiết lập môi trường
#### - config .env
  ```typescript
  VITE_API_URL=
  ```
#### Cài đặt package
  ```sh
  npm install
  ```
#### Chạy phía local
  ```sh
  npm run dev
  ```
#### build dự án cho môi trường production: 
  ```sh
  npm run build
  ```
#### Xem trước bản build: 
  ```sh
  npm run preview
  ```


# Cấu trúc project:
### public: chứa dữ liệu công khai(hình ảnh, biểu tượng, font,...)
### src: chứa phần logic code
## Cơ bản:
### _mock: Chứa data mẫu cho mục đích testing.

### api: các hàm gọi API
- base.ts: Khởi tạo cấu hình cho Axios.

### components: component sử dụng chung giữa các trang
- helmet: Cấu hình metadata cho các pages
- hook-form: Các component sử dụng trong react-hook-form.
- NotistackProvider, ReduxProvider: các provider(thuộc tính, chức năng chung) của toàn bộ dự án

### layouts: Chứa phần bố cục trang: header, navbar và content.

### page-section: Chứa các thành phần được chia nhỏ trong một trang

### page: Gồm các trang trong dự án

### route: Quản lý đường dẫn đến các trang trong dự án

### styles: Gồm các file CSS.

### types: typescript types, interfaces

### utils: quản lý các function dùng chung trong dự án

## Nâng cao 

### context: Quản lý các state giữa nested components mà không cần truyền props không cần thiết.

### redux: Quản lý state chung cho dự án sử dụng Redux.

### guards: Chứa các logic ngăn người dùng vào các trang không được phép truy cập.

### hooks: Gồm các custom hooks gồm các hàm, thuộc tính để gắn vào component.

### theme: ghi đè MUI style mặc định

## Tùy chọn

### tailwind.config.js
### tsconfig.json
### vite.config.ts