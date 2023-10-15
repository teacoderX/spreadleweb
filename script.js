window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const themeToggle = document.getElementById('themeToggle');
    header.classList.toggle("sticky", window.scrollY > 0);
    themeToggle.classList.toggle("sticky", window.scrollY > 0);
});
// Define an array of texts for dynamic exchange
// Define an array of texts for dynamic exchange
const dynamicTexts = ["Tech", "Music", "Sports", "Fitness", "."]; // Add more texts as needed
const classPrefix = "color"; // Prefix for color classes
let currentIndex = 0;

function changeDynamicMusicText() {
    const dynamicTextElement = document.getElementById("dynamicText2");
    dynamicTextElement.textContent = dynamicTexts[currentIndex];

    // Change the class to control the text color
    dynamicTextElement.className = `${classPrefix}${(currentIndex % 4) + 1}`;

    currentIndex = (currentIndex + 1) % dynamicTexts.length; // Cycle through the texts
}

// Call the function to change the dynamic text
changeDynamicMusicText();

// You can also use setInterval to change the text at regular intervals
setInterval(changeDynamicMusicText, 2000); // Change text every 2 seconds (2000 milliseconds)




let isDarkMode = true;
themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        var root = document.querySelector(':root');
        root.style.setProperty('--bg-color', 'white')
        root.style.setProperty('--text-color', 'black')
        themeToggle.src = 'moon.png';
        isDarkMode = false;
        root.style.setProperty('--list-color', 'black')
        root.style.setProperty('--switch-on', '0')
        root.style.setProperty('--switch-off', '1')
    } else {
        var root = document.querySelector(':root');
        root.style.setProperty('--bg-color', 'black')
        root.style.setProperty('--text-color', 'white')
        root.style.setProperty('--list-color', 'white')
        themeToggle.src = 'sun.png';
        isDarkMode = true;
        root.style.setProperty('--switch-on', '1')
        root.style.setProperty('--switch-off', '0')
    }
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

