# cartodb-crowdmap
A Simple node app to allow multiple users to submit a marker to a cartodb map.

Check it out live at [http://cartocrowd.herokuapp.com](http://cartocrowd.herokuapp.com)

## How to Use

Clone this repository

`git clone https://github.com/chriswhong/cartodb-crowdmap.git`

Install dependencies

`npm install`

Enter your cartodb username and tablename in config.js

`var config = {}

config.username = 'chriswhong';
config.tablename = 'cartocrowd';

module.exports = config;`

