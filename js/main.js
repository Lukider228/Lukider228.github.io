var app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 'kiwi-1000',
                title: 'Kiwi 1000',
                subtitle: 'Determinate Green Elongated',
                highlight: 'Very high yield and excellent fruits quality!',
                description: 'Kiwi Determinate Green Elongated. Very high yield and excellent fruits quality!',
                image: './img/Kiv1.png', // Виправлено шлях та регістр
                resistance: 'HR: PSA, Kiwi Berry Root Rot',
                plant: ['Strong vigor.', 'High productivity.'],
                cycle: ['Spring', 'Summer'],
                fruit: ['Elongated shape.', 'Green flesh.'],
                color: ['Green']
            },
            {
                id: 'kiwi-1001',
                title: 'Kiwi 1001',
                subtitle: 'Determinate Yellow Round',
                highlight: 'Perfect balance of taste and yield!',
                description: 'Kiwi Determinate Yellow Round. Perfect balance of taste and yield!',
                image: './img/Kiv2.png', // Виправлено шлях та регістр
                resistance: 'HR: PSA',
                plant: ['Medium vigor.', 'Heat tolerant.'],
                cycle: ['Summer'],
                fruit: ['Round shape.', 'Yellow flesh.'],
                color: ['Yellow']
            },
            {
                id: 'kiwi-1002',
                title: 'Kiwi 1002',
                subtitle: 'Gold Variety',
                highlight: 'Excellent firmness and long shelf life!',
                description: 'Kiwi Gold Variety. Excellent firmness and long shelf life on plant!',
                image: './img/Kiv3.png', // Виправлено шлях та регістр
                resistance: 'HR: Root Rot',
                plant: ['Compact plant.'],
                cycle: ['Spring'],
                fruit: ['Sweet taste.', 'Smooth skin.'],
                color: ['Gold']
            },
            {
                id: 'kiwi-1003',
                title: 'Kiwi 1003',
                subtitle: 'Jumbo Round',
                highlight: 'Great adaptability to various soil conditions!',
                description: 'Kiwi Jumbo Round. Great adaptability to various soil conditions!',
                image: './img/Kiv4.png', // Виправлено шлях та регістр
                resistance: 'IR: PSA',
                plant: ['Robust plant.', 'Large leaves.'],
                cycle: ['Autumn'],
                fruit: ['Jumbo size.', 'Fuzzy skin.'],
                color: ['Green']
            },
            {
                id: 'kiwi-1004',
                title: 'Kiwi 1004',
                subtitle: 'Baby Round Snack',
                highlight: 'Small sized fruits with exceptional internal quality!',
                description: 'Kiwi Baby Round. Small sized fruits with exceptional internal quality!',
                image: './img/Kiv5.png', // Виправлено шлях та регістр
                resistance: 'HR: TSWV',
                plant: ['Small structure.', 'High density.'],
                cycle: ['Year round'],
                fruit: ['Bite-sized.', 'Edible skin.'],
                color: ['Green']
            }
        ],
        product: [],
        btnVisible: 0,
        cart: [],
        contactFields: {},
        orderSubmitted: false
    },
    mounted() {
        this.getCart();
        this.getProduct(); 
        this.checkInCart();
    },
    methods: {
        getProduct() {
            let urlParams = new URLSearchParams(window.location.search);
            let productId = urlParams.get('id');
            
            if (productId) {
                let foundProduct = this.products.find(p => p.id === productId);
                if (foundProduct) {
                    this.product = [foundProduct];
                }
            }
        },
        addToCart(id) {
            let storedIds = [];
            let lsCart = localStorage.getItem('cart');
            if (lsCart) {
                storedIds = JSON.parse(lsCart);
            }
            if (!storedIds.includes(id)) {
                storedIds.push(id);
                localStorage.setItem('cart', JSON.stringify(storedIds));
            }
            
            this.btnVisible = 1; 
            this.getCart();
        },
        checkInCart() {
            let urlParams = new URLSearchParams(window.location.search);
            let productId = urlParams.get('id');
            let lsCart = localStorage.getItem('cart');
            
            if (lsCart && productId) {
                let storedIds = JSON.parse(lsCart);
                if (storedIds.includes(productId)) {
                    this.btnVisible = 1;
                }
            }
        },
        getCart() {
            let storedIds = [];
            let lsCart = localStorage.getItem('cart');
            if (lsCart) {
                storedIds = JSON.parse(lsCart);
            }
            this.cart = [];
            storedIds.forEach(id => {
                let p = this.products.find(item => item.id === id);
                if (p) {
                    this.cart.push(p);
                }
            });
        },
        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id);
            let updatedIds = this.cart.map(item => item.id);
            localStorage.setItem('cart', JSON.stringify(updatedIds));
        },
        makeOrder() {
            this.orderSubmitted = true;
            this.cart = [];
            localStorage.removeItem('cart');
        }
    }
});