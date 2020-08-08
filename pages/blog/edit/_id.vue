<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group label="标题:">
      <b-form-input v-model="form.title" required placeholder="请输入标题"></b-form-input>
    </b-form-group>
    <b-form-group label="正文:">
      <div class="mavonEditor">
        <no-ssr>
          <mavon-editor ref="md" v-model="form.content" :toolbars="markdownOption" :ishljs="true" :codeStyle="true" codeStyle="agate" />
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
  async asyncData({ app, params, query, store, route }) {
    let data = new Buffer(params.id, 'base64').toString(); //base64解码
    // let title = data.split('\\').pop().replace(/\..+$/, '');
    let title = data.replace(/.*\\|\..*$/g, '');
    return await app.$axios.get(`/api/details`, { params: { id: params.id, flag: 'edit' } }).then((res) => {
      let content = res.data;
      return { content: content, title: title };
    });
  },
  data() {
    return {
      form: {
        title: this.title,
        content: this.content,
      },
      show: true,
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助 /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件） /* 1.4.2 */
        navigation: true, // 导航目录 /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐 /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  mounted() {
    this.form.title = this.title;
    this.form.content = this.content;
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
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