// Buttons DOM 
const blogGet = document.getElementById("blog-get");
const blogPost = document.getElementById("blog-post");
const blogPut = document.getElementById("blog-put");
const blogDelete = document.getElementById("blog-delete");

// Form Elements
const articleId = document.getElementById("article-id");
const articleName = document.getElementById("article-name");
const articleBody = document.getElementById("article-body");

// Output 
const response = document.getElementById("response");

// POST, PUT, GET, DELETE methods
async function get(url = "", id) {
    const response = await fetch(`${url}?id=${id}`);
    return response.json();
}

async function post(url = "", data = {}){
    const response = await fetch(`${url}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

async function deletePost(url = "", id){
    const response = await fetch(`${url}?id=${id}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

async function put(url="", data){
    const response = await fetch(`${url}?id=${data.id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

// Link buttons to methods 
blogGet.addEventListener('click', () => {
    get("https://httpbin.org/get", articleId.value)
        .then(post =>{
            createList(post);
        });
});

blogPost.addEventListener('click', () => {
    const newPost = {
        id: articleId.value,
        title: articleName.value, 
        body: articleBody.value
    }
    
    post("https://httpbin.org/post", newPost)
        .then(post =>{
            createList(post);
        });
});

blogDelete.addEventListener('click', () =>{
    deletePost("https://httpbin.org/delete", articleId.value)
        .then(post =>{
            createList(post);
        });
});

blogPut.addEventListener('click', () =>{
    const newPost = {
        id: articleId.value,
        title: articleName.value, 
        body: articleBody.value
    }
    
    put("https://httpbin.org/put", newPost)
        .then(post =>{
            createList(post);
        });
}); 

function createList(post){
    const ultimateList = document.createElement("ul");
    const keys = Object.keys(post);
    console.log(post);
    console.log(keys);

    for(let key of keys){
        let value = document.createElement("li");
        let outputString = `${key}: ${post[key]}`;
        value.innerHTML = outputString;
        ultimateList.appendChild(value);
    }
    response.appendChild(ultimateList);
}