<template>
    <div id="register">
        <mt-header fixed title="新用户注册"></mt-header>
        <h2>账号信息填写</h2>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <input type="text" placeholder="手机号/会员名/邮箱" required v-model="user" @keyup="up">
            </div>
            <p>不能为空</p>
            <div class="mui-input-row">
                <input :type="type?'password':'text'" class="mui-input-password" placeholder="请输入密码" v-model="password" @keyup="up">
                <span :class="['mui-icon','mui-icon-eye',type?'':'active']" @click="iconEye"></span>
            </div>
            <p>5-25位字符，至少包含英文字母，数字，符号中的两种组成</p>
            <div class="mui-button-row">
                <button type="button" class="mui-btn" :class="[opacity?'active':'']" ref='submit' @click="submit" :disabled="!opacity">注册</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: "register",
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
        if(/(?!^\d+$)(?!^[A-Za-z]+$)(?!^_+$)^\w{5,25}$/.test(this.password.trim())==true){
            console.log('aaaaa')
        }else{
            this.$toast({
            message: "格式错误，检查所输入的值!",
            position: "middle ",
            duration: 2000
          });
        }
    }
  }
};
</script>
<style lang="scss" scoped>
#register {
  padding-top: 20%;
  background: #fff;
  h2 {
    padding-left: 15px;
  }
  form {
    margin-top: 20px;
    p{
        padding:5px 15px 0;
    }
    button {
      display: block;
      width: 90%;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;
      margin: 0 auto;
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
    span.active {
      color: #007aff;
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

