const FEEDBACK_ARRAY = [
    [
        // Kiến thức học viên tự học.ĐNL
        "[ĐNL] Kiến thức học viên tự học",
        "Bạn có chủ động tìm kiếm thông tin, nhưng chưa biết cách tìm kiếm hiệu quả, cần thầy hướng dẫn gợi ý thêm.",
        "Bạn chủ động tìm kiếm thêm những nguồn kiến thức bên ngoài, tự xử lý được những khúc mắc khi giáo viên gợi ý cần tìm hiểu và giải quyết được vấn đề",
        "Bạn rất chủ động trong việc tìm kiếm kiến thức bên ngoài. Ví dụ, sau khi thầy gợi ý về các tài nguyên trực tuyến, bạn đã tìm được một số video và bài viết hữu ích về chủ đề đó.",
    ],
    [
        // Kiến thức học viên đã được học tại lớp.ĐNL
        "[ĐNL] Kiến thức học viên đã được học tại lớp",
        "Bạn nắm được kiến thức cơ bản nhưng còn hay quên, mất nhiều thời gian để ghi nhớ và cần ôn tập lại",
        "Bạn hiểu hiểu được kiến thức, nắm và áp dụng lại kiến thức vào bài thực hành",
        "Bạn đã hiểu rất nhanh các kiến thức được thầy truyền đạt trong buổi học hôm nay. Chẳng hạn, bạn đã vận dụng ngay lý thuyết vào bài thực hành và hoàn thành bài tập một cách chính xác.",
    ],
    [
        // Kỹ năng giao tiếp, hợp tác.ĐNL
        "[ĐNL] Kỹ năng giao tiếp, hợp tác",
        "Bạn trình bày ý kiến với thầy khá tốt, chủ động hỏi khi chưa hiểu bài, nhưng đôi khi còn ngại ngùng khi trao đổi với bạn bè.",
        "Bạn có thể trình bày ý kiến rõ ràng, biết lắng nghe và hợp tác tốt với bạn bè trong nhóm.",
        "Bạn rất tự tin khi trình bày ý kiến trước lớp và luôn lắng nghe, tôn trọng ý kiến của bạn bè.",
    ],
    [
        // Kỹ năng sử dụng máy tính.ĐNL
        "[ĐNL] Kỹ năng sử dụng máy tính",
        "Bạn gõ tương đối còn chậm, cần luyện tập thêm để nâng cao tốc độ và độ chính xác.",
        "Bạn gõ khá nhanh và chính xác, có thể sử dụng thành thạo các phím tắt cơ bản, theo kịp tiến độ học của lớp",
        "Tốc độ gõ của bạn rất nhanh và chính xác. Bạn đã sử dụng thành thạo các phím tắt nâng cao để tăng hiệu quả làm việc trên máy tính.",
    ],
    [
        // Kỹ năng giải quyết vấn đề.ĐNL
        "[ĐNL] Kỹ năng giải quyết vấn đề",
        "Bạn biết cách chia vấn đề lớn thành các phần nhỏ để giải quyết, nhưng đôi khi còn gặp khó khăn trong việc tìm ra giải pháp phù hợp.",
        "Bạn phân tích vấn đề tốt, có thể đưa ra các giải pháp hợp lý và lựa chọn phương án tối ưu.",
        "Bạn phản biện và phân tích các giải pháp một cách sắc bén, từ đó chọn ra phương án hiệu quả nhất để giải quyết vấn đề.",
    ],

    [
        // Tư duy sáng tạo.ĐNL
        "[ĐNL] Tư duy sáng tạo",
        "Bạn có những ý tưởng cá nhân để giải quyết vấn đề, nhưng đôi khi còn thiếu tính thực tiễn, bạn mang được màu sắc cá nhân nhưng chưa đủ hấp dẫn",
        "Bạn có nhiều ý tưởng sáng tạo, biết cách kết hợp các yếu tố khác nhau để tạo ra giải pháp mới mẻ và hiệu quả.",
        "Bạn luôn đưa ra những ý tưởng đột phá và sáng tạo, kết hợp các yếu tố khác nhau một cách hài hòa để tạo ra những giải pháp độc đáo và hiệu quả.",
    ],
    [
        // Tư duy máy tính.ĐNL, hợp tác.ĐNL
        "[ĐNL] Tư duy máy tính",
        "Bạn có cái nhìn tổng quan về sản phẩm khi tiếp tiếp xúc với dự án mới, tuy nhiên còn gặp khó khăn trong lúc sửa các lỗi nhỏ.",
        "Bạn có cái nhìn tổng quan về sản phẩm khi tiếp tiếp xúc với dự án mới, và biết cách xử lý các lỗi nhỏ phát sinh trong quá trình làm việc.",
        "Bạn nhanh chóng nắm bắt được yêu cầu của dự án mới và có khả năng phát hiện, sửa chữa các lỗi nhỏ một cách hiệu quả.",
    ],

    [
        // Thái độ học tập trên lớp.ĐNL
        "[ĐNL] Thái độ học tập trên lớp",
        "Bạn chú ý nghe bài giảng nhưng đôi khi còn mất tập trung, cần cải thiện thói quen học tập.",
        "Bạn chú ý nghe bài giảng tốt, thầy ít phải nhắc nhở trong giờ học.",
        "Bạn luôn tập trung cao độ trong suốt buổi học, chủ động ghi chép và tham gia thảo luận một cách tích cực.",
    ],
    [
        // Thái độ luyện tập về nhà.ĐNL
        "[ĐNL] Thái độ luyện tập về nhà",
        "Bạn hoàn thiện khá các bài tập về nhà được giao, một số bài tập bạn chưa đầu tư kỹ lưỡng dẫn đến kết quả chưa cao",
        "Bạn luôn hoàn thành đầy đủ và đúng hạn các bài tập về nhà, thể hiện sự nghiêm túc và trách nhiệm trong học tập.",
        "Bạn học rất chăm chỉ và hoàn thành xuất sắc các bài tập về nhà, thể hiện sự tận tâm và đam mê học tập.",
    ],
]

const FEEDBACK_ARRAY_2 = [
    [
        // khi nhấn vào nút TB, random 3 feedback
        [
            "Điểm mạnh: bạn nắm được các kiến thức cơ bản mà thầy hướng dẫn trong lớp, kỹ năng sử dụng máy tính ngày càng cải thiện.",
            "Điểm cần cải thiện: bạn cần tập trung hơn trong giờ học và hoàn thành tốt hơn các bài tập về nhà.",
            "Lời khuyên: Hãy cố gắng tham gia tích cực hơn trong các hoạt động trên lớp và dành thời gian ôn tập thêm sau mỗi buổi học.",
        ],
        [
            "Điểm mạnh: bạn có tinh thần học tập tích cực, sẵn sàng hỏi khi chưa hiểu bài.",
            "Điểm cần cải thiện: bạn cần tăng cường độ chính xác khi hoàn thành bài tập và tập trung hơn khi làm việc nhóm.",
            "Lời khuyên: Hãy kiểm tra lại công việc của mình trước khi nộp và tham gia tích cực hơn trong các thảo luận nhóm.",
        ],
        [
            "Điểm mạnh: bạn thể hiện sự kiên trì và không sợ thử thách trong quá trình học.",
            "Điểm cần cải thiện: bạn nên cải thiện kỹ năng lắng nghe và học hỏi từ các bạn khác.",
            "Lời khuyên: Hãy dành thêm thời gian để ôn tập lại kiến thức và trao đổi nhiều hơn với bạn bè để mở rộng hiểu biết.",
        ],
    ],
    [
        // khi nhấn vào nút khá, random 3 feedback
        [
            "Điểm mạnh: bạn hiểu rõ kiến thức, có khả năng áp dụng vào thực hành tốt và hợp tác tốt trong nhóm.",
            "Điểm cần cải thiện: bạn nên phát triển thêm kỹ năng sáng tạo và tư duy phê phán.",
            "Lời khuyên: Hãy thử những cách tiếp cận mới để giải quyết vấn đề và đưa ra ý tưởng độc đáo hơn.",
        ],
        [
            "Điểm mạnh: bạn hoàn thành tốt các bài tập về nhà, giao tiếp rõ ràng và biết lắng nghe.",
            "Điểm cần cải thiện: bạn cần mở rộng thêm kiến thức bằng tự học và nâng cao tốc độ xử lý vấn đề.",
            "Lời khuyên: Hãy tìm kiếm thêm tài liệu học tập bên ngoài và thực hành nhiều bài tập nâng cao.",
        ],
        [
            "Điểm mạnh: bạn nắm vững kiến thức, sử dụng máy tính thành thạo và có tinh thần trách nhiệm cao.",
            "Điểm cần cải thiện: bạn nên tăng tính chủ động trong việc tìm tòi và khám phá những điều mới.",
            "Lời khuyên: Thầy khuyến khích bạn tham gia các dự án ngoài khóa học để mở rộng trải nghiệm và nâng cao kỹ năng thực hành.",
        ],
    ],
    [
        // khi nhấn vào nút giỏi, random 3 feedback
        [
            "Điểm mạnh: bạn rất chủ động tìm kiếm kiến thức, nắm bắt nhanh chóng và áp dụng hiệu quả vào thực tế.",
            "Điểm cần cải thiện: hãy tiếp tục duy trì đà phát triển và chia sẻ kiến thức để giúp bạn khác.",
            "Lời khuyên: Bạn có thể đảm nhận vai trò hướng dẫn cho những bạn khác và tham gia các dự án nâng cao.",
        ],
        [
            "Điểm mạnh: bạn thể hiện sự tự tin cao, tư duy sáng tạo độc đáo và có khả năng phát hiện, sửa chữa lỗi hiệu quả.",
            "Điểm cần cải thiện: hãy tiếp tục hoàn thiện chi tiết và chú ý đến giao diện, trải nghiệm người dùng.",
            "Lời khuyên: Hãy thử sáng tạo ra những sản phẩm phức tạp hơn và tham gia các cuộc thi lập trình.",
        ],
        [
            "Điểm mạnh: bạn luôn tập trung cao độ, hoàn thành xuất sắc các bài tập và có sự đam mê học tập rõ rệt.",
            "Điểm cần cải thiện: hãy thử thách bản thân với những công việc phức tạp hơn.",
            "Lời khuyên: Bạn nên tiếp tục nâng cao trình độ và xem xét những hướng đi mới trong lĩnh vực công nghệ thông tin.",
        ],
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

const scoreDemoTB = [0, 1.2, 0.5, 0.3, 0.4, 0.5]
const scoreDemoK = [0, 1.4, 0.7, 0.4, 0.6, 0.8]
const scoreDemoG = [0, 1.6, 0.8, 0.5, 0.6, 0.8]
function testFunc(btn, inputs, bodyContainer, demoValue) {
    const demoScore = bodyContainer[0].querySelectorAll("input.MuiInputBase-input.MuiOutlinedInput-input")
    if (demoScore.length > 0) {
        if (demoScore.length < 3) {
            demoScore[0].value = demoValue
            demoScore[0].focus()
        } else {
            for (let i = 0; i < 6; i++) {
                demoScore[i].value = btn === "btn1" ? scoreDemoTB[i] : btn === "btn2" ? scoreDemoK[i] : scoreDemoG[i]
                demoScore[i].focus()
            }
        }
        let textareas = bodyContainer[0].querySelectorAll("textarea")
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype, // dùng HTMLInputElement nếu là <input>
            "value",
        ).set

        let indexOffset = 0
        let idxChoice = btn === "btn1" ? 1 : btn === "btn2" ? 2 : 3
        for (let i = 0; i < 17; i++) {
            if (i % 2 === 0) {
                nativeInputValueSetter.call(textareas[i], "- " + FEEDBACK_ARRAY[indexOffset][idxChoice])
                textareas[i].dispatchEvent(new Event("input", { bubbles: true }))
                indexOffset++
            }
        }
    }
    if (inputs.length > 45) {
        inputs[45].click() //KHẢO SÁT ĐÁNH GIÁ CHẤT LƯỢNG DỊCH VỤ - DÀNH CHO PHỤ HUYNH
        inputs[45].focus()
    }
    // đánh giá & lời khuyên chung dành cho học viên
    let feedbackChoose = btn === "btn1" ? FEEDBACK_ARRAY_2[0] : btn === "btn2" ? FEEDBACK_ARRAY_2[1] : FEEDBACK_ARRAY_2[2]
    let randIndex = Math.floor(Math.random() * feedbackChoose[0].length)
    let danhgialoikhuyen = bodyContainer[0].querySelector(".quill .ql-container .ql-editor")
    if (danhgialoikhuyen) {
        danhgialoikhuyen.innerHTML = `<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${feedbackChoose[randIndex][0]}                     </li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${feedbackChoose[randIndex][1]}                    </li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${feedbackChoose[randIndex][2]}</li></ol>`
    }

    let learnedFromMindx = bodyContainer[0].querySelector('[data-placeholder="@learnedFromMindx"]')
    let suggestionsFromMindx = bodyContainer[0].querySelector('[data-placeholder="@suggestionsFromMindx"]')
    let futureDirection = bodyContainer[0].querySelector('[data-placeholder="@futureDirection"]')
    if (learnedFromMindx && suggestionsFromMindx && futureDirection) {
        // thư từ mindX, dành cho buổi 14
        let templateLearnedFromMindx = `<p>Về kiến thức chuyên môn:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bạn có thể tự mình thiết kế được giao diện một trang web theo ý muốn của mình</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bạn làm quen và có thể thực hành trên các công cụ như Visual Studio Code, Github</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Biết cách sử dụng HTML, CSS, JS</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bạn biết cách lập trình ra các tính năng như đăng nhập đăng ký tài khoản</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bạn biết cách kết nối tới firebase, cách sử dụng firestore để lưu trữ dữ liệu</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Sản phẩm cuối khóa: Sản phẩm cuối khóa được lưu trữ trên Github</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kết thúc phần học, bạn đã có sản phẩm cuối khóa do chính bạn tạo ra dựa trên ý tưởng của bản thân.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kỹ năng mềm (giao tiếp, làm việc nhóm, kỹ năng thuyết trình): Trong khóa học, các bạn cũng được học thêm về cách thiết kế slide và cách thuyết trình về bản thân cũng như sản phẩm của mình.</li></ol>`
        learnedFromMindx.innerHTML = templateLearnedFromMindx

        let templateSf = `<p>Để nâng cao chất lượng sản phẩm, bạn có thể đầu tư thêm thời gian trau chuốt giao diện ứng dụng, giúp sản phẩm trở nên tinh tế, chỉn chu và có chiều sâu hơn về mặt nội dung. Một số giao diện hiện tại vẫn chưa hoàn thiện, vì vậy em nên tập trung thực hành thêm để hoàn thiện kỹ năng. Ở khóa học tiếp theo, hy vọng bạn sẽ tiếp tục nỗ lực, khám phá sâu hơn và tạo ra những sản phẩm ấn tượng hơn nữa.</p><p>Chúc mừng con đã hoàn thành khóa học với những thành tựu đáng ghi nhận! Hãy tiếp tục phát huy tinh thần học hỏi và sáng tạo nhé!</p>`
        suggestionsFromMindx.innerHTML = templateSf

        let templateFd = `<p>Với khả năng hiện tại của bạn thì theo đúng định hướng lộ trình học của MindX, khóa tiếp theo em sẽ có thể tham gia là khóa học Computer Science Basic. Qua đó bạn có thể trải nghiệm thêm một lĩnh vực nâng cao để khám phá rõ hơn sở thích và điểm mạnh của bản thân.</p>`
        futureDirection.innerHTML = templateFd
    }

    const checkBoxInput = bodyContainer[0].querySelectorAll("span.MuiButtonBase-root input[type='checkbox']")
    if (checkBoxInput && checkBoxInput.length > 0) {
        let countChecked = btn === "btn1" ? 7 : btn === "btn2" ? 8 : 9
        for (let i = 1; i < countChecked; i++) {
            if (checkBoxInput[i].checked) continue
            checkBoxInput[i].click() //chọn tất cả các checkbox
        }
    }
}
// Create and append UI elements
let lastObserverCall = 0
const OBSERVER_THROTTLE = 500 // ms
const processedNodes = new Set()

const observer = new MutationObserver((mutations) => {
    const now = Date.now()
    if (now - lastObserverCall < OBSERVER_THROTTLE) return
    lastObserverCall = now

    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            let findLessionContainer = document.querySelector("div[id*='class-comments-slot-carousel-'].active")
            if (findLessionContainer && !processedNodes.has(findLessionContainer)) {
                processedNodes.add(findLessionContainer)

                let findCodeClass = document.querySelector("h6.MuiTypography-root.MuiTypography-h6.css-1anx036").innerText.split(" ")[0].split("-")
                let lenghtCode = findCodeClass.length
                let code = ""
                if (findCodeClass[1] === "AI4L2") {
                    code = "AI"
                } else {
                    code = lenghtCode === 3 ? findCodeClass[2].replace(/\d/g, "") : lenghtCode === 2 ? findCodeClass[1].replace(/\d/g, "") : ""
                }
                let findLession = findLessionContainer.querySelector(".info-container").innerText
                let lessionNumber = findLession.split("\n")[0].replace("#", "").trim()
                chrome.runtime.sendMessage({ type: "GET_DATABASE" }, (response) => {
                    if (chrome.runtime.lastError) {
                        console.error("GET_DATABASE failed:", chrome.runtime.lastError.message)
                        return
                    }

                    const data = response?.data || []
                    let findDataCourse = data.find((course) => course.name.toLowerCase() === code.toLowerCase())
                    let lessionContent = findDataCourse?.CAR[Number(lessionNumber) - 1].lession_content || ""
                    let findCommentListTable = document.querySelector(".comment-list-table")
                    const parent = findCommentListTable?.parentElement
                    if (parent) {
                        let style = document.createElement("style")
                        style.textContent = `
                                        .btn-cmt {
                                            margin-left: 8px;
                                            padding: 4px 8px;
                                            border: none;
                                            border-radius: 4px;
                                            color: white;
                                            cursor: pointer;
                                            font-size: 12px;
                                            transition: all 0.2s ease;
                                        }
                                        .btn-cmt:hover {
                                            opacity: 0.8;
                                        }
                                        .btn-cmt:active {
                                            transform: scale(0.95);
                                        }
                                    `

                        let button = document.createElement("button")
                        button.className = "btn-cmt"
                        button.type = "button"
                        button.style.backgroundColor = "#b28900"
                        button.textContent = `Sao chép nội dung buổi ${lessionNumber} khóa học ${code}`
                        button.addEventListener("click", async () => {
                            await navigator.clipboard.writeText(lessionContent)
                        })
                        const newElement = document.createElement("div")
                        newElement.textContent = "Phần tử mới"
                        parent.insertBefore(style, parent.children[3])
                        parent.insertBefore(button, parent.children[3])
                    }
                })
            }

            const bodyContainer = document.getElementsByClassName(
                "MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded",
            )
            if (bodyContainer && bodyContainer.length > 0 && !processedNodes.has(bodyContainer[0])) {
                processedNodes.add(bodyContainer[0])
                // Kiểm tra xem nút đã được thêm chưa để tránh thêm nhiều lần
                const existingButton = bodyContainer[0].querySelector(".comment-button-mindx")
                if (!existingButton) {
                    const hiddenButton = createCommentButton("H/S", "#9E9E9E")
                    const commentButton1 = createCommentButton("TB", "#FFC107")
                    const commentButton2 = createCommentButton("Khá", "#4CAF50")
                    const commentButton3 = createCommentButton("Giỏi", "#2196F3")
                    const commentButtonContainer = document.createElement("div")
                    commentButtonContainer.className = "comment-button-mindx-container"
                    commentButtonContainer.appendChild(commentButton1)
                    commentButtonContainer.appendChild(commentButton2)
                    commentButtonContainer.appendChild(commentButton3)
                    commentButtonContainer.appendChild(hiddenButton)
                    const feedbackContainer = document.createElement("div")
                    feedbackContainer.className = "mindx-feedback-container"
                    bodyContainer[0].appendChild(feedbackContainer)
                    document.head.appendChild(styleFeedback)
                    bodyContainer[0].appendChild(commentButtonContainer)

                    // học viên ở mức trung bình
                    commentButton1.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiButtonBase-root input[type='radio']")
                        if (inputs.length > 0) {
                            inputs[2].click() //[ĐNL] Kiến thức học viên tự học
                            inputs[2 + 5].click() //[COD] Kỹ năng giải quyết vấn đề
                            inputs[2 + 5 * 2].click() //[COD] Kỹ năng sử dụng máy tính
                            inputs[2 + 5 * 2 - 1].click() //[COD] Thái độ học tập trên lớp
                            inputs[2 + 5 * 4].click() //[COD] Tư duy máy tính, tư duy thuật toán
                            inputs[2 + 5 * 5].click() //[COD] Kiến thức học viên đã được học tại lớp
                            inputs[2 + 5 * 6].click() //[COD] Tư duy sáng tạo
                        }

                        if (inputs.length > 35) {
                            inputs[3 + 5 * 7 - 1].click() //[COD] Tư duy sáng tạo
                            inputs[3 + 5 * 8].click() //[COD] Tư duy sáng tạo
                        }
                        testFunc("btn1", inputs, bodyContainer, 3.3)
                    })

                    // học viên ở mức khá
                    commentButton2.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiButtonBase-root input[type='radio']")
                        if (inputs.length > 0) {
                            inputs[4 - 1].click() //[ĐNL] Kiến thức học viên tự học
                            inputs[4 + 4].click() //[COD] Kỹ năng giải quyết vấn đề
                            inputs[4 + 5 * 2 - 1].click() //[COD] Kỹ năng sử dụng máy tính
                            inputs[4 + 5 * 3 - 1].click() //[COD] Thái độ học tập trên lớp
                            inputs[4 + 5 * 4 - 1].click() //[COD] Tư duy máy tính, tư duy thuật toán
                            inputs[4 + 5 * 5 - 1].click() //[COD] Kiến thức học viên đã được học tại lớp
                            inputs[4 + 5 * 6 - 1].click() //[COD] Tư duy sáng tạo
                            if (inputs.length > 35) {
                                inputs[4 + 5 * 7 - 1].click() //[COD] Tư duy sáng tạo
                                inputs[4 + 5 * 8 - 1].click() //[COD] Tư duy sáng tạo
                            }
                        }

                        testFunc("btn2", inputs, bodyContainer, 4.3)
                    })

                    // học viên ở mức giỏi
                    commentButton3.addEventListener("click", () => {
                        const inputs = bodyContainer[0].querySelectorAll("span.MuiButtonBase-root input[type='radio']")
                        if (inputs.length > 0) {
                            inputs[5].click() //[ĐNL] Kiến thức học viên tự học
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
                        }

                        testFunc("btn3", inputs, bodyContainer, 4.8)
                    })

                    setTimeout(() => {
                        FEEDBACK_ARRAY.forEach(([title, ...feedbacks]) => {
                            const xpath = `.//div[text()='${title}']`
                            const targetElement = document.evaluate(xpath, bodyContainer[0], null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
                            if (targetElement) {
                                let templateDiv = `<div class="btn-group-cmt-mindx" style="display: flex; gap: 2px">
                                        <style>
                                            .btn-cmt {
                                                padding: 4px 8px;
                                                border: none;
                                                border-radius: 4px;
                                                color: white;
                                                cursor: pointer;
                                                font-size: 12px;
                                                transition: all 0.2s ease;
                                            }
                                            .btn-cmt:hover {
                                                opacity: 0.8;
                                            }
                                            .btn-cmt:active {
                                                transform: scale(0.95);
                                            }
                                        </style>
                                            <button class="btn-cmt" onclick="navigator.clipboard.writeText('${feedbacks[0]}')" style="background-color: #b28900">TB</button>
                                            <button class="btn-cmt" onclick="navigator.clipboard.writeText('${feedbacks[1]}')" style="background-color: #357a38">Khá</button>
                                            <button class="btn-cmt" onclick="navigator.clipboard.writeText('${feedbacks[2]}')" style="background-color: #1769aa">Giỏi</button>
                                    </div>`
                                targetElement.innerHTML += templateDiv
                            }
                        })

                        hiddenButton.addEventListener("click", () => {
                            let feedbackContainer = bodyContainer[0].querySelectorAll(".btn-group-cmt-mindx")
                            feedbackContainer.forEach((container) => {
                                container.style.display = container.style.display === "none" ? "flex" : "none"
                            })
                            commentButton1.style.display = commentButton1.style.display === "none" ? "block" : "none"
                            commentButton2.style.display = commentButton2.style.display === "none" ? "block" : "none"
                            commentButton3.style.display = commentButton3.style.display === "none" ? "block" : "none"
                        })
                    }, 1500)
                }
            }
        }
    })
})

// Bắt đầu theo dõi thay đổi trong DOM
observer.observe(document.body, {
    childList: true,
    subtree: true, // Theo dõi cả các phần tử con bên trong body
})
