const app = Vue.createApp({
    //function, data
    //template: '<h2 style="color:red">Je suis createApp du app.js</h2>'
    data() {
        return { //return object
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
        }
    },
});


app.mount('#app');