const express = require('express');
const router = express.Router();
const config = require('config');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const { check, validationResult } = require('express-validator');

// Get all the users
router.get('/hobby', (req, res) => {
    return res.send('Get request');
});

// Get hobbies for single User
router.get('/hobby/:userId', async (req, res) => {
    const user = await User.findOne({"_id": req.body.userId});
    const profile = await Profile.findOne({ userId: req.params.userId });
    res.send(profile);
});


// Post Hobby
router.post('/hobby', async (req, res) => {
    const user = await User.findOne({"_id": req.body.userId});
    var newFields = {};
    newFields.userId = user;
    newFields.name = req.body.name;
    newFields.passion = req.body.passion;
    newFields.year = req.body.year;
    const profile = new Profile(newFields);
    // return res.send(profile);
    await profile.save();
    res.status(200).json({"userProfile": user, "message": "User profile saved successfuly"}); 
});

// Delete Hobby
router.delete('/hobby/:hobbyId', async (req, res) => {
    Profile.remove({
        _id: req.params.hobbyId
      }, function (err, user) {
        if (err)
          return res.status(400).json({"error": "Error deleting user"});
        res.status(200).json({"message": "Hobby deleted successfuly"});
      });
});

module.exports = router;