const quotes = document.querySelector("#quotes");

$.ajax({
    method: "GET",
    url: "https://api.qwer.pw/request/helpful_text",
    data: {
        apikey: "guest"
    },
    success: function(response){
        const quoteApi = JSON.stringify((JSON.parse(response))[1]);
        console.log(JSON.stringify(quoteApi));
        quotes.innerText = quoteApi.substring(11, quoteApi.length-1);
    },
    error: function(error){
        quotes.innerText = "명언 준비중 입니다. 행복한 하루 되세요!"
    }
});