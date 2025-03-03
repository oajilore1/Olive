document.addEventListener("DOMContentLoaded", function() {
    const githubUsername = "yourusername"; // Replace with your actual GitHub username
    const container = document.getElementById("github-projects");

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.classList.add("col-md-4");
                repoCard.innerHTML = `
                    <div class="card github-card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description || "No description available."}</p>
                            <a href="${repo.html_url}" target="_blank" class="btn btn-dark">View on GitHub</a>
                        </div>
                    </div>
                `;
                container.appendChild(repoCard);
            });
        })
        .catch(error => console.error("Error fetching GitHub repos:", error));

    // Smooth scrolling for navbar links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});