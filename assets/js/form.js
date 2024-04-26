const nameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitInput = document.querySelector('#submit');


// adds a new blog post to an array in local storage
function storeBlog() {
    let storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (storedBlogs == null) {
        storedBlogs = [];
    }

    const newBlog = {
        username: nameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };

    storedBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
}

// takes the inputs, ensuring the inputs are valid
submitInput.addEventListener('click', function (event) {
    if (nameInput.value.trim() == "") {
        alert("Who are you? Please, input a username!");
        event.preventDefault();

    } else if (titleInput.value.trim() == "") {
        alert("What's this blog about? Please, include a title!");
        event.preventDefault();

    } else if (contentInput.value.trim() == "") {
        alert("This blog needs some substance... Please, include some content!");
        event.preventDefault();

    } else {
        storeBlog();
    }
});