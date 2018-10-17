let PropertiesReader = require('properties-reader');
let properties = PropertiesReader('conf.properties');
let token = properties.get('token');

console.log('token='+token);