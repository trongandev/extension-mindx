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

let codeHeaders = ["BH-C4K-GB49 (1:1)", "ONL-CSB32", "BH-JSI12", "BH-C4K-GB48-HB", "BH-ROB-SEMII10", "BH-C4K-PTA16", "BH-C4K-PTI12", "BH-C4K-GB48-HB", "BH-AI4L2-01"]

codeHeaders.forEach((header) => {
    let code = extractCourseCode(header)
    // const lessonNumber = infoContainer.innerText.split("\n")[0].replace("#", "").trim()
    // const lessonKey = `${code}-${lessonNumber}`
    console.log({ code })
})
