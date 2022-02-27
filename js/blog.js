import { addBlogPost } from "./list.js";
const addPost = document.getElementById('add-post');
const dialog = document.getElementById('blog');
const confirm = document.getElementById('confirm');
const blogPosts = [];


addPost.addEventListener('click', () => {
    dialog.showModal();
});

confirm.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const summary = document.getElementById('summary').value;

    addBlogPost(title, date, summary);
});

