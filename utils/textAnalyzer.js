const textLength = (text) => {
    const withSpaces = text.length
    const withoutSpaces = text.replace(/\s/g, '').length
    return{
        withSpaces, withoutSpaces
    }
}

const wordCount = (text) => {
    let count
    if (text.trim() === ""){
        count = 0
    } else {
        count = text.trim().split(" ").length
    }
    return count 
}

const characterCount = (text) => {
    //text is trimmed, contains only alphabets and is sorted alphabetically
    let parsedText = text.trim().replace(/[^a-z]/g, '').split('').sort().join('')
    let characterArray = []

    for (let i = 0; i < parsedText.length; i++){
        let character = parsedText.charAt(i)
        if (!characterArray.some(c => Object.keys(c)[0] === character)){
            let obj = {}
            obj[character] = 1
            characterArray.push(obj)
        } else {
            characterArray.find(c => Object.keys(c)[0] === character)[character]++
        }
    }
    return characterArray
}

module.exports = {textLength, wordCount, characterCount}