function checkUpdate() {
    fetch("https://raw.githubusercontent.com/angutboiz/translate-quizzet-extension/refs/heads/main/data/version.json")
        .then((response) => response.json())
        .then((data) => {
            const currentVersion = chrome.runtime.getManifest().version;

            if (data.version > currentVersion) {
                chrome.storage.local.get(["update_notified"], (result) => {
                    if (!result.update_notified) {
                        chrome.storage.local.set({ update_notified: true });

                        // Hiển thị thông báo toast
                        chrome.notifications.create("update_notification", {
                            type: "basic",
                            iconUrl: "assets/icons.png",
                            title: "Cập nhật mới!",
                            message: `Phiên bản mới (${data.version}) đã có sẵn. Nhấp vào đây để cập nhật.`,
                            priority: 2,
                        });

                        // Mở trang cập nhật khi người dùng bấm vào thông báo
                        chrome.notifications.onClicked.addListener((notificationId) => {
                            if (notificationId === "update_notification") {
                                chrome.tabs.create({ url: "https://github.com/angutboiz/translate-quizzet-extension" });
                            }
                        });
                    }
                });
            }
        })
        .catch(() => {}); // Bỏ qua lỗi
}

chrome.runtime.onStartup.addListener(checkUpdate);
