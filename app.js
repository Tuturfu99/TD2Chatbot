'use strict ';

const Readline = require('readline') ; // for readinginputs
const rl = Readline.createInterface({ // for reading inputs
	input : process.stdin ,
	output : process.stdout ,
	terminal : false
})
const weather = require ("./weather")
const matcher = require ('./matcher');//To use the model matcher here
var run = true;
rl.setPrompt('>');
rl.prompt();
rl.on('line', reply => {
	matcher (reply, cb => {
		while (run){
			switch(cb.intent){
				case "Hello":
					console.log(`${cb.entities.greeting}`+' bg');
					break;
				case "I'm fine":
					console.log("I m fine thank you");
					break;
				case "get weather":
					console.log('It is sunny '+`${cb.entities.time}`+' in '+`${cb.entities.city}`);
					break;
				case "current weather":
					weather(cb.entities.city)
					console.log('It is currently raining in '+`${cb.entities.city}`);
					break;
				case "No match":
					console.log("Je n'ai pas compris votre demande, veuillez recommencez");
					break;
				case "Exit":
					console.log('Have a good day! ');
					process.exit();
			}
			console.log('Je vous écoute :')
			break;
		}
		
	});
});