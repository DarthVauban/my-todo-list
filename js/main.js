let taskTitle = document.querySelector('.task__title');
let taskBody = document.querySelector('.task_descr');
let createTaskButton = document.querySelector('.crate__task_btn');
let addTask = document.querySelector('.add__task');
let cancelButton = document.querySelector('.camcel');
let createTask = document.querySelector('.crate__task');
let cards = document.querySelector('.cards')


let arr = [];


addTask.addEventListener('click', () => {
    addTask.style.display = 'none'
    createTask.style.display = 'block' 
})
cancelButton.addEventListener('click', () => {
    createTask.style.display = 'none' 
    addTask.style.display = 'block'
})



createTaskButton.addEventListener('click', () => {
    let title = taskTitle.value;
    let body = taskBody.value
    let outTitle = '';
    let outBody = '';
    
    let obj = {
        id: arr.length + 1,
        title,
        body,
    };
    arr.push(obj)

    cards.innerHTML += cardHTML(obj.title, obj.body);

    console.log(arr)


    taskTitle.value = '';
    taskBody.value = '';
})


function cardHTML(title, body) {
    return ` <div class="card__item">
                    <div class="card__header">
                        <p class="title">${title}</p>
                        <div class="header__buttons">
                            <button class="action__button done"><img src="./img/done.svg" alt=""></button>
                            <button class="action__button delete"><img src="./img/delete.svg" alt=""></button>
                        </div>
                    </div>
                    <div class="card__body">
                        <p class="body__text">${body}</p>
                    </div>
                </div>`
    }