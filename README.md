# ACMindX - Auto Comment MindX

## 📝 Giới thiệu

**ACMindX** (Auto Comment MindX) là một extension hỗ trợ giáo viên nhận xét nhanh chóng trên hệ thống LMS MindX. Extension tự động chọn và điền các thông tin phù hợp, giúp tiết kiệm thời gian và tăng hiệu quả công việc.

## ✨ Tính năng chính

-   🎯 **Nhận xét tự động**: Tự động chọn các DOM phù hợp trên trang LMS MindX
-   🔘 **3 mức đánh giá**: Cung cấp 3 nút bấm nhanh cho các mức đánh giá:
    -   **TB** (Trung bình)
    -   **Khá**
    -   **Giỏi**
-   ⚡ **Thao tác nhanh**: Chỉ cần 1 click để hoàn thành việc nhận xét
-   🎨 **Giao diện thân thiện**: Dễ sử dụng, tích hợp trực tiếp vào trang LMS

## 🚀 Cách sử dụng

1. Truy cập vào trang nhận xét bài tập trên LMS MindX
2. Extension sẽ tự động hiển thị 3 nút đánh giá
3. Click vào nút tương ứng với mức độ đánh giá bạn muốn
4. Extension sẽ tự động điền thông tin nhận xét vào các trường phù hợp

## 📦 Cài đặt

1. Tải extension về máy
2. Mở trình duyệt Chrome/Edge
3. Truy cập `chrome://extensions/` hoặc `edge://extensions/`
4. Bật chế độ "Developer mode"
5. Click "Load unpacked" và chọn thư mục extension

## 🛠️ Cấu trúc dự án

```
auto-comment-mindx/
├── manifest.json       # File cấu hình extension
├── src/
│   ├── background.js   # Script chạy nền
│   ├── content.js      # Script tương tác với trang web
│   ├── database.json   # Dữ liệu mẫu nhận xét
│   └── popup/          # Giao diện popup
└── data/
    └── version.json    # Thông tin phiên bản
```

## 📄 License

Xem file [LICENSE](LICENSE) để biết thêm chi tiết.
