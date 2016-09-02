var url = require('url')
var request = require('request')
var Yelp = require('yelp');

choose_business = function(text) {
    var json = JSON.parse(text);
    var business_json = json['businesses'];
    return business_json[random_int(0, business_json.length - 1)];
};

random_int = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = function(ctx, cb) {
    var yelp = new Yelp({
        consumer_key: '',
        consumer_secret: '',
        token: '',
        token_secret: '',
    });
    var y = yelp.search({ term: 'food', limit: 5, location: 'Montreal' }).then(function(data) {
        cb(null, choose_business(data));
    });
};
