# cartodb-crowdmap
A Simple node app to allow multiple users to submit a marker to a cartodb map.

Check it out live at [http://cartocrowd.herokuapp.com](http://cartocrowd.herokuapp.com)

## How to Use

Clone this repository

`git clone https://github.com/chriswhong/cartodb-crowdmap.git`

Install dependencies

`npm install`

Enter your cartodb username and tablename in config.js

Enter your API key in .env (or otherwise create an environment variable called API_KEY)

Make sure the column names in your table line up with the fields in your form.

##TODO

- POST data in valid geoJSON
- Add line and polygon support
- Add captcha
- Add form validation
