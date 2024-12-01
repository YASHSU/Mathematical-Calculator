const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

function append(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value) || 0; // Simple eval for demonstration
    } catch (error) {
        result.value = 'Error';
    }
}
