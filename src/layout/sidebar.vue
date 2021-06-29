<template>
	<router-link to='/'>Home</router-link>
	<router-link to='/signin'>signin</router-link>
	<div style="width: 90%">
	  <router-view />
	</div>
</template>

<script>
	export default {
		mounted(){
			this.$store.dispatch('handleChangeAuthState');
		}
	}
</script>