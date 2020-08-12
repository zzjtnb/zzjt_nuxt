<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="formShow">
    <b-form-group label="标题:">
      <b-form-input v-model="form.title" required placeholder="请输入标题"></b-form-input>
    </b-form-group>
    <b-form-group label="正文:">
      <div class="mavonEditor">
        <no-ssr>
          <mavon-editor ref="md" v-model="form.content" :ishljs="true" :codeStyle="true" codeStyle="agate" />
        </no-ssr>
      </div>
    </b-form-group>
    <div class="text-center">
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </div>
  </b-form>
</template>

<script >
export default {
  data() {
    return {
      form: {
        title: 'This is a sample Markdown',
        content: `---
title: This is a sample Markdown
img: https://images.unsplash.com/photo-1504164996022-09080787b6b3?&h=600&w=800
categories: 前端
tags:
  - JavaScript
---
# First sample H1
## First sample H2Normal text **Bold Text** ***Italic Bold Text*** ~~Strike Through text~~ *Italic Text*
# Second sample H1
## Second sample H2
### Second sample H3
> Quoted text
>
>> Quote within a quote
>>
\`\`\`JavaScript
function myFun() {
var that = this;
return that;
}
\`\`\`
`,
      },
      formShow: true,
    };
  },
  head() {
    return {
      title: '添加博客',
    };
  },
  mounted() {},
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // var str = '---' + '\n';
      // str += 'layout: ' + $('#layout').val() + '\n';
      // str += 'title: ' + $('#title').val() + '\n';
      // str += 'description: ' + $('#desc').val() + '\n';
      // str += 'tags: [' + $('#tags').val() + ']\n';
      // str += 'comments: ' + $('#comments').val() + '\n';
      // str += 'related_blog: [' + $('#related_blog').val() + ']\n';
      // str += '---' + '\n\n';
      // str += $('#editor').val();
      // var obj = {
      //   str: str,
      //   slug: $('#slug').val(),
      // };
      // JSON.stringify(obj),
      // alert(JSON.stringify(this.form));
      let file = {};
      file.name = this.form.title;
      let base64 = require('js-base64').Base64;
      file.content = base64.encode(this.form.content);
      this.$axios.$put('/api/add', { data: { file: file } }).then((res) => {
        console.log(res);
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.formShow = false;
      this.$nextTick(() => {
        this.formShow = true;
      });
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
.v-note-wrapper {
  z-index: 1;
}
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>