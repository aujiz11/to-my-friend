function createFallingFlowers() {
    const flowersContainer = document.getElementById('flowersContainer');
    const flowerTemplates = [
        `<svg viewBox="0 0 50 50" width="30" height="30">
            <g transform="translate(25,25)">
                <circle cx="0" cy="-8" r="4" fill="#FFB7C5"/>
                <circle cx="5.7" cy="-2.5" r="4" fill="#FFC0CB"/>
                <circle cx="3.5" cy="6.5" r="4" fill="#FFB7C5"/>
                <circle cx="-3.5" cy="6.5" r="4" fill="#FFC0CB"/>
                <circle cx="-5.7" cy="-2.5" r="4" fill="#FFB7C5"/>
                <circle cx="0" cy="0" r="3" fill="#FFD700"/>
            </g>
        </svg>`,
        
        `<svg viewBox="0 0 50 50" width="28" height="28">
            <g transform="translate(25,25)">
                <circle cx="0" cy="0" r="8" fill="#FF69B4" opacity="0.8"/>
                <circle cx="0" cy="0" r="6" fill="#FF1493" opacity="0.7"/>
                <circle cx="0" cy="0" r="4" fill="#C71585" opacity="0.6"/>
                <circle cx="0" cy="0" r="2" fill="#FFD700"/>
            </g>
        </svg>`,

        `<svg viewBox="0 0 50 50" width="32" height="32">
            <g transform="translate(25,25)">
                <ellipse cx="0" cy="-6" rx="3" ry="8" fill="#FFB6C1" transform="rotate(0)"/>
                <ellipse cx="0" cy="-6" rx="3" ry="8" fill="#FFC0CB" transform="rotate(60)"/>
                <ellipse cx="0" cy="-6" rx="3" ry="8" fill="#FFB6C1" transform="rotate(120)"/>
                <ellipse cx="0" cy="-6" rx="3" ry="8" fill="#FFC0CB" transform="rotate(180)"/>
                <ellipse cx="0" cy="-6" rx="3" ry="8" fill="#FFB6C1" transform="rotate(240)"/>
                <ellipse cx="0" cy="-6" rx="3" ry="8" fill="#FFC0CB" transform="rotate(300)"/>
                <circle cx="0" cy="0" r="2.5" fill="#FFFACD"/>
            </g>
        </svg>`,
        
        `<svg viewBox="0 0 50 50" width="26" height="26">
            <g transform="translate(25,25)">
                <circle cx="0" cy="-7" r="3.5" fill="#FFE4B5"/>
                <circle cx="6.7" cy="-2.2" r="3.5" fill="#FFDAB9"/>
                <circle cx="4.1" cy="5.7" r="3.5" fill="#FFE4B5"/>
                <circle cx="-4.1" cy="5.7" r="3.5" fill="#FFDAB9"/>
                <circle cx="-6.7" cy="-2.2" r="3.5" fill="#FFE4B5"/>
                <circle cx="0" cy="0" r="2" fill="#FF6347"/>
            </g>
        </svg>`,
        
        `<svg viewBox="0 0 50 50" width="28" height="28">
            <g transform="translate(25,25)">
                <circle cx="0" cy="-6" r="3" fill="#FFFFFF"/>
                <circle cx="5.2" cy="-3" r="3" fill="#FFF5EE"/>
                <circle cx="5.2" cy="3" r="3" fill="#FFFFFF"/>
                <circle cx="0" cy="6" r="3" fill="#FFF5EE"/>
                <circle cx="-5.2" cy="3" r="3" fill="#FFFFFF"/>
                <circle cx="-5.2" cy="-3" r="3" fill="#FFF5EE"/>
                <circle cx="0" cy="0" r="2.5" fill="#FFD700"/>
            </g>
        </svg>`
    ];
    
    setInterval(() => {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowerTemplates[Math.floor(Math.random() * flowerTemplates.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = (Math.random() * 3 + 6) + 's';
        flower.style.animationDelay = Math.random() * 2 + 's';
        
        flowersContainer.appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, 9000);
    }, 400);
}

const loveMessage = `Gửi tới Thanh Hoè,

Hôm nay là 20/10, một ngày đặc biệt để mình gửi đến bạn những lời chúc tốt đẹp nhất. Có những người bạn xuất hiện trong cuộc đời mình như một món quà quý giá, và Hoe chính là một trong số đó.

Cảm ơn vì hai ta đã gặp được nhau, vì những lần an ủi khi mình thất tình :(( , vì những tiếng cười sảng khoái khi hai đứa cùng nấu xói. Tình bạn này là điều mà tuii luôn trân trọng và tự hào.

Trong ngày đặc biệt này, mình muốn chúc bạn - người bạn tuyệt vời của mình - luôn tươi trẻ, xinh đẹp, hạnh phúc và thành công trong mọi lĩnh vực, sớm trở thành một cô điều dưỡng nheee. Bạn xứng đáng có được tất cả những điều tuyệt vời nhất!

Chúc mừng 20/10, hẹ hẹ hẹ! 🌸`;

let typingIndex = 0;
let isTypingStarted = false;

function typeWriter() {
    const typingText = document.getElementById('typingText');
    
    if (typingIndex < loveMessage.length) {
        typingText.textContent = loveMessage.substring(0, typingIndex + 1);
        typingIndex++;
        setTimeout(typeWriter, 30);
    } else {
        typingText.classList.add('finished');
    }
}

const observerOptions = {
    threshold: 0.3
};

const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isTypingStarted) {
            isTypingStarted = true;
            setTimeout(typeWriter, 500);
        }
    });
}, observerOptions);

const letterSection = document.getElementById('loveLetter');
letterObserver.observe(letterSection);

const photoData = [
    {
        image: 'images/face-1.jpg',
        caption: 'Sinh thần của bạnn 🌸'
    },
    {
        image: 'images/face-2.jpg',
        caption: 'Đi học hả bạn ? ✨'
    },
    {
        image: 'images/face-3.jpg',
        caption: 'Workshop đã dữ he 💕'
    },
    {
        image: 'images/face-4.jpg',
        caption: 'Áo dài xinh dữ he ✨'
    },
    {
        image: 'images/face-5.jpg',
        caption: 'Mùa đông ❄️'
    }
];

let currentPhotoIndex = 0;
const photoWrapper = document.getElementById('photoWrapper');
const sliderDots = document.getElementById('sliderDots');

function initializeGallery() {
    photoData.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        
        const img = document.createElement('img');
        img.src = photo.image;
        img.alt = `Memory ${index + 1}`;
        
        img.onload = function() {
            const ratio = this.naturalWidth / this.naturalHeight;
            if (ratio < 1) {
                photoItem.style.aspectRatio = '3/4';
            } else if (ratio > 1.5) {
                photoItem.style.aspectRatio = '16/9';
            } else {
                photoItem.style.aspectRatio = '4/3';
            }
        };
        
        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.textContent = photo.caption;
        
        photoItem.appendChild(img);
        photoItem.appendChild(caption);
        photoWrapper.appendChild(photoItem);
        
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
}

function updateSlider() {
    photoWrapper.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPhotoIndex);
    });
}

function goToSlide(index) {
    currentPhotoIndex = index;
    updateSlider();
}

function nextSlide() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length;
    updateSlider();
}

function prevSlide() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length;
    updateSlider();
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

let autoSlideInterval = setInterval(nextSlide, 5000);

const photoContainer = document.querySelector('.photo-container');
photoContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

photoContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i><span>Nghe nhạc nhaaa</span>';
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i><span>Nhạc ồn quáaa</span>';
        musicToggle.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
});

class Firework {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.particles = [];
        this.createParticles();
    }
    
    createParticles() {
        const colors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD700', '#FF1493'];
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 2 + Math.random() * 3;
            
            this.particles.push({
                x: this.x,
                y: this.y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 3 + Math.random() * 3,
                life: 1,
                decay: 0.01 + Math.random() * 0.01
            });
        }
    }
    
    update() {
        this.particles = this.particles.filter(p => p.life > 0);
        
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.life -= p.decay;
        });
        
        return this.particles.length > 0;
    }
    
    draw() {
        this.particles.forEach(p => {
            this.ctx.save();
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw heart shape
            if (Math.random() > 0.7) {
                this.ctx.fillText('❤️', p.x, p.y);
            }
            
            this.ctx.restore();
        });
    }
}

class FireworksDisplay {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.fireworks = [];
        this.isActive = false;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    start() {
        this.isActive = true;
        this.canvas.classList.add('active');
        this.animate();
        this.launchInterval = setInterval(() => this.launch(), 400);
        
        setTimeout(() => this.stop(), 8000);
    }
    
    stop() {
        this.isActive = false;
        clearInterval(this.launchInterval);
        setTimeout(() => {
            if (this.fireworks.length === 0) {
                this.canvas.classList.remove('active');
            }
        }, 3000);
    }
    
    launch() {
        if (!this.isActive) return;
        
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height * 0.5;
        
        this.fireworks.push(new Firework(this.canvas, x, y));
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.fireworks = this.fireworks.filter(fw => {
            fw.update();
            fw.draw();
            return fw.particles.length > 0;
        });
        
        if (this.isActive || this.fireworks.length > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

const fireworksCanvas = document.getElementById('fireworksCanvas');
const fireworksDisplay = new FireworksDisplay(fireworksCanvas);

const giftBox = document.getElementById('giftBox');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

giftBox.addEventListener('click', () => {
    popupOverlay.classList.add('active');
    fireworksDisplay.start();

    const celebrationSound = new Audio('audio/effect.mp3');
    celebrationSound.play();
});

popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});

function createSparkles() {
    const hero = document.querySelector('.hero');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const colors = ['#FFD700', '#FF69B4', '#FFC0CB'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1.2s ease-out forwards';
        sparkle.style.zIndex = '1';
        sparkle.style.opacity = '0.6';
        
        hero.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1200);
    }, 300);
}

// Create subtle floating orbs in hero section
function createFloatingOrbs() {
    const hero = document.querySelector('.hero');
    const orbCount = 4;
    
    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 80 + 60;
        const duration = Math.random() * 15 + 20;
        const delay = Math.random() * 5;
        
        orb.style.position = 'absolute';
        orb.style.width = size + 'px';
        orb.style.height = size + 'px';
        orb.style.borderRadius = '50%';
        orb.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 0.15), transparent)';
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.pointerEvents = 'none';
        orb.style.filter = 'blur(40px)';
        orb.style.animation = `floatOrb ${duration}s ease-in-out ${delay}s infinite`;
        orb.style.zIndex = '0';
        
        hero.appendChild(orb);
    }
}

// Add subtle interactive particles (reduced frequency)
document.querySelector('.hero').addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createInteractiveParticle(e.clientX, e.clientY);
    }
});

function createInteractiveParticle(x, y) {
    const particle = document.createElement('div');
    const symbols = ['✨', '🌸', '💕'];
    
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.fontSize = (Math.random() * 8 + 12) + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '100';
    particle.style.animation = 'floatUpFade 1.5s ease-out forwards';
    particle.style.opacity = '0.7';
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1500);
}

const heroAnimStyle = document.createElement('style');
heroAnimStyle.textContent = `
    @keyframes floatOrb {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
        }
        50% {
            transform: translate(20px, -20px);
            opacity: 0.3;
        }
    }
    
    @keyframes floatUpFade {
        0% {
            transform: translateY(0) scale(0.8);
            opacity: 0.7;
        }
        100% {
            transform: translateY(-60px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heroAnimStyle);

// Add sparkle animation to CSS dynamically
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);
document.addEventListener('DOMContentLoaded', () => {
    createFallingFlowers();
    initializeGallery();
    createSparkles();
    createFloatingOrbs();
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.setAttribute('data-text', heroTitle.textContent);
    }
    
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const heroContent = document.querySelector('.hero-content');
                const hero = document.querySelector('.hero');
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                
                if (scrolled < heroHeight) {
                    const opacity = 1 - (scrolled / heroHeight) * 1.2;
                    const translateY = scrolled * 0.3;
                    
                    heroContent.style.opacity = Math.max(0, opacity);
                    heroContent.style.transform = `translateY(${translateY}px)`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    setTimeout(() => {
        document.querySelector('.hero-content').style.animation = 'none';
    }, 2000);
});

let cursorTrail = [];

document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '12px';
    heart.style.zIndex = '10000';
    heart.style.animation = 'cursorHeart 1s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
});

const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorHeart {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-30px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cursorStyle);
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'Escape') {
        popupOverlay.classList.remove('active');
    }
});

const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

console.log('success test       ');
