// Sample trending courses data
const trendingCourses = [
    {
        title: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript, the most popular programming language.",
        image: "jsimg.png"
    },
    {
        title: "Advanced CSS Techniques",
        description: "Master CSS and create stunning, responsive websites.",
        image: "cssimg.jpeg"
    },
    {
        title: "Full Stack Web Development",
        description: "Become a full-stack web developer with this comprehensive course.",
        image: "fullimg.jpeg"
    }
];

let currentIndex = 0;

// Function to display a trending course
function displayTrendingCourse() {
    const courseBox = document.getElementById('trendingCourseBox');
    const course = trendingCourses[currentIndex];
    
    courseBox.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <button class="cta-button">Learn More</button>
    `;
    
    currentIndex = (currentIndex + 1) % trendingCourses.length;
}

// Change trending course every 5 seconds
setInterval(displayTrendingCourse, 5000);

// Initial display
window.onload = displayTrendingCourse;

