const blogStorage = window.localStorage;

const list = document.getElementById("blog-posts");

function readBlogPosts(){
    let posts = JSON.parse(blogStorage.getItem('posts') || "[]");

    for(let post of posts){
        addBlogPost(post.title, post.date, post.summary);
    }
}

function deleteBlogPost(post, title, date, summary){
    list.removeChild(post);

    let posts = JSON.parse(blogStorage.getItem('posts') || "[]")
    posts = posts.filter(post => post.title !== title || post.date !== date || post.summary !== summary);
    console.log(posts);
    blogStorage.setItem('posts', JSON.stringify(posts));
}

function editBlogPost(post, title, date, summary) {
    post.children[0].innerHTML = title;
    post.children[1].innerHTML = date;
    post.children[2].children[0].innerHTML = summary;
}

function addBlogPost(title, date, summary) {
    const post = document.createElement("li");
    const titlePost = document.createElement("span");
    titlePost.innerHTML = title;
    const datePost = document.createElement("span");
    datePost.innerHTML = date;

    post.appendChild(titlePost);
    post.appendChild(datePost);
    
    const sumList = document.createElement("ul");
    const sum = document.createElement("li");
    const options = document.createElement("li");
    const deletePost = document.createElement("span");
    const editPost = document.createElement("span");

    deletePost.innerHTML = "delete ";
    editPost.innerHTML = "| edit";
    options.appendChild(deletePost);
    options.appendChild(editPost);
    deletePost.setAttribute("class", "delete");
    editPost.setAttribute("class", "edit");

    sum.innerHTML = summary;
    sumList.appendChild(sum);
    sumList.appendChild(options);
    post.appendChild(sumList);

    list.appendChild(post);
    
}

function addBlogStorage(title, date, summary){
    let posts = JSON.parse(blogStorage.getItem('posts') || "[]");
    const newPost = {
        title: title, 
        date: date, 
        summary: summary
    }
    posts.push(newPost);
    blogStorage.setItem('posts', JSON.stringify(posts));
    
    console.log(JSON.parse(blogStorage.getItem('posts')));
}


export { addBlogPost, deleteBlogPost, editBlogPost, readBlogPosts, addBlogStorage}