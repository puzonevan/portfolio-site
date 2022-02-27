import { addBlogPost, deleteBlogPost, editBlogPost } from "./list.js";
const addPost = document.getElementById('add-post');
const dialog = document.getElementById('blog');
const confirm = document.getElementById('confirm');
const list = document.getElementById('blog-posts');

const dialogDelete = document.getElementById('blog-delete');
const confirmDelete = document.getElementById('confirm-delete');

const dialogEdit = document.getElementById('blog-edit');
const confirmEdit = document.getElementById('confirm-edit');
const editTitle = document.getElementById('title-edit');
const editDate = document.getElementById('date-edit');
const editSum = document.getElementById('summary-edit');

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
        currentPost = e.target.parentElement.parentElement.parentElement;
        currentTitle = currentPost.children[0].innerHTML;
        currentDate = currentPost.children[1].innerHTML;
        currentSummary = currentPost.children[2].children[0].innerHTML;
        
        editTitle.value = currentTitle;
        editDate.value = currentDate;
        editSum.value = currentSummary;

        dialogEdit.showModal();
    }
});

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

confirmDelete.addEventListener('click', () => {
    deleteBlogPost(currentPost, currentTitle, currentDate, currentSummary);
});

confirmEdit.addEventListener('click', () => {
    editBlogPost(currentPost, editTitle.value, editDate.value, editSum.value);
})



