<template lang="pug">
router-link(to='/') Home
router-link(to='/signin') signin
div(style="width: 90%")
	router-view
</template>

<script>
	export default {
		mounted(){
			this.$store.dispatch('handleChangeAuthState');
		}
	}
</script>