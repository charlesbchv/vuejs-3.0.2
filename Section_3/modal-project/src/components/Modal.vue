<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal title</h1>
            <p>Modal content</p>
        </div>
    </div>
</template>


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
</style>