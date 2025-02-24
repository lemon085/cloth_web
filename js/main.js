// Product data
const products = [
    { id: 6, name: "Classic White Blouse", price: 89.99, category: "tops", size: ["s", "m", "l"], color: "white", rating: 4.5, reviews: 128, stock: 15 },
    { id: 7, name: "Denim Jacket", price: 129.99, category: "tops", size: ["m", "l", "xl"], color: "blue", rating: 4.8, reviews: 256, stock: 20 },
    { id: 8, name: "Floral Summer Dress", price: 119.99, category: "dresses", size: ["s", "m"], color: "beige", rating: 4.3, reviews: 89, stock: 12 },
    { id: 9, name: "Striped Maxi Dress", price: 149.99, category: "dresses", size: ["s", "m", "l"], color: "black", rating: 4.6, reviews: 167, stock: 8 },
    { id: 10, name: "Leather Jacket", price: 199.99, category: "tops", size: ["m", "l"], color: "black", rating: 4.9, reviews: 312, stock: 5 },
    { id: 11, name: "Summer Blouse", price: 79.99, category: "tops", size: ["s", "m", "l"], color: "beige", rating: 4.2, reviews: 78, stock: 25 },
    { id: 12, name: "Casual Jeans", price: 89.99, category: "bottoms", size: ["s", "m", "l", "xl"], color: "blue", rating: 4.7, reviews: 245, stock: 30 },
    { id: 13, name: "Evening Gown", price: 299.99, category: "dresses", size: ["s", "m"], color: "black", rating: 4.8, reviews: 134, stock: 3 },
    { id: 14, name: "Cotton T-Shirt", price: 29.99, category: "tops", size: ["s", "m", "l", "xl"], color: "white", rating: 4.4, reviews: 423, stock: 50 },
    { id: 15, name: "Pleated Skirt", price: 69.99, category: "bottoms", size: ["s", "m", "l"], color: "beige", rating: 4.5, reviews: 167, stock: 18 },
    { id: 16, name: "Silk Blouse", price: 119.99, category: "tops", size: ["s", "m"], color: "white", rating: 4.6, reviews: 98, stock: 7 },
    { id: 17, name: "Casual Dress", price: 89.99, category: "dresses", size: ["s", "m", "l"], color: "beige", rating: 4.3, reviews: 145, stock: 22 },
    { id: 18, name: "Denim Shorts", price: 59.99, category: "bottoms", size: ["s", "m", "l"], color: "blue", rating: 4.4, reviews: 189, stock: 28 },
    { id: 19, name: "Party Dress", price: 169.99, category: "dresses", size: ["s", "m"], color: "black", rating: 4.7, reviews: 223, stock: 6 },
    { id: 20, name: "Wool Sweater", price: 129.99, category: "tops", size: ["m", "l", "xl"], color: "beige", rating: 4.5, reviews: 178, stock: 15 },
    { id: 21, name: "Formal Pants", price: 99.99, category: "bottoms", size: ["s", "m", "l"], color: "black", rating: 4.6, reviews: 156, stock: 20 },
    { id: 22, name: "Summer Dress", price: 79.99, category: "dresses", size: ["s", "m", "l"], color: "white", rating: 4.4, reviews: 134, stock: 16 },
    { id: 23, name: "Linen Pants", price: 89.99, category: "bottoms", size: ["s", "m", "l"], color: "beige", rating: 4.5, reviews: 145, stock: 24 },
    { id: 24, name: "Designer Blazer", price: 249.99, category: "tops", size: ["s", "m", "l"], color: "black", rating: 4.9, reviews: 67, stock: 5 },
    { id: 25, name: "Boho Maxi Dress", price: 159.99, category: "dresses", size: ["s", "m", "l"], color: "beige", rating: 4.8, reviews: 89, stock: 10 }
];

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCartBtn = document.querySelector('.close-cart');
const overlay = document.querySelector('.overlay');
const productsGrid = document.querySelector('.products-grid');
const heroSlider = document.querySelector('.hero-slider');
const heroPrevBtn = document.querySelector('.hero-prev');
const heroNextBtn = document.querySelector('.hero-next');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

// State
let cart = [];
let currentSlide = 0;
let currentLightboxIndex = 0;
let lastScrollPosition = 0;
let sliderInterval;

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const heroAnimation = () => {
    const timeline = gsap.timeline();
    
    timeline
        .from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-buttons', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-controls', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5');
};

// Scroll Animations
const initScrollAnimations = () => {
    // Featured cards animation
    gsap.from('.featured-card', {
        scrollTrigger: {
            trigger: '.featured-grid',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    });

    // Product cards animation
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products-grid',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1
    });

    // Newsletter section animation
    gsap.from('.newsletter-content', {
        scrollTrigger: {
            trigger: '.newsletter',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
};

// Hero Slider
const createHeroSlider = () => {
    // Create slides for banner images
    for (let i = 1; i <= 7; i++) {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${i === 1 ? 'active' : ''}`;
        slide.innerHTML = `<img src="assets/images/banner${i}.jpg" alt="Banner Image ${i}" loading="lazy">`;
        heroSlider.appendChild(slide);
    }
};

const rotateSlides = (direction = 1) => {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');
    
    if (direction === 1) {
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    
    slides[currentSlide].classList.add('active');
    resetSliderInterval();
};

const resetSliderInterval = () => {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => rotateSlides(1), 5000);
};

// Enhanced product rendering with animations
const renderProducts = (filteredProducts = products) => {
    gsap.to('.products-grid', {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
            productsGrid.innerHTML = filteredProducts.map(product => `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-image">
                        <img src="assets/images/${product.id}.jpg" alt="${product.name}" loading="lazy">
                        <div class="product-overlay"></div>
                        ${product.stock < 5 ? `<div class="stock-badge low-stock">Only ${product.stock} left</div>` : ''}
                        ${product.stock === 0 ? '<div class="stock-badge out-of-stock">Out of Stock</div>' : ''}
                        <div class="product-actions">
                            <button class="add-to-cart" title="Add to Cart" aria-label="Add ${product.name} to cart">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                            <button class="quick-view" title="Quick View" aria-label="Quick view of ${product.name}">
                                <i class="fas fa-search"></i>
                            </button>
                            <button class="add-to-wishlist" title="Add to Wishlist" aria-label="Add ${product.name} to wishlist">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">
                                ${generateStarRating(product.rating)}
                            </div>
                            <span class="review-count">(${product.reviews})</span>
                        </div>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <div class="product-meta">
                            <span class="product-sizes">
                                <i class="fas fa-ruler-combined"></i> 
                                ${product.size.join(' · ')}
                            </span>
                            <span class="product-color">
                                <i class="fas fa-palette"></i> 
                                ${product.color}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');

            // Fade in new products with stagger effect
            gsap.from('.product-card', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });

            // Reset grid container opacity and position
            gsap.to('.products-grid', {
                opacity: 1,
                y: 0,
                duration: 0.3
            });

            // Initialize product card interactions
            initializeProductCards();
        }
    });
};

// Helper function to generate star rating HTML
const generateStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        ${Array(fullStars).fill('<i class="fas fa-star"></i>').join('')}
        ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${Array(emptyStars).fill('<i class="far fa-star"></i>').join('')}
    `;
};

// Enhanced filter handling with debounce
const handleFilters = () => {
    const categoryFilter = document.getElementById('category-filter');
    const sizeFilter = document.getElementById('size-filter');
    const colorFilter = document.getElementById('color-filter');
    const sortFilter = document.getElementById('sort-filter');

    let debounceTimeout;

    const applyFilters = () => {
        clearTimeout(debounceTimeout);
        
        debounceTimeout = setTimeout(() => {
            let filtered = [...products];

            // Apply category filter
            if (categoryFilter.value) {
                filtered = filtered.filter(p => p.category === categoryFilter.value);
            }

            // Apply size filter
            if (sizeFilter.value) {
                filtered = filtered.filter(p => p.size.includes(sizeFilter.value));
            }

            // Apply color filter
            if (colorFilter.value) {
                filtered = filtered.filter(p => p.color === colorFilter.value);
            }

            // Apply sorting
            switch (sortFilter.value) {
                case 'price-asc':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    filtered.sort((a, b) => b.name.localeCompare(a.name));
                    break;
            }

            renderProducts(filtered);
        }, 300); // Debounce delay
    };

    // Add event listeners to filters
    [categoryFilter, sizeFilter, colorFilter, sortFilter].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
};

// Initialize product card interactions
const initializeProductCards = () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        // Quick view functionality
        const quickViewBtn = card.querySelector('.quick-view');
        quickViewBtn.addEventListener('click', () => {
            const productId = card.dataset.id;
            const product = products.find(p => p.id === parseInt(productId));
            openQuickView(product);
        });

        // Add to cart functionality
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const productId = card.dataset.id;
            const product = products.find(p => p.id === parseInt(productId));
            addToCart(product);
        });

        // Add to wishlist functionality
        const wishlistBtn = card.querySelector('.add-to-wishlist');
        wishlistBtn.addEventListener('click', () => {
            const productId = card.dataset.id;
            const product = products.find(p => p.id === parseInt(productId));
            toggleWishlist(product);
            wishlistBtn.classList.toggle('active');
        });

        // Hover animations
        const actions = card.querySelector('.product-actions').children;
        gsap.set(actions, { y: 20, opacity: 0 });

        card.addEventListener('mouseenter', () => {
            gsap.to(actions, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(actions, {
                y: 20,
                opacity: 0,
                duration: 0.2,
                ease: 'power2.in'
            });
        });
    });
};

// Initialize the product grid
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    handleFilters();
});

// Lightbox
const openLightbox = (imageId) => {
    currentLightboxIndex = products.findIndex(p => p.id === imageId);
    lightboxImg.src = `assets/images/${imageId}.jpg`;
    lightbox.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightbox.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
};

const navigateLightbox = (direction) => {
    currentLightboxIndex = (currentLightboxIndex + direction + products.length) % products.length;
    lightboxImg.src = `assets/images/${products[currentLightboxIndex].id}.jpg`;
};

// Quick View Functionality
const openQuickView = (product) => {
    const quickViewModal = document.createElement('div');
    quickViewModal.className = 'quick-view-modal';
    quickViewModal.innerHTML = `
        <div class="quick-view-content">
            <button class="close-quick-view">
                <i class="fas fa-times"></i>
            </button>
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="assets/images/${product.id}.jpg" alt="${product.name}">
                    <div class="image-gallery">
                        <button class="gallery-thumb active">
                            <img src="assets/images/${product.id}.jpg" alt="Main view">
                        </button>
                        <button class="gallery-thumb">
                            <img src="assets/images/${product.id}_2.jpg" alt="Alternate view 1">
                        </button>
                        <button class="gallery-thumb">
                            <img src="assets/images/${product.id}_3.jpg" alt="Alternate view 2">
                        </button>
                    </div>
                </div>
                <div class="quick-view-details">
                    <div class="product-category">${product.category}</div>
                    <h2 class="product-title">${product.name}</h2>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStarRating(product.rating)}
                        </div>
                        <span class="review-count">${product.reviews} reviews</span>
                    </div>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <div class="product-description">
                        <p>Experience luxury and comfort with our ${product.name}. Perfect for any occasion, this piece combines style with functionality.</p>
                        <ul class="product-features">
                            <li><i class="fas fa-check"></i> Premium quality materials</li>
                            <li><i class="fas fa-check"></i> Comfortable fit</li>
                            <li><i class="fas fa-check"></i> Easy care instructions</li>
                            <li><i class="fas fa-check"></i> Versatile styling options</li>
                        </ul>
                    </div>
                    <div class="product-options">
                        <div class="size-selector">
                            <label>Size: <span class="selected-size"></span></label>
                            <div class="size-buttons">
                                ${product.size.map(size => `
                                    <button class="size-btn" data-size="${size}">${size.toUpperCase()}</button>
                                `).join('')}
                            </div>
                            <div class="size-guide">
                                <button class="size-guide-btn">
                                    <i class="fas fa-ruler-combined"></i> Size Guide
                                </button>
                            </div>
                        </div>
                        <div class="quantity-selector">
                            <label>Quantity:</label>
                            <div class="quantity-controls">
                                <button class="quantity-btn minus">-</button>
                                <input type="number" value="1" min="1" max="10">
                                <button class="quantity-btn plus">+</button>
                            </div>
                            <span class="stock-status ${product.stock > 5 ? 'in-stock' : 'low-stock'}">
                                ${product.stock > 5 ? `In Stock (${product.stock} available)` : 
                                  product.stock > 0 ? `Only ${product.stock} left in stock!` : 'Out of Stock'}
                            </span>
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i>
                            ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="add-to-wishlist-btn">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-meta">
                        <div class="meta-item">
                            <i class="fas fa-truck"></i>
                            <div>
                                <strong>Free Shipping</strong>
                                <p>On orders over $100</p>
                            </div>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-undo"></i>
                            <div>
                                <strong>30-Day Returns</strong>
                                <p>Money-back guarantee</p>
                            </div>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-shield-alt"></i>
                            <div>
                                <strong>Secure Payment</strong>
                                <p>SSL encrypted checkout</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-share">
                        <span>Share:</span>
                        <button title="Share on Facebook">
                            <i class="fab fa-facebook"></i>
                        </button>
                        <button title="Share on Twitter">
                            <i class="fab fa-twitter"></i>
                        </button>
                        <button title="Share on Pinterest">
                            <i class="fab fa-pinterest"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(quickViewModal);
    document.body.classList.add('quick-view-open');

    // Animate modal opening
    gsap.fromTo(quickViewModal, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );

    // Initialize quick view interactions
    initQuickViewInteractions(quickViewModal, product);
};

const initQuickViewInteractions = (modal, product) => {
    const closeBtn = modal.querySelector('.close-quick-view');
    const sizeBtns = modal.querySelectorAll('.size-btn');
    const quantityInput = modal.querySelector('.quantity-controls input');
    const minusBtn = modal.querySelector('.quantity-btn.minus');
    const plusBtn = modal.querySelector('.quantity-btn.plus');
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    const wishlistBtn = modal.querySelector('.add-to-wishlist-btn');

    // Size selection
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Quantity controls
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });

    // Add to cart
    addToCartBtn.addEventListener('click', () => {
        const selectedSize = modal.querySelector('.size-btn.active')?.dataset.size;
        const quantity = parseInt(quantityInput.value);

        if (!selectedSize) {
            showNotification('Please select a size', 'error');
            return;
        }

        addToCart({
            ...product,
            selectedSize,
            quantity
        });

        closeQuickView(modal);
        showNotification('Added to cart successfully', 'success');
    });

    // Add to wishlist
    wishlistBtn.addEventListener('click', () => {
        toggleWishlist(product);
        wishlistBtn.classList.toggle('active');
        showNotification('Wishlist updated', 'success');
    });

    // Close modal
    closeBtn.addEventListener('click', () => closeQuickView(modal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeQuickView(modal);
        }
    });
};

const closeQuickView = (modal) => {
    gsap.to(modal, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            modal.remove();
            document.body.classList.remove('quick-view-open');
        }
    });
};

// Cart Management
const addToCart = (product) => {
    const cartItem = cart.find(item => 
        item.id === product.id && 
        item.selectedSize === product.selectedSize
    );

    if (cartItem) {
        cartItem.quantity += product.quantity || 1;
    } else {
        cart.push({
            ...product,
            quantity: product.quantity || 1
        });
    }

    updateCartUI();
    updateCartCount();
    showCartNotification();
};

const updateCartUI = () => {
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    
    if (!cartItems || !totalAmount) return;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}" data-size="${item.selectedSize}">
            <div class="cart-item-image">
                <img src="assets/images/${item.id}.jpg" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Size: ${item.selectedSize.toUpperCase()}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                </div>
                <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button class="remove-item">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;

    // Initialize cart item interactions
    initCartItemInteractions();
};

const initCartItemInteractions = () => {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.quantity-btn.minus');
        const plusBtn = item.querySelector('.quantity-btn.plus');
        const removeBtn = item.querySelector('.remove-item');
        const productId = parseInt(item.dataset.id);
        const size = item.dataset.size;

        minusBtn.addEventListener('click', () => updateCartItemQuantity(productId, size, -1));
        plusBtn.addEventListener('click', () => updateCartItemQuantity(productId, size, 1));
        removeBtn.addEventListener('click', () => removeFromCart(productId, size));
    });
};

const updateCartItemQuantity = (productId, size, change) => {
    const cartItem = cart.find(item => 
        item.id === productId && 
        item.selectedSize === size
    );

    if (cartItem) {
        cartItem.quantity = Math.max(1, Math.min(10, cartItem.quantity + change));
        updateCartUI();
        updateCartCount();
    }
};

const removeFromCart = (productId, size) => {
    cart = cart.filter(item => 
        !(item.id === productId && item.selectedSize === size)
    );
    
    updateCartUI();
    updateCartCount();
    showNotification('Item removed from cart', 'success');
};

const updateCartCount = () => {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        gsap.from(cartCount, {
            scale: 1.5,
            duration: 0.3,
            ease: 'back.out'
        });
    }
};

// Notification System
const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    gsap.fromTo(notification,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
    );

    setTimeout(() => {
        gsap.to(notification, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => notification.remove()
        });
    }, 3000);
};

// Cart Functions
const updateCart = () => {
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalAmount = document.querySelector('.total-amount');

    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        totalAmount.textContent = '$0.00';
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="assets/images/${item.id}.jpg" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <button class="remove-item" data-id="${item.id}">×</button>
        </div>
    `).join('');
};

const toggleCart = () => {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
};

// Header Scroll
const handleHeaderScroll = () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScrollPosition && currentScroll > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    lastScrollPosition = currentScroll;
};

// Event Listeners
const initEventListeners = () => {
    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Hero Slider Controls
    heroPrevBtn.addEventListener('click', () => rotateSlides(-1));
    heroNextBtn.addEventListener('click', () => rotateSlides(1));

    // Cart
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    
    // Lightbox
    productsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card && e.target.closest('.quick-view')) {
            openLightbox(parseInt(card.dataset.id));
        }
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Overlay
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        cartSidebar.classList.remove('open');
        lightbox.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Header Scroll
    window.addEventListener('scroll', handleHeaderScroll);

    // Add to Cart
    productsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card && e.target.closest('.add-to-cart')) {
            const productId = parseInt(card.dataset.id);
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCart();
                
                // Animation feedback
                gsap.to(e.target.closest('.add-to-cart'), {
                    scale: 1.2,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            }
        }
    });
};

// Lazy Loading
const lazyLoad = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Initialize
const init = () => {
    createHeroSlider();
    renderProducts();
    handleFilters();
    initEventListeners();
    heroAnimation();
    initScrollAnimations();
    resetSliderInterval();
    lazyLoad();
};

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init); 