let columns = document.querySelectorAll(".taskcolum");
let tasks = document.querySelectorAll(".task");
let draggedval = null;

tasks.forEach(evv => {
    evv.addEventListener("drag",()=>{
        draggedval = evv;
    })
})

columns.forEach(function(column){
    column.addEventListener("dragenter", function(){
        this.classList.add("hover");
    })
    column.addEventListener("dragover", function(e){
        e.preventDefault();
        console.log(e)
    })
    column.addEventListener("dragleave", function(){
        this.classList.remove("hover");
    })
    column.addEventListener("drop", function(e){
        e.preventDefault();
        column.appendChild(draggedval);
        this.classList.remove("hover");



        
    })
})