const FEEDBACK_ARRAY = [
    [
        // Kiến thức học viên tự học.ĐNL
        "[ĐNL] Kiến thức học viên tự học",
        "- Bạn có chủ động tìm kiếm thông tin, nhưng chưa biết cách tìm kiếm hiệu quả, cần thầy hướng dẫn gợi ý thêm.",
        "- Bạn chủ động tìm kiếm thêm những nguồn kiến thức bên ngoài, tự xử lý được những khúc mắc khi giáo viên gợi ý cần tìm hiểu và giải quyết được vấn đề",
        "- Bạn rất chủ động trong việc tìm kiếm kiến thức bên ngoài. Ví dụ, sau khi thầy gợi ý về các tài nguyên trực tuyến, bạn đã tìm được một số video và bài viết hữu ích về chủ đề đó.",
    ],
    [
        // Kiến thức học viên đã được học tại lớp.ĐNL
        "[ĐNL] Kiến thức học viên đã được học tại lớp",
        "- Bạn nắm được kiến thức cơ bản nhưng còn hay quên, mất nhiều thời gian để ghi nhớ và cần ôn tập lại",
        "- Bạn hiểu hiểu được kiến thức, nắm và áp dụng lại kiến thức vào bài thực hành",
        "- Bạn đã hiểu rất nhanh các kiến thức được thầy truyền đạt trong buổi học hôm nay. Chẳng hạn, bạn đã vận dụng ngay lý thuyết vào bài thực hành và hoàn thành bài tập một cách chính xác.",
    ],
    [
        // Kỹ năng giao tiếp, hợp tác.ĐNL
        "[ĐNL] Kỹ năng giao tiếp, hợp tác",
        "- Bạn trình bày ý kiến với thầy khá tốt, chủ động hỏi khi chưa hiểu bài, nhưng đôi khi còn ngại ngùng khi trao đổi với bạn bè.",
        "- Bạn có thể trình bày ý kiến rõ ràng, biết lắng nghe và hợp tác tốt với bạn bè trong nhóm.",
        "- Bạn rất tự tin khi trình bày ý kiến trước lớp và luôn lắng nghe, tôn trọng ý kiến của bạn bè.",
    ],
    [
        // Kỹ năng sử dụng máy tính.ĐNL
        "[ĐNL] Kỹ năng sử dụng máy tính",
        "- Bạn gõ tương đối còn chậm, cần luyện tập thêm để nâng cao tốc độ và độ chính xác.",
        "- Bạn gõ khá nhanh và chính xác, có thể sử dụng thành thạo các phím tắt cơ bản, theo kịp tiến độ học của lớp",
        "- Tốc độ gõ của bạn rất nhanh và chính xác. Bạn đã sử dụng thành thạo các phím tắt nâng cao để tăng hiệu quả làm việc trên máy tính.",
    ],
    [
        // Kỹ năng giải quyết vấn đề.ĐNL
        "[ĐNL] Kỹ năng giải quyết vấn đề",
        "- Bạn biết cách chia vấn đề lớn thành các phần nhỏ để giải quyết, nhưng đôi khi còn gặp khó khăn trong việc tìm ra giải pháp phù hợp.",
        "- Bạn phân tích vấn đề tốt, có thể đưa ra các giải pháp hợp lý và lựa chọn phương án tối ưu.",
        "- Bạn phản biện và phân tích các giải pháp một cách sắc bén, từ đó chọn ra phương án hiệu quả nhất để giải quyết vấn đề.",
    ],

    [
        // Tư duy sáng tạo.ĐNL
        "[ĐNL] Tư duy sáng tạo",
        "- Bạn có những ý tưởng cá nhân để giải quyết vấn đề, nhưng đôi khi còn thiếu tính thực tiễn, bạn mang được màu sắc cá nhân nhưng chưa đủ hấp dẫn",
        "- Bạn có nhiều ý tưởng sáng tạo, biết cách kết hợp các yếu tố khác nhau để tạo ra giải pháp mới mẻ và hiệu quả.",
        "- Bạn luôn đưa ra những ý tưởng đột phá và sáng tạo, kết hợp các yếu tố khác nhau một cách hài hòa để tạo ra những giải pháp độc đáo và hiệu quả.",
    ],
    [
        // Tư duy máy tính.ĐNL, hợp tác.ĐNL
        "[ĐNL] Tư duy máy tính",
        "- Bạn có cái nhìn tổng quan về sản phẩm khi tiếp tiếp xúc với dự án mới, tuy nhiên còn gặp khó khăn trong lúc sửa các lỗi nhỏ.",
        "- Bạn có cái nhìn tổng quan về sản phẩm khi tiếp tiếp xúc với dự án mới, và biết cách xử lý các lỗi nhỏ phát sinh trong quá trình làm việc.",
        "- Bạn nhanh chóng nắm bắt được yêu cầu của dự án mới và có khả năng phát hiện, sửa chữa các lỗi nhỏ một cách hiệu quả.",
    ],

    [
        // Thái độ học tập trên lớp.ĐNL
        "[ĐNL] Thái độ học tập trên lớp",
        "- Bạn chú ý nghe bài giảng nhưng đôi khi còn mất tập trung, cần cải thiện thói quen học tập.",
        "- Bạn chú ý nghe bài giảng tốt, thầy ít phải nhắc nhở trong giờ học.",
        "- Bạn luôn tập trung cao độ trong suốt buổi học, chủ động ghi chép và tham gia thảo luận một cách tích cực.",
    ],
    [
        // Thái độ luyện tập về nhà.ĐNL
        "[ĐNL] Thái độ luyện tập về nhà",
        "- Bạn hoàn thiện khá các bài tập về nhà được giao, một số bài tập bạn chưa đầu tư kỹ lưỡng dẫn đến kết quả chưa cao",
        "- Bạn luôn hoàn thành đầy đủ và đúng hạn các bài tập về nhà, thể hiện sự nghiêm túc và trách nhiệm trong học tập.",
        "- Bạn học rất chăm chỉ và hoàn thành xuất sắc các bài tập về nhà, thể hiện sự tận tâm và đam mê học tập.",
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
const DURATION_TIME = 250

function handleRandomFeedback(btn, bodyContainer) {
    let feedbackChoose = btn === "btn1" ? FEEDBACK_ARRAY_2[0] : btn === "btn2" ? FEEDBACK_ARRAY_2[1] : FEEDBACK_ARRAY_2[2]
    let randIndex = Math.floor(Math.random() * feedbackChoose[0].length)
    let danhgialoikhuyen = bodyContainer[0].querySelector(".quill .ql-container .ql-editor")
    if (danhgialoikhuyen) {
        danhgialoikhuyen.innerHTML = `<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${feedbackChoose[randIndex][0]}                     </li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${feedbackChoose[randIndex][1]}                    </li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${feedbackChoose[randIndex][2]}</li></ol>`
    }
}

function createCommentButton(text, color) {
    const button = document.createElement("button")
    button.className = "comment-button-mindx"
    button.type = "button"
    button.style.backgroundColor = color
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
        let delay2 = 0
        for (let i = 0; i < 17; i++) {
            if (i % 2 === 0) {
                setTimeout(() => {
                    nativeInputValueSetter.call(textareas[i], FEEDBACK_ARRAY[indexOffset][idxChoice])
                    textareas[i].dispatchEvent(new Event("input", { bubbles: true }))
                    indexOffset++
                }, delay2)
                delay2 += DURATION_TIME
            }
        }
    }
    if (inputs.length > 45) {
        inputs[45].click() //KHẢO SÁT ĐÁNH GIÁ CHẤT LƯỢNG DỊCH VỤ - DÀNH CHO PHỤ HUYNH
        inputs[45].focus()
    }
    // đánh giá & lời khuyên chung dành cho học viên
    handleRandomFeedback(btn, bodyContainer)

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

    let delay3 = 0
    const checkBoxInput = bodyContainer[0].querySelectorAll("span.MuiButtonBase-root input[type='checkbox']")
    if (checkBoxInput && checkBoxInput.length > 0) {
        let countChecked = btn === "btn1" ? 7 : btn === "btn2" ? 8 : 9
        for (let i = 1; i < countChecked; i++) {
            if (checkBoxInput[i].checked) continue
            setTimeout(() => {
                checkBoxInput[i].click()
            }, delay3)
            delay3 += DURATION_TIME
        }
    }
    const button = bodyContainer[0].getElementsByClassName(
        "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary jss59 jss61 css-1v3yz0b",
    )
    if (button) {
        button[0].focus()
    }
}
const processedLessonKeys = new Set()
const processedDialogContainers = new WeakSet()
let stylesInjected = false

function ensureStylesInjected() {
    if (stylesInjected) {
        return
    }

    if (!document.head.contains(style)) {
        document.head.appendChild(style)
    }

    if (!document.head.contains(styleFeedback)) {
        document.head.appendChild(styleFeedback)
    }

    stylesInjected = true
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        if (character === "&") return "&amp;"
        if (character === "<") return "&lt;"
        if (character === ">") return "&gt;"
        if (character === '"') return "&quot;"
        return "&#39;"
    })
}

function waitForElement(parent, selector, callback) {
    const existing = parent.querySelector(selector)
    if (existing) {
        callback(existing)
        return () => {}
    }

    const observer = new MutationObserver(() => {
        const element = parent.querySelector(selector)
        if (!element) {
            return
        }

        observer.disconnect()
        callback(element)
    })

    observer.observe(parent, {
        childList: true,
        subtree: true,
    })

    return () => observer.disconnect()
}

function waitForMatch(parent, finder, callback) {
    const existing = finder()
    if (existing) {
        callback(existing)
        return () => {}
    }

    const observer = new MutationObserver(() => {
        const element = finder()
        if (!element) {
            return
        }

        observer.disconnect()
        callback(element)
    })

    observer.observe(parent, {
        childList: true,
        subtree: true,
    })

    return () => observer.disconnect()
}

function findAddedNode(mutations, selector) {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (!(node instanceof Element)) {
                continue
            }

            if (node.matches(selector)) {
                return node
            }

            const nested = node.querySelector(selector)
            if (nested) {
                return nested
            }
        }
    }

    return null
}

function extractCourseCode(headerText) {
    if (!headerText) {
        return ""
    }

    const parts = headerText.split(" ")[0].split("-")
    const length = parts.length

    if (parts[1] === "AI4L1") {
        return "AI4L1"
    }

    if (parts[1] === "AI4L2") {
        return "AI4L2"
    }

    if (length === 3) {
        return parts[2].replace(/\d/g, "")
    }

    if (length === 2) {
        return parts[1].replace(/\d/g, "")
    }

    return ""
}

function createSelectableGroup({ state, options, container, groupName, placeholder }) {
    const render = () => {
        container.innerHTML = state
            .map((item, index) => {
                const selectedValues = state.filter((other, otherIndex) => otherIndex !== index && other.value).map((other) => other.value)

                const optionMarkup = options
                    .filter((option) => !selectedValues.includes(option) || option === item.value)
                    .map((option) => {
                        const selectedAttribute = option === item.value ? " selected" : ""
                        return `<option value="${escapeHtml(option)}"${selectedAttribute}>${escapeHtml(option)}</option>`
                    })
                    .join("")

                return `
                    <div class="mindx-comment-extension-item">
                        <select name="mindx-comment-extension-${groupName}" data-group="${groupName}" data-index="${index}">
                            <option value="">${escapeHtml(placeholder)}</option>
                            ${optionMarkup}
                        </select>
                        <button type="button" class="mindx-comment-extension-delete btn-small" data-action="remove-${groupName}" data-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                    </div>
                `
            })
            .join("")
    }

    container.addEventListener("change", (event) => {
        const select = event.target.closest(`select[data-group="${groupName}"]`)
        if (!select || !container.contains(select)) {
            return
        }

        const index = Number(select.dataset.index)
        if (Number.isNaN(index) || !state[index]) {
            return
        }

        state[index].value = select.value
        render()
    })

    container.addEventListener("click", (event) => {
        const removeButton = event.target.closest(`button[data-action="remove-${groupName}"]`)
        if (!removeButton || !container.contains(removeButton)) {
            return
        }

        const index = Number(removeButton.dataset.index)
        if (Number.isNaN(index)) {
            return
        }

        state.splice(index, 1)
        render()
    })

    render()

    return render
}

const MINDX_COMMENT_STRENGTHS = [
    { key: "tốt", label: "Tốt", text: "bạn học tốt, hiểu được bài học" },
    { key: "ngoan", label: "Ngoan ngoãn", text: "bạn ngoan ngoãn, lễ phép" },
    { key: "tự giác", label: "Tự giác", text: "bạn có ý thức tự giác trong học tập" },
    { key: "tập trung", label: "Tập trung", text: "bạn tập trung cao độ trong giờ học" },
    { key: "sáng tạo", label: "Sáng tạo", text: "bạn có tư duy sáng tạo, nhạy bén" },
    { key: "tiếp thu nhanh", label: "Tiếp thu nhanh", text: "bạn tiếp thu kiến thức mới rất nhanh" },
    { key: "chăm chỉ", label: "Làm bài đủ", text: "bạn luôn hoàn thành bài tập về nhà đầy đủ" },
    { key: "phát biểu", label: "Phát biểu", text: "bạn năng nổ, hăng hái phát biểu xây dựng bài" },
    { key: "cẩn thận", label: "Cẩn thận", text: "bạn làm bài cẩn thận, trình bày sạch đẹp" },
    { key: "hòa đồng", label: "Hòa đồng", text: "bạn hòa đồng, hay giúp đỡ bạn bè xung quanh" },
]

const MINDX_COMMENT_WEAKNESSES = [
    {
        key: "nói chuyện",
        label: "Nói chuyện riêng",
        text: "bạn hay nói chuyện riêng trong lớp",
        action: "bạn cần tiết chế việc nói chuyện riêng, chú ý lắng nghe giảng",
    },
    {
        key: "đi trễ",
        label: "Đi trễ",
        text: "bạn đi học trễ thường xuyên",
        action: "bạn cần cố gắng đi đúng giờ hơn để tham gia đầy đủ hoạt động trên lớp",
    },
    {
        key: "không làm bài",
        label: "Chưa làm đủ bài",
        text: "bạn chưa hoàn thành đủ bài tập về nhà",
        action: "bạn cần dành thêm thời gian ở nhà để làm bài tập đầy đủ",
    },
    {
        key: "thiếu tập trung",
        label: "Thiếu tập trung",
        text: "bạn còn dễ bị phân tâm khi học",
        action: "bạn cần rèn luyện sự tập trung, tránh làm việc riêng",
    },
    {
        key: "rụt rè",
        label: "Rụt rè",
        text: "bạn còn rụt rè, ít tương tác trên lớp",
        action: "bạn cần mạnh dạn và tự tin phát biểu, tương tác với mọi người hơn",
    },
    {
        key: "cẩu thả",
        label: "Cẩu thả",
        text: "bạn trình bày bài còn cẩu thả, hay bôi xóa",
        action: "bạn cần cẩn thận và nắn nót hơn trong việc viết bài",
    },
    {
        key: "thiếu kiên nhẫn",
        label: "Thiếu kiên nhẫn",
        text: "bạn thiếu kiên nhẫn khi gặp các bài tập khó",
        action: "bạn cần kiên nhẫn suy nghĩ, không vội bỏ cuộc khi gặp bài khó",
    },
    {
        key: "chưa nắm bài",
        label: "Chưa nắm bài",
        text: "bạn chưa nắm vững một số kiến thức cũ",
        action: "bạn cần chủ động hỏi thầy cô khi chưa hiểu bài và ôn bài cũ nhiều hơn",
    },
]

function formatMappedComment(items, fieldName = "text") {
    const phrases = items.map((item) => item[fieldName]).filter(Boolean)

    if (phrases.length === 0) {
        return ""
    }

    const formattedPhrases = phrases.map((phrase, index) => {
        const cleanedPhrase = phrase.trim()

        if (index === 0) {
            return cleanedPhrase.replace(/^bạn\b/i, "Bạn")
        }

        return cleanedPhrase.replace(/^bạn\s+/i, "")
    })

    if (formattedPhrases.length === 1) {
        return formattedPhrases[0]
    }

    if (formattedPhrases.length === 2) {
        return `${formattedPhrases[0]} và ${formattedPhrases[1]}`
    }

    return `${formattedPhrases.slice(0, -1).join(", ")} và ${formattedPhrases[formattedPhrases.length - 1]}`
}

function renderMindxCommentChips({ container, options, selectedKeys, tone }) {
    container.innerHTML = options
        .map((option) => {
            const selectedClass = selectedKeys.includes(option.key) ? " is-selected" : ""
            return `<button class="mindx-comment-chip mindx-comment-chip-${tone}${selectedClass}" type="button" data-key="${escapeHtml(option.key)}">${escapeHtml(option.label)}</button>`
        })
        .join("")
}

function injectFeedbackButtons(rootNode) {
    const findFeedbackTarget = (title) => document.evaluate(`.//div[normalize-space(text())='${title}']`, rootNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    const renderFeedbackButtons = () => {
        let pendingCount = 0
        FEEDBACK_ARRAY.forEach(([title, ...feedbacks]) => {
            const targetElement = findFeedbackTarget(title)
            if (!targetElement) {
                pendingCount++
                return
            }

            if (targetElement.querySelector(".btn-group-cmt-mindx")) {
                return
            }

            const group = document.createElement("div")
            group.className = "btn-group-cmt-mindx"
            group.style.display = "flex"
            group.style.gap = "2px"

            const feedbackItems = [
                { label: "TB", color: "#b28900", text: feedbacks[0] },
                { label: "Khá", color: "#357a38", text: feedbacks[1] },
                { label: "Giỏi", color: "#1769aa", text: feedbacks[2] },
            ]

            feedbackItems.forEach((feedback) => {
                const button = document.createElement("button")
                button.type = "button"
                button.className = "btn-cmt"
                button.style.backgroundColor = feedback.color
                button.textContent = feedback.label
                button.addEventListener("click", async () => {
                    try {
                        await navigator.clipboard.writeText(feedback.text)
                    } catch (error) {
                        console.error("Copy failed:", error)
                    }
                })
                group.appendChild(button)
            })

            targetElement.appendChild(group)
        })

        return pendingCount === 0
    }

    if (renderFeedbackButtons()) {
        return
    }

    const observer = new MutationObserver(() => {
        if (renderFeedbackButtons()) {
            observer.disconnect()
        }
    })

    observer.observe(rootNode, {
        childList: true,
        subtree: true,
    })
}

function handleLessonContainer(lessonContainer) {
    if (!lessonContainer) {
        return
    }

    waitForElement(lessonContainer, ".info-container", (infoContainer) => {
        const codeHeader = document.querySelector("h6.MuiTypography-root.MuiTypography-h6.css-1anx036")
        const code = extractCourseCode(codeHeader?.innerText || "")
        const lessonNumber = infoContainer.innerText.split("\n")[0].replace("#", "").trim()
        const lessonKey = `${code}-${lessonNumber}`

        if (processedLessonKeys.has(lessonKey)) {
            return
        }

        processedLessonKeys.add(lessonKey)

        chrome.runtime.sendMessage({ type: "GET_DATABASE" }, (response) => {
            if (chrome.runtime.lastError) {
                console.error("GET_DATABASE failed:", chrome.runtime.lastError.message)
                return
            }

            const data = response?.data || []
            const course = data.find((item) => item.name.toLowerCase() === code.toLowerCase())
            const lessonContent = course?.CAR?.[Number(lessonNumber) - 1]?.lession_content || ""

            waitForElement(document.body, ".comment-list-table", (commentListTable) => {
                const parent = commentListTable.parentElement
                if (!parent) {
                    return
                }

                if (parent.querySelector(`.btn-cmt[data-copy-key="${code}-${lessonNumber}"]`)) {
                    return
                }

                const button = document.createElement("button")
                button.className = "btn-cmt"
                button.type = "button"
                button.style.backgroundColor = "#b28900"
                button.dataset.copyKey = `${code}-${lessonNumber}`
                button.textContent = `Sao chép nội dung buổi ${lessonNumber} khóa học ${code}`
                button.addEventListener("click", async () => {
                    try {
                        await navigator.clipboard.writeText(lessonContent)
                    } catch (error) {
                        console.error("Copy failed:", error)
                    }
                })

                parent.insertBefore(button, parent.children[3] || null)
            })
        })
    })
}

function setupDialogPanel(rootNode) {
    if (!rootNode || processedDialogContainers.has(rootNode)) {
        return
    }

    processedDialogContainers.add(rootNode)
    ensureStylesInjected()

    if (!rootNode.querySelector(".comment-button-mindx-container")) {
        const quickButtonContainer = document.createElement("div")
        quickButtonContainer.className = "comment-button-mindx-container"

        const hiddenButton = createCommentButton("H/S", "#9E9E9E")
        const commentButton1 = createCommentButton("TB", "#FFC107")
        const commentButton2 = createCommentButton("Khá", "#4CAF50")
        const commentButton3 = createCommentButton("Giỏi", "#2196F3")

        quickButtonContainer.appendChild(commentButton1)
        quickButtonContainer.appendChild(commentButton2)
        quickButtonContainer.appendChild(commentButton3)
        quickButtonContainer.appendChild(hiddenButton)
        rootNode.appendChild(quickButtonContainer)

        commentButton1.addEventListener("click", () => {
            const inputs = rootNode.querySelectorAll("span.MuiButtonBase-root input[type='radio']")
            indices = [2, 7, 12, 17, 22, 27, 32, 37, 43]
            let delay = 0
            indices.forEach((index) => {
                setTimeout(() => {
                    if (index < inputs.length) {
                        inputs[index].click()
                        inputs[index].focus()
                    }
                }, delay)
                delay += DURATION_TIME
            })
            testFunc("btn1", inputs, [rootNode], 3.3)
        })

        commentButton2.addEventListener("click", () => {
            const inputs = rootNode.querySelectorAll("span.MuiButtonBase-root input[type='radio']")
            indices = [3, 8, 13, 18, 23, 28, 33, 38, 43]
            let delay = 0
            indices.forEach((index) => {
                setTimeout(() => {
                    if (index < inputs.length) {
                        inputs[index].click()
                        inputs[index].focus()
                    }
                }, delay)
                delay += DURATION_TIME
            })
            testFunc("btn2", inputs, [rootNode], 4.3)
        })

        commentButton3.addEventListener("click", () => {
            const inputs = rootNode.querySelectorAll("span.MuiButtonBase-root input[type='radio']")
            const indices = [4, 9, 14, 18, 24, 28, 33, 39, 45]
            let delay = 0
            indices.forEach((index) => {
                setTimeout(() => {
                    if (index < inputs.length) {
                        inputs[index].click()
                        inputs[index].focus()
                    }
                }, delay)
                delay += DURATION_TIME
            })
            testFunc("btn3", inputs, [rootNode], 4.8)
        })

        hiddenButton.addEventListener("click", () => {
            rootNode.querySelectorAll(".btn-group-cmt-mindx").forEach((container) => {
                container.style.display = container.style.display === "none" ? "flex" : "none"
            })
            ;[commentButton1, commentButton2, commentButton3].forEach((button) => {
                button.style.display = button.style.display === "none" ? "block" : "none"
            })
        })
        injectFeedbackButtons(rootNode)
    }

    const targetText = "Khả năng, ưu điểm, tiến bộ rõ rệt mà học viên đã thể hiện (chủ động, nhanh nhẹn, tích cực, áp dụng tốt,..)"
    waitForMatch(
        rootNode,
        () => {
            const paragraphs = Array.from(rootNode.querySelectorAll("p"))

            return paragraphs.find((el) => el.textContent && el.textContent.includes(targetText))
        },
        (targetElement) => {
            if (!targetElement || !targetElement.parentElement) {
                return
            }

            const parentElement = targetElement.parentElement
            if (parentElement.querySelector("#mindx-comment-extension-panel")) {
                return
            }

            parentElement.id = "mindx-comment-extension-panel"
            parentElement.innerHTML = `
            <div class="mindx-extension-wrapper">
                <style>
                    .mindx-extension-wrapper {
                        background: #ffffff;
                        border: 1px solid #e0e6ed;
                        border-radius: 10px;
                        padding: 16px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                        margin: 10px 0;
                    }
                    .mindx-comment-grid {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 14px;
                    }
                    .mindx-comment-card {
                        border: 1px solid #edf2f7;
                        border-radius: 8px;
                        padding: 14px;
                        background: #fbfdff;
                    }
                    .mindx-comment-card-strength {
                        background: #f1fbf5;
                        border-color: #d7f0df;
                    }
                    .mindx-comment-card-weakness {
                        background: #fff8ed;
                        border-color: #f8e1b8;
                    }
                    .mindx-comment-title {
                        font-size: 15px;
                        font-weight: 600;
                        margin-bottom: 12px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .mindx-comment-title-strength {
                        color: #23884b;
                    }
                    .mindx-comment-title-weakness {
                        color: #b66b00;
                    }
                    .mindx-comment-chip-list {
                        display: flex;
                        gap: 8px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                    .mindx-comment-chip {
                        border: 1px solid transparent;
                        border-radius: 999px;
                        padding: 8px 12px;
                        font-size: 14px;
                        font-weight: 600;
                        font-family: inherit;
                        line-height: 1.2;
                        cursor: pointer;
                        transition: all 0.2s ease;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        white-space: nowrap;
                    }
                    .mindx-comment-chip-strength {
                        color: #237345;
                        background: #e3f7ea;
                        border-color: #bee7cc;
                    }
                    .mindx-comment-chip-strength:hover,
                    .mindx-comment-chip-strength.is-selected {
                        color: #ffffff;
                        background: #23884b;
                        border-color: #23884b;
                    }
                    .mindx-comment-chip-weakness {
                        color: #9a5f00;
                        background: #fff0cf;
                        border-color: #f2d28d;
                    }
                    .mindx-comment-chip-weakness:hover,
                    .mindx-comment-chip-weakness.is-selected {
                        color: #ffffff;
                        background: #d47a00;
                        border-color: #d47a00;
                    }
                    .mindx-comment-chip:active,
                    #mindx-comment-extension-button-submit:active {
                        transform: scale(0.96);
                    }
                    #mindx-comment-extension-button-submit {
                        border: none;
                        background-color: #2563eb;
                        color: white;
                        padding: 10px 20px;
                        font-weight: 600;
                        margin-top: 16px;
                        border-radius: 8px;
                        width: 100%;
                        box-shadow: 0 4px 6px rgba(0, 123, 255, 0.2);
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }
                    #mindx-comment-extension-button-submit:hover {
                        background-color: #1d4ed8;
                        box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
                    }
                    @media (max-width: 720px) {
                        .mindx-comment-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                </style>
                <div class="mindx-comment-grid">
                    <div class="mindx-comment-card mindx-comment-card-strength">
                        <p class="mindx-comment-title mindx-comment-title-strength">Điểm mạnh của học viên</p>
                        <div class="mindx-comment-chip-list" id="mindx-comment-extension-strengths"></div>
                    </div>
                    <div class="mindx-comment-card mindx-comment-card-weakness">
                        <p class="mindx-comment-title mindx-comment-title-weakness">Cần cải thiện</p>
                        <div class="mindx-comment-chip-list" id="mindx-comment-extension-weaknesses"></div>
                    </div>
                </div>
                <button id="mindx-comment-extension-button-submit" type="button">Tạo bình luận</button>
            </div>`

            const savedCounts = JSON.parse(localStorage.getItem("mindx-comment-counts") || "{}")
            const sortByCount = (a, b) => (savedCounts[b.key] || 0) - (savedCounts[a.key] || 0)
            const strengthOptions = [...MINDX_COMMENT_STRENGTHS].sort(sortByCount)
            const weaknessOptions = [...MINDX_COMMENT_WEAKNESSES].sort(sortByCount)
            const selectedStrengthKeys = []
            const selectedWeaknessKeys = []
            const strengthContainer = parentElement.querySelector("#mindx-comment-extension-strengths")
            const weaknessContainer = parentElement.querySelector("#mindx-comment-extension-weaknesses")
            const submitButton = parentElement.querySelector("#mindx-comment-extension-button-submit")

            if (!strengthContainer || !weaknessContainer || !submitButton) {
                return
            }

            const toggleSelectedKey = (selectedKeys, key) => {
                const selectedIndex = selectedKeys.indexOf(key)
                if (selectedIndex >= 0) {
                    selectedKeys.splice(selectedIndex, 1)
                    return
                }

                selectedKeys.push(key)
            }

            const renderChips = () => {
                renderMindxCommentChips({
                    container: strengthContainer,
                    options: strengthOptions,
                    selectedKeys: selectedStrengthKeys,
                    tone: "strength",
                })
                renderMindxCommentChips({
                    container: weaknessContainer,
                    options: weaknessOptions,
                    selectedKeys: selectedWeaknessKeys,
                    tone: "weakness",
                })
            }

            strengthContainer.addEventListener("click", (event) => {
                const chip = event.target.closest(".mindx-comment-chip")
                if (!chip || !strengthContainer.contains(chip)) {
                    return
                }

                toggleSelectedKey(selectedStrengthKeys, chip.dataset.key)
                renderChips()
            })

            weaknessContainer.addEventListener("click", (event) => {
                const chip = event.target.closest(".mindx-comment-chip")
                if (!chip || !weaknessContainer.contains(chip)) {
                    return
                }

                toggleSelectedKey(selectedWeaknessKeys, chip.dataset.key)
                renderChips()
            })

            submitButton.addEventListener("click", () => {
                const selectedStrengths = selectedStrengthKeys.map((key) => strengthOptions.find((item) => item.key === key)).filter(Boolean)
                const selectedWeaknesses = selectedWeaknessKeys.map((key) => weaknessOptions.find((item) => item.key === key)).filter(Boolean)
                const allSelectedKeys = [...selectedStrengthKeys, ...selectedWeaknessKeys]

                if (allSelectedKeys.length > 0) {
                    const currentCounts = JSON.parse(localStorage.getItem("mindx-comment-counts") || "{}")
                    allSelectedKeys.forEach((key) => {
                        currentCounts[key] = (currentCounts[key] || 0) + 1
                    })
                    localStorage.setItem("mindx-comment-counts", JSON.stringify(currentCounts))
                }

                const strengthComment = formatMappedComment(selectedStrengths)
                const weaknessComment = formatMappedComment(selectedWeaknesses)
                const adviceComment = formatMappedComment(selectedWeaknesses, "action")
                const danhgialoikhuyen = rootNode.querySelector(".quill .ql-container .ql-editor")

                if (danhgialoikhuyen) {
                    danhgialoikhuyen.innerHTML = `<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Điểm mạnh: ${escapeHtml(strengthComment)}</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Cần cải thiện: ${escapeHtml(weaknessComment)}</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Lời khuyên: ${escapeHtml(adviceComment)}</li></ol>`
                }
            })

            renderChips()
            const parentParentContainer = parentElement.parentElement.parentElement
            const targetLabel = "Đánh giá chung"

            const divs = Array.from(parentParentContainer.querySelectorAll("div"))
            const result = divs.find((el) => el.textContent && el.textContent.includes(targetLabel))
            if (result && !result.querySelector(".btn-group-cmt-mindx")) {
                const group = document.createElement("div")
                group.className = "btn-group-cmt-mindx"
                group.style.display = "flex"
                group.style.gap = "2px"

                const feedbackItems = [
                    { label: "TB", color: "#b28900" },
                    { label: "Khá", color: "#357a38" },
                    { label: "Giỏi", color: "#1769aa" },
                ]

                feedbackItems.forEach((feedback) => {
                    const button = document.createElement("button")
                    button.type = "button"
                    button.className = "btn-cmt"
                    button.style.backgroundColor = feedback.color
                    button.textContent = feedback.label
                    button.addEventListener("click", async () => {
                        handleRandomFeedback(feedback.label == "TB" ? "btn1" : feedback.label == "Khá" ? "btn2" : "btn3", [rootNode])
                    })
                    group.appendChild(button)
                })

                result.appendChild(group)
            }
        },
    )
}

function bootstrapExistingNodes() {
    const activeLesson = document.querySelector("div[id*='class-comments-slot-carousel-'].active")
    if (activeLesson) {
        handleLessonContainer(activeLesson)
    }

    const activeDialog = document.getElementsByClassName(
        "MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded",
    )[0]
    if (activeDialog) {
        setupDialogPanel(activeDialog)
    }
}

const observer = new MutationObserver((mutations) => {
    const lessonContainer = findAddedNode(mutations, "div[id*='class-comments-slot-carousel-'].active")
    if (lessonContainer) {
        handleLessonContainer(lessonContainer)
    } else {
        const activeLesson = document.querySelector("div[id*='class-comments-slot-carousel-'].active")
        if (activeLesson) {
            handleLessonContainer(activeLesson)
        }
    }

    const dialogContainer = findAddedNode(mutations, ".MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiDialog-paperFullWidth.MuiPaper-elevation24.MuiPaper-rounded")
    if (dialogContainer) {
        setupDialogPanel(dialogContainer)
    }
})

ensureStylesInjected()
bootstrapExistingNodes()

observer.observe(document.body, {
    childList: true,
    attributes: true,
    attributeFilter: ["class"],
    subtree: true,
})
