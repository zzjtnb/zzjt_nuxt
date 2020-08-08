}
<template>
	<div>
		<b-form @submit="onSubmit" @reset="onReset" v-if="show">
			<b-form-group id="input-group-1" label="token address:" label-for="input-1" description="We'll never share your token with anyone else.">
				<b-form-input id="input-1" v-model="form.token" type="text" required placeholder="Enter token"></b-form-input>
			</b-form-group>

			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
		<b-card class="mt-3" header="Form Data Result">
			<pre class="m-0">{{ form }}</pre>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				token: "",
			},
			foods: [{ text: "Select One", value: null }, "Carrots", "Beans", "Tomatoes", "Corn"],
			show: true,
		};
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			// alert(JSON.stringify(this.form));
			this.$axios({
				url: "/github/user?access_token=" + this.form.token,
			}).then((res) => {
				// console.log(res);
				if (res.status == 200) {
					this.$cookies.set("TOKEN_KEY", this.form.token, {
						path: "/",
						maxAge: 60 * 60 * 24 * 7,
					});
					this.$store.commit("token/SET_TOKEN", this.form.token);
				}
			});
			// this.$store.dispatch("Authentication", this.form.token);
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values
			this.form.token = "";
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>