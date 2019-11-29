<template>
  <div id="app">
    <van-button type="primary" @click="onToast">主要按钮</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);

import { Toast } from 'vant';
Vue.use(Toast);

export default {
  name: 'app',
  methods: {
    onToast() {
      Toast('提示');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
