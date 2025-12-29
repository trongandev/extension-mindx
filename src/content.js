const FEEDBACK_ARRAY = [
    [
        "Bạn rất chủ động trong việc tìm kiếm kiến thức bên ngoài. Ví dụ, sau khi thầy gợi ý về các tài nguyên trực tuyến, bạn đã tìm được một số video và bài viết hữu ích về chủ đề đó.",

        "Khi gặp khúc mắc, bạn không ngần ngại hỏi thầy và đã tự mình tìm hiểu thêm để giải quyết vấn đề. Chẳng hạn, bạn đã tự nghiên cứu cách sử dụng một công cụ mới và sau đó chia sẻ với cả lớp.",

        "Sự chủ động của bạn trong việc học hỏi không chỉ giúp bạn nắm vững kiến thức mà còn truyền cảm hứng cho các bạn khác trong lớp.",
    ],
    [
        "Bạn đã hiểu rất nhanh các kiến thức được thầy truyền đạt trong buổi học hôm nay. Chẳng hạn, bạn đã vận dụng ngay lý thuyết vào bài thực hành và hoàn thành bài tập một cách chính xác.",
        "Trong buổi thực hành, bạn đã áp dụng toàn bộ kiến thức đã học vào dự án nhóm của mình. Điều này cho thấy sự nắm bắt và ứng dụng kiến thức của bạn rất tốt.",
        "Bạn không chỉ hiểu bài mà còn có khả năng giải thích lại cho các bạn khác. Điều này chứng tỏ bạn đã nắm vững kiến thức và có thể truyền đạt lại một cách rõ ràng.",
    ],
    [
        "Bạn có tinh thần tích cực khi tham gia thảo luận nhóm. Khi thầy hỏi, bạn luôn sẵn sàng chia sẻ ý kiến và quan điểm của mình, điều này giúp tăng cường sự tương tác trong lớp.",
        "Bạn biết quan tâm đến bạn bè và thường xuyên giúp đỡ các bạn trong nhóm. Chẳng hạn, bạn đã dành thời gian để giải thích một số khái niệm khó cho các bạn không hiểu.",
        "Mặc dù bạn còn một chút bối rối khi thuyết trình trước lớp, nhưng sự tự tin của bạn đang dần được cải thiện. Việc bạn dám đứng lên trình bày ý tưởng cho cả lớp là một điều rất đáng khen.",
    ],
    [
        "Bạn đã có thể phân tích vấn đề rất tốt và tự đưa ra giải pháp của riêng mình. Ví dụ, trong một bài tập nhóm, bạn đã đề xuất một phương pháp mới để giải quyết nhiệm vụ được giao.",
        "Bạn hiểu rõ cách mà sản phẩm mà chúng ta học hôm nay có thể giải quyết các vấn đề thực tế. Bạn đã nêu rõ đối tượng người dùng mà sản phẩm hướng đến trong phần thuyết trình của mình.",
        "Sự nhạy bén của bạn trong việc phát hiện ra các vấn đề cần giải quyết là một điểm mạnh. Bạn đã chủ động thảo luận về các vấn đề thực tiễn và cách mà sản phẩm có thể giúp ích cho người dùng.",
    ],
    [
        "Bạn có tốc độ sử dụng chuột và bàn phím rất tốt, và đã biết gõ phím bằng hai tay với tốc độ vừa phải. Điều này giúp bạn tiết kiệm thời gian trong quá trình làm việc.",
        "Bạn biết cách tìm kiếm thông tin trực tuyến hiệu quả. Trong giờ thực hành, bạn đã sử dụng email để đăng nhập vào các công cụ hỗ trợ xây dựng dự án một cách nhanh chóng.",
        "Bạn cũng đã vận dụng các nguyên tắc về an toàn trên không gian mạng. Chẳng hạn, bạn đã nhắc nhở bạn bè về việc không chia sẻ thông tin cá nhân trên mạng.",
    ],
    [
        "Bạn rất chủ động trong việc phát hiện ra những ý tưởng sáng tạo cho các tính năng của sản phẩm. Trong buổi thảo luận, bạn đã đặt câu hỏi thú vị về cách cải thiện sản phẩm.",
        "Bạn đã tự mình thiết kế một trò chơi đơn giản, điều này thể hiện sự sáng tạo và khả năng thu hút sự chú ý của người khác. Bạn đã trình bày ý tưởng của mình rất rõ ràng và hấp dẫn.",
        "Bạn có khả năng tạo ra những dự án mới độc đáo và có khả năng gây chú ý trong cộng đồng. Ví dụ, ý tưởng mà bạn đưa ra trong buổi họp nhóm đã thu hút sự quan tâm của nhiều bạn khác.",
    ],
    [
        "Bạn có cái nhìn tổng quát về thuật toán khi tiếp xúc với các dự án và sản phẩm mẫu. Điều này giúp bạn dễ dàng hơn trong việc hiểu các khái niệm phức tạp.",
        "Bạn phản xạ nhanh với ngôn ngữ code và đã biết chọn lọc vận dụng kiến thức thuật toán để xử lý vấn đề cụ thể. Trong một bài tập, bạn đã sử dụng thuật toán rất hợp lý để tối ưu hóa mã của mình.",
        "Bạn đã thể hiện khả năng tư duy hệ thống khi giải quyết các bài toán lập trình. Bạn luôn biết cách tiếp cận vấn đề một cách logic và có cấu trúc.",
    ],
    [
        "Bạn luôn chú ý lắng nghe bài giảng của thầy, và thầy gần như không phải nhắc nhở bạn. Điều này tạo ra một môi trường học tập tích cực cho cả lớp.",
        "Bạn chấp hành tốt các quy định và nội quy lớp học, điều này thể hiện sự tôn trọng đối với thầy và bạn bè.",
        "Thái độ tích cực của bạn trong lớp học đã tạo động lực cho những bạn khác, và điều này rất đáng khen ngợi.",
    ],
    [
        "Bạn rất chủ động trong việc tìm kiếm bài tập và dự án để luyện tập thêm. Việc này giúp bạn củng cố và nâng cao kiến thức đã học.",
        "Bạn thường xuyên đặt câu hỏi luyện tập với thầy, điều này cho thấy bạn rất nghiêm túc trong việc học hỏi và cải thiện bản thân.",
        "Sự quyết tâm của bạn trong việc tự học và nghiên cứu thêm không chỉ giúp bạn tiến bộ mà còn tạo cảm hứng cho các bạn khác trong lớp.",
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
function testFunc(btn, inputs, demoScore, checkBoxInput, textareas) {
    if (inputs.length > 45) {
        inputs[45].click() //KHẢO SÁT ĐÁNH GIÁ CHẤT LƯỢNG DỊCH VỤ - DÀNH CHO PHỤ HUYNH
    }

    if (demoScore) {
        if (demoScore.length < 3) {
            demoScore[0].value = 1.5 + 0.6 + 0.3 + 0.6 + 0.3
            demoScore[0].focus()
        } else {
            for (let i = 0; i < 6; i++) {
                demoScore[i].value = btn === "btn1" ? scoreDemoTB[i] : btn === "btn2" ? scoreDemoK[i] : scoreDemoG[i]
                demoScore[i].focus()
            }
        }
        let indexOffset = 0
        for (let i = 0; i < textareas.length; i++) {
            if (i % 2 === 0) {
                const randIndex = Math.floor(Math.random() * FEEDBACK_ARRAY[indexOffset].length)
                textareas[i].value = FEEDBACK_ARRAY[indexOffset][randIndex]
                indexOffset++
            }
        }
    }
    if (checkBoxInput && checkBoxInput.length > 0) {
        for (let i = 1; i < checkBoxInput.length - 2; i++) {
            if (checkBoxInput[i].checked) continue
            checkBoxInput[i].click() //chọn tất cả các checkbox
        }
    }
}
// Create and append UI elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            const bodyContainer = document.getElementsByClassName(
                "MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded"
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

                    bodyContainer[0].appendChild(commentButtonContainer)

                    const danhgiachung = bodyContainer[0].querySelector(".quill .ql-container p")
                    const demoScore = bodyContainer[0].querySelectorAll("input.MuiInputBase-input.MuiOutlinedInput-input")

                    // học viên ở mức trung bình
                    commentButton1.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']")
                        const textareas = bodyContainer[0].querySelectorAll("textarea")
                        const checkBoxInput = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='checkbox']")
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
                        testFunc("btn1", inputs, demoScore, checkBoxInput, textareas)
                    })

                    // học viên ở mức khá
                    commentButton2.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']")
                        const textareas = bodyContainer[0].querySelectorAll("textarea")
                        const checkBoxInput = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='checkbox']")
                        inputs[4 - 1].click() //[COD] Kỹ năng giao tiếp, hợp tác
                        inputs[4 + 4].click() //[COD] Kỹ năng giải quyết vấn đề
                        inputs[4 + 5 * 2 - 1].click() //[COD] Kỹ năng sử dụng máy tính
                        inputs[4 + 5 * 3 - 1].click() //[COD] Thái độ học tập trên lớp
                        inputs[4 + 5 * 4 - 1].click() //[COD] Tư duy máy tính, tư duy thuật toán
                        inputs[4 + 5 * 5].click() //[COD] Kiến thức học viên đã được học tại lớp
                        inputs[4 + 5 * 6 - 1].click() //[COD] Tư duy sáng tạo
                        if (inputs.length > 35) {
                            inputs[4 + 5 * 7 - 1].click() //[COD] Tư duy sáng tạo
                            inputs[4 + 5 * 8].click() //[COD] Tư duy sáng tạo
                        }
                        if (danhgiachung) {
                            danhgiachung.innerText =
                                "Bạn có thái độ học tập tốt, có tinh thần học tập cầu tiến. Bạn hoàn thành được tốt một số bài tập ở mức dễ và trung bình, khi gặp khó khăn bạn đã biết hỏi giáo viên và bạn bè để tìm ra cách giải quyết."
                        }
                        testFunc("btn2", inputs, demoScore, checkBoxInput, textareas)
                    })

                    // học viên ở mức giỏi
                    commentButton3.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='radio']")
                        const textareas = bodyContainer[0].querySelectorAll("textarea")
                        const checkBoxInput = bodyContainer[0].querySelectorAll("span.MuiIconButton-label input[type='checkbox']")
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
                        testFunc("btn3", inputs, demoScore, checkBoxInput, textareas)
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
