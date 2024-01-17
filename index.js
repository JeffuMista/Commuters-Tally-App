
let count = 0;
let  countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("increment-btn");
console.log(saveEl)

function passIncrement(){
    count += 1
    countEl.textContent = count
};

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
};






