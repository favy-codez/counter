let countEl = document.getElementById("count-el")
let saved = document.getElementById("save-el");
let count =0

function increment(){
    count += 1
    countEl.innerText = count

    // adding colors so that it changes when count is above 1
    if (count>0){
        countEl.style.color = 'green';
        }
    if (count===0){
            countEl.style.color = 'black';
    }
}

function decrement(){
    count -= 1
    countEl.innerText = count

    if (count<0){
        countEl.style.color = 'red';
        }
    if (count===0){
            countEl.style.color = 'black';
        }
}

function save(){
    let prev = count + "-"
    // if we use = it removes the previous count so we use +=
    saved.textContent += prev
    // so because innerText only shows human readable elements which means it is aware of styling but wont show it
    // in our case we want spaces before and after our - . we change innerText to text content
    countEl.innerText = 0
    // so we want anytime we click save we want to return to 0, but we notice that anytime we continue after it we must 
    // have seen 0, it continues from where it stopped so we set count = 0
    count = 0
}

function reset(){
    // count = 0
    // countEl.innerText = count
    location.reload();

    if (count===0){
        countEl.style.color = 'black';
        }
}