let taskTitle = document.querySelector('.task__title');
let taskBody = document.querySelector('.task_descr');
let createTaskButton = document.querySelector('.crate__task_btn');
let createButton = document.querySelector('.add__task');
let cancelButton = document.querySelector('.camcel');
let addTask = document.querySelector('.crate__task');
let cardTitle = document.querySelector('.title');
let bodyText = document.querySelector('.body__text');


let arr = [];


createButton.addEventListener('click', () => {
    createButton.style.display = 'none'
    addTask.style.display = 'block'
})
cancelButton.addEventListener('click', () => {
    addTask.style.display = 'none'
    createButton.style.display = 'block'
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

    arr.forEach(item => {
        outTitle += item.title
        outBody += item.body
    })
    console.log(arr)

    cardTitle.innerHTML = outTitle
    bodyText.innerHTML = outBody
})