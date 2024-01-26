var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');
const {checkBody} = require('../modules/checkBody')


router.post('/signup', (req, res) => {
	const body = {
		name : req.body.name,
		email : req.body.email,
		password : req.body.password,
	}
	const checklist = ["name", "email", "password"]
	// if ((!req.body.email || req.body.email === "") || (!req.body.password || req.body.password === "")) {
	const test = checkBody(body, checklist)
	if(!test){
		res.json({ result: false, error: "Missing or empty fields" })
	} else {
		User.findOne({ email: req.body.email }).then(data => {
			if (!data) {

				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				})

				newUser.save().then(data =>
					res.json({ result: true })
				)
			}
			else {
				res.json({ result: false, error: "User already exists'" })
			}
		})
	}
});

router.post('/signin', (req, res) => {
	const body = {
		email : req.body.email,
		password : req.body.password,
	}
	const checklist = ["email", "password"]
	// if ((!req.body.email || req.body.email === "") || (!req.body.password || req.body.password === "")) {
	if(!checkBody(body, checklist)){
		res.json({ result: false, error: "Missing or empty fields" })
	} else {
		User.findOne({ email: req.body.email }).then(data => {
			if (!data) {
				res.json({ result: false, error: 'User not found' })
			} else {
				res.json({ result: true })
			}
		})
	}
});


module.exports = router;


// Si l’email ou le mdp renvoyé est indéfini ou vide, renvoyez : { result:   false, error: 'Missing or empty fields' }.


// Si l’email est déjà enregistré dans la base de données, renvoyez : { result: false, error: 'User already exists' }.


// Sinon, renvoyez : { result: true }.


