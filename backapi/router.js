const express = require('express');
const User = require('../backapi/db/schema'); 
const router = express.Router();


router.get('/api/users', async (req, res) => {
    try {
        let { page = 1, limit = 5, search, sort } = req.query;

        let query = {};
        if (search) {
            const searchLower = search.toLowerCase();
            query = {
                $or: [
                    { first_name: { $regex: searchLower, $options: 'i' } },
                    { last_name: { $regex: searchLower, $options: 'i' } },
                    { company_name: { $regex: searchLower, $options: 'i' } },
                    { city: { $regex: searchLower, $options: 'i' } },
                    { state: { $regex: searchLower, $options: 'i' } },
                    { email: { $regex: searchLower, $options: 'i' } },
                    { web: { $regex: searchLower, $options: 'i' } }
                ]
            };
        }

        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            sort: {}
        };

        if (sort) {
            const sortField = sort.replace('-', '');
            const isDesc = sort.startsWith('-');
            options.sort[sortField] = isDesc ? -1 : 1;
        }

        const users = await User.paginate(query, options);
        res.status(200).json(users.docs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new user
router.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a user by ID
router.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a user by ID
router.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a user by ID
router.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (deletedUser) {
            res.status(204).json({});
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
