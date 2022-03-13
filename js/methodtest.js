// Buttons DOM 
const blogGet = document.getElementById("blog-get");
const blogPost = document.getElementById("blog-post");
const blogPut = document.getElementById("blog-put");
const blogDelete = document.getElementById("blog-delete");

// Form Elements
const articleId = document.getElementById("article-id");
const articleName = document.getElementById("article-name");
const articleBody = document.getElementById("article-body");

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



// Link buttons to methods 
blogGet.addEventListener('click', () => {
    get("https://httpbin.org/get", articleId.value)
        .then(post => console.log(post));
});

blogPost.addEventListener('click', () => {
    const newPost = {
        id: articleId.value,
        title: articleName.value, 
        body: articleBody.value
    }
    
    post("https://httpbin.org/post", newPost)
        .then(post => console.log(post));
});
