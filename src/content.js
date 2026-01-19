const FEEDBACK_ARRAY = [
    [
        // Kiến thức học viên tự học.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Kiến thức học viên tự học.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn có chủ động tìm kiếm thông tin, nhưng chưa biết cách tìm kiếm hiệu quả, cần thầy hướng dẫn gợi ý thêm.",
        "Bạn chủ động tìm kiếm thêm những nguồn kiến thức bên ngoài, tự xử lý được những khúc mắc khi giáo viên gợi ý cần tìm hiểu và giải quyết được vấn đề",
        "Bạn rất chủ động trong việc tìm kiếm kiến thức bên ngoài. Ví dụ, sau khi thầy gợi ý về các tài nguyên trực tuyến, bạn đã tìm được một số video và bài viết hữu ích về chủ đề đó.",
    ],
    [
        // Kiến thức học viên đã được học tại lớp.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Kiến thức học viên đã được học tại lớp.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn nắm được kiến thức cơ bản nhưng còn hay quên, mất nhiều thời gian để ghi nhớ và cần ôn tập lại",
        "Bạn hiểu hiểu được kiến thức, nắm và áp dụng lại kiến thức vào bài thực hành",
        "Bạn đã hiểu rất nhanh các kiến thức được thầy truyền đạt trong buổi học hôm nay. Chẳng hạn, bạn đã vận dụng ngay lý thuyết vào bài thực hành và hoàn thành bài tập một cách chính xác.",
    ],
    [
        // Kỹ năng giao tiếp, hợp tác.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Kỹ năng giao tiếp, hợp tác.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn trình bày ý kiến với thầy khá tốt, chủ động hỏi khi chưa hiểu bài, nhưng đôi khi còn ngại ngùng khi trao đổi với bạn bè.",
        "Bạn có thể trình bày ý kiến rõ ràng, biết lắng nghe và hợp tác tốt với bạn bè trong nhóm.",
        "Bạn rất tự tin khi trình bày ý kiến trước lớp và luôn lắng nghe, tôn trọng ý kiến của bạn bè.",
    ],
    [
        // Kỹ năng giải quyết vấn đề.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Kỹ năng giải quyết vấn đề.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn biết cách chia vấn đề lớn thành các phần nhỏ để giải quyết, nhưng đôi khi còn gặp khó khăn trong việc tìm ra giải pháp phù hợp.",
        "Bạn phân tích vấn đề tốt, có thể đưa ra các giải pháp hợp lý và lựa chọn phương án tối ưu.",
        "Bạn phản biện và phân tích các giải pháp một cách sắc bén, từ đó chọn ra phương án hiệu quả nhất để giải quyết vấn đề.",
    ],
    [
        // Kỹ năng sử dụng máy tính.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Kỹ năng sử dụng máy tính.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn gõ tương đối còn chậm, cần luyện tập thêm để nâng cao tốc độ và độ chính xác.",
        "Bạn gõ khá nhanh và chính xác, có thể sử dụng thành thạo các phím tắt cơ bản, theo kịp tiến độ học của lớp",
        "Tốc độ gõ của bạn rất nhanh và chính xác. Bạn đã sử dụng thành thạo các phím tắt nâng cao để tăng hiệu quả làm việc trên máy tính.",
    ],
    [
        // Tư duy máy tính.ĐNL, hợp tác.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Tư duy máy tính.ĐNL, hợp tác.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn có cái nhìn tổng quan về sản phẩm khi tiếp tiếp xúc với dự án mới, tuy nhiên còn gặp khó khăn trong lúc sửa các lỗi nhỏ.",
        "Bạn có cái nhìn tổng quan về sản phẩm khi tiếp tiếp xúc với dự án mới, và biết cách xử lý các lỗi nhỏ phát sinh trong quá trình làm việc.",
        "Bạn nhanh chóng nắm bắt được yêu cầu của dự án mới và có khả năng phát hiện, sửa chữa các lỗi nhỏ một cách hiệu quả.",
    ],

    [
        // Tư duy sáng tạo.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Tư duy sáng tạo.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn có những ý tưởng cá nhân để giải quyết vấn đề, nhưng đôi khi còn thiếu tính thực tiễn, bạn mang được màu sắc cá nhân nhưng chưa đủ hấp dẫn",
        "Bạn có nhiều ý tưởng sáng tạo, biết cách kết hợp các yếu tố khác nhau để tạo ra giải pháp mới mẻ và hiệu quả.",
        "Bạn luôn đưa ra những ý tưởng đột phá và sáng tạo, kết hợp các yếu tố khác nhau một cách hài hòa để tạo ra những giải pháp độc đáo và hiệu quả.",
    ],
    [
        // Thái độ học tập trên lớp.ĐNL ["Trung bình", "Khá", "Giỏi"]
        'Thái độ học tập trên lớp.ĐNL ["Trung bình", "Khá", "Giỏi"]',
        "Bạn chú ý nghe bài giảng nhưng đôi khi còn mất tập trung, cần cải thiện thói quen học tập.",
        "Bạn chú ý nghe bài giảng tốt, thầy ít phải nhắc nhở trong giờ học.",
        "Bạn luôn tập trung cao độ trong suốt buổi học, chủ động ghi chép và tham gia thảo luận một cách tích cực.",
    ],
    [
        // Thái độ luyện tập về nhà.ĐNL ["Trung bình", "Khá", "Giỏi","Xuất sắc"]
        'Thái độ luyện tập về nhà.ĐNL ["Trung bình", "Khá", "Giỏi","Xuất sắc"]',
        "Bạn cần cải thiện thói quen làm bài tập về nhà, thường xuyên quên hoặc làm không đầy đủ.",
        "Bạn hoàn thiện khá các bài tập về nhà được giao, một số bài tập bạn chưa đầu tư kỹ lưỡng dẫn đến kết quả chưa cao",
        "Bạn luôn hoàn thành đầy đủ và đúng hạn các bài tập về nhà, thể hiện sự nghiêm túc và trách nhiệm trong học tập.",
        "Bạn học rất chăm chỉ và hoàn thành xuất sắc các bài tập về nhà, thể hiện sự tận tâm và đam mê học tập.",
    ],
]

const style = document.createElement("style")
style.textContent = `

     .comment-button-mindx-container {
            position: fixed;
            display: flex;
            gap: 10px;
            bottom: 20px;
            right: 20px;
            z-index: 9999; /* Đảm bảo nút nằm trên cùng */
        }
        .comment-button-mindx {
            color: white;
            border: none;
            padding: 15px 20px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, transform 0.3s;
        }
        .comment-button-mindx:hover {
            opacity: 0.8;
            transform: scale(1.05);
        }
    `

const styleFeedback = document.createElement("style")
styleFeedback.textContent = `
.mindx-feedback-container {
    position: fixed;
    top: 40px;
    right: 40px;
    max-width: 350px;
    max-height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.mindx-feedback-container .box {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    color: #4e4e4e;
    width: 100%;
}

.mindx-feedback-container .box .btn {
    display: flex;
    gap: 10px;
}

.mindx-feedback-container .box button:hover {
    cursor: pointer;
    transform: scale(1.02);
}

.mindx-feedback-container .box button {
    margin: 10px 0;
    transition: all 0.2s ease;
    border: none;
    outline: none;
    height: 48px;
    width: 100%;
    user-select: none;
}

.mindx-feedback-container .box button:active {
    transform: scale(0.95);
}
.mindx-feedback-container .box .title {
    font-weight: bold;
    margin-bottom: 5px;
    cursor: default;
}

.mindx-feedback-container .box .tb {
    background-color: #ffc107;
    border-radius: 7px;
    color: #fff;
    padding: 10px;
}

.mindx-feedback-container .box .kha {
    background-color: #4caf50;
    border-radius: 7px;
    color: #fff;
    padding: 10px;
}

.mindx-feedback-container .box .gioi {
    background-color: #2196f3;
    border-radius: 7px;
    color: #fff;
    padding: 10px;
}

.mindx-feedback-container .box button span {
    opacity: 0;
    position: absolute;
}

`

function createCommentButton(text, color) {
    document.head.appendChild(style)
    const button = document.createElement("button")
    button.className = "comment-button-mindx"
    button.style.backgroundColor = color // Màu nền
    button.innerText = text
    return button
}

const scoreDemoTB = [0, 1.3, 0.3, 0.7, 0.4, 0.4]
const scoreDemoK = [0, 1.5, 0.5, 0.8, 0.6, 0.6]
const scoreDemoG = [0, 1.9, 0.5, 0.9, 0.75, 0.75]
function testFunc(btn, inputs, bodyContainer, demoValue) {
    if (inputs.length > 45) {
        inputs[45].click() //KHẢO SÁT ĐÁNH GIÁ CHẤT LƯỢNG DỊCH VỤ - DÀNH CHO PHỤ HUYNH
    }
    const demoScore = bodyContainer[0].querySelectorAll("input.MuiInputBase-input.MuiOutlinedInput-input")
    if (demoScore) {
        if (demoScore.length < 3) {
            console.log(demoScore[0])
            demoScore[0].value = demoValue
            demoScore[0].focus()
        } else {
            for (let i = 0; i < 6; i++) {
                demoScore[i].value = btn === "btn1" ? scoreDemoTB[i] : btn === "btn2" ? scoreDemoK[i] : scoreDemoG[i]
                demoScore[i].focus()
            }
        }
        let indexOffset = 0
        const textareas = bodyContainer[0].querySelectorAll("textarea")

        if (textareas.length > 0) {
            for (let i = 0; i < 17; i++) {
                if (i % 2 === 0) {
                    const randIndex = Math.floor(Math.random() * FEEDBACK_ARRAY[indexOffset].length)
                    textareas[i].innerText = "- " + FEEDBACK_ARRAY[indexOffset][randIndex]
                    indexOffset++
                }
            }
        }
    }

    const checkBoxInput = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='checkbox']")
    if (checkBoxInput && checkBoxInput.length > 0) {
        for (let i = 1; i < checkBoxInput.length - 2; i++) {
            if (checkBoxInput[i].checked) continue
            checkBoxInput[i].click() //chọn tất cả các checkbox
        }
    }
    // Tự động nhấn nút gửi đánh giá
    const button = bodyContainer[0].querySelector("button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss75.jss77.MuiButton-containedPrimary")
    if (button) {
        button.click()
    }
}
// Create and append UI elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            const bodyContainer = document.getElementsByClassName(
                "MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded",
            )
            if (bodyContainer && bodyContainer.length > 0) {
                // Kiểm tra xem nút đã được thêm chưa để tránh thêm nhiều lần
                const existingButton = bodyContainer[0].querySelector(".comment-button-mindx")
                if (!existingButton) {
                    const commentButton1 = createCommentButton("TB", "#FFC107")
                    const commentButton2 = createCommentButton("Khá", "#4CAF50")
                    const commentButton3 = createCommentButton("Giỏi", "#2196F3")
                    const commentButtonContainer = document.createElement("div")
                    commentButtonContainer.className = "comment-button-mindx-container"
                    commentButtonContainer.appendChild(commentButton1)
                    commentButtonContainer.appendChild(commentButton2)
                    commentButtonContainer.appendChild(commentButton3)
                    const feedbackContainer = document.createElement("div")
                    feedbackContainer.className = "mindx-feedback-container"
                    bodyContainer[0].appendChild(feedbackContainer)
                    document.head.appendChild(styleFeedback)
                    bodyContainer[0].appendChild(commentButtonContainer)

                    let htmlFeedback = ``
                    for (let index = 0; index < FEEDBACK_ARRAY.length; index++) {
                        htmlFeedback += ` 
                                              <div class="box">
                <p class="title">${FEEDBACK_ARRAY[index][0]}</p>
                <div class="btn">
                    <button class="tb">
                        TB
                        <span> ${FEEDBACK_ARRAY[index][1]}</span>
                    </button>
                    <button class="kha">
                        Khá
                        <span> ${FEEDBACK_ARRAY[index][2]}</span>
                    </button>
                    <button class="gioi">
                        Giỏi
                        <span> ${FEEDBACK_ARRAY[index][3]}</span>
                    </button>
                </div>
            </div>
                                            `
                    }
                    feedbackContainer.innerHTML = htmlFeedback

                    // Thêm sự kiện click cho các đoạn feedback để tự động sao chép vào clipboard
                    const feedbackBoxes = feedbackContainer.querySelectorAll(".box button")
                    feedbackBoxes.forEach((p) => {
                        p.addEventListener("click", () => {
                            let span = p.querySelector("span")
                            navigator.clipboard.writeText("- " + span.innerText)
                        })
                    })

                    const danhgiachung = bodyContainer[0].querySelector(".quill .ql-container p")

                    // học viên ở mức trung bình
                    commentButton1.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']")

                        inputs[3].click() //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[3 + 5].click() //[COD] Kỹ năng giải quyết vấn đề
                        inputs[3 + 5 * 2].click() //[COD] Kỹ năng sử dụng máy tính
                        inputs[3 + 5 * 3 - 1].click() //[COD] Thái độ học tập trên lớp
                        inputs[3 + 5 * 4].click() //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[3 + 5 * 5].click() //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[3 + 5 * 6].click() //[COD] Tư duy sáng tạo
                        if (danhgiachung) {
                            danhgiachung.innerText =
                                "Bạn có thái độ học tập ở mức khá, có tinh thần học tập cầu tiến tuy nhiên bạn cần cải thiện khả năng tập trung trong giờ học. Bạn đã hoàn thành được một số bài tập về nhà, tuy nhiên cần bổ sung đầy đủ hơn."
                        }
                        if (inputs.length > 35) {
                            inputs[3 + 5 * 7 - 1].click() //[COD] Tư duy sáng tạo
                            inputs[3 + 5 * 8].click() //[COD] Tư duy sáng tạo
                        }
                        testFunc("btn1", inputs, bodyContainer, 3.3)
                    })

                    // học viên ở mức khá
                    commentButton2.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']")
                        inputs[4 - 1].click() //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[4 + 4].click() //[COD] Kỹ năng giải quyết vấn đề
                        inputs[4 + 5 * 2 - 1].click() //[COD] Kỹ năng sử dụng máy tính
                        inputs[4 + 5 * 3 - 1].click() //[COD] Thái độ học tập trên lớp
                        inputs[4 + 5 * 4 - 1].click() //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[4 + 5 * 5 - 1].click() //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[4 + 5 * 6 - 1].click() //[COD] Tư duy sáng tạo
                        if (inputs.length > 35) {
                            inputs[4 + 5 * 7 - 1].click() //[COD] Tư duy sáng tạo
                            inputs[4 + 5 * 8].click() //[COD] Tư duy sáng tạo
                        }
                        if (danhgiachung) {
                            danhgiachung.innerText =
                                "Bạn có thái độ học tập tốt, có tinh thần học tập cầu tiến. Bạn hoàn thành được tốt một số bài tập ở mức dễ và trung bình, khi gặp khó khăn bạn đã biết hỏi giáo viên và bạn bè để tìm ra cách giải quyết."
                        }
                        testFunc("btn2", inputs, bodyContainer, 4.3)
                    })

                    // học viên ở mức giỏi
                    commentButton3.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']")
                        inputs[5].click() //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[5 + 5 - 2].click() //[COD] Kỹ năng giải quyết vấn đề
                        inputs[5 + 5 * 2].click() //[COD] Kỹ năng sử dụng máy tính
                        inputs[5 + 5 * 3 - 1].click() //[COD] Thái độ học tập trên lớp
                        inputs[5 + 5 * 4 - 2].click() //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[5 + 5 * 5].click() //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[5 + 5 * 6 - 1].click() //[COD] Tư duy sáng tạo
                        if (inputs.length > 35) {
                            inputs[5 + 5 * 7 - 1].click() //[COD] Tư duy sáng tạo
                            inputs[5 + 5 * 8 - 1].click() //[COD] Tư duy sáng tạo
                        }
                        if (danhgiachung) {
                            danhgiachung.innerText =
                                "Bạn có thái độ học tập rất tốt, có tinh thần học tập cầu tiến. Bạn hoàn thành được tốt các bài tập, khi gặp khó khăn bạn đã biết hỏi giáo viên và bạn bè để tìm ra cách giải quyết."
                        }
                        testFunc("btn3", inputs, bodyContainer, 4.8)
                    })
                }
            }
        }
    })
})

// Bắt đầu theo dõi thay đổi trong DOM
observer.observe(document.body, {
    childList: true,
    subtree: true,
})
