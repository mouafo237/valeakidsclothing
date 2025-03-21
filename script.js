const titles = [
    "Collection Printemps-Été 2024",
    "Nouvelle Collection Kids",
    "Style Enfant Tendance",
    "Mode Junior 2024"
];

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4',
        title: 'Collection Enfant 2024',
        subtitle: 'Des vêtements confortables et élégants pour vos petits'
    },
    {
        image: 'https://images.unsplash.com/photo-1519457431-44149deb6f05',
        title: 'Nouvelle Collection Printemps',
        subtitle: 'Découvrez nos pièces colorées et tendances'
    },
    {
        image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d',
        title: 'Collection Été',
        subtitle: 'Des tenues légères et confortables pour les beaux jours'
    },
    {
        image: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7',
        title: 'Accessoires Enfants',
        subtitle: 'Complétez leurs tenues avec nos accessoires adorables'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    let currentTitleIndex = 0;

    function updateTitle() {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            heroTitle.textContent = titles[currentTitleIndex];
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateX(0)';
        }, 500);
    }

    // Change title every 3 seconds
    setInterval(updateTitle, 3000);

    // Add hover effect for title
    heroTitle.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.textShadow = '2px 2px 8px rgba(255, 107, 107, 0.4)';
    });

    heroTitle.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
    });

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
                    <h2>VALEA KIDS CLOTHING - Confirmer commande</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="company-info">
                    <h3>Informations de la société</h3>
                    <p><i class="fas fa-building"></i> VALEA KIDS CLOTHING</p>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Rue de la Mode, 75001 Paris</p>
                    <p><i class="fas fa-phone"></i> +33 1 23 45 67 89</p>
                    <p><i class="fas fa-envelope"></i> contact@valeakids.com</p>
                    <p><i class="fas fa-globe"></i> www.valeakids.com</p>
                    <p><i class="fas fa-info-circle"></i> SIRET: 123 456 789 00012</p>
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

    const products = {
        vetements: [
            {
                name: "Duo Chic LV",
                price: "$19.99",
                image: "img/a.png",
                category: "vetements",
                rating: 4,
                colors: ["exclusive"],
                sizes: ["6-7 ans", "8-9 ans"]
            },
            {
                name: "Ensemble Racing Kid",
                price: "$29.99",
                image: "img/b.png",
                category: "vetements",
                rating: 5,
                colors: ["exclusive"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Ensemble Géométrique Chic",
                price: "$24.99",
                image: "img/c.png",
                category: "vetements",
                rating: 4,
                colors: ["exclusive "],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Ensemble Streetwear Junior",
                price: "$34.99",
                image: "img/d.png",
                category: "vetements",
                rating: 5,
                colors: ["exclusive"],
                sizes: ["4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Ensemble Rose Poudré Fille",
                price: "$22.99",
                image: "img/e.png",
                category: "vetements",
                rating: 4,
                colors: ["Rose", "Noir", "Jaune"],
                sizes: ["6-7 ans", "8-9 ans"]
            },
            {
                name: "Tenue Écolière Chic",
                price: "$39.99",
                image: "img/f.png",
                category: "vetements",
                rating: 5,
                colors: ["exclusive"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Costume Élégant Garçon",
                price: "$27.99",
                image: "img/g.png",
                category: "vetements",
                rating: 4,
                colors: ["exclusive"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Ensemble Sportswear Fille - Rose Cœur & Casquette",
                price: "$49.99",
                image: "img/h.png",
                category: "vetements",
                rating: 5,
                colors: ["exclusive"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/i.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/j.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/k.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
             {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/l.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
             {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/m.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
             {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/n.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
             {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/o.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
             {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/p.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
             {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/q.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/r.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/s.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/t.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/u.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/v.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/x.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/y.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/z.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a1.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a2.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a3.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a4.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a5.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a6.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jupe Plissée",
                price: "$26.99",
                image: "img/a7.png",
                category: "vetements",
                rating: 4,
                colors: ["Rouge", "Bleu", "Vert"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            }
        ],
        chaussures: [
            {
                name: "Baskets Sport",
                price: "$34.99",
                image: "img/c1.png",
                category: "chaussures",
                rating: 4,
                colors: ["Blanc", "Noir", "Gris"],
                sizes: ["26", "27", "28", "29", "30"]
            },
            {
                name: "Bottes Pluie",
                price: "$32.99",
                image: "img/c2.png",
                category: "chaussures",
                rating: 5,
                colors: ["Noir", "Gris", "Bleu"],
                sizes: ["26", "27", "28", "29", "30"]
            },
            {
                name: "Bottes Pluie",
                price: "$32.99",
                image: "img/c3.png",
                category: "chaussures",
                rating: 5,
                colors: ["Noir", "Gris", "Bleu"],
                sizes: ["26", "27", "28", "29", "30"]
            },
            {
                name: "Sneakers Mode",
                price: "$39.99",
                image: "img/c4.png",
                category: "chaussures",
                rating: 5,
                colors: ["Noir", "Gris", "Bleu"],
                sizes: ["26", "27", "28", "29", "30"]
            }
        ],
        lunettes: [
            {
                name: "Lunette 1",
                price: "$14.99",
                image: "img/l1.png",
                category: "bebe",
                rating: 5,
                colors: ["Blanc", "Rose", "Bleu"],
                sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
            },
            {
                name: "Pyjama Bébé",
                price: "$19.99",
                image: "img/l2.png",
                category: "bebe",
                rating: 4,
                colors: ["Blanc", "Noir", "Gris"],
                sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
            },
            {
                name: "Grenouillère",
                price: "$22.99",
                image: "img/l3.png",
                category: "bebe",
                rating: 5,
                colors: ["Rose", "Jaune", "Blanc"],
                sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
            },
            {
                name: "Ensemble Naissance",
                price: "$29.99",
                image: "img/l4.png",
                category: "bebe",
                rating: 4,
                colors: ["Blanc", "Noir", "Gris"],
                sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
            },
            {
                name: "Bavoir Pack",
                price: "$12.99",
                image: "img/l5.png",
                category: "bebe",
                rating: 5,
                colors: ["Blanc", "Rose", "Bleu"],
                sizes: ["0-3 mois", "3-6 mois", "6-9 mois", "9-12 mois"]
            }
            
        ],
        accessoires: [
            {
                name: "Ensemble Sport",
                price: "$39.99",
                image: "img/sac1.png",
                category: "enfant",
                rating: 4,
                colors: ["Bleu", "Vert", "Jaune"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Veste Mi-saison",
                price: "$44.99",
                image: "img/sac2.png",
                category: "enfant",
                rating: 5,
                colors: ["Noir", "Gris", "Bleu"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "Jean Confort",
                price: "$29.99",
                image: "img/sac3.png",
                category: "enfant",
                rating: 4,
                colors: ["Bleu", "Noir", "Gris"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            },
            {
                name: "T-shirt Imprimé",
                price: "$19.99",
                image: "img/sac4.png",
                category: "enfant",
                rating: 5,
                colors: ["Blanc", "Rouge", "Bleu"],
                sizes: ["2-3 ans", "4-5 ans", "6-7 ans", "8-9 ans"]
            }
            
        ]
    };

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

    // Add sidebar functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const closeSidebar = document.querySelector('.close-sidebar');

    const toggleSidebar = () => {
        sidebarMenu.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking on a link
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', () => {
            sidebarMenu.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    });
});
