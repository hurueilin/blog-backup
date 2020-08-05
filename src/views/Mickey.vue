<template>
  <div class="mickey">
  	<button type="button" class="btn btn-info" v-on:click="show = !show">Click to show Mickey</button>
  	<p style="margin:50px"></p>
  	<div id="mickeyPic" v-show="show">
  		<img alt="mickey picture" src="../assets/mickey.jpg" style="width: 75%; height: 70%">
  	</div>
  </div>
</template>

<script>
export default {
 	data: function(){
	    return{
	        show: false
	    }
	}
}
</script>