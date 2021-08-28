const loadQuotes=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuotes(data));
}

const displayQuotes=quote=>{
    let blockQuote=document.getElementById('kanye');
    blockQuote.innerText=quote.quote;
}