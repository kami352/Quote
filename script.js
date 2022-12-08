const quotes = [
    {
        name:'Imam shafi',
        quote:'Dua made at Tahajjud is like an arrow which dose not miss target.'
    },
    {
        name:'Hazrat umar ibn Al-khattab',
        quote:'seek knowledge and along with it dignity,tranquility and humility'
    },
    {
        name:'Imam Ali', 
        quote:'Knowledge needs action'
    },
    {
        name:'DR. Bilal philips',
        quote:'The best cure for worry is to surrender it all to allah'
    },
    {
        name:'Hamza yusuf',
        quote:'All of the people are the dependents of allah'
    }



]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}
