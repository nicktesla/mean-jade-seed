'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

//Clear old things, then add things in
Thing.find({}).remove(function() {
	Thing.create({ 
		name : 'Stripe Data',
		info : ' Build machine learning algorithms for fraud detection @stripe in Scala',
		pay: 5000,
		awesomeness: 1000,
		tag: "data"
	}, {
		name : 'Uber Data',
		info : 'Improve RMSE on Uber wait times with the Uber science team',
		pay: 2000,
		awesomeness: 800,
		tag: "data"
	}, {
		name : 'Lyft Data',
		info : 'Measure the impact of moustaches on car discovery times',
		pay: 2500,
		awesomeness: 650,
		tag: "data"
	}, {
		name : 'Facebook Data',
		info : 'How often do classmates become soulmates?',
		pay: 3500,		
		awesomeness: 1350,
		tag: "data"
	},
	{
		name : 'Quora',
		info : 'Recognizing video content in posted answers',
		pay: 4500,				
		awesomeness: 1480,
		tag: "front"
	},
	{
		name : 'Twitter',
		info : 'Embedding rich media in tweets',
		pay: 2800,						
		awesomeness: 2050,
		tag: "front"
	},
	{
		name : 'Square',
		info : 'Single page mobile-web app for accepting payments',
		pay: 4800,								
		awesomeness: 1280,
		tag: "front"
	},
	 {
		name : 'Google',
		info : 'Scaffolding for AngularJS',
		pay: 5000,										
		awesomeness: 1000,
		tag: "front"
	}, 
	{
		name : 'Amazon',
		info : 'Building a scalable VPN as a service',
		pay: 1800,						
		awesomeness: 180,
		tag: "distributed"
	},
	{
		name : 'Netflix',
		info : 'Java server cluster for optimizing recommendation lookups',
		pay: 3800,								
		awesomeness: 380,
		tag: "distributed"
	},
	 {
		name : 'Apple',
		info : 'Work with Jonny Ives on iOS 8',
		pay: 1000,										
		awesomeness: 100,
		tag: "design"
	}, 
	{
		name : 'Google',
		info : 'Work with Jeff Dean on Android OS internals to improve speech recognition',
		pay: 3000,										
		awesomeness: 100,
		tag: "mobile"
	},
	{
		name : 'Sudo',
		info : 'WebRTC based screen-sharing',
		pay: 2500,										
		awesomeness: 100,
		tag: "distributed"
	},
	{
		name : 'Yelp',
		info : 'Improve restaurant recommendations on iOS',
		pay: 2500,										
		awesomeness: 100,
		tag: "mobile"
	},	 		 	
	function(err) {
			if(err) {
				throw err;
			}
			else {
				console.log('no error, finished populating things');				
			}
		}
	);
});