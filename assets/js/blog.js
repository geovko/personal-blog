const rootEl = document.getElementById('root');
const clearAll = document.querySelector('#clearAll');
let storedBlogs = JSON.parse(localStorage.getItem('blogs'));

// Clears all blogs stored in local storage and refreshes the page
clearAll.addEventListener('click', function () {
    if (confirm('The current list of blogs will be deleted. Do you wish to continue?')) {
        storedBlogs = [];
        localStorage.setItem('blogs', JSON.stringify(storedBlogs));
        location.reload();
    }
});

function displayBlogs() {
    if (storedBlogs != null) {
        for (i = 0; i < storedBlogs.length; i++) {
            const singleBlog = document.createElement('div');
            rootEl.append(singleBlog);

            const titleEl = document.createElement('h2');
            titleEl.textContent = storedBlogs[i].title;
            singleBlog.append(titleEl);

            const contentEl = document.createElement('p');
            contentEl.textContent = storedBlogs[i].content;
            singleBlog.append(contentEl);

            const usernameEl = document.createElement('h4');
            usernameEl.textContent = `Posted by: ${storedBlogs[i].username}`;
            singleBlog.append(usernameEl);
        }
    }
}

displayBlogs();