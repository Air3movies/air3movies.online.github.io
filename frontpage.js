document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const input = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    const commentsScroll = document.getElementById('comments-scroll');

    // Helper function to load comments from localStorage
    function loadComments() {
        const savedComments = JSON.parse(localStorage.getItem('comments'));
        const savedTimestamp = localStorage.getItem('comments-timestamp');
        
        const oneMonth = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        const currentTime = new Date().getTime();

        if (savedComments && savedTimestamp && (currentTime - savedTimestamp < oneMonth)) {
            savedComments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment;
                commentsList.appendChild(li);
            });
        } else {
            // Clear comments if older than one month
            localStorage.removeItem('comments');
            localStorage.removeItem('comments-timestamp');
        }
    }

    // Helper function to save comments to localStorage
    function saveComments() {
        const comments = Array.from(commentsList.children).map(li => li.textContent);
        localStorage.setItem('comments', JSON.stringify(comments));
        localStorage.setItem('comments-timestamp', new Date().getTime()); // Save current timestamp
    }

    // Load comments when the page loads
    loadComments();

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const commentText = input.value.trim();
        if (commentText) {
            const li = document.createElement('li');
            li.textContent = commentText;
            commentsList.appendChild(li);
            input.value = ''; // Clear the input field

            // Save updated comments to localStorage
            saveComments();

            // Ensure the scroll is enabled once there are more than 3 comments
            if (commentsList.children.length > 3) {
                commentsScroll.style.overflowY = 'auto'; // Show scrollbar
            } else {
                commentsScroll.style.overflowY = 'hidden'; // Hide scrollbar
            }
        }
    });
});
