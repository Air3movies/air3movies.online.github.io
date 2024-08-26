document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const input = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    const commentsScroll = document.getElementById('comments-scroll');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const commentText = input.value.trim();
        if (commentText) {
            const li = document.createElement('li');
            li.textContent = commentText;
            commentsList.appendChild(li);
            input.value = ''; // Clear the input field

            // Ensure the scroll is enabled once there are more than 3 comments
            if (commentsList.children.length > 3) {
                commentsScroll.style.overflowY = 'auto'; // Show scrollbar
            } else {
                commentsScroll.style.overflowY = 'hidden'; // Hide scrollbar
            }
        }
    });
});
