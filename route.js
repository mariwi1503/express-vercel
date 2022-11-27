const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        res.status(200).json({
            message: 'Success'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router