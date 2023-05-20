const clock = document.querySelector("h2#clock");
console.dir(clock);
function getClock(){
    const date = new Date();
    // const hour = date.getHours().toString().padStart(2, "0");
    // const minutes = date.getMinutes().toString().padStart(2, "0");
    // const seconds = date.getSeconds().toString().padStart(2, "0");


    // clock.innerText = hour+':'+minutes+':'+seconds;
    clock.innerText = new Date().toLocaleTimeString();
}

getClock();
//바로 실행될수 있도록 일단 넣기
setInterval(getClock, 1000);