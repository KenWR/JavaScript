const quotes = document.querySelector("#quotes");
const word = quotes.querySelector("#word");


$.ajax({
    method: "GET",
    url: "https://api.qwer.pw/request/helpful_text",
    data: {
        apikey: "guest"
    },
    success: function(response){
        const quoteApi = JSON.stringify((JSON.parse(response))[1]);
        const quote = quoteApi.substring(12, quoteApi.length-2);
        word.innerText = quote;
    },
    error: function(error){
        quotes.innerText = "명언 준비중 입니다. 행복한 하루 되세요!"
    }
});