# Sử dụng Node.js phiên bản LTS mới nhất
FROM node:22.11-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependency
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Expose cổng mà ứng dụng Node.js của bạn chạy (nếu không được chỉ định, mặc định là 3000)
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["npm", "start"]