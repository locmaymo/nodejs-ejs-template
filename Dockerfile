# -------------------
# STAGE 1: Build Stage
# -------------------
FROM node:22.11-alpine AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependency chỉ cho production
RUN npm ci --only=production

# Sao chép mã nguồn
COPY . .

# -------------------
# STAGE 2: Production Image
# -------------------
FROM node:22.11-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép node_modules và mã nguồn từ builder
COPY --from=builder /app /app

# Tạo một người dùng không phải root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Thay đổi quyền sở hữu của thư mục làm việc
RUN chown -R appuser:appgroup /app

# Chuyển sang người dùng không phải root
USER appuser

# Expose cổng
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["node", "server.js"]