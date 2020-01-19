<template>
	<v-navigation-drawer v-model="rightDrawer" right bottom permanent fixed app width="400">
		<v-card class="mx-auto" max-width="400">
			<v-card-title>
				<p class="title">Welcome to The Federal University of <br>Technology Akure, Ondo State Nigeria.</p>
			</v-card-title>
			<v-img
			class="white--text align-end"
			height="200px"
			src="https://www.futa.edu.ng/asset/img/home1/team/1.jpg">
				<v-card-title class="#424242--text">School of Earth and Mineral Sciences</v-card-title>
			</v-img>

    		<v-card-subtitle class="pb-0">Description</v-card-subtitle>

    		<v-card-text class="text--primary">
				<div>The School of Earth and Mineral Sciences (SEMS) was established in 1983 at the inception of the University. However, 
					as a result of the re-organization of the Federal University of Technology (FUTs) in 1988, the SEMS academic programmes were broken up and relocated to School of Sciences (SOS), 
					and School of Engineering and Engineering Technology (SEET), thus bringing about the demise of a School (SEMS) that was intended by the Founding Fathers of FUTA to make 
					significant impacts on earth sciences and its numerous applications and benefits.
				</div>
    		</v-card-text>

			<v-card-actions>
			
			<v-btn color="orange" text to="link..... to faculty page on futa site">
				 Explore
			</v-btn>
			</v-card-actions>
			<v-divider></v-divider>
			<v-card>
				Distance and Time query will be shown here
			</v-card>
		</v-card>

	</v-navigation-drawer>
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