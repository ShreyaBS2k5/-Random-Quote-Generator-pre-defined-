const quotes = [
        {quote:"The best way to get started is to quit talking and begin doing", author:"Walt Disney"},
        {quote:"Don't let yesterday take up too much of today", author:"Will Rogers"},
        {quote:"Its not whether you get knocked down,its whether you get up", author:"Vince Lombardi"},
        {quote:"If you are working on something exciting,it will keep you motivated", author:"Steve Jobs"},
        {quote:"Success is not in what you have,but who you are", author:"Bo Bennett"},
        {quote:"Believe you can and you are halfway there", author:"Theodore Roosevelt"},
];
function getRandomColor(){
    const colors=["#f37e19ff"," #5bd249ff"," #579ddfff"," #53297df8"," #e95656ff"," #e4d31bff"]
    return colors[Math.floor(Math.random()*colors.length)];
}

function newquote(){
    let randomIndex=Math.floor(Math.random()*quotes.length);
    let randomQuote=quotes[randomIndex];
    document.getElementById("quote").textContent=`"${randomQuote.quote}"`;
    document.getElementById("author").textContent=`-"${randomQuote.author}"`;
    document.getElementById("quote").style.color=getRandomColor();
    document.body.style.backgroundColor=getRandomColor();

}