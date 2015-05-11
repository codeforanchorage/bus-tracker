require('dotenv').load();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
config.api_key = process.env.API_KEY;
console.log(process.env);
var Handlebars = require('handlebars');
var request = require('request');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'));

 

app.post('/submit', function (req, res) {

  data=req.body;
  console.log(data);
  //tablename is the only value from config that needs to go into the SQL statement
  data.tablename = config.tablename;

  var myRequest = urlTemplate(config) + SQLtemplate(data);
  console.log(myRequest);
  request(myRequest, function (error, response, body) {
    
    if (!error && response.statusCode == 200) {
        res.send({success:true});
    }
  
});



  //res.send(query);


});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

  //Handlebars templating
  var SQL = 'INSERT INTO {{tablename}} (name, description,submittedby,the_geom) VALUES (\'{{name}}\',\'{{description}}\',\'{{submittedby}}\',ST_GeomFromText(\'POINT({{lng}} {{lat}})\', 4326));'

  var SQLtemplate = Handlebars.compile(SQL);

  var baseURL = 'https://{{username}}.cartodb.com/api/v2/sql?api_key={{api_key}}&q=';

  var urlTemplate = Handlebars.compile(baseURL);

 