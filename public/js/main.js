// public/js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Lắng nghe sự kiện cho tất cả các nút
  const buttons = document.querySelectorAll('.toggleApiKeyBtn');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const keyId = this.getAttribute('data-key-id');
      const btn = this;

      // Lấy token CSRF từ meta tag
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content');

      fetch('/api/toggle-api-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken,
        },
        body: JSON.stringify({ keyId: keyId }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Cập nhật trạng thái nút
            if (data.enabled) {
              btn.textContent = 'Vô hiệu hóa';
            } else {
              btn.textContent = 'Kích hoạt';
            }

            // Sử dụng Toast từ scripts.ejs
            Toast.fire({
              icon: 'success',
              title: data.message
            });
          } else {
            // Hiển thị thông báo lỗi
            Toast.fire({
              icon: 'error',
              title: data.message
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          Toast.fire({
            icon: 'error',
            title: 'Có lỗi xảy ra khi kết nối đến server.'
          });
        });
    });
  });
});