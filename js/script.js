// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of quotes 
var quotes = [
	{quote:'I refuse to join any club that would have me as a member.', 
		person: 'Groucho Marx',
			citation:
		}	
	{quote:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
	 	person: 'J.R.R Tolkien',
	  		citation: 'The Lord of the Rings'
	  	}
	{quote:"Behind every great man is a woman rolling her eyes.",
	 	person: 'Jim Carrey',
	  		citation:
	  	}
	{quote: 'History will be kind to me for I intend to write it',
		 person: 'Winston Churhill' ,
	  		citation:
	  	}
	{quote: 'To infinity and beyond!' ,
	 	person: 'Buzz Lightyear' ,
	  		citation: 'Toy Story'
	  	}
];
