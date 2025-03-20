// Video Background Handler
const heroVideo = document.getElementById('heroVideo');
const videoSources = [
    'https://assets.mixkit.co/videos/preview/mixkit-fish-swimming-in-a-tank-1568-large.mp4',
    'https://assets.mixkit.co/videos/preview/mixkit-lots-of-fish-in-an-aquarium-1569-large.mp4'
];
let currentSourceIndex = 0;

if (heroVideo) {
    // Function to try the next video source
    const tryNextSource = () => {
        currentSourceIndex++;
        if (currentSourceIndex < videoSources.length) {
            heroVideo.src = videoSources[currentSourceIndex];
            heroVideo.load();
            heroVideo.play().catch(handleVideoError);
        } else {
            // If all videos fail, add error class to show fallback image
            document.body.classList.add('video-error');
        }
    };

    // Handle video loading error
    const handleVideoError = (error) => {
        console.log("Video error:", error);
        tryNextSource();
    };

    // Initial video load
    heroVideo.addEventListener('error', (e) => {
        console.log("Video loading error:", e);
        tryNextSource();
    });

    // Try to play the video
    heroVideo.play().catch(handleVideoError);

    // Add loading class to body until video starts playing
    document.body.classList.add('video-loading');
    
    // Remove loading class when video starts playing
    heroVideo.addEventListener('playing', () => {
        document.body.classList.remove('video-loading');
    });

    // Handle visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            heroVideo.pause();
        } else {
            heroVideo.play().catch(handleVideoError);
        }
    });
}

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Product Filtering System
const productData = [
    {
        id: 1,
        name: 'Fresh Salmon',
        category: 'fish',
        image: 'images/products/img3.jpg',
        description: 'Premium quality fresh salmon, perfect for sushi and grilling'
    },
    {
        id: 2,
        name: 'King Crab',
        category: 'crustaceans',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP_fCr8RrWP8G4JgB6Zbot0DXhG_CG-DFAw&s',
        description: 'Wild-caught Alaskan king crab, known for its sweet and tender meat'
    },
    {
        id: 3,
        name: 'Prawn meet',
        category: 'shellfish',
        image: 'https://m.media-amazon.com/images/I/71n+E6aQRPL.jpg',
        description: 'Fresh prawn meet, perfect for raw cooking or grilling'
    },
    {
        id: 4,
        name: 'Tiger Prawns',
        category: 'crustaceans',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47',
        description: 'Large, succulent tiger prawns, ideal for grilling or in curries'
    },
    {
        id: 5,
        name: 'Catla Fish',
        category: 'fish',
        image: 'https://5.imimg.com/data5/GLADMIN/Default/2020/8/XO/HW/EC/77463564/bochi-fish-500x500.png',
        description: 'Fresh-caught Catla fish, perfect for grilling or sashimi'
    },
    {
        id: 6,
        name: 'Shrimp',
        category: 'crustaceans',
        image: 'https://c8.alamy.com/comp/DEH3P3/fresh-prawns-in-the-market-labuan-malaysia-DEH3P3.jpg',
        description: 'Fresh shrimps, great for pasta dishes and soups'
    },
    {
        id: 7,
        name: 'Bangaru teegalu',
        category: 'fish',
        image: 'https://cdn.dotpe.in/longtail/store-items/4033695/OZpabsOd.jpeg',
        description: 'Live Bangaru teegalu, perfect for special occasions'
    },
    {
        id: 8,
        name: 'Sea Bass',
        category: 'fish',
        image: 'https://content.jdmagicbox.com/comp/vijayawada/e7/0866px866.x866.190910173510.n1e7/catalogue/patamata-fish-market-patamata-vijayawada-fish-markets-1kdy4dt2vt.jpg?clr=',
        description: 'Fresh sea bass, ideal for grilling or baking'
    },
    {
        id: 9,
        name: 'Murrel',
        category: 'fish',
        image: 'https://image.telanganatoday.com/wp-content/uploads/2022/12/Telangana-fish_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=412&p=false&r=2.625',
        description: 'Fresh sea scallops, perfect for searing'
    }
];

const productGrid = document.querySelector('.product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

const createProductCard = (product) => {
    return `
        <div class="product-card animate-on-scroll">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `;
};

const filterProducts = (category) => {
    const filteredProducts = category === 'all' 
        ? productData 
        : productData.filter(product => product.category === category);
    
    productGrid.innerHTML = filteredProducts.map(createProductCard).join('');
    animateOnScroll();
};

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProducts(button.dataset.filter);
    });
});

// Initialize products
filterProducts('all');

// Gallery Slider
const gallerySlider = document.querySelector('.gallery-slider');
const galleryContainer = document.querySelector('.gallery-container');
const slides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');

let currentSlide = 0;
const slideCount = slides.length;

function updateSlider() {
    galleryContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
}

if (gallerySlider) {
    // Add event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        let isValid = true;
        
        // Reset previous error states
        contactForm.querySelectorAll('.error-message').forEach(error => error.remove());
        contactForm.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
        
        if (name.length < 2) {
            isValid = false;
            showError('name', 'Please enter a valid name');
        }
        
        if (!validateEmail(email)) {
            isValid = false;
            showError('email', 'Please enter a valid email address');
        }
        
        if (message.length < 10) {
            isValid = false;
            showError('message', 'Message must be at least 10 characters long');
        }
        
        if (isValid) {
            // Format message for WhatsApp
            const whatsappMessage = `*New Contact Form Message*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/918247038596?text=${whatsappMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Show success message and reset form
            showSuccessMessage('Opening WhatsApp...');
            contactForm.reset();
        }
    });
}

function showError(fieldId, message) {
    const field = contactForm.querySelector(`#${fieldId}`);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.classList.add('error');
    field.parentNode.appendChild(errorDiv);
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    contactForm.insertBefore(successDiv, contactForm.firstChild);
    setTimeout(() => successDiv.remove(), 5000);
}

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Animate number counters
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (!counter.hasAttribute('data-animated')) {
                    animateCounter(counter);
                    counter.setAttribute('data-animated', 'true');
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe the stats container
const statsContainer = document.querySelector('.why-choose-stats');
if (statsContainer) {
    observer.observe(statsContainer);
}

// Also trigger counter animation on page load if stats are visible
window.addEventListener('load', () => {
    const statsContainer = document.querySelector('.why-choose-stats');
    if (statsContainer) {
        const counters = statsContainer.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            if (!counter.hasAttribute('data-animated')) {
                animateCounter(counter);
                counter.setAttribute('data-animated', 'true');
            }
        });
    }
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}); 