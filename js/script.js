// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of quotes 
var quotes = [
	{quote:"I don’t want to belong to any club that would accept me as one of its members.", 
		person: 'Groucho Marx',
			citation: 'Dunkirk Evening Observer',
				year: '1949'
		},	
	{quote:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
	 	person: 'J.R.R Tolkien',
	  		citation: 'The Lord of the Rings',
	  			year: '1954'
	  	},
	{quote:"Behind every great man is a woman rolling her eyes.",
	 	person: 'Jim Carrey',
	  	},
	{quote: 'History will be kind to me for I intend to write it',
		 person: 'Winston Churhill' ,
	  	},
	{quote: 'To infinity...and beyond!' ,
	 	person: 'Buzz Lightyear' ,
	  		citation: 'Toy Story',
	  			year: '1995'
	  	}
];



//function to retrieve quote from array
function getRandomQuote() {

}
 //print random quote to page
function printQuote() {

}