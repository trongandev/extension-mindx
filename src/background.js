let databaseCache = null

async function loadDatabase() {
    if (databaseCache) {
        return databaseCache
    }

    const response = await fetch(chrome.runtime.getURL("src/database.json"))
    databaseCache = await response.json()
    return databaseCache
}

chrome.runtime.onInstalled.addListener(() => {
    loadDatabase().catch((error) => {
        console.error("Failed to preload database.json:", error)
    })
})

chrome.runtime.onStartup.addListener(() => {
    loadDatabase().catch((error) => {
        console.error("Failed to preload database.json:", error)
    })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message?.type !== "GET_DATABASE") {
        return
    }

    loadDatabase()
        .then((data) => {
            sendResponse({ ok: true, data })
        })
        .catch((error) => {
            sendResponse({ ok: false, error: error instanceof Error ? error.message : String(error) })
        })

    return true
})
