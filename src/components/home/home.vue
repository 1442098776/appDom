<template>
    <div id="home">
        <transition>
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab" style=" touch-action: none;">
            <router-link class="mui-tab-item" to="/index">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/sort">
                <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{this.$store.getters.carNum}}</span>
                </span>
                <span class="mui-tab-label">购物</span>
            </router-link>
            <router-link class="mui-tab-item" to="/user">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">个人中心</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    var _this = this;
    this.mui('.mui-bar-tab').on('tap','a',function(){
        var path= this.getAttribute('href');
         _this.$router.push({path:path})
    });
  },
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#home {
  overflow-x: hidden;
  padding-bottom:50px;
  .mui-active {
    color: #fd7b9a !important;
  }
  .mui-bar-tab {
    bottom: 0;
    display: table;
    width: 100%;
    height: 50px;
    padding: 0;
    table-layout: fixed;
    border-top: 0;
    border-bottom: 0;
    -webkit-touch-callout: none;
  }
  .mui-bar {
    position: fixed;
    z-index: 100;
    right: 0;
    left: 0;
    bottom: 0;
    height: 44px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 0;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.85);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.85);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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
  .v-leave-active {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
  }
}
</style>




