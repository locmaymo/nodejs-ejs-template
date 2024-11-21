# One Proxy

Ứng dụng quản lý API Keys cá nhân cho phép bạn tạo, quản lý và theo dõi các API Keys một cách dễ dàng và an toàn.

## Cài đặt

### Yêu cầu

- **Node.js** (phiên bản 18 hoặc mới hơn)
- **NPM** (thường đi kèm với Node.js)
- **MongoDB** (để lưu trữ dữ liệu)

### Các bước thực hiện

1. **Clone** repository này về máy của bạn:

    ```bash
    git clone https://github.com/yourusername/one-proxy.git
    cd one-proxy
    ```

2. **Cài đặt** các dependency:

    ```bash
    npm install
    ```

3. **Tạo file cấu hình** `.env` dựa trên `.env.example` và cập nhật thông tin cần thiết:

    ```bash
    cp .env.example .env
    ```

    Mở file `.env` và chỉnh sửa các biến môi trường phù hợp, ví dụ:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/one-proxy
    ```

## Sử dụng

1. **Khởi chạy** ứng dụng:

    ```bash
    npm start
    ```

2. **Truy cập** `http://localhost:3000` trong trình duyệt để sử dụng giao diện quản lý.

## Chức năng chính

- Quản lý danh sách **API Keys**
- **Kích hoạt/Vô hiệu hóa** API Keys
- **Tạo mới**, **chỉnh sửa** và **xóa** API Keys

## Docker

Để chạy ứng dụng bằng **Docker Compose**:

1. **Cài đặt** Docker và Docker Compose trên hệ thống của bạn.

2. **Tạo file cấu hình** `.env` nếu chưa có (theo hướng dẫn ở phần trên).

3. **Khởi động** các dịch vụ bằng Docker Compose:

    ```bash
    docker-compose up -d
    ```

    Lệnh này sẽ xây dựng các image cần thiết và khởi chạy các container cho ứng dụng Node.js, MongoDB và Nginx.

4. **Truy cập** `http://localhost` trong trình duyệt để sử dụng ứng dụng.

## Đóng góp

Nếu bạn muốn đóng góp cho dự án:

1. **Fork** repository này.

2. **Tạo branch mới** cho tính năng hoặc sửa lỗi của bạn:

    ```bash
    git checkout -b feature/ten-tinh-nang
    ```

3. **Commit** các thay đổi:

    ```bash
    git commit -m "Thêm tính năng XYZ"
    ```

4. **Push** lên repository của bạn:

    ```bash
    git push origin feature/ten-tinh-nang
    ```

5. **Tạo Pull Request** để chúng tôi xem xét và hợp nhất.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ qua email: [email@example.com](mailto:email@example.com).

## Giấy phép

Dự án này được cấp phép theo giấy phép MIT. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## Ghi chú

- Dự án này là **cá nhân và riêng tư**. Vui lòng không chia sẻ hoặc sử dụng nếu không được phép.