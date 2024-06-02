const express = require('express');
const router = express.Router();
const Dog = require('../models/Dog');
const auth = require('../middleware/auth')

// GET all dogs
router.get('/', auth, async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.json(dogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new dog
router.post('/', auth, async (req, res) => {
    const dog = new Dog({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    });

    try {
        const newDog = await dog.save();
        res.status(201).json(newDog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET a single dog
router.get('/:id', auth, getDog, (req, res) => {
    res.json(res.dog);
});

// PATCH/PUT update a dog
router.patch('/:id', auth, getDog, async (req, res) => {
    if (req.body.name != null) {
        res.dog.name = req.body.name;
    }
    if (req.body.breed != null) {
        res.dog.breed = req.body.breed;
    }
    if (req.body.age != null) {
        res.dog.age = req.body.age;
    }

    try {
        const updatedDog = await res.dog.save();
        res.json(updatedDog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a dog
router.delete('/:id', auth, async (req, res) => {
    try {
        console.log(`Deleting dog: ${req.params.id}`);
        await Dog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Dog' });
    } catch (err) {
        console.error(`Error deleting dog: ${err.message}\nStack: ${err.stack}`);
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get a dog by ID
async function getDog(req, res, next) {
    let dog;
    try {
        dog = await Dog.findById(req.params.id);
        if (!dog) {
            console.log(`Dog not found: ${req.params.id}`);
            return res.status(404).json({ message: 'Cannot find dog' });
        }
    } catch (err) {
        console.error(`Error finding dog: ${err.message}`);
        return res.status(500).json({ message: err.message });
    }

    res.dog = dog;
    next();
}

module.exports = router;
