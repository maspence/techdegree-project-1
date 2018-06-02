// var sets time interval for quote Change
var quoteChange = window.setInterval(changeQuote, 5000);
// function clicks "loadQuote"
function changeQuote() {
	document.getElementById('loadQuote').click()
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



//array of quotes 
var quotes = [
	{
	quote: "I don’t want to belong to any club that would accept me as one of its members.", 
	source: 'Groucho Marx',
	citation: 'Dunkirk Evening Observer',
	year: '1949',
	tag: 'Funny'
},	
	{
	quote: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
	source: 'J.R.R Tolkien',
	citation: 'The Lord of the Rings',
	year: '1954',
	tag: 'Book, Inspirational'
},
	{
	quote: "Behind every great man is a woman rolling her eyes.",
	source: 'Jim Carrey',
	tag: 'Funny'
},
	{
	quote: 'History will be kind to me for I intend to write it',
	source: 'Winston Churhill',
	tag: 'Arrogant, Insightful'	 
},
	{
	quote: 'To infinity...and beyond!' ,
	source: 'Buzz Lightyear' ,
	citation: 'Toy Story',
	year: '1995',
	tag: 'Inspirational, Movie'
}
];

var htmlMessageOutput = '';
var html = '';
var rgbColor;

// function to recieve random number for random color background
function randomRGB() {
	return Math.floor(Math.random() * 256);
}

// function to create RGB string
function randomColor(){
	var color = 'rgb(';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	color += randomRGB() + ')';
	return color;
}






//function to retrieve quote from array
function getRandomQuote(quote) {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}
 //print random quote to page
function printQuote() {
 let quoteInformation = getRandomQuote()
	htmlMessageOutput = `<p class='quote'>${quoteInformation.quote} </p>`;
	htmlMessageOutput += `<p class='source'>${quoteInformation.source}</p>`;

	// conditonal printing of citation
	if ( quoteInformation.citation !== undefined ) {
		htmlMessageOutput += `<span class='citation'>${quoteInformation.citation}</span>`;
	}
	
	//conditional printing of year 
	if ( quoteInformation.year !== undefined ) {
		htmlMessageOutput += `<span class='year'>${quoteInformation.year}</span>`;

	if ( quoteInformation.tag !== undefined ) {
		htmlMessageOutput += `<span class='tag'>${quoteInformation.tag}</span>`;

	//loops randomColor to make rgb string
	for(let i = 0; i < 3; i += 1){
	rgbColor = randomColor();
	html = `<div class="container" style="background-color" ${rgbColor, rgbColor, rgbColor}></div>`;
}
	//changes background color
	document.body.style.backgroundColor = rgbColor;

	// function prints to index.html file
	document.getElementById('quote-box').innerHTML = htmlMessageOutput;

	
	
	}
}
}





  



