const router = require("express").Router()

const Package = require("../models/Package.model")

router.post('/', (req, res, next) => {

    const { title, price, image, description } = req.body

    Package
        .create({ title, price, image, description })
        .then(newPackage => res.sendStatus(201).json(newPackage))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Package
        .find()
        .then(allPackage => res.json(allPackage).sendStatus(200))
        .catch(err => next(err))
})

router.get('/:packageId', (req, res, next) => {
    const { packageId } = req.params

    Package
        .findById(packageId)
        .then(onePackage => res.json(onePackage).sendStatus(200))
        .catch(err => next(err))
})

router.put('/:packageId', (req, res, next) => {

    const { packageId } = req.params
    const { title, price, image, description } = req.body

    Package
        .findByIdAndUpdate(packageId, { title, price, image, description })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))


})
module.exports = router