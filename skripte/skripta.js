$(document).ready(function(){

    const apiUrl = "https://api.adviceslip.com/advice";
    const quoteId = document.querySelector(".p1");
    const quote = document.querySelector(".p2");

    async function newQuote(){

        const response = await fetch(apiUrl);
        var data = await response.json();

        quoteId.innerHTML = "Advice #" + data.slip.id;
        quote.innerHTML = data.slip.advice;
    }

    newQuote();

    $(".d2").click(function(){
        newQuote();
    });

});