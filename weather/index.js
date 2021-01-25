"use strict";
const axios = require("axios");
const apikey = '5378ed125e8fb2033d114fda60f1d7b8';

const getWeather = location => {
		return new Promise(async (resolve, reject) => {
			try{
				const weatherConditions = await axios.get(
					'api.openweathermap.org/data/2.5/weather?',
				{
					params: {
						q: location,
						appid:apikey
					}
				});

				resolve(weatherConditions.data)
			}
			catch(error){
				reject(error);
			}
		})
}

module.exports= getWeather;
