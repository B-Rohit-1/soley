document.getElementById('get-review-button').addEventListener('click', function() {
    // Got the content from the review textarea
    var reviewContent = document.getElementById('review-text').value;

    // Created a Blob containing the review content
    var blob = new Blob([reviewContent], { type: 'text/plain' });

    // Create a temporary anchor element to trigger the download
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'review.txt';

    // Trigger the click event on the anchor element to download the file
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();

    // Clean up by removing the temporary anchor element
    document.body.removeChild(a);
});
