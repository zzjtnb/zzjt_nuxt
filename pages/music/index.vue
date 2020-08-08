<!--  -->
<template>
	<div>
		<div>音乐</div>
		<!-- <client-only>
			<mavon-editor v-model="blog" :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :ishljs="true" codeStyle="agate" />
		</client-only>-->
		<div>{{blog}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {},
	components: {},
	async asyncData({ app, params, query, store, route }) {
		let blog = "";
		//https://api.github.com/search/code?q=测试+in:file+repo:zzjtnb/images
		//https://api.github.com/search/code?q=%E6%B5%8B%E8%AF%95+user:zzjtnb+org:images

		let url = "https://api.github.com/repos/zzjtnb/images/contents/test.md";
		await app.$axios
			.get(url, {
				headers: {
					"content-type": "application/json"
				}
			})
			.then(res => {
				var patt = /date.*?\n/;
				let data = new Buffer(res.data.content, "base64").toString(); //base64解码
				console.log(patt.exec(data));
				blog = patt.exec(data)[0];
				console.log(data);
			});
		return { blog };
	}
};
</script>

<style scoped lang='scss'>
</style>