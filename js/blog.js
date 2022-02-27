import { addBlogPost, deleteBlogPost } from "./list.js";
const addPost = document.getElementById('add-post');
const dialog = document.getElementById('blog');
const confirm = document.getElementById('confirm');
const list = document.getElementById('blog-posts');

const dialogDelete = document.getElementById('blog-delete');
const confirmDelete = document.getElementById('confirm-delete');

let currentPost;
let currentTitle;
let currentDate;
let currentSummary;

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        currentPost = e.target.parentElement.parentElement.parentElement;
        currentTitle = currentPost.children[0].innerHTML;
        currentDate = currentPost.children[1].innerHTML;
        currentSummary = currentPost.children[2].children[0].innerHTML;
        dialogDelete.showModal();
    }else if(e.target.classList.contains('edit')){
        console.log('edit');
    }
});

confirmDelete.addEventListener('click', () => {
    deleteBlogPost(currentPost, currentTitle, currentDate, currentSummary);
})


addPost.addEventListener('click', () => {
    dialog.showModal();
});

confirm.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const summary = document.getElementById('summary').value;
    if(title != "" && date != "" && summary != ""){
        addBlogPost(title, date, summary);
    }
});



