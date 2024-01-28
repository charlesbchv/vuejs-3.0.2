const app = Vue.createApp({
    //function, data
    //template: '<h2 style="color:red">Je suis createApp du app.js</h2>'
    data() {
        return { //return object
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
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