var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('API! respond with a resource');
});

// Test
router.get('/test', function (req, res) {
    res.send('API! respond with a resource');
});

/* GET to Add API Service */
router.get('/add', function (req, res) {
	
	// Set our internal DB variable
	var db = req.db;
    
	// Get our form values. These rely on the "name" attributes
	var key = req.query.key;
	var value = req.query.value;

	// Set our collection
	var collection = db.get('keyvaluecollection');
    res.send("ok");
    return;

	// Submit to the DB
	collection.insert({
		"key" : key,
		"value" : value,
		"created" : Date.now()
	}, function (err, doc) {
		if (err) {
			// If it failed, return error
			res.send("There was a problem adding the information to the database.");
		}
		else {
			// And forward to success page
			res.send("ok");
		}
	});
});

router.get('/addplenty', function (req, res) {
	var db = req.db;
	var arr = [];
	
	var collection = db.get('thingcollection');
	for (i = 0; i < req.query.count; i++) {
		arr.push({ "thing": "thing" + "t" + i, "value": "v" + i  , "created": Date.now() });
	}
	collection.insert(
		arr
	, function (err, doc) {
			if (err) {
				res.send("Error");
			} else {
			// res.redirect("things");	
			}
		});
	res.redirect("things");

});






module.exports = router;