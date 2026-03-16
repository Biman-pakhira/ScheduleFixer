let columns = document.querySelectorAll(".taskcolum");
// let tasks = document.querySelectorAll(".task");
let modalelement = document.querySelector("#modalelement");
let newtask = document.querySelector("#newtask");
let cancelbtn = document.querySelector("#cancel");
let draggedval = null;
let input = document.querySelectorAll("input");
let addbtn = document.querySelector("#addbtn");
let right = document.querySelector(".right");
addbtn.addEventListener("click", (e)=>{
    // e.preventDefault();
    let div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `<h2>${input[0].value}</h2>
    <p>${input[1].value}</p>
    <button>Delete</button>`
    columns[0].appendChild(div);
    modalelement.classList.remove("modalelement2")
    div.addEventListener("drag", ()=>{
        draggedval = div;
    })
    input[0].value = '';
    input[1].value = '';
    updateCount();
})

newtask.addEventListener("click",()=>{
    modalelement.classList.add("modalelement2");
});
cancelbtn.addEventListener("click", ()=>{
    modalelement.classList.remove("modalelement2")
})

// tasks.forEach(evv => {
    // evv.addEventListener("drag",()=>{
        // draggedval = evv;
    // })
// })

columns.forEach(function(column){
    column.addEventListener("dragenter", function(){
        this.classList.add("hover");
    })
    column.addEventListener("dragover", function(e){
        e.preventDefault();
        // console.log(e)
    })
    column.addEventListener("dragleave", function(){
        this.classList.remove("hover");
    })
    column.addEventListener("drop", function(e){
        e.preventDefault();
        column.appendChild(draggedval);
        this.classList.remove("hover");
        updateCount();
    })
})

function updateCount() {
    columns.forEach(column => {
        const taskCount = column.querySelectorAll(".task").length;
        const countBadge = column.querySelector(".right");
        if (countBadge) {
            countBadge.textContent = taskCount;
        }
    });
}