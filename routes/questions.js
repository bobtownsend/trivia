var router = require("express").Router();
var Question = require("../models/question");

// Get
router.get("/", function (req, res) {
    res.send("Question List Here");
});

// Get questions input template
router.get("/new", function (req, res) {
    res.render('question', { title: "Add Questions" });
});

// Post questions to db
router.post("/new", function (req, res, next) {
    var question = new Question({
        question: req.body.question,
        answer: req.body.answer,
        author: req.body.author
    });
    question.save(function (err, meow) {
        if (err) {
            next(err);
        } else {
            console.log(meow);
            res.send("Totally saved dude!");
        }
    });
});

module.exports = router;