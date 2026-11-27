const CatFact = require('../models/CatFact')

const getRandomFact = async (req, res) => {
    try {
        const facts = await CatFact.aggregate([
            { $sample: { size: 1 } }
        ])

        if (facts.length === 0) {
            return res.status(404).json({
                message: 'No cat facts found'
            })
        }

        res.status(200).json(facts[0])
    } catch (error) {
        res.status(500).json({
            message: 'Could not retrieve a cat fact',
            error: error.message
        })
    }
}

module.exports = { getRandomFact }