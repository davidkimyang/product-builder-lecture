const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
        contactForm.reset();
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
    }
});

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
        const hue = (360 / 6) * index;
        element.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;
    });
});
