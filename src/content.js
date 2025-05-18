const style = document.createElement("style");
style.textContent = `
    .comment-button-mindx {
        position: fixed;
        bottom: 20px;
        color: white;
        border: none;
        padding: 15px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s, transform 0.3s;
        z-index: 9999; /* Đảm bảo nút nằm trên cùng */
        }
        .comment-button-mindx:hover {
        opacity: 0.8;
        transform: scale(1.05);
        }
    `;
function createCommentButton(text, right, color) {
    document.head.appendChild(style);
    const button = document.createElement("button");
    button.className = "comment-button-mindx";
    button.style.backgroundColor = color; // Màu nền
    button.style.right = right + "px"; // Căn phải
    button.innerText = text;
    return button;
}

// Create and append UI elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            const sumarryContainer = document.getElementsByClassName("MuiBox-root ");
            const bodyContainer = document.getElementsByClassName(
                "MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded"
            );
            if (bodyContainer && bodyContainer.length > 0) {
                // Kiểm tra xem nút đã được thêm chưa để tránh thêm nhiều lần
                const existingButton = bodyContainer[0].querySelector(".comment-button-mindx");
                if (!existingButton) {
                    const commentButton1 = createCommentButton("TB", 230, "#FFC107");
                    const commentButton2 = createCommentButton("Khá", 150, "#4CAF50");
                    const commentButton3 = createCommentButton("Giỏi", 70, "#2196F3");
                    bodyContainer[0].appendChild(commentButton1);
                    bodyContainer[0].appendChild(commentButton2);
                    bodyContainer[0].appendChild(commentButton3);

                    const danhgiachung = bodyContainer[0].querySelector(".quill .ql-container p");

                    // học viên ở mức trung bình
                    commentButton1.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']");

                        inputs[3].click(); //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[3 + 5].click(); //[COD] Kỹ năng giải quyết vấn đề
                        inputs[3 + 5 * 2].click(); //[COD] Kỹ năng sử dụng máy tính
                        inputs[3 + 5 * 3 - 1].click(); //[COD] Thái độ học tập trên lớp
                        inputs[3 + 5 * 4].click(); //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[3 + 5 * 5].click(); //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[3 + 5 * 6].click(); //[COD] Tư duy sáng tạo
                        danhgiachung.innerText = "Bạn có thái độ học tập ở mức khá, có tinh thần học tập cầu tiến. Bạn đã hoàn thành được một số bài tập về nhà, tuy nhiên cần bổ sung đầy đủ hơn.";
                    });

                    // học viên ở mức khá
                    commentButton2.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']");
                        inputs[4].click(); //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[4 + 4].click(); //[COD] Kỹ năng giải quyết vấn đề
                        inputs[4 + 5 * 2].click(); //[COD] Kỹ năng sử dụng máy tính
                        inputs[4 + 5 * 3 - 1].click(); //[COD] Thái độ học tập trên lớp
                        inputs[4 + 5 * 4 - 1].click(); //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[4 + 5 * 5].click(); //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[4 + 5 * 6 - 1].click(); //[COD] Tư duy sáng tạo
                        danhgiachung.innerText =
                            "Bạn có thái độ học tập tốt, có tinh thần học tập cầu tiến. Bạn hoàn thành được tốt một số bài tập ở mức dễ và trung bình, khi gặp khó khăn bạn đã biết hỏi giáo viên và bạn bè để tìm ra cách giải quyết.";
                    });

                    // học viên ở mức giỏi
                    commentButton3.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']");
                        inputs[5].click(); //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[5 + 5 - 2].click(); //[COD] Kỹ năng giải quyết vấn đề
                        inputs[5 + 5 * 2].click(); //[COD] Kỹ năng sử dụng máy tính
                        inputs[5 + 5 * 3 - 1].click(); //[COD] Thái độ học tập trên lớp
                        inputs[5 + 5 * 4 - 2].click(); //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[5 + 5 * 5].click(); //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[5 + 5 * 6 - 1].click(); //[COD] Tư duy sáng tạo
                        danhgiachung.innerText =
                            "Bạn có thái độ học tập rất tốt, có tinh thần học tập cầu tiến. Bạn hoàn thành được tốt các bài tập, khi gặp khó khăn bạn đã biết hỏi giáo viên và bạn bè để tìm ra cách giải quyết.";
                    });
                }
            }
        }
    });
});

// Bắt đầu theo dõi thay đổi trong DOM
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
