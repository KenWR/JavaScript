const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOTHINGS_KEY = "todoThings"

let todoThings = [];

const savedTodoThings = localStorage.getItem(TODOTHINGS_KEY);

function saveTodoThings(){
    localStorage.setItem(TODOTHINGS_KEY, JSON.stringify(todoThings));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todoThings = todoThings.filter((todoThings) => todoThings.id !== parseInt(li.id));
    saveTodoThings()
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);    
    todoList.appendChild(li);
}

function errorMessage(){
        Swal.fire({
            icon: 'warning',
            title: '이런...!',
            text: '10개 이상의 결심은 조금 힘들지 않을까요?',
            footer: '<a href="https://www.google.com/search?q=cute+puppies&sxsrf=APwXEdc3vi_AQBiUJROl0x615JGgwtO2Hw:1684761484315&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi5vLbOgYn_AhXLpVYBHVUvCkIQ_AUoAXoECAEQAw&cshid=1684761498063120&biw=1004&bih=690&dpr=1.25">여기.. 귀여운 강아지 사진을 보면서 잠시 마음을 가라앉혀봐요</a>',
        })   
}

function handleTodoForm(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        };
        todoThings.push(newTodoObj);
        paintTodo(newTodoObj);
        saveTodoThings();
}

todoForm.addEventListener("submit", handleTodoForm);

if(savedTodoThings){    
    const parsedTodoThings = JSON.parse(savedTodoThings);
    todoThings = parsedTodoThings;
    parsedTodoThings.forEach(paintTodo);
};

function confirm(){
    Swal.fire({
        title: '하루가 끝나서 계획을 리셋 할거에요!',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: '알겠습니다',
        denyButtonText: `잠깐! 확인할게 있어요!`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}


function resetTodoList(event){
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    if(hours === 0 && minutes === 0 && seconds === 0){
        todoThings = [];
        saveTodoThings()
        location.reload();
    }
}

setInterval(resetTodoList, 1000);