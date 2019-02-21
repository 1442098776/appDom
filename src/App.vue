<template>
  <div id="app">
    <span slot="left" class="goBack" v-show="falg" @click="goBack">
      <mt-button icon="back">返回</mt-button>
    </span>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      falg: true
    };
  },
  mounted() {
    if (this.$route.path == "/index") {
      this.falg = false;
    }
  },
  methods: {
    goBack() {
      if (this.$route.path == "/index") {
        return;
      } else {
        this.$router.go(-1);
      }
    }
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (newVal == "/index") {
        this.falg = false;
      } else {
        this.falg = true;
      }
    }
  },
  components: {}
};
</script>
<style>
.goBack {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background: none;
}
.mint-header.is-fixed {
  z-index: 100 !important;
}
.goBack button {
  background: none;
  box-shadow: none;
  color: white;
  font-size: 1.4rem !important;
}
html {
  font-size: 62.5%;
}
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz--webkit-box-sizing: border-box;
  -ms--webkit-box-sizing: border-box;
  -o--webkit-box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "PingFang-SC-Medium";
  -webkit-text-size-adjust: none;
  font-weight: 500;

  /* color: #353535; */
}
img {
  max-width: 100%;
  height: auto;
}
ul {
  list-style-type: none;
}
.flex {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.flex-justify{
  justify-content: space-between;
  align-items: center;
}
.img-responsive{
  max-width: 100%;
  height: auto;
}
.text-center {
  text-align: center;
}
.container {
  position: relative;
}
.mint-header {
  background: #fd7b9a !important;
}

body {
  background: #fafafa !important;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active,.v-move {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
}
.v-leave-active{
  position: absolute;
}
a {
  color: #353535;
}
</style>
