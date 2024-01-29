const app = Vue.createApp({
    //function, data
    //template: '<h2 style="color:red">Je suis createApp du app.js</h2>'
    data() {
        return { //return object
            url: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', age: '40', img: 'assets/1.jpg', isFav: true},
                {title: 'i am legend', author: 'Francis Lawrence', age: '45', img: 'assets/2.jpg', isFav: false},
                {title: 'seigneur des anneaux', author: 'Peter Jackson', age: '32', img: 'assets/3.jpg', isFav: true},
                {title: 'At The Center of The Storm', author: 'George Tenet', age: '30', img: 'assets/4.jpg', isFav: false},
            ]
        }
    },
    methods: { //methods object to store methods (functions) that we want to use in our app (in our template) 
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data) {
                console.log(data);
            }
        },
        handleEventMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toogleFav(book) {
            book.isFav = !book.isFav;
        }
    }
});


app.mount('#app');

// v-on directive is used to listen to events (like onclick, onmouseover, onkeydown, etc)