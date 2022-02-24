const output = document.getElementById('output');

// Alert click
document.getElementById('alert').addEventListener('click', () =>{
    window.alert('The alert button was clicked');
});

// Confirm click
document.getElementById('confirm').addEventListener('click', () =>{
    let result = window.confirm("Are you sure?");
    output.innerHTML = `The value returned by the confirm method is: ${result}`;
});

// Prompt click
document.getElementById('prompt').addEventListener('click', () =>{
    let result = window.prompt('What month were you born in?', undefined);
    output.innerHTML = result === "" ? "User entered nothing" : `You were born in: ${result}`;
});

// Safe Prompt click
document.getElementById('safe-prompt').addEventListener('click', () =>{
    let result = DOMPurify.sanitize(window.prompt('What month were you born in?', undefined));
    output.innerHTML = result === "" ? "User entered nothing" : `You were born in: ${result}`;
});