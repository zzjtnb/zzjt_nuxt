}
<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="token address:" label-for="input-1" description="We'll never share your token with anyone else.">
        <b-form-input id="input-1" v-model="form.token" type="password" required placeholder="Enter token"></b-form-input>
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
  head() {
    return {
      title: '登录',
    };
  },
  data() {
    return {
      form: {
        token: '',
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$axios('/github/user?access_token=' + this.form.token).then((res) => {
        if (res.status == 200) {
          this.$cookies.set('TOKEN_KEY', this.form.token, {
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
          });
          this.$bvToast.toast('登陆成功', {
            title: '提示',
            variant: 'success',
            solid: true,
          });
          this.$router.replace({ path: '/' });
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.token = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>