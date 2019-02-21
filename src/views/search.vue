<template>
  <div id="search">
    <mt-header fixed title="搜索"></mt-header>
    <div class="search">
      <div class="flex">
        <span class="mui-icon mui-icon-search"></span>
        <input type="search" placeholder="搜索您想要卷发棒?" v-model="value" @keyup="search">
        <span @click="clear">清除</span>
      </div>
    </div>
    <ul>
      <router-link to="/particulars" v-for="item in list" :key="item.id" tag="li">
          {{item.text}}
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      value: "",
      list:[
        {id:0,text:'吹风机',good_id:20},
        {id:1,text:'卷发器',good_id:21},
        {id:2,text:'直发器',good_id:22}
      ]
    };
  },
  methods: {
    search() {
      let value = this.value.trim();
      if (value.length == 0) {
        this.list=[]
        return;
      } else {
        console.log(value);
        this.$http.get(),
          then(res => {
            console.log(res);
          });
      }
    },
    clear() {
      this.value = "";
      this.list=[]
    }
  }
};
</script>
<style lang="scss" scoped>
#search {
  padding-top: 41px;
  font-size: 15px;
  font-weight: 500;
  .search {
    padding: 7px 0;
    & > div {
      margin: 0 auto;
      position: relative;
      padding: 0 15px;
      
      .mui-icon-search {
        $bg: none !default;
        background: $bg;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 25px;
        color: #bbbbbb;
      }
      input {
        $border: 0.5px solid #eaeaea !default;
        $h: 34px !default;
        border: $border;
        border-radius: 17px;
        height: $h;
        line-height: 35px;
        padding: 0 40px;
        margin: 0;
        color: #353535;
        text-align: left;
        background: #fff;
        width: 81%;
        margin-right: 15px;
      }
      span {
        color: #999999;
        height: 34px;
        line-height: 34px;
      }
    }
  }
  ul{
      li{
        display: block;
        height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #EAEAEA;
        background: #fff;
        padding-left: 25px;
        color: #999999;
        &:last-of-type{
          border-bottom: 0;
        }
      }
    }
}
</style>

