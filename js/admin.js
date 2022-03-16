import { database } from "./database.js";
import { ref, onValue, set, remove, get} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"

const blogSection = document.getElementById("posts");
const foodPost = ref(database, 'posts');
let currentEdit;

document.getElementById("add-post").addEventListener("click", () => {
    addPost(document.getElementById("article-name").value, document.getElementById("article-body").value)
});

document.getElementById('posts').addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete')){
        deletePost(e.target.parentElement.children[0].innerHTML, e.target.parentElement.children[4].innerHTML);
    }else if(e.target.classList.contains('edit')){
        currentEdit = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);
        showEditModal(e.target.parentElement.children[0].innerHTML, e.target.parentElement.children[4].innerHTML)
    }
});

// Edit Posts 
function showEditModal(title, body){
    document.getElementById('title-edit').value = title;
    document.getElementById('summary-edit').value = body;
    document.getElementById('post-edit').showModal();
}
document.getElementById('confirm-edit').addEventListener('click', () =>{
    const newPost = {
        title: document.getElementById('title-edit').value, 
        body: document.getElementById('summary-edit').value, 
        date: new Date().toDateString()
    }
    get(ref(database, 'posts/'))
      .then((snapshot) => {
          if(snapshot.exists()){
              const snap = snapshot.val();
              snap[currentEdit] = newPost
              set(ref(database, 'posts/'), snap);
          }
      });
})

// Write Posts
function addPost(title, body) { 
    const newPost = {
        title: title, 
        body: body, 
        date: new Date().toDateString()
    }
    get(ref(database, 'posts/'))
      .then((snapshot) => {
          if(snapshot.exists()){
              const snap = snapshot.val();
              snap.push(newPost);
              set(ref(database, 'posts/'), snap);
          }
          else{
              const newPostToAdd = {
                  'posts': [
                    newPost
                  ]
              }
              set(ref(database, '/'), newPostToAdd);
          }
      });
}

// Delete Post
function deletePost(title, body){
    get(ref(database, 'posts/'))
      .then((snapshot) => {
          if(snapshot.exists()){
              const snap = snapshot.val();
              const updated = snap.filter(post => post.title !== title || post.body !== body);
              set(ref(database, 'posts/'), updated);
          }
      })
}

// Read Posts
onValue(foodPost, (snapshot) => {
        const current = snapshot.val();
        while(blogSection.firstChild){
            blogSection.removeChild(blogSection.firstChild);
        }
        if(current && current.length > 0){
            current.forEach(post => createArticle(post));
        }
});

function createArticle(data){
    const post = document.createElement("article");
    const deletePost = document.createElement("p");
    const editPost = document.createElement("p");
    const title = document.createElement("h3");
    const date = document.createElement("h4");
    const body = document.createElement("p");

    title.innerHTML = data.title;
    date.innerHTML = data.date;
    body.innerHTML = data.body;

    post.appendChild(title);
    post.appendChild(editPost);
    post.appendChild(deletePost);
    post.appendChild(date);
    post.appendChild(body);

    deletePost.setAttribute("class", "delete");
    editPost.setAttribute("class", "edit");

    blogSection.appendChild(post);
}