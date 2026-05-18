const databaseCache = {}

async function loadDatabase(link_name) {
    if (databaseCache[link_name]) {
        return databaseCache[link_name]
    }

    const response = await fetch(chrome.runtime.getURL(link_name))
    const json = await response.json()
    databaseCache[link_name] = json
    return json
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

console.log(databaseCache, "databaseCache")
