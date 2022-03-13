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

// function createList(post){
//     const ultimateList = document.createElement("ul");
//     const keys = Object.keys(post);
//     console.log(post);

//     for(let key of keys){
//         let value = document.createElement("li");
//         let outputString;
//         if(typeof post[key] == "object"){
//             const extraList = createListHelper(post[key])
//             value.innerHTML = `${key}`;
//             value.appendChild(extraList);
//             ultimateList.appendChild(value);
//         }else{
//             outputString = `${key}: ${post[key]}`;
//             value.innerHTML = outputString;
//             ultimateList.appendChild(value);
//         }
        
//     }
//     response.appendChild(ultimateList);
// }

// function createListHelper(post){
//     const ultimateList = document.createElement("ul");
//     const keys = Object.keys(post);

//     for(let key of keys){
//         let value = document.createElement("li");
//         let outputString = `${key}: ${post[key]}`;
//         value.innerHTML = outputString;
//         ultimateList.appendChild(value);
//     }

//     return ultimateList;
// }

function createList(post){
    const bigList = document.createElement("ul");
    // console.log(post);
    createListHelper(bigList, post);
    console.log(bigList);

    while(response.firstChild){
        response.removeChild(response.firstChild);
    }
    response.appendChild(bigList);
}

function createListHelper(list, post){
    console.log(post);
    if(Object.keys(post) == 0){
        return "";
    }else{
        for(let i = 0; i < Object.keys(post).length; i++){
            const li = document.createElement("li");
            if(post[Object.keys(post)[i]] == null || post[Object.keys(post)[i]] == undefined){
                li.innerHTML = `${Object.keys(post)[i]} :`;
                list.appendChild(li);
                continue;
            }
            if(typeof(post[Object.keys(post)[i]]) == 'object'){
                li.innerHTML = Object.keys(post)[i];
                const newList = document.createElement("ul");
                li.appendChild(newList);
                list.appendChild(li);
                createListHelper(newList, post[Object.keys(post)[i]]);
            }
            else{
                li.innerHTML = `${Object.keys(post)[i]} : ${post[Object.keys(post)[i]]}`;
                list.appendChild(li);
            }
        }
    }
}