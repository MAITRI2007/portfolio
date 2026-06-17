setTimeout(() => {
    const btn = document.getElementById("enter-btn");
    if (btn) {
        btn.style.opacity = 1;
    }
}, 48000);

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(sec => observer.observe(sec));