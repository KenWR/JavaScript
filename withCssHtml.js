const h1 = document.querySelector("div.resolution:first-child h1");

function resolutionMouseClicked(){   
//    const activeClass = "active";
//    이건 진짜 천재스러운 발상이다.
//    실수를 줄이는 상수를 넣다니...
//    if(h1.classList.contains(activeClass)) {
//     h1.classList.remove(activeClass);
//    } else{
//     h1.classList.add(activeClass);
//    }

    h1.classList.toggle("active");

}

h1.addEventListener("click", resolutionMouseClicked);


