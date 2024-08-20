document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    const content = document.getElementById('content');
    const loader = document.getElementById('loader');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const section = this.getAttribute('data-section');
            loadContent(section);
        });
    });

    function loadContent(section) {
        loader.classList.remove('hidden');
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                loader.classList.add('hidden');
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Error loading content. Please try again later.</p>';
                loader.classList.add('hidden');
            });
    }
});
