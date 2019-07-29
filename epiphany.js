// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var message1= '';

var red;
var green;
var blue;
var viewedQuotes =[];

//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,
		tags: "Business"
	},
	
		{
		quote: "Success is most often achieved by those who don't know that failure is inevitable.",
		source: "Coco Chanel",
		citation: "",
		year: "",
		tags: "Fashion"
	},
	{
		quote: "Things work out best for those who make the best of how things work out.",
		source: "John Wooden",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Courage is grace under pressure.",
		source: "Ernest Hemingway",
		citation: "",
		year: "",
		tags: "Literature"
	},
	{
		quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
		source: "Jim Rohn",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
		source: "Albert Einstein",
		citation: "",
		year: "",
		tags: "Science"
	},
	{
		quote: "Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
		source: "Swami Vivekananda",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
		source: "Ellen DeGeneres",
		citation: "",
		year: "",
		tags: "Television"
	},
	{
		quote: "All our dreams can come true if we have the courage to pursue them.",
		source: "Walt Disney",
		citation: "",
		year: "",
		tags: "Animation"
	},
	{
		quote: "It does not matter how slowly you go, so long as you do not stop.",
		source: "Confucius",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Success is walking from failure to failure with no loss of enthusiasm.",
		source: "Winston Churchill",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
		source: "Warren Buffett",
		citation: "",
		year: "",
		tags: "Investment"
	},
	{
		quote: "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.",
		source: "Vaibhav Shah",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
		source: "Charles Darwin",
		citation: "",
		year: "",
		tags: "Science"
	},
	{
		quote: "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart.",
		source:"Helen Keller",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
		source: "Eleanor Roosevelt",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
		source: "Mahatma Gandhi",
		citation: "",
		year: "",
		tags: "peace"
	},
	{
		quote: "The best revenge is massive success.",
		source: "Frank Sinatra",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote:"The difference between winning and losing is most often not quitting.",
		source: "Walt Disney",
		citation: "",
		year: "",
		tags: "Animation"
	},
	{
		quote: "I have not failed. I've just found 10,000 ways that won't work.",
		source: "Thomas Edison",
		citation: "",
		year: "",
		tags: "Science"
	},
	{
		quote: "When you cease to dream you cease to live.",
		source: "Malcolm Forbes",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
		source: "David Brinkley",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "May you live every day of your life.",
		source: "Jonathan Swift",
		citation: "",
		year: "",
		tags: "Literature"
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		source: "Eleanor Roosevelt",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote: "Failure is another steppingstone to greatness.",
		source: "Oprah Winfrey",
		citation: "",
		year: "",
		tags: "Television"
	},
	{
		quote: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
		source: "Henry Ford",
		citation: "",
		year: "",
		tags: "Automobiles"
	},
	{
		quote:"If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
		source: "Jeff Bezos",
		citation: "",
		year: "",
		tags: "Business"
	},
	{
		quote:"If you're going through hell, keep going.",
		source: "Winston Churchill",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote: "In order to be irreplaceable one must always be different.",
		source: "Coco Chanel",
		citation: "",
		year: "",
		tags: "Fashion"
	},
	{
		quote: "What seems to us as bitter trials are often blessings in disguise.",
		source:"Oscar Wilde",
		citation: "",
		year: "",
		tags: "Literature"
	},
	{
		quote:"You miss 100 percent of the shots you don't take.",
		source: "Wayne Gretzky",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote:"The distance between insanity and genius is measured only by success.",
		source: "Bruce Feirstein",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
		source: "Dolly Parton",
		citation: "",
		year: "",
		tags: "Music"
	},
	{
		quote: "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials.",
		source: "Richard Branson",
		citation: "",
		year: "",
		tags: "Business"
	},
	{
		quote: "The longer I live, the more beautiful life becomes.",
		source: "Frank Lloyd Wright",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "That's one small step for man, one giant leap for mankind.",
		source: "Neil Armstrong",
		citation: "The moon",
		year: 1969,
		tags: "Space Travel",
	},
	{
		quote: "It always seems impossible until it is done.",
		source: "Nelson Mandela",
		citation: "",
		year: "1918 - 2013",
		tags: "Politics",
	},
	{
		quote: "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
		source: "Nathaniel Hawthorne",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "You must expect great things of yourself before you can do them.",
		source: "Michael Jordan",
		citation: "",
		year: "",
		tags: "Sports"
	},
	{
		quote: "If you can't explain it simply, you don't understand it well enough.",
		source: "Albert Einstein",
		citation: "",
		year: "",
		tags: "Science"
	},
	{
		quote: "You can't please everyone, and you can't make everyone like you.",
		source: "Katie Couric",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
		source: "Ray Goforth",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
		source: "Neil Armstrong",
		citation: "",
		year: "",
		tags: "Space Travel"
	},
	{
		quote: "Start where you are. Use what you have. Do what you can.",
		source: "Arthur Ashe",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
		source: "Mary Kay Ash",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "People ask, 'What's the best role you've ever played?' The next one.",
		source: "Kevin Kline",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "The two most important days in your life are the day you are born and the day you find out why.",
		source: "Mark Twain",
		citation: "",
		year: "",
		tags: "Literature"
	},
	{
		quote: "I find that the harder I work, the more luck I seem to have.",
		source: "Thomas Jefferson",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "It often requires more courage to dare to do right than to fear to do wrong.",
		source:"Abraham Lincoln",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote: "Success is the sum of small efforts, repeated day-in and day-out.",
		source: "Robert Collier",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
		source:"Audrey Hepburn",
		citation: "",
		year: "",
		tags: "Movies"
	},
	{
		quote: "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
		source: "Thomas J. Watson",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "If your actions inspire others to dream more, learn more, do more, and become more, you are a leader.",
		source: "John Quincy Adams",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "All progress takes place outside the comfort zone.",
		source:"Michael John Bobak",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "The more you praise and celebrate your life, the more there is in life to celebrate.",
		source: "Oprah Winfrey",
		citation: "",
		year: "",
		tags: "Television"
	},
	{
		quote: "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.",
		source: "Philippos",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote:"A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
		source: "Colin Powell",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Only put off until tomorrow what you are willing to die having left undone.",
		source: "Pablo Picasso",
		citation: "",
		year: "",
		tags: "Art"
	},
	{
		quote: "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
		source: "Mark Zuckerberg",
		citation: "",
		year: "",
		tags: "Technology"
	},
	{
		quote:"We become what we think about most of the time, and that's the strangest secret.",
		source: "Earl Nightingale",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote:"Do one thing every day that scares you.",
		source:"Eleanor Roosevelt",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote:"The only place where success comes before work is in the dictionary.",
		source: "Vidal Sassoon",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote:"Don't be afraid to give up the good to go for the great.",
		source:"John D. Rockefeller",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
		source: "Steve Jobs",
		citation: "",
		year: "",
		tags: "Technology"
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955",
		tags: "Science",
	},
	{
		quote: "Don't cry because it's over, smile because it happened.",
		source: "Dr. Seuss",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Success? I don't know what that word means. I'm happy. But success, that goes back to what in somebody's eyes success means. For me, success is inner peace. That's a good day for me.",
		source: "Denzel Washington",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "You only live once, but if you do it right, once is enough.",
		source: "Mae West",
		citation: "",
		year: "",
		tags: "Entertainment"
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
		tags: "Faith",
	},
	{
		quote: "Opportunities don't happen. You create them.",
		source: "Chris Grosser",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Once you choose hope, anything's possible.",
		source: "Christopher Reeve",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Try not to become a person of success, but rather try to become a person of value.",
		source: "Albert Einstein",
		citation: "",
		year: "",
		tags: "Science"
	},
	{
		quote: "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.",
		source: "Nelson Mandela",
		citation: "",
		year: "",
		tags: "Politics"
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005",
		tags: "Business",
	},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message1 ='<p class="quote">' + quotes.quote ;
	message  =message1+ '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}
printQuote();



$("#twitter-button").on("click", function() {
        var tweetMessage =  message1;
        tweetMessage = tweetMessage.slice(17, 157);

        if(tweetMessage.length > 157) {
            alert("Tweet is longer than 140 characters.  It will be truncated.");
            
        }

        var tweetLink = "http://twitter.com/home?status=" + tweetMessage;
        window.open(tweetLink, "_blank");

    });

 $("#tumblr-button").on("click", function() {
        var tumblrMessage = message1.slice(17,517);

        if(tumblrMessage.length > 500) {
            alert("Post is longer than 500 characters.  It will be truncated.");
            
        }

        var tumblrLink = 
			"https://www.tumblr.com/widgets/share/tool?posttype=quote&content="
			+ tumblrMessage + 
			"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
        window.open(tumblrLink, "_blank");
    });

