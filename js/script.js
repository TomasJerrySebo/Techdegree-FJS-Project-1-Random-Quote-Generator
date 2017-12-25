// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuoteAuto').addEventListener("click", quoteAutoChange, false);

// initialize the intervalID variable for the setInterval function
var intervalID = 0;

// initialize the quote object
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

// function to generate a random  HEX number for changing the backround color
function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF); // generating a number between 
  return "#" + ("000000" + hex.toString(16)).substr(-6); // hexidecimal conversion and cutting off the 6 "0000000" at the beginning
}

// generating a random index for the quotes object by generating a integer between 0 and the length of the object
function getRandomQuote(){
	var quoteIndex =  Math.floor(Math.random() * quotes.length);
	return quotes[quoteIndex];
}

// function to start automatically swapping the quotes
function quoteAutoChange() {
	// stop or start the interval swap
 	if(intervalID > 0) {  clearInterval(intervalID); intervalID = 0; alert("Auto swap disabled.")}
 	else {
 		// change quote asap as the button is clicked for starting the autoswap
		printQuote();
		// start the atomatic quote change every 5 seconds
		 intervalID = setInterval(function(){
			document.getElementById('loadQuote').click();
		},5000);
	}
}

// creating the quote string and passing it to the specified element and changing the backround color of the body element
function printQuote() {
	// changer the backround color 
	document.body.style.backgroundColor = getRandomColor();
	// call function to generate random quote
	var randomQuote = getRandomQuote(quotes);
	// construction the quote string
	var quote = '<p class="quote">'+randomQuote.quote+'</p>';
	quote += '<p class="source">'+randomQuote.source;
	// only adding the citation if not empty
	quote += (randomQuote.citation.length > 0) ? '<span class="citation">'+randomQuote.citation+'</span>' : '';
	// only adding the year if not empty
	quote += (randomQuote.year.length > 0) ? '<span class="year">'+randomQuote.year+'</span>' : '';
	quote += '</p>';
	// appending the string to the inner html of the targeted element
	document.getElementById('quote-box').innerHTML = quote;
}





