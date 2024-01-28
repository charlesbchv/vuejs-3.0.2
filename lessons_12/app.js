const app = Vue.createApp({
    //function, data
    //template: '<h2 style="color:red">Je suis createApp du app.js</h2>'
    data() {
        return { //return object
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', age: '40'},
                {title: 'i am legend', author: 'will smith', age: '45'},
                {title: 'seigneur des anneaux', author: 'à préciser car je sais pas', age: '32'},
                {title: 'temet', author: 'willson fils', age: '30'},
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
    }
});


app.mount('#app');

// v-on directive is used to listen to events (like onclick, onmouseover, onkeydown, etc)