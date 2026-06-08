const style = document.createElement("style")
style.textContent = STYLE

const styleFeedback = document.createElement("style")
styleFeedback.textContent = STYLE_FEEDBACK
const DURATION_TIME = 250
let CODE_COURSE = ""
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
        let learnedFromMindxContent = LEARN_FROM_MINDX[CODE_COURSE]
        // thư từ mindX, dành cho buổi 14
        let templateLearnedFromMindx = `<p>Về kiến thức chuyên môn:</p><ol>
        ${learnedFromMindxContent.map((item) => `<li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>${item}</li>`).join("")}<li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kết thúc phần học, bạn đã có sản phẩm cuối khóa do chính bạn tạo ra dựa trên ý tưởng của bản thân.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kỹ năng mềm (giao tiếp, làm việc nhóm, kỹ năng thuyết trình): Trong khóa học, các bạn cũng được học thêm về cách thiết kế slide vàcách thuyết trình về bản thân cũng như sản phẩm của mình.</li></ol>`
        learnedFromMindx.innerHTML = templateLearnedFromMindx

        let templateSf = `<p>Để nâng cao chất lượng sản phẩm, bạn có thể đầu tư thêm thời gian trau chuốt giao diện ứng dụng, giúp sản phẩm trở nên tinh tế, chỉn chu và có chiều sâu hơn về mặt nội dung. Một số giao diện hiện tại vẫn chưa hoàn thiện, vì vậy em nên tập trung thực hành thêm để hoàn thiện kỹ năng. Ở khóa học tiếp theo, hy vọng bạn sẽ tiếp tục nỗ lực, khám phá sâu hơn và tạo ra những sản phẩm ấn tượng hơn nữa.</p><p>Chúc mừng con đã hoàn thành khóa học với những thành tựu đáng ghi nhận! Hãy tiếp tục phát huy tinh thần học hỏi và sáng tạo nhé!</p>`
        suggestionsFromMindx.innerHTML = templateSf

        let keys = Object.keys(LEVEL_COURSE)
        let currentIndex = keys.indexOf(CODE_COURSE)
        let nextKey = keys[currentIndex + 1]
        let templateFd = `<p>Với khả năng hiện tại của bạn thì theo đúng định hướng lộ trình học của MindX, khóa tiếp theo em sẽ có thể tham gia là khóa học ${LEVEL_COURSE[nextKey]}. Qua đó bạn có thể trải nghiệm thêm một lĩnh vực nâng cao để khám phá rõ hơn sở thích và điểm mạnh của bản thân.</p>`
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

    let parts = headerText.split(" ")[0].split("-")
    let length = parts.length
    console.log({ parts, length })
    if (parts[1] === "AI4L1") {
        return "AI4L1"
    }

    if (parts[1] === "AI4L2") {
        return "AI4L2"
    }

    if (length === 3 || length === 4) {
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
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype, // dùng HTMLInputElement nếu là <input>
            "value",
        ).set
        let pendingCount = 0
        FEEDBACK_ARRAY.forEach(([title, ...feedbacks], feedbackIndex) => {
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
                { label: "TB", color: "#b28900", text: feedbacks[0], title },
                { label: "Khá", color: "#357a38", text: feedbacks[1], title },
                { label: "Giỏi", color: "#1769aa", text: feedbacks[2], title },
            ]

            feedbackItems.forEach((feedback) => {
                const button = document.createElement("button")
                button.type = "button"
                button.className = "btn-cmt"
                button.style.backgroundColor = feedback.color
                button.textContent = feedback.label
                button.addEventListener("click", () => {
                    try {
                        const textareas = Array.from(rootNode.querySelectorAll("textarea"))
                        const targetTextarea = targetElement.parentElement?.querySelector("textarea") || textareas[feedbackIndex * 2] || textareas[feedbackIndex] || textareas[0]

                        if (!targetTextarea) {
                            return
                        }

                        nativeInputValueSetter.call(targetTextarea, feedback.text)
                        targetTextarea.dispatchEvent(new Event("input", { bubbles: true }))
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
        CODE_COURSE = extractCourseCode(codeHeader?.innerText || "")
        const lessonNumber = infoContainer.innerText.split("\n")[0].replace("#", "").trim()
        const lessonKey = `${CODE_COURSE}-${lessonNumber}`

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
            const course = data.find((item) => item.name.toLowerCase() === CODE_COURSE.toLowerCase())
            const lessonContent = course?.CAR?.[Number(lessonNumber) - 1]?.lession_content || ""

            waitForElement(document.body, ".comment-list-table", (commentListTable) => {
                const parent = commentListTable.parentElement
                if (!parent) {
                    return
                }

                if (parent.querySelector(`.btn-cmt[data-copy-key="${CODE_COURSE}-${lessonNumber}"]`)) {
                    return
                }

                const button = document.createElement("button")
                button.className = "btn-cmt"
                button.type = "button"
                button.style.backgroundColor = "#b28900"
                button.dataset.copyKey = `${CODE_COURSE}-${lessonNumber}`
                button.textContent = `Sao chép nội dung buổi ${lessonNumber} khóa học ${CODE_COURSE}`
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
            parentElement.innerHTML = STYLE_MINDX_WRAPPER
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
