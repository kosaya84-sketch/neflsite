// 1. Custom Cursor Follow
const cursor = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Video Interaction & Progress
const mainModule = document.getElementById('mainModule');
const video = document.getElementById('featureVideo');
const progressFill = document.querySelector('.fill');

mainModule.addEventListener('mouseenter', () => {
    video.play();
    cursor.style.transform = 'scale(4)'; // Cursor membesar saat di video
});

mainModule.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    cursor.style.transform = 'scale(1)';
});

// 3. Update Progress Bar Video
video.addEventListener('timeupdate', () => {
    const pc = (video.currentTime / video.duration) * 100;
    progressFill.style.width = pc + '%';
});

// 4. Magnetic Button Effect
const btn = document.querySelector('.magnetic-btn');
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
});

btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0px, 0px)`;
});

// 5. Theme Toggle Simple
document.getElementById('theme-toggle').addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = getComputedStyle(root).getPropertyValue('--bg').trim() === '#0f172a';
    
    if(isDark) {
        root.style.setProperty('--bg', '#f0f4f8');
        root.style.setProperty('--card-bg', '#ffffff');
        root.style.setProperty('--text', '#1e293b');
        root.style.setProperty('--shadow', 'rgba(0,0,0,0.1)');
    } else {
        root.style.setProperty('--bg', '#0f172a');
        root.style.setProperty('--card-bg', '#1e293b');
        root.style.setProperty('--text', '#f8fafc');
        root.style.setProperty('--shadow', 'rgba(0,0,0,0.3)');
    }
});

// 6. Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Password yang kamu tentukan
const CORRECT_PASSWORD = "wow keren"; 

function checkPassword() {
    const input = document.getElementById('pass-input').value;
    const screen = document.getElementById('password-screen');
    const error = document.getElementById('error-msg');

    if (input === CORRECT_PASSWORD) {
        // Efek transisi 3D ke atas
        screen.classList.add('unlocked');
        
        // Opsional: aktifkan scroll setelah terbuka
        document.body.style.overflow = "auto";
    } else {
        // Efek getar jika salah
        error.innerText = "Kunci salah, kain terkunci rapat.";
        const card = document.querySelector('.pass-card');
        card.style.animation = "shake 0.4s";
        setTimeout(() => card.style.animation = "", 400);
    }
}

// Tambahan animasi getar di CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}`;
document.head.appendChild(style);

// Matikan scroll saat password masih muncul
document.body.style.overflow = "hidden";