<template>
	<v-app>
		<Sidebar />
		<v-content>
			<v-card flat height="95vh">
				<Appbar />
				
				<nuxt />
			</v-card>
		</v-content>

		<v-footer :fixed="true" app>
			<span>&copy; {{ currentYear }}</span>
		</v-footer>
	</v-app>
</template>

<script>
import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'

export default {
	components: { Appbar, Sidebar },
	data() {
		return {}
	},
	computed: {
		currentYear() {
			let date = new Date().getFullYear()
			return date
		}
	}
}
</script>
