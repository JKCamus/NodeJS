<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <img alt="freedom" src="./assets/img/freedom.png" style="width: 500px" />

    <HelloWorld msg="camus's vue template" />
  </div>
</template>

<script>
import HelloWorld from "components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created: function () {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
