let countEl = document.getElementById("count-el")
let saved = document.getElementById("save-el");
let count =0

function increment(){
    count += 1
    countEl.innerText = count
}

function decrement(){
    count -= 1
    countEl.innerText = count
}

function save(){
    let prev = count + "-"
    // if we use = it removes the previous count so we use +=
    saved.innerText += prev
}

// reset()