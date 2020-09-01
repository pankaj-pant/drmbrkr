const express = require("express")
const router = express.Router()
const {textLength, wordCount, characterCount} = require('../utils/textAnalyzer')

router.post('/', (req, res) => {
    let text = req.body.text

    if(!text || typeof text !== "string"){
        throw new Error('Invalid Input')
    } else {
        text = text.toLowerCase();
       
        res.json({
            "textLength": textLength(text),
            "wordCount": wordCount(text),
            "characterCount": characterCount(text)
        })
    }

})

module.exports = router;