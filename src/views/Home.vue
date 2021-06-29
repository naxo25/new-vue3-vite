<template>
	Home
	<img src="/favicon.ico" alt="">
	<ol v-for='user in $store.state.users'>
		<li> 
			<img :src="user.picture.large" alt="">
			{{ user.name.first }}
		</li>
	</ol>
</template>

<script>
	export default {
		data (){
			return{
			}
		}
	}
</script>