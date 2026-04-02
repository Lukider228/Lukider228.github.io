var app = new Vue({
    el: '#app', // Цей ID має бути на <main> в обох HTML файлах
    data: {
        products: [
            {
                id: 'kiwi-1000',
                title: 'Kiwi 1000',
                subtitle: 'Determinate Green Elongated',
                highlight: 'Very high yield and excellent fruits quality!',
                description: 'Kiwi Determinate Green Elongated. Very high yield and excellent fruits quality!',
                image: 'img/kiv1.png',
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
                image: 'img/kiv2.png',
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
                image: 'img/kiv3.png',
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
                image: 'img/kiv4.png',
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
                image: 'img/kiv5.png',
                resistance: 'HR: TSWV',
                plant: ['Small structure.', 'High density.'],
                cycle: ['Year round'],
                fruit: ['Bite-sized.', 'Edible skin.'],
                color: ['Green']
            }
        ],
        product: [], // Пустий масив для поточного товару
        btnVisible: 0 // Змінна із значенням 0
    },
    methods: {
        getProduct() {
            const hash = window.location.hash;
            if (hash) {
                const productId = hash.substring(1);
                const found = this.products.find(item => item.id === productId);
                if (found) {
                    this.product = [found];
                    // Перевіряємо кошик відразу після знаходження товару
                    this.checkInCart(productId);
                }
            }
        },

        // Надійна функція додавання в localStorage
        addToCart(id) {
            let cart = [];
            try {
                // Пробуємо отримати дані. Якщо там щось зламане, створюємо порожній масив
                let storedCart = localStorage.getItem('cart');
                cart = storedCart ? JSON.parse(storedCart) : [];
                if (!Array.isArray(cart)) cart = [];
            } catch (error) {
                cart = [];
            }
            
            // Якщо id товару ще немає в кошику — додаємо
            if (!cart.includes(id)) {
                cart.push(id);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            
            // Змінюємо видимість кнопок
            this.btnVisible = 1;
        },

        // Надійна функція перевірки
        checkInCart(id) {
            let cart = [];
            try {
                let storedCart = localStorage.getItem('cart');
                cart = storedCart ? JSON.parse(storedCart) : [];
                if (!Array.isArray(cart)) cart = [];
            } catch (error) {
                cart = [];
            }

            if (cart.includes(id)) {
                this.btnVisible = 1;
            } else {
                this.btnVisible = 0;
            }
        }
    },
    mounted() {
        // Викликаємо пошук товару при завантаженні сторінки
        this.getProduct();
    }
});