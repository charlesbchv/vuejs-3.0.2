<template>
    <div class="backdrop">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'header',
            'text',
            'theme'
        ],
    }
</script>

<!-- <style scope> on peut ecrire ça et remplacer le .modal h1 par h1 tout court-->
<style>
    .backdrop {
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
    .modal h1 {
        color : #03cfb4;
        border: none;
        padding: 0;
    }
    .modal p {
        font-style: normal;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    /* .modal.sale h1{
        color:white;
    } */
</style>