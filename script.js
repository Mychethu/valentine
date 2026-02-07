

function moveNo() {
    const noBtn = document.querySelector('.no');
    const container = document.querySelector('.card');

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}


function yesClicked() {
    document.getElementById('firstPage').classList.add('hidden');
    document.getElementById('successPage').classList.remove('hidden');
}

function nextClicked() {
    document.getElementById('successPage').classList.add('hidden');
    document.getElementById('reasonsPage').classList.remove('hidden');
}

function showSurprise(e) {
    if (e.target.classList.contains('surprise-btn')) {
        const message = document.querySelector('.surprise-message');
        message.classList.toggle('hidden');
        
        // Create heart animation on button click
        const hearts = ['❤️', '💖', '💕', '💗', '💓', '💘', '💝', '🩷','❤️', '💖', '💕', '💗', '💓', '💘', '💝', '🩷'];
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
                const floatingHeart = document.createElement('div');
                floatingHeart.className = 'floating-heart';
                floatingHeart.textContent = randomHeart;
                floatingHeart.style.left = (e.clientX + (Math.random() - 0.5) * 200) + 'px';
                floatingHeart.style.top = (e.clientY + (Math.random() - 0.5) * 200) + 'px';
                
                document.body.appendChild(floatingHeart);
                
                setTimeout(() => {
                    floatingHeart.remove();
                }, 2000);
            }, i * 100);
        }
    }
}

function createHeartAnimation(event) {
    if (event.target === event.currentTarget || event.target.classList.contains('reason-item') || event.target.classList.contains('reason-emoji') || event.target.classList.contains('reason-text')) {
        const hearts = ['❤️', '💖', '💕', '💗', '💓', '💘', '💝', '🩷'];
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        
        const floatingHeart = document.createElement('div');
        floatingHeart.className = 'floating-heart';
        floatingHeart.textContent = randomHeart;
        floatingHeart.style.left = event.clientX + 'px';
        floatingHeart.style.top = event.clientY + 'px';
        
        document.body.appendChild(floatingHeart);
        
        setTimeout(() => {
            floatingHeart.remove();
        }, 2000);
    }
}

function nextToPromise() {
    document.getElementById('reasonsPage').classList.add('hidden');
    document.getElementById('promisePage').classList.remove('hidden');
}

let currentImageIndex = 0;
let autoRotateInterval;

function showFinalSurprise() {
    document.getElementById('promisePage').classList.add('hidden');
    document.getElementById('finalSurprisePage').classList.remove('hidden');
    currentImageIndex = 0;
    updateCarousel();
    startAutoRotate();
}

function nextImage() {
    const items = document.querySelectorAll('.carousel-item');
    currentImageIndex = (currentImageIndex + 1) % items.length;
    updateCarousel();
}

function prevImage() {
    const items = document.querySelectorAll('.carousel-item');
    currentImageIndex = (currentImageIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        
        const offset = (index - currentImageIndex + items.length) % items.length;
        
        if (offset === 0) {
            item.classList.add('active');
        } else if (offset === 1 || offset === -(items.length - 1)) {
            item.classList.add('next');
        } else if (offset === items.length - 1 || offset === -1) {
            item.classList.add('prev');
        }
    });
}

function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        nextImage();
    }, 3500);
}

