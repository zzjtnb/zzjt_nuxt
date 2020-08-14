<template>
  <b-form role="search" class="w-100">
    <b-form-input list="input-list" autocomplete="off" type="search" placeholder="输入关键字" class="searchInput" v-model="searchValue" @keyup.native.stop.passive="searchData"></b-form-input>

    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="12" cols-xl="12">
      <b-list-group tag="ul" :class="{'list':!this.$store.state.common.isMobile}">
        <b-list-group-item flush tag="li" class="flex-column align-items-start bg-servquick text-white" v-for="(item,index) in searchList" :key="index" @click="goDetails(item.id)">
          <div class="d-flex justify-content-between">
            <h6 class="mb-1">{{item.attributes.title}}</h6>
            <small>{{item.date}}</small>
          </div>
          <p class="summary mb-1 pr-0 mr-0" :class="{'block-with-text':item.body.length>130}">{{item.body}}</p>
          <small>{{item.attributes.categories}}</small>
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </b-form>
</template>

<script>
import utils from '../utils/util';
export default {
  data() {
    return {
      searchValue: '',
      searchList: [],
    };
  },
  watch: {
    searchValue: function (newVal, oldVal) {
      // console.log('new: %s, old: %s', newVal, oldVal);
      if (this.searchValue == '') {
        this.searchList = [];
      }
    },
  },
  mounted() {},
  methods: {
    getData() {
      this.$axios('/api/search', { params: { searchValue: this.searchValue } }).then((res) => {
        this.searchList = res.data;
      });
    },
    searchData(event) {
      let data = event.target.value;
      // this.$toast('注销成功', '提示', 'success');
      // utils.debounce(this.getData, 1000);
      if (data != '') {
        this.$utils.debounce(this.getData, 1000);
      }
    },
    goDetails(path) {
      if (path == this.$route.path) {
        this.searchValue = '';
      } else {
        this.$router.push(`/blog/details/${path}`);
        this.searchValue = '';
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.searchInput {
  color: #fff;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #fff;
  box-shadow: none;
  background-image: none;
  background-color: transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input[type='search']:focus:not([readonly]) {
  box-shadow: 0 0 0 0 #8ff442;
  border-bottom: 1px solid #8ff442;
}

input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  background: url('../assets/images/x.png') no-repeat;
  background-size: contain;
}

input::placeholder {
  color: #ffffffb0;
  font-size: 0.9rem;
}
.list-group {
  position: absolute;
  text-align: left;
  margin-top: -1px;
  z-index: 989;
  cursor: default;
  height: 40rem;
  overflow: auto;
}
.list-group-item {
  border: none;
  border-bottom: 2px dashed #51606b;
}
.list {
  max-width: 30rem;
}
li:last-child {
  border: none;
  // padding-bottom: 16rem;
}
// 滚动条
.list-group::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}

.list-group::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.list-group::-webkit-scrollbar-thumb {
  border-radius: 10px;
  // background-image: linear-gradient(to top, #30cfd0 0%, #ff9800 80%);
  background-image: linear-gradient(180deg, #fa8bff 0%, #2bd2ff 52%, #5ce466 90%);
}

.list-group::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #82b1ff;
  border-radius: 4px;
}
</style>
