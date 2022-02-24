import { alert, confirm, promptFunc} from './customdialogs.js';

// Alert click
document.getElementById('alert').addEventListener('click', () =>{
    alert('WOOT WOOT');
});

// Confirm click
document.getElementById('confirm-2').addEventListener('click', () =>{
    confirm();
});

// Prompt click
document.getElementById('prompt').addEventListener('click', () =>{
    promptFunc();
});

