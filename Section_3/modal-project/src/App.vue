<template>
  <h1> {{ title }} </h1>
  <p>Welcome Everyone</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="handleModal"/> 
  </div>
  <button @click="handleModal">open modal</button>
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
        showModal : false
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
