// Khai báo biến data để lưu dữ liệu từ database.json
let data = [];
const DATA_COURSE = [
    "ROBB",
    "ROBA",
    "ROBI",
    "PREB",
    "PREA",
    "PREI",
    "ARMB",
    "ARMA",
    "ARMI",
    "SEMIB",
    "SEMIA",
    "SEMII",
    "SB",
    "SA",
    "SI",
    "GB",
    "GA",
    "GI",
    "PTB",
    "PTA",
    "PTI",
    "JSB",
    "JSA",
    "JSI",
    "CSB",
    "CSA",
    "CSI",
];
const SUGGEST_CLICK_STORAGE_KEY = "mindxSuggestClickCount";
const COURSE_ORDER_MAP = DATA_COURSE.reduce((map, courseCode, index) => {
    map[courseCode.toLowerCase()] = index;
    return map;
}, {});
// Đọc file database.json bằng fetch API
fetch("../database.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((jsonData) => {
        data = jsonData; // Lưu dữ liệu vào biến data
    })
    .catch((error) => {
        console.error("Error loading database:", error);
    });

var input = document.querySelector("#search");
var result = document.querySelector(".result");
var suggest = document.querySelector(".suggest");
document.addEventListener("DOMContentLoaded", function () {
    var html = ``;
    input.focus();
    renderSuggest();
    loadDataSearch();

    // Event delegation for copy buttons
    document.addEventListener("click", function (event) {
        let suggestItem = event.target.closest(".suggest-item");
        if (suggestItem) {
            const selectedCourse = suggestItem.dataset.value;
            saveSuggestClickCount(selectedCourse);
            input.value = selectedCourse;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            return;
        }

        // Check if the clicked element is a copy button or its child (like the SVG)
        let copyButton = event.target.closest(".copy");
        if (copyButton) {
            const content = decodeURIComponent(copyButton.dataset.content);
            copyToClipboard(content);
        }
    });

    input.addEventListener("input", function (e) {
        var searchText = e.target.value;
        var normalizedSearchText = searchText.toLowerCase().trim();
        renderSuggest(searchText);

        if (searchText.length > 0 && data && data.length > 0) {
            html = ""; // Reset the html variable to avoid duplicated content
            let resultsFound = false;

            // Loop through all courses
            for (var courseIndex = 0; courseIndex < data.length; courseIndex++) {
                const course = data[courseIndex];

                for (var i = 0; i < course.CAR.length; i++) {
                    // Search in name, section, and lesson_content
                    const sectionText = String(course.CAR[i].section || "").toLowerCase();
                    const lessonContentText = String(course.CAR[i].lession_content || "").toLowerCase();
                    const courseNameText = String(course.name || "").toLowerCase();
                    const isExactCourseSearch = DATA_COURSE.some((courseCode) => courseCode.toLowerCase() === normalizedSearchText);
                    const isMatched = isExactCourseSearch
                        ? courseNameText === normalizedSearchText
                        : courseNameText.includes(normalizedSearchText) || sectionText.includes(normalizedSearchText) || lessonContentText.includes(normalizedSearchText);

                    if (isMatched) {
                        resultsFound = true;
                        html += ` <div class="result-item">
                        <div class="copy" data-content="${encodeURIComponent(course.CAR[i].lession_content)}"  title="Sao chép">
                           <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ff3d45">
                                <path
                                    d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                            </svg>
                        </div>
                        </div>
                        <div class="title">${course.name.toUpperCase() + " | " + course.CAR[i].section + " | " + course.date}</div>
                        <textarea class="desc" readonly>${course.CAR[i].lession_content}</textarea>
                    </div>`;
                    }
                }
            }

            result.innerHTML = html;

            if (!resultsFound) {
                result.innerHTML = "<div class='no-results'>Không tìm thấy kết quả nào</div>";
            }
        } else {
            loadDataSearch(); // Show all data when search is empty
        }
        document.querySelectorAll(".desc").forEach(autoResize);
    });
});

function renderSuggest(keyword = "") {
    if (!suggest) {
        return;
    }

    const normalizedKeyword = keyword.toLowerCase().trim();
    const suggestClickMap = getSuggestClickMap();

    const filteredCourses = (normalizedKeyword ? DATA_COURSE.filter((item) => item.toLowerCase().includes(normalizedKeyword)) : DATA_COURSE).slice();

    filteredCourses.sort((a, b) => {
        const rankA = getSuggestMatchRank(a, normalizedKeyword);
        const rankB = getSuggestMatchRank(b, normalizedKeyword);

        if (rankA !== rankB) {
            return rankB - rankA;
        }

        const clickA = suggestClickMap[a] || 0;
        const clickB = suggestClickMap[b] || 0;

        if (clickA !== clickB) {
            return clickB - clickA;
        }

        return getCourseOrder(a) - getCourseOrder(b);
    });

    suggest.innerHTML = filteredCourses.map((item) => `<button type="button" class="suggest-item" data-value="${item}">${item}</button>`).join("");
}

function getSuggestMatchRank(courseCode, keyword) {
    const normalizedCourseCode = courseCode.toLowerCase();

    if (!keyword) {
        return 0;
    }

    if (normalizedCourseCode === keyword) {
        return 3;
    }

    if (normalizedCourseCode.startsWith(keyword)) {
        return 2;
    }

    if (normalizedCourseCode.includes(keyword)) {
        return 1;
    }

    return 0;
}

function getCourseOrder(courseCode) {
    const normalizedCourseCode = String(courseCode || "").toLowerCase();
    return COURSE_ORDER_MAP[normalizedCourseCode] ?? Number.MAX_SAFE_INTEGER;
}

function getSuggestClickMap() {
    try {
        const storedValue = localStorage.getItem(SUGGEST_CLICK_STORAGE_KEY);
        if (!storedValue) {
            return {};
        }

        const parsedValue = JSON.parse(storedValue);
        if (parsedValue && typeof parsedValue === "object") {
            return parsedValue;
        }
    } catch (error) {
        console.error("Error reading suggest click map:", error);
    }

    return {};
}

function saveSuggestClickCount(courseCode) {
    if (!courseCode) {
        return;
    }

    const suggestClickMap = getSuggestClickMap();
    suggestClickMap[courseCode] = (suggestClickMap[courseCode] || 0) + 1;

    try {
        localStorage.setItem(SUGGEST_CLICK_STORAGE_KEY, JSON.stringify(suggestClickMap));
    } catch (error) {
        console.error("Error saving suggest click map:", error);
    }
}

function loadDataSearch() {
    if (data && data.length > 0) {
        html = ""; // Reset the html variable to avoid duplicated content
        // Loop through all courses
        for (var courseIndex = 0; courseIndex < data.length; courseIndex++) {
            const course = data[courseIndex];
            for (var i = 0; i < course.CAR.length; i++) {
                // Store the lesson content as a data attribute
                html += ` <div class="result-item">
                    <div class="copy" data-content="${encodeURIComponent(course.CAR[i].lession_content)}"  title="Sao chép">
                       <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ff3d45">
                                <path
                                    d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="title">${course.name.toUpperCase() + " | " + course.CAR[i].section + " | " + course.date}</div>
                    <textarea class="desc" readonly>${course.CAR[i].lession_content}</textarea>
                </div>`;
            }
        }
        result.innerHTML = html;
    }
}

function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            console.log(text);
        })
        .catch((err) => {
            console.error("Error copying text: ", err);
        });
    showNotification("Đã sao chép!");
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Hiển thị notification
    setTimeout(() => {
        notification.classList.add("show");
    }, 10);

    // Ẩn sau 2 giây
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}
