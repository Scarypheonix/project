// Toggle navigation menu
const toggleButton = document.getElementById("toggle-menu");
const navList = document.querySelector("nav ul");

toggleButton?.addEventListener("click", () => {
    navList.classList.toggle("show");
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Filter Projects (Optional categories can be added via buttons with data-category attributes)
function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");
    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Lightbox for project images
const modal = document.createElement("div");
modal.id = "lightbox-modal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.8)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "10000";
modal.innerHTML = `<img src="" id="lightbox-img" style="max-width:90%; max-height:90%;" />`;
document.body.appendChild(modal);

document.querySelectorAll("#projects img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
        document.getElementById("lightbox-img").src = img.src;
        modal.style.display = "flex";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Form validation
const form = document.querySelector("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message submitted successfully!");
    form.reset();
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
