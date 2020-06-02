const express = require('express');
const router = express.Router();
const config = require('config');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// Get all the users
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.status(200).json({"users": users});
});

// Post User
router.post('/users', async (req, res) => {
    let user = new User();
    user.name = req.body.name;
    await user.save();
    res.status(200).json({"user": user, "message": "User saved successfuly"});
});

// Delete User
router.delete('/users/:userId', (req, res) => {
    User.remove({
        _id: req.params.userId
      }, function (err, user) {
        if (err)
          return res.status(400).json({"error": "Error deleting user"});
        res.status(200).json({"message": "User deleted successfuly"});
      });
});

module.exports = router;