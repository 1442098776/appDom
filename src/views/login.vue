<template>
    <div id="login" :style="{height:screenHeight+'px'}">
        <mt-header fixed title="登录"></mt-header>
        <img src="/static/img/logo.png" alt="" title="">
        <form class="mui-input-group">
            <div class="mui-input-row">
                <input type="text" placeholder="手机号/会员名/邮箱" v-model="user" @keyup="up">
            </div>
            <div class="mui-input-row">
                <input :type="type?'password':'text'" class="mui-input-password" placeholder="请输入密码" v-model="password" @keyup="up">
                <span :class="['mui-icon','mui-icon-eye',type?'':'active']" @click="iconEye"></span>
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn" :class="[opacity?'active':'']" ref='submit' @click="submit" :disabled="!opacity">登录</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      screenHeight: window.innerHeight,
      user: "",
      password: "",
      opacity: false,
      type: true
    };
  },
  methods: {
    up(e) {
      let submit = this.$refs.submit;
      if (this.user.trim() != "" && this.password.trim() != "") {
        this.opacity = true;
      } else {
        this.opacity = false;
      }
    },
    //眼睛
    iconEye() { 
      this.type = !this.type;
    },
    //提交
    submit() {
      console.log(this.user)
      localStorage.setItem('userinfo',JSON.stringify(this.user))
      this.$store.commit('user',this.user)
      this.$router.push({path:'/user'})
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  padding-top: 20%;
  background: #fff;
  img {
    display: block;
    margin: 0 auto;
  }
  form {
    margin-top: 40px;
    button {
      display: block;
      width: 90%;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;
      margin: 40px auto 0 auto;
      border: 0;
      color: #fff;
      background: linear-gradient(left, #ffbfce, #ff5980);
      background: -webkit-linear-gradient(left, #ffbfce, #ff5980);
      background: -moz-linear-gradient(left, #ffbfce, #ff5980);
      background: -ms-linear-gradient(left, #ffbfce, #ff5980);
      background: -o-linear-gradient(left, #ffbfce, #ff5980);
      opacity: 0.5;
      &.active {
        transition: all 1s ease;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -ms-transition: all 1s ease;
        -o-transition: all 1s ease;
        opacity: 1;
      }
    }
    span.active{
        color: #007AFF;
    }
    input {
      font-size: 1.4rem;
    }
    .mui-input-row:after {
      right: 10px;
      background: #ffbfce;
    }
  }
  .mui-input-group:before,
  .mui-input-group:after {
    background: none;
  }
}
</style>

