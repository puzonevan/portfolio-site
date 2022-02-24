
const dialog = document.getElementById('scooby');
const dialog2 = document.getElementById('doo');
const dialog3 = document.getElementById('do');
const prompt = document.getElementById('prompt-1');
const prompt2 = document.getElementById('prompt-2');
const prompt3 = document.getElementById('prompt-3');

function alert(message){
    dialog.showModal();
    prompt.innerHTML = message;
}

function confirm(){
    dialog2.showModal();
    prompt2.innerHTML = "Do you want to confirm?";
}

function promptFunc() {
    dialog3.showModal();
    prompt3.innerHTML = "What month were you born in?";
}

export {alert, confirm, promptFunc}