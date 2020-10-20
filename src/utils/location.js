//const chalk = require('chalk')
const request = require('request')

const location = (address, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=d3cc2b169c3e4bdf93d60535201710&q='+address

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                ti : 'Local time is: ' +body.location.localtime,
                location: body.location.name+','+body.location.region+','+body.location.country,
                temp: 'Temp is: '+body.current.temp_c,
                condition : 'Recent Weather is:' +body.current.condition.text
            })
        }
    })
}

module.exports = location