// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// initial object initialization of quotes

var quotes = [
	{ 	"quote":"The mind is everything. What you think you become.",
		"source":"Buddha",
		"citation":"",
		"year":""
	},
	{ 	"quote":"The best time to plant a tree was 20 years ago. The second best time is now.",
		"source":"Chinese Proverb",
		"citation":"",
		"year":"1400"
	},
	{ 	"quote":"I'm your father",
		"source":"Darth Vader",
		"citation":"Star Wars Episode V",
		"year":"1980"
	},
	{ 	"quote":"It's not who i'm underneath, but what i do that defines me.",
		"source":"Christian Bale",
		"citation":"Batman, Batman Begins",
		"year":"2008"
	},
	{ 	"quote":"Your time is limited, so don’t waste it living someone else’s life.",
		"source":"Steve Jobs",
		"citation":"",
		"year":"2005"
	},
	{ 	"quote":"Winning isn’t everything, but wanting to win is.",
		"source":"Vince Lombardi",
		"citation":"",
		"year":""
	}
];

function printQuote() {
	return true;
}

console.log(quotes);

