<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import headerK from '../components/headerk.vue';
import lateral from '../components/barre_lateral.vue'
import  le_rest from '../components/le_rest.vue'

</script>

<template>
  <main>
    <headerK></headerK>
 
   <lateral></lateral>
   <HelloWorld ></HelloWorld> 
   <le_rest></le_rest>
  </main>
</template>
