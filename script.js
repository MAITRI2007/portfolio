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


const projects = [

    {
        title: "Pre-Delinquency Engine",
        image: "ChatGPT Image May 30, 2026, 10_17_42 PM.png",
        problem: "Predictive system identifying loan default risk.",
        tech: "HTML CSS JS",
        demo: "TECH SQUAD(pre delinquency) - Made with RecordCast.mp4",
        github: "#"
    },

    {
        title: "WishLane",
        image: "YOUR_WISHLANE_IMAGE.png",
        problem: "A personalized platform for creating, scheduling, and delivering wishes and messages for meaningful moments.",
        tech: "HTML CSS JS Supabase",
        demo: "#",
        github: "#"
    },

    {
        title: "Real Time Weather",
        image: "Screenshot (639).png",
        problem: "A weather dashboard that displays real-time weather data using API integration.",
        tech: "React CSS API",
        demo: "#",
        github: "#"
    }

];


let current = 0;


function showProject(index) {

    document.getElementById("projectImg").src =
        projects[index].image;

    document.getElementById("title").textContent =
        projects[index].title;

    document.getElementById("problem").textContent =
        projects[index].problem;

    document.getElementById("tech").textContent =
        projects[index].tech;

    document.getElementById("demo").href =
        projects[index].demo;

    document.getElementById("github").href =
        projects[index].github;

    document.getElementById("counter").textContent =
        `${index + 1} / ${projects.length}`;
}


function nextSlide() {

    current = (current + 1) % projects.length;

    showProject(current);

}


function prevSlide() {

    current = (current - 1 + projects.length) % projects.length;

    showProject(current);

}


showProject(0);
