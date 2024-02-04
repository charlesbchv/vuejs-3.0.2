<template>
    <div class="backdrop" @click.self="closeModal"> 
        <!-- @click.self="closeModal" permet de fermer le modal si on clique en dehors du modal et sur modal en lui mm -->
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
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
        methods:{
            closeModal() {
                this.$emit('close'); // $emit est une fonction qui permet d'envoyer un evenement
            }
        }
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
    .modal.sale h1{
        color:white;
    }
    .modal .actions {
        text-align: center;
        margin: 30px 0 5px 0;
    }
    .modal .actions a {
        padding: 8x;
        color: #333;
        border: 1px solid #eee;
        border-radius: 3px;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale .actions {
        color:white;
    }
    .modal.sale .actions a {
        color:white;
    }
</style>