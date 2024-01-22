
let count = 0;
let sum = 0
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalCount = document.getElementById("total-count")
let incrementBtn = document.getElementById("increment-btn");
let saveArray = []
console.log(saveEl)

function passIncrement(){
    count += 1
    countEl.textContent = count
};

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    let currentSave = countStr.replace(/[^0-9]/g, '');
    currentSave = parseFloat(currentSave)
    console.log(currentSave)
    saveArray.push(currentSave)
    sum =saveArray.reduce((a, b) => a + b, 0);
    let total = "Total Count: "
    totalCount.textContent = total + sum
    countEl.textContent = 0
    count = 0
};






