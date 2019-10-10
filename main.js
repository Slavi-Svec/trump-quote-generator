const quotes = [
{
 date: '16/4/15',
 quote: 'If Hillary Clinton cant satisfy her husband what makes her think she can satisfy America.'
},
{
 date : '28/9/17',
 quote: 'I loved my previous life. I had so many things going, This is more work than in my previous life. I thought it would be easier.'
},{
 date: '14/4/11',
 quote: 'I look very much forward to showing my financials, because they are huge.'
}]

const pressBtn = document.querySelector('#pressBtn');
const quoteDate = document.querySelector('#quoteDate');
const quote = document.querySelector('#quote');

pressBtn.addEventListener('click', displayQuote);

function displayQuote () {

    let number = Math.floor(Math.random() * quotes.length);
    quoteDate.innerHTML = quotes[number].date;
    quote.innerHTML=  quotes[number].quote;
}