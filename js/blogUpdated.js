import { database } from "./database.js";
import { ref, onValue} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"

const blogSection = document.getElementById("personas");
const foodPost = ref(database, 'posts');


// Read Posts
onValue(foodPost, (snapshot) => {
        const data = snapshot.val();
        while(blogSection.firstChild){
            blogSection.removeChild(blogSection.firstChild);
        }
        const header = document.createElement("h2");
        header.innerHTML = "All About Food";
        blogSection.appendChild(header);
        data.forEach(post => createBlogPost(post));
});




function createBlogPost(data){
    const post = document.createElement("section");
    const title = document.createElement("h3");
    const date = document.createElement("h4");
    const body = document.createElement("p");

    title.innerHTML = data.title;
    date.innerHTML = data.date;
    body.innerHTML = data.body;

    post.appendChild(title);
    post.appendChild(date);
    post.appendChild(body);
    post.style.backgroundColor = "#24305E";

    blogSection.appendChild(post);
}