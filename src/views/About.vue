<template>
  <div class="about">
  	<button type="button" class="btn btn-success" v-on:click="startBtn">Start the engine</button>
  </div>
</template>

<script>
export default {
 	methods: {
 		startBtn(){
    		alert('Start the engine...');
    	}
  	}
}
</script>