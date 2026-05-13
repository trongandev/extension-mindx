let databaseCache = null

async function loadDatabase(link_name) {
    if (databaseCache) {
        return databaseCache
    }

    const response = await fetch(chrome.runtime.getURL(link_name))
    databaseCache = await response.json()
    return databaseCache
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message?.type === "GET_DATABASE") {
        loadDatabase("src/database.json")
            .then((data) => {
                sendResponse({ ok: true, data })
            })
            .catch((error) => {
                sendResponse({ ok: false, error: error instanceof Error ? error.message : String(error) })
            })
    }

    if (message?.type === "GET_NX") {
        loadDatabase("src/nx.json")
            .then((data) => {
                sendResponse({ ok: true, data })
            })
            .catch((error) => {
                sendResponse({ ok: false, error: error instanceof Error ? error.message : String(error) })
            })
    }

    return true
})
