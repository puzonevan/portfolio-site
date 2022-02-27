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
    let oldTitle = post.children[0].innerHTML;
    let oldDate = post.children[1].innerHTML;
    let oldSum = post.children[2].children[0].innerHTML;

    post.children[0].innerHTML = title;
    post.children[1].innerHTML = date;
    post.children[2].children[0].innerHTML = summary;

    let posts = JSON.parse(blogStorage.getItem('posts') || "[]");
    posts.forEach(post => {
        if(post.title == oldTitle && post.date == oldDate && post.summary == oldSum){
            post.title =  title;
            post.date = date;
            post.summary = summary;
        }
    });
    blogStorage.setItem('posts', JSON.stringify(posts));
    console.log(JSON.parse(blogStorage.getItem('posts')));
}

function addBlogPost(title, date, summary) {
    const post = document.createElement("li");
    post.setAttribute("class", "post");
    const titlePost = document.createElement("h2");
    titlePost.innerHTML = title;
    titlePost.setAttribute("class", "post-title");
    const datePost = document.createElement("h3");
    datePost.innerHTML = date;
    datePost.setAttribute("class", "post-date");

    post.appendChild(titlePost);
    post.appendChild(datePost);
    
    const sumList = document.createElement("div");
    const sum = document.createElement("p");
    sum.setAttribute("class", "post-summary");
    const options = document.createElement("div");
    options.setAttribute("class", "options");
    const deletePost = document.createElement("p");
    const editPost = document.createElement("p");

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