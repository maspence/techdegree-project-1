// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of quotes 
var quotes = [
	{quote: "I don’t want to belong to any club that would accept me as one of its members.", 
		source: 'Groucho Marx',
			citation: 'Dunkirk Evening Observer',
				year: '1949'
		},	
	{quote: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
	 	source: 'J.R.R Tolkien',
	  		citation: 'The Lord of the Rings',
	  			year: '1954'
	  	},
	{quote: "Behind every great man is a woman rolling her eyes.",
	 	source: 'Jim Carrey'
	  	},
	{quote: 'History will be kind to me for I intend to write it',
		 source: 'Winston Churhill'	 
	  	},
	{quote: 'To infinity...and beyond!' ,
	 	source: 'Buzz Lightyear' ,
	  		citation: 'Toy Story',
	  			year: '1995'
	  	}
];

var htmlMessageOutput = '';

//function to retrieve quote from array
function getRandomQuote(quote) {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomNumber];
	// console.log(randomQuote.quote);
	return randomQuote;
}
 //print random quote to page
function printQuote() {
 quoteInformation = getRandomQuote()
	htmlMessageOutput = "<p class='quote'>" + quoteInformation.quote + "</p>";
	htmlMessageOutput += "<p class='source'>" + quoteInformation.source + "</p>";

	// conditonal printing of citation
	if ( quoteInformation.citation !== undefined ) {
		htmlMessageOutput += "<span class='citation'>" + quoteInformation.citation + "</span>";
	}
	//conditional printing of year 
	if ( quoteInformation.year !== undefined ) {
		htmlMessageOutput += "<span class='year'>" + quoteInformation.year + "</span>";
		document.getElementById('quote-box').innerHTML = htmlMessageOutput;
	}
}


