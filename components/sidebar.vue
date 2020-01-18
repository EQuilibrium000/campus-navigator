<template>
	<v-navigation-drawer v-model="rightDrawer" right permanent fixed app width="400"></v-navigation-drawer>
</template>

<script>
export default {
	name: 'sidebar',
	data() {
		return {
			rightDrawer: true
		}
	}
}
</script>

<style>
</style>