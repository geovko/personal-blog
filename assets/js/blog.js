const rootEl = document.getElementById('main');
const clearOne = document.querySelector('#clearOne');
const clearAll = document.querySelector('#clearAll');
let storedBlogs = JSON.parse(localStorage.getItem('blogs'));

// Clears a single blog Post
clearOne.addEventListener('click', function () {
    let blogIndex = -1;
    let isDone = false;

    while (!isDone) {
        blogIndex = (prompt('Please, enter the number of the blog post you wish to remove.') - 1);    
        
        if (blogIndex == null || blogIndex == -1) {
            isDone = true;
            return;
        }

        if (Number.isNaN(blogIndex)) {
            if (!confirm('That was not a valid number. Do you wish to continue?')) {
                isDone = true;
            }
        } else {
            storedBlogs.splice((blogIndex), 1);
            localStorage.setItem('blogs', JSON.stringify(storedBlogs));
            location.reload();
            isDone = true;
        }
    }
});

// Clears all blogs stored in local storage and refreshes the page
clearAll.addEventListener('click', function () {
    if (confirm('The current list of blogs will be deleted. Do you wish to continue?')) {
        storedBlogs = [];
        localStorage.setItem('blogs', JSON.stringify(storedBlogs));
        location.reload();
    }
});

// Dynamically creates the stored blog posts
function displayBlogs() {
    if (storedBlogs.length == 0) {
        const note = document.createElement('p');
        note.textContent = "There are currently no blog posts to view.";
        rootEl.append(note);
    } else if (storedBlogs != null) {             
        for (i = 0; i < storedBlogs.length; i++) {
            const singleBlog = document.createElement('div');
            singleBlog.classList.add('box');
            rootEl.append(singleBlog);

            const titleEl = document.createElement('h2');
            titleEl.textContent = `#${i + 1}: ${storedBlogs[i].title}`;
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