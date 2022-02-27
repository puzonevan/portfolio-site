
const list = document.getElementById("blog-posts");

function addBlogPost(title, date, summary) {
    const post = document.createElement("li");
    post.innerHTML = `${title} | ${date}`;
    const sumList = document.createElement("ul");
    const sum = document.createElement("li");
    sum.innerHTML = summary;
    sumList.appendChild(sum);
    post.appendChild(sumList);
    list.appendChild(post);
}

export { addBlogPost }