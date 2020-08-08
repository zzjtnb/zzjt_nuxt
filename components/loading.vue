<!--  -->
<template>
	<div v-if="loading" class="loading-page">
		<b-overlay show spinner-variant="primary" spinner-type="grow" no-wrap fixed z-index="1300"></b-overlay>
	</div>
</template>

<script>
export default {
	notifications: {
		showLoginError: {
			// You can have any name you want instead of 'showLoginError'
			title: "Login Failed",
			message: "Failed to authenticate",
			type: "error" // You also can use 'VueNotifications.types.error' instead of 'error'
		}
	},
	data: () => ({
		loading: false
	}),
	methods: {
		start() {
			this.loading = true;
		},
		finish() {
			this.loading = false;
		}
	},
	components: {}
};
</script>

<style scoped lang='scss'>
</style>