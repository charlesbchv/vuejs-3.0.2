<template>
  <h1> {{ title }} </h1>
  <p>Welcome Everyone</p>
  <div v-if="showModal">
    <Modal theme="" @close="handleModal"> 
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price</p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo"> 
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price</p>
    </Modal>
  </div>
  <button @click="toggleModalTwo">open modal</button>
  <button @click="toggleModalTwo">open 2nd modal</button>
  <!-- <input type="text" ref="name"> -->
  <!-- <button @click="handleClick">click me</button> -->

  <!-- on peut mettre des props
  ici, props c'est comme des attributs html; et attributs c'est 
  comme des variables -->                                               
</template>


<script>
import Modal from "./components/Modal.vue"; 

export default {
  name: 'Application',
  components : {
    Modal
  },
  data() {
    return {
        title : 'My first Vue app',
        header : 'Sign up for the Giveaway',
        text : 'Grab your ninja swag for half price',
        showModal : false,
        showModalTwo : false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    handleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ccc;
  display: inline-block;
  background-origin: padding-box;
  font-size: 60px;
  margin-bottom: 60px;
}
</style>
