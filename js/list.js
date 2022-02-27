const blogPosts = [];
const list = document.getElementById("blog-posts");


function deleteBlogPost(post, title, date, summary){
    list.removeChild(post);
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



export { addBlogPost, deleteBlogPost, editBlogPost }