<template>
	<div class="pa-5">
		<v-toolbar floating width="100%">
			<v-row>
				<v-text-field
					hide-details
					solo
					flat
					:background-color="searchStarted ? 'grey lighten-3' : 'grey lighten-5'"
					prepend-inner-icon="mdi-magnify"
					placeholder="Search location..."
					full-width
					single-line
					clearable
					@focus="searchStarted = true"
					@blur="searchStarted = false"
				></v-text-field>
				<v-btn icon>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</v-row>
		</v-toolbar>
	</div>
	<!-- <v-app-bar dense floating app color="white">
		<v-text-field hide-details prepend-icon="mdi-magnify" single-line></v-text-field>
	</v-app-bar>-->
</template>

<script>
export default {
	name: 'appbar',
	data() {
		return {
			searchStarted: false
		}
	}
}
</script>

<style>
.v-toolbar__content {
	width: 100%;
}
</style>