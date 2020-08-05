<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button type="button" class="btn btn-warning" v-on:click="pressBtn">PRESS ME 請按我</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    pressBtn(){
    	alert('You pressed "PRESS ME!"');
    }
  }
}
</script>