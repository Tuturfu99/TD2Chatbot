const patternDict = [{
	pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',
	intent : 'Hello'
	} ,{
	pattern :'\\b(bye|exit)\\b',
	intent : 'Exit'
	},{
	pattern : '\\b(What’s up ?|How are you ?)\\b',
	intent : "I'm fine"
	},{
	pattern : "\\bweather\\sin\\s(?<city>[a-z]+[ a-z]+?)\\b(?<time>tomorrow|today)$",
	intent : "get weather"
	},{
	pattern : "\\bweather\\sin\\s(?<city>[a-z]+[ a-z]+?)",
	intent : "current weather"
	}];
module.exports = patternDict;
