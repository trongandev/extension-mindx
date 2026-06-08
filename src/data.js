const LEVEL_COURSE = {
    ROBB: "Robotics 4+ Basic",
    ROBA: "Robotics 4+ Advanced",
    ROBI: "Robotics 4+ Intensive",
    PREB: "Pre-Robotics Basic",
    PREA: "Pre-Robotics Advanced",
    PREI: "Pre-Robotics Intensive",
    ARMB: "Robotics Arm  Basic",
    ARMA: "Robotics Arm  Advanced",
    ARMI: "Robotics Arm  Intensive",
    SEMIB: "Semi Robotics Basic",
    SEMIA: "Semi Robotics Advanced",
    SEMII: "Semi Robotics Intensive",
    SB: "Scratch Creator Basic",
    SA: "Scratch Creator Advanced",
    SI: "Scratch Creator Intensive",
    GB: "Game Creator Basic",
    GA: "Game Creator Advanced",
    GI: "Game Creator Intensive",
    PTB: "App Producer Basic",
    PTA: "App Producer Advanced",
    PTI: "App Producer Intensive",
    JSB: "Web Developer Basic",
    JSA: "Web Developer Advanced",
    JSI: "Web Developer Intensive",
    CSB: "Computer Scientist Basic",
    CSA: "Computer Scientist Advanced",
    CSI: "Computer Scientist Intensive",
}

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

const STYLE = `
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

const STYLE_FEEDBACK = `
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

const STYLE_MINDX_WRAPPER = `
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

const LEARN_FROM_MINDX = {
    ROBB: [
        "Học viên làm quen với bộ Kit Lego Spike và các thành phần cơ bản như khối gạch Lego, LED, động cơ, cảm biến màu sắc",
        "Nhận biết màu sắc: trắng, đỏ, cam, vàng, xanh lá, xanh dương",
        "Hiểu động cơ xoay 2 chiều trái-phải, cấu tạo bánh xe và ứng dụng trong robot",
        "Nắm kiến thức về cảm biến: cảm biến màu sắc và cảm biến âm thanh",
        "Lắp ráp mô hình cơ bản kết hợp động cơ, LED và cảm biến",
        "Vận dụng block lệnh động cơ, cảm biến và âm thanh để lập trình robot theo 2-3 bước",
        "Làm quen khái niệm toán tư duy: đếm 1-5, phân biệt hình dạng, so sánh âm thanh, tốc độ và chiều cao",
        "Xác định quy luật về thứ tự và làm quen các khái niệm khoa học như ánh sáng, cối xay gió, thói quen các loài vật",
    ],
    ROBA: [
        "Làm quen với câu lệnh nâng cao như điều khiển 2 động cơ, vòng lặp vô hạn",
        "Nắm được kiến thức về cảm biến nâng cao như cảm biến nghiêng trong bộ não Robot vận dụng vào mô hình",
        "Nắm được kiến thức về lực đàn hồi của dây chun, sử dụng trong mô hình để di chuyển",
        "Luyện tập và vận dụng các Block lệnh điều khiển 2 động cơ, vòng lặp, cảm biến nghiêng, lập trình Robot hoạt động theo đúng thứ tự 3-5 bước",
        "Phát triển tư duy toán học thông qua các hoạt động thực hành như đếm số bước hay số vòng quay từ 1-10, so sánh kích thước, số lượng, khoảng cách",
        "Làm quen với kiến thức khoa học như tầm quan trọng của việc bảo tồn động vật, đặc điểm và môi trường sống đặc trưng của một số loài vật",
    ],
    ROBI: [
        "Nắm được các khái niệm về sự truyền tin, vận chuyển, các hiện tượng thực tế như động đất",
        "Biết được sự quan trọng của việc bảo vệ môi trường",
        "Vận dụng các Block lệnh chuyên sâu như Message Block để truyền tin giữa các đoạn chương trình",
        "Thực hiện kéo-thả và sắp xếp xây dựng 2 đoạn chương trình liên kết với nhau qua Message Block",
        "Nắm được kiến thức về vòng lặp với số lần biết trước, thao tác lập trình chương trình thực hiện lặp từ 1-10 lần",
        "Nắm được chính xác công dụng của đoạn chương trình và có thể giải thích bằng lời nói",
        "Phát triển tư duy toán học qua các hoạt động so sánh nhất, đếm và chọn số lượng tương ứng, sắp sếp trình tự,...",
    ],
    SB: [
        "Bạn có thể tự mình thiết kế được một trò chơi đơn giản theo ý muốn của mình",
        "Bạn nhìn được trục X,Y trong lập trình game",
        "Bạn biết cách thêm âm thanh, hình ảnh vào game",
        "Bạn biết cách sáng tạo cốt truyện cho game của mình",
        "Bạn biết cách xuất file game để có thể chơi trên máy tính của mình",
    ],
    SA: [
        "Bạn có thể tự mình thiết kế được một trò chơi đơn giản theo ý muốn của mình",
        "Bạn biết cách sử dụng hiệu ứng hover",
        "Bạn biết cách xử lý va chạm trong lập trình game",
        "Bạn biết cách tạo cơ chế điểm số, xây dựng được sự kiện kết thúc cho trò chơi",
    ],
    SI: [
        "Bạn có thể tự mình thiết kế được một trò chơi đơn giản theo ý muốn của mình",
        "Bạn biết cách sử dụng công cụ AI để tạo ra hình ảnh, âm thanh cho trò chơi của mình",
        "Bạn biết cách thiết kế giao diện game đẹp hơn, có hiệu ứng âm thanh, hình ảnh",
        "Bạn biết cách xuất file game để có thể chơi trên máy tính của mình",
        "Bạn biết cách sáng tạo ra các ý tưởng game độc đáo và thú vị",
        "Bạn biết cách lập trình ra các tính năng phức tạp hơn như lưu điểm số, tạo nhiều cấp độ khó khác nhau cho trò chơi của mình",
    ],
    GB: [
        "Bạn có thể tự mình thiết kế được một trò chơi đơn giản theo ý muốn của mình",
        "Bạn hiểu được các khái niệm cơ bản về lập trình game như biến, hàm, sự kiện, vòng lặp",
        "Bạn biết cách thiết kế giao diện game cơ bản",
        "Bạn biết cách xuất file game để có thể chơi trên máy tính của mình",
    ],
    GA: [
        "Bạn có thể tự mình thiết kế được một trò chơi đơn giản theo ý muốn của mình",
        "Bạn biết sử dụng các hiệu ứng đánh lừa thị giác trong lập trình game",
        "Bạn biết cách thiết kế giao diện game đẹp hơn, có hiệu ứng âm thanh, hình ảnh",
        "Bạn biết cách xuất file game để có thể chơi trên máy tính của mình",
        "Bạn biết cách sáng tạo ra các ý tưởng game độc đáo và thú vị",
    ],
    GI: [
        "Bạn có thể tự mình thiết kế được một trò chơi đơn giản theo ý muốn của mình",
        "Bạn biết sử dụng các hiệu ứng đánh lừa thị giác trong lập trình game",
        "Bạn biết cách thiết kế giao diện game đẹp hơn, có hiệu ứng âm thanh, hình ảnh",
        "Bạn biết cách xuất file game để có thể chơi trên máy tính của mình",
        "Bạn biết cách sáng tạo ra các ý tưởng game độc đáo và thú vị",
        "Bạn biết cách lập trình ra các tính năng phức tạp hơn như lưu điểm số, tạo nhiều",
    ],
    PTB: [
        "Bạn được xem qua về kỳ thi Hackathon và cách sử dụng phần mềm để giải bài toán",
        "Bạn hiểu về cách định nghĩa hàm trong Python",
        "Bạn biết cách sử dụng các kiến thức cơ bản trong lập trình để giải quyết một số bài toán đơn giản",
        "Bạn biết cách sử dụng câu lệnh rẽ nhánh trong lập trình",
        "Bạn biết cách sử dụng ngôn ngữ bậc cao Python để giải quyết các bài toán thực tế",
    ],
    PTA: [
        "Bạn có thể tự mình thiết kế được giao diện phần mềm theo ý muốn của mình",
        "Bạn làm quen và có thể thực hành trên các công cụ như Visual Studio Code",
        "Bạn biết cách sử dụng thư viện PyQt để thiết kế giao diện phần mềm",
        "Bạn ghi nhớ được cách sử dụng sự kiện trong lập trình",
        "Bạn biết cách phân loại bố cục giao diện của một sản phẩm thực tế",
    ],
    PTI: [
        "Bạn có thể tự mình thiết kế được giao diện phần mềm theo ý muốn của mình",
        "Bạn làm quen và có thể thực hành trên các công cụ như Visual Studio Code",
        "Bạn biết cách lưu trữ dữ liệu dưới Local máy tính của mình bằng JSON",
        "Bạn biết cách thực hiện thêm xóa sửa sản phẩm",
        "Bạn biết cách lập trình ra các tính năng như đăng nhập đăng ký tài khoản",
    ],
    JSB: [
        "Bạn có thể tự mình thiết kế được giao diện một trang web theo ý muốn của mình",
        "Bạn làm quen và có thể thực hành trên các công cụ như Visual Studio Code, Github",
        "Biết cách sử dụng HTML, CSS, JS",
        "Bạn biết cách phối màu, cách sử dụng font chữ để làm cho giao diện đẹp hơn",
        "Bạn biết thiết kế giao diện web có thể hiển thị tốt trên cả điện thoại và máy tính",
        "Sản phẩm cuối khóa được lưu trữ trên Github",
    ],
    JSA: [
        "Bạn có thể tự mình thiết kế được giao diện một trang web theo ý muốn của mình",
        "Bạn làm quen và có thể thực hành trên các công cụ như Visual Studio Code, Github",
        "Biết cách sử dụng HTML, CSS, JS",
        "Bạn biết cách lập trình ra các tính năng như đăng nhập đăng ký tài khoản",
        "Bạn biết lưu dữ liệu dưới local máy tính của mình",
        "Bạn biết cách thực hiện thêm xóa sửa sản phẩm",
        "Sản phẩm cuối khóa được lưu trữ trên Github",
    ],
    JSI: [
        "Bạn có thể tự mình thiết kế được giao diện một trang web theo ý muốn của mình",
        "Bạn làm quen và có thể thực hành trên các công cụ như Visual Studio Code, Github",
        "Biết cách sử dụng HTML, CSS, JS",
        "Bạn biết cách lập trình ra các tính năng như đăng nhập đăng ký tài khoản",
        "Bạn biết cách kết nối tới firebase, cách sử dụng firestore để lưu trữ dữ liệu",
        "Sản phẩm cuối khóa được lưu trữ trên Github",
    ],
    CSB: [
        "Bạn biết cách lập trình bằng Python",
        "Bạn biết được một số giải thuật cơ bản trong khoa học máy tính như thuật toán sắp xếp, thuật toán tìm kiếm",
        "Bạn hiểu được lập trình hướng đối tượng là gì",
        "Bạn biết được cấu trúc dữ liệu cơ bản như mảng, danh sách liên kết, cây, đồ thị",
        "Sản phẩm cuối khóa được lưu trữ trên Github",
    ],
    CSA: [
        "Bạn biết cách lập trình bằng Python",
        "Bạn biết được một số khái niệm về dữ liệu, phân biệt được các loại dữ liệu khác nhau",
        "Bạn biết cách sử dụng thư viện matplotlib để vẽ biểu đồ trực quan hóa dữ liệu",
        "Bạn biết cách sử dụng thư viện pandas để xử lý dữ liệu",
        "Bạn biết cách xây dựng một mô hình dự đoán đơn giản bằng thư viện scikit-learn",
        "Sản phẩm cuối khóa được lưu trữ trên Github",
    ],
    CSI: [
        "Bạn biết cách lập trình bằng Python",
        "Bạn sử dụng Streamlit để tạo giao diện nhanh chóng",
        "Bạn biết cách sử dụng AI, cách ứng dụng AI vào sản phẩm của mình",
        "Sản phẩm cuối khóa được lưu trữ trên Github",
        "Bạn đã có sản phẩm cuối khóa do chính bạn tạo ra dựa trên ý tưởng của bản thân",
        "Bạn được học thêm về cách thiết kế slide và cách thuyết trình về bản thân cũng như sản phẩm của mình",
    ],
}
