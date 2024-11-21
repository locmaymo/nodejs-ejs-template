// public/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện cho tất cả các nút
    const buttons = document.querySelectorAll('.toggleApiKeyBtn');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const keyId = this.getAttribute('data-key-id');
        const btn = this;
  
        fetch('/api/toggle-api-key', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ keyId: keyId }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Cập nhật trạng thái nút
            if (data.enabled) {
              btn.textContent = 'Vô hiệu hóa';
            } else {
              btn.textContent = 'Kích hoạt';
            }
  
            // Hiển thị thông báo
            const notification = document.getElementById('notification');
            notification.textContent = data.message;
          } else {
            alert('Có lỗi xảy ra: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      });
    });
  });