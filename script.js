// Product data needs to be defined before it's used
const products = {
    vetements: [
        {
            name: "T-shirt Enfant",
            price: "$19.99",
            image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5",
            category: "vetements",
            rating: 4,
            colors: ["Rouge", "Bleu", "Blanc"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Robe d'été",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1524920332781-51a3fb93fe40",
            category: "vetements",
            rating: 5,
            colors: ["Rose", "Jaune", "Blanc"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Pantalon Jean",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1473366334943-3755951a2e90",
            category: "vetements",
            rating: 4,
            colors: ["Bleu", "Noir", "Gris"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Pull Hiver",
            price: "$34.99",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
            category: "vetements",
            rating: 5,
            colors: ["Rouge", "Bleu", "Vert"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Short Sport",
            price: "$22.99",
            image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
            category: "vetements",
            rating: 4,
            colors: ["Bleu", "Vert", "Jaune"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Veste Légère",
            price: "$39.99",
            image: "https://images.unsplash.com/photo-1499971856191-1a420a42b498",
            category: "vetements",
            rating: 5,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Chemise Élégante",
            price: "$27.99",
            image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2",
            category: "vetements",
            rating: 4,
            colors: ["Blanc", "Bleu", "Rouge"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Manteau Hiver",
            price: "$49.99",
            image: "https://images.unsplash.com/photo-1445796886651-d31a2c14b0c2",
            category: "vetements",
            rating: 5,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Jupe Plissée",
            price: "$26.99",
            image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0",
            category: "vetements",
            rating: 4,
            colors: ["Rouge", "Bleu", "Vert"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Ensemble Sport",
            price: "$44.99",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
            category: "vetements",
            rating: 5,
            colors: ["Bleu", "Vert", "Jaune"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        }
    ],
    chaussures: [
        {
            name: "Baskets Sport",
            price: "$34.99",
            image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
            category: "chaussures",
            rating: 4,
            colors: ["Blanc", "Noir", "Gris"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Sandales d'été",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1621996659490-11db59a44f6b",
            category: "chaussures",
            rating: 5,
            colors: ["Rose", "Jaune", "Blanc"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Chaussures École",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1571141412904-2d4fc21007ea",
            category: "chaussures",
            rating: 4,
            colors: ["Noir", "Bleu", "Rouge"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Bottes Pluie",
            price: "$32.99",
            image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
            category: "chaussures",
            rating: 5,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Ballerines",
            price: "$27.99",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
            category: "chaussures",
            rating: 4,
            colors: ["Blanc", "Noir", "Rouge"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Sneakers Mode",
            price: "$39.99",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
            category: "chaussures",
            rating: 5,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Chaussons Maison",
            price: "$19.99",
            image: "https://images.unsplash.com/photo-1531159557908-e56d11a3020e",
            category: "chaussures",
            rating: 4,
            colors: ["Blanc", "Noir", "Gris"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Sandales Sport",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1562183241-840b8af0721e",
            category: "chaussures",
            rating: 5,
            colors: ["Rose", "Jaune", "Blanc"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Bottines Hiver",
            price: "$44.99",
            image: "https://images.unsplash.com/photo-1542840410-3092f99611a3",
            category: "chaussures",
            rating: 4,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["26", "27", "28", "29", "30"]
        },
        {
            name: "Tennis Toile",
            price: "$26.99",
            image: "https://images.unsplash.com//photo-1525966222134-fcfa99b8ae77",
            category: "chaussures",
            rating: 5,
            colors: ["Blanc", "Noir", "Rouge"],
            sizes: ["26", "27", "28", "29", "30"]
        }
    ],
    bebe: [
        {
            name: "Body Bébé",
            price: "$14.99",
            image: "https://images.unsplash.com/photo-1522771930-78848d163029",
            category: "bebe",
            rating: 5,
            colors: ["Blanc", "Rose", "Bleu"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Pyjama Bébé",
            price: "$19.99",
            image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
            category: "bebe",
            rating: 4,
            colors: ["Blanc", "Noir", "Gris"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Grenouillère",
            price: "$22.99",
            image: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
            category: "bebe",
            rating: 5,
            colors: ["Rose", "Jaune", "Blanc"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Ensemble Naissance",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
            category: "bebe",
            rating: 4,
            colors: ["Blanc", "Noir", "Gris"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Bavoir Pack",
            price: "$12.99",
            image: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
            category: "bebe",
            rating: 5,
            colors: ["Blanc", "Rose", "Bleu"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Bonnet Bébé",
            price: "$9.99",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
            category: "bebe",
            rating: 4,
            colors: ["Blanc", "Noir", "Gris"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Chaussettes Pack",
            price: "$11.99",
            image: "https://images.unsplash.com/photo-1522771930-78848d163029",
            category: "bebe",
            rating: 5,
            colors: ["Blanc", "Rose", "Bleu"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Manteau Bébé",
            price: "$34.99",
            image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
            category: "bebe",
            rating: 4,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Ensemble été",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
            category: "bebe",
            rating: 5,
            colors: ["Rose", "Jaune", "Blanc"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        },
        {
            name: "Gigoteuse",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
            category: "bebe",
            rating: 4,
            colors: ["Blanc", "Noir", "Gris"],
            sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
        }
    ],
    enfant: [
        {
            name: "Ensemble Sport",
            price: "$39.99",
            image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2",
            category: "enfant",
            rating: 4,
            colors: ["Bleu", "Vert", "Jaune"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Veste Mi-saison",
            price: "$44.99",
            image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4",
            category: "enfant",
            rating: 5,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Jean Confort",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1473366334943-3755951a2e90",
            category: "enfant",
            rating: 4,
            colors: ["Bleu", "Noir", "Gris"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "T-shirt Imprimé",
            price: "$19.99",
            image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5",
            category: "enfant",
            rating: 5,
            colors: ["Blanc", "Rouge", "Bleu"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Short Sport",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
            category: "enfant",
            rating: 4,
            colors: ["Bleu", "Vert", "Jaune"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Pull Fantaisie",
            price: "$34.99",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
            category: "enfant",
            rating: 5,
            colors: ["Rouge", "Bleu", "Vert"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Robe Festive",
            price: "$42.99",
            image: "https://images.unsplash.com/photo-1524920332781-51a3fb93fe40",
            category: "enfant",
            rating: 4,
            colors: ["Rose", "Jaune", "Blanc"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Pantalon Cargo",
            price: "$32.99",
            image: "https://images.unsplash.com/photo-1473366334943-3755951a2e90",
            category: "enfant",
            rating: 5,
            colors: ["Bleu", "Noir", "Gris"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Blouson Léger",
            price: "$39.99",
            image: "https://images.unsplash.com/photo-1499971856191-1a420a42b498",
            category: "enfant",
            rating: 4,
            colors: ["Noir", "Gris", "Bleu"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        },
        {
            name: "Chemise Casual",
            price: "$27.99",
            image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2",
            category: "enfant",
            rating: 5,
            colors: ["Blanc", "Bleu", "Rouge"],
            sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const heroSlides = document.querySelector('.hero-slides');
    const singleImage = 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6';  // Image d'un enfant élégamment habillé

    const slideDiv = document.createElement('div');
    slideDiv.className = 'hero-slide active';
    slideDiv.style.backgroundImage = `url('${singleImage}')`;
    heroSlides.appendChild(slideDiv);

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const cartCountElement = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.cart');
    const cartPanel = document.createElement('div');
    let cartItems = [];

    const initCartPanel = () => {
        cartPanel.className = 'cart-panel';
        document.body.appendChild(cartPanel);

        cartPanel.innerHTML = `
            <div class="cart-header">
                <h2>Votre Panier</h2>
                <span class="close-cart">&times;</span>
            </div>
            <div class="cart-items"></div>
            <div class="cart-total">Total: $0.00</div>
            <div class="cart-buttons">
                <button class="continue-shopping">Continuer les achats</button>
                <button class="checkout-btn">Commander</button>
            </div>
        `;

        cartPanel.querySelector('.close-cart').addEventListener('click', toggleCart);
        cartPanel.querySelector('.continue-shopping').addEventListener('click', toggleCart);
        cartPanel.querySelector('.checkout-btn').addEventListener('click', checkout);
    }

    const toggleCart = () => {
        cartPanel.classList.toggle('active');
    }

    const updateCartDisplay = () => {
        const cartItemsContainer = cartPanel.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach((item, index) => {
            const itemPrice = parseFloat(item.price.replace('$', ''));
            total += itemPrice * item.quantity;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="cart-item-color">Couleur: ${item.color}</p>
                    <p class="cart-item-size">Taille: ${item.size}</p>
                    <p class="cart-item-price">${item.price}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-index="${index}">+</button>
                    </div>
                </div>
                <span class="remove-item" data-index="${index}">&times;</span>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        cartPanel.querySelector('.cart-total').textContent = `Total: $${total.toFixed(2)}`;
        cartCountElement.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('cta-button') && e.target.textContent === 'Ajouter au panier') {
            const productCard = e.target.closest('.category-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productImage = productCard.querySelector('img').src;
            const selectedColor = productCard.querySelector('.product-color').value;
            const selectedSize = productCard.querySelector('.product-size').value;

            const existingItem = cartItems.find(item => 
                item.name === productName && 
                item.color === selectedColor && 
                item.size === selectedSize
            );

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push({
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    color: selectedColor,
                    size: selectedSize,
                    quantity: 1
                });
            }

            updateCartDisplay();

            e.target.style.backgroundColor = '#4ecdc4';
            e.target.textContent = 'Ajouté !';
            setTimeout(() => {
                e.target.style.backgroundColor = '';
                e.target.textContent = 'Ajouter au panier';
            }, 1000);
        }

        if(e.target.classList.contains('quantity-btn')) {
            const index = parseInt(e.target.dataset.index);
            if(e.target.classList.contains('plus')) {
                cartItems[index].quantity++;
            } else if(e.target.classList.contains('minus')) {
                if(cartItems[index].quantity > 1) {
                    cartItems[index].quantity--;
                } else {
                    cartItems.splice(index, 1);
                }
            }
            updateCartDisplay();
        }

        if(e.target.classList.contains('remove-item')) {
            const index = e.target.dataset.index;
            cartItems.splice(index, 1);
            updateCartDisplay();
        }
    });

    cartIcon.addEventListener('click', toggleCart);

    const checkout = () => {
        if(cartItems.length === 0) {
            alert('Votre panier est vide');
            return;
        }

        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.style.display = 'flex';

        let total = cartItems.reduce((sum, item) => {
            return sum + (parseFloat(item.price.replace('$', '')) * item.quantity);
        }, 0);

        modalOverlay.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h2>VALEA KIDS CLOTHING</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="company-info">
                    <p><i class="fas fa-map-marker-alt"></i> 123 Avenue de la Mode</p>
                    <p><i class="fas fa-map-pin"></i> 75008 QUEBEC, Canada</p>
                    <p><i class="fas fa-phone"></i> +33 (0)1 23 45 67 89</p>
                    <p><i class="fas fa-envelope"></i> contact@valeakids.com</p>
                    <p><i class="fas fa-clock"></i> Lun-Ven: 9h-18h</p>
                    <p><i class="fas fa-info-circle"></i> SIRET: 123 456 789 00001</p>
                    <p><i class="fas fa-globe"></i> www.valeakids.com</p>
                </div>
                <div class="order-summary">
                    <h3>Résumé de votre commande</h3>
                    ${cartItems.map(item => `
                        <div class="order-item">
                            <span>${item.quantity}x ${item.name} (${item.color}, ${item.size})</span>
                            <span>$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                    <div class="order-item" style="font-weight: bold;">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                </div>
                <form class="order-form" id="checkout-form">
                    <div class="form-group">
                        <div class="input-with-icon">
                            <i class="fas fa-user"></i>
                            <input type="text" id="firstname" required placeholder="Votre prénom">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-with-icon">
                            <i class="fas fa-user"></i>
                            <input type="text" id="lastname" required placeholder="Votre nom">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-with-icon">
                            <i class="fas fa-home"></i>
                            <input type="text" id="address" required placeholder="Votre adresse">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-with-icon">
                            <i class="fas fa-phone"></i>
                            <input type="tel" id="phone" required placeholder="Votre numéro de téléphone">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input type="email" id="email" required placeholder="Votre email">
                        </div>
                    </div>
                    <button type="submit" class="confirm-order-btn">
                        <i class="fas fa-check"></i> Confirmer la commande
                    </button>
                </form>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        const closeModal = () => {
            modalOverlay.remove();
        };

        modalOverlay.querySelector('.close-modal').addEventListener('click', closeModal);

        modalOverlay.querySelector('#checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre commande ! Vous recevrez un email de confirmation.');
            cartItems = [];
            updateCartDisplay();
            closeModal();
            toggleCart();
        });
    }

    initCartPanel();

    const displayProducts = (category) => {
        const categorySection = document.getElementById('categories');
        
        const oldListing = categorySection.querySelector('.product-listing');
        if (oldListing) {
            oldListing.remove();
        }

        const productListing = document.createElement('div');
        productListing.className = 'product-listing active';

        const categoryProducts = products[category] || [];
        categoryProducts.forEach(product => {
            const starsHTML = generateStarRating(product.rating);
            
            const productCard = document.createElement('div');
            productCard.className = 'category-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="star-rating">
                    ${starsHTML}
                </div>
                <p class="price">${product.price}</p>
                <select class="product-color">
                    ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
                <select class="product-size">
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
                <button class="cta-button">Ajouter au panier</button>
            `;
            productListing.appendChild(productCard);
        });

        categorySection.appendChild(productListing);
    }

    const generateStarRating = (rating) => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    const categorySelect = document.getElementById('category-select');
    if (categorySelect) {
        categorySelect.value = 'vetements';  
        displayProducts('vetements');  

        categorySelect.addEventListener('change', function() {
            const selectedCategory = this.value;
            if (selectedCategory) {
                document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
                
                displayProducts(selectedCategory);
            }
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Merci de votre inscription! Un email de confirmation sera envoyé à ${email}`);
        this.reset();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
