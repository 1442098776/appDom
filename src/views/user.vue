<template>
    <div id="user" :style="{height:screenHeight+'px',background:user==null?'#fff':''}">
        <mt-header fixed title="个人中心"></mt-header>
        <section class="section" v-if="user==null">
            <img src="/static/img/logo.png" alt="" title="">
            <router-link to="/login" size="large" tag="mt-button">登录</router-link>
            <router-link to="/register" size="large" tag="mt-button">新用户注册</router-link>
        </section>
        <section class="section1" v-else>
            <header class="header text-center container">
                <section>
                    <img src="/static/img/polygon.png" @click="lot" alt="">
                    <!-- <img src="/static/img/polygon1.png" alt=""> -->
                </section>
                <div>
                    <img src="/static/img/logo.png" alt="">
                </div>
                <p class="text-center">{{user}}</p>
            </header>
            <section class="content">
                <router-link to="" tag="section" class="flex">
                    <div>我的订单</div>
                    <div>
                        <img src="/static/img/right.png" alt="">
                    </div>
                </router-link>
                <section class="flex">
                    <router-link to="" v-for="item in list" :key="item.state">
                        <section class="flex">
                            <img :src="item.img" alt="">
                            <span></span>
                        </section>
                        <section class="text-center">{{item.text}}</section>
                    </router-link>
                </section>
            </section>
            <section class="content1">
                <section class="flex">
                    <span>我的钱包</span>
                    <img src="/static/img/problem.png" alt="">
                </section>
                <router-link to="" tag="section" class="text-center">
                    <h1>￥{{money}}</h1>
                    <p>可提现金额</p>
                </router-link>
            </section>
            <section class="content2 flex">
                <router-link to="" class="text-center flex" v-for="item in manage" :key="item.text">
                    <img :src="item.img" alt="">
                    <section>{{item.text}}</section>
                </router-link>
            </section>
        </section>
        <section :class="['section2',popup?'popup1':'popup']">
            <section>
                <span class="close flex" @click="close">
                    <img src="/static/img/close.png" alt="">
                </span>
                <header><img src="/static/img/signIn.png" alt=""></header>
                <section class="flex">
                    <img src="/static/img/integral.png" alt="" title="">
                    <p class="text-center">恭喜您获得{{integral.num}}积分</p>
                </section>
                <section class="flex">
                    <section v-for="(item,index) in week" :key="item" :class='[index+1==day?"active":"",index+1<day?"past":"","text-center","flex"]'>
                        <section>{{item}}</section>
                        <section v-if="index+1===day">
                            <img src="/static/img/face.png" title="" alt="">
                        </section>
                        <section v-else>
                            <section v-for="item in 3" :key="item" class="nullBorder"></section>
                        </section>
                    </section>
                </section>
                <router-link to="" class="text-center">前往抽奖</router-link>
                <p class="text-center">我的积分:{{integral.total}}</p>
            </section>
        </section>
    </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      screenHeight: window.innerHeight - 50,
      user: this.$store.state.userinfo,
      popup:false,
      week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      day: new Date().getUTCDay(),
      integral: {
        num: 50,
        total: 0
      },
      list: [
        { state: 1, img: "/static/img/3.png", text: "待付款" },
        { state: 2, img: "/static/img/4.png", text: "待成团" },
        { state: 3, img: "/static/img/5.png", text: "待发货" },
        { state: 4, img: "/static/img/6.png", text: "待收货" },
        { state: 6, img: "/static/img/7.png", text: "退款/售后" }
      ],
      money: 20,
      manage: [
        { img: "/static/img/8.png", text: "地址管理" },
        { img: "/static/img/9.png", text: "客服管理" },
        { img: "/static/img/10.png", text: "常见问题" },
        { img: "/static/img/11.png", text: "购物攻略" },
        { img: "/static/img/12.png", text: "系统公告" }
      ]
    };
  },
  created() {
    console.log(this.user);
  },
  methods: {
      lot(){
          this.popup=true
      },
      close(){
          this.popup=false;
      }
  }
};
</script>
<style lang="scss" scoped>
#user {
  padding-top: 41px;
  overflow-y: auto;
  .section {
    width: 100%;
    height: 100%;
    padding-top: 20%;
    img {
      display: block;
      margin: 0 auto;
    }
    button {
      display: block;
      width: 90%;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;
      margin: 20px auto;
      &:first-of-type {
        margin-top: 40px;
        color: #fff;
        background: linear-gradient(left, #ffbfce, #ff5980);
        background: -webkit-linear-gradient(left, #ffbfce, #ff5980);
        background: -moz-linear-gradient(left, #ffbfce, #ff5980);
        background: -ms-linear-gradient(left, #ffbfce, #ff5980);
        background: -o-linear-gradient(left, #ffbfce, #ff5980);
      }
      &:last-of-type {
        background: #fff;
        border: 1px solid #fd7b9a;
        color: #fd7b9a;
      }
    }
  }
  .section1 {
    .header {
      width: 100%;
      height: 200px;
      background: url("/static/img/userBg.png") no-repeat;
      background-size: 100% 100%;
      padding-top: 28px;
      & > section {
        position: absolute;
        top: 0;
        right: 17px;
        img {
          display: block;
          width: 28px;
        }
      }
      & > div {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        margin: 0 auto 12px auto;
        img {
          display: block;
          margin: 0 auto;
        }
      }
      & > p {
        font-size: 1.5rem;
        color: #353535;
      }
    }
    .content {
      background: #fff;
      margin-bottom: 10px;
      & > section {
        &:first-of-type {
          height: 44px;
          justify-content: space-between;
          font-size: 1.5rem;
          align-items: center;
          padding: 0 15px;
          border-bottom: 0.5px solid #eaeaea;
          img {
            display: block;
            width: 8px;
            height: 14px;
          }
        }
        &:last-of-type {
          & > a {
            display: block;
            width: 20%;
            font-size: 1.1rem;
            padding: 20px 0;
            & > section:first-of-type {
              position: relative;
              justify-content: center;
              & > img {
                display: block;
                width: 30px;
                height: 30px;
                margin-bottom: 12px;
              }
            }
          }
        }
      }
    }
    .content1 {
      background: #fff;
      padding: 15px;
      margin-bottom: 10px;
      & > section {
        &:first-of-type {
          justify-content: space-between;
          font-size: 1.5rem;
          img {
            display: block;
            width: 21px;
            height: 21px;
          }
        }
        &:last-of-type {
          h1 {
            font-size: 4rem;
            margin: 37px 0 16px;
          }
          p {
            margin-bottom: 28px;
            font-size: 0.11rem;
          }
        }
      }
    }
    .content2 {
      background: #fff;
      margin-bottom: 25px;
      & > a {
        display: block;
        width: 25%;
        justify-content: center;
        padding: 22px 0 20px;
        font-size: 1.1rem;
        &:not(:last-of-type) {
          border-bottom: 0.5px solid #eaeaea;
        }
        img {
          width: 30px;
          height: 30px;
          margin-bottom: 15px;
        }
      }
    }
  }
  .popup{
      display: none;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
  }
  .popup1{
      display:block;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
  }
  .section2 {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    & > section {
      width: 88%;
      margin: 20% auto 0 auto;
      background: #fff;
      position: relative;
      .close {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        background: #fff;
        text-align: center;
        align-items: center;
        justify-content: center;
        img {
          width: 10px;
          height: 10px;
        }
      }
      & > header {
        width: 100%;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      & > section {
        &:first-of-type {
          justify-content: center;
          padding: 35px 0 47px;
          img {
            width: 48px;
            height: 38px;
          }
          p{
              margin-top: 11px;
              width: 100%;
              font-size: 1.5rem;
              color: #353535;
          }
        }
        &:last-of-type {
          padding: 0 15px 37px;
          width: 100%;
          & > section {
            width: 10%;
            height: 40px;
            overflow: hidden;
            font-size: 1.2rem;
            border: 0.5px solid #fe5443;
            margin-right: 5%;
            border-radius: 5px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            -ms-border-radius: 5px;
            -o-border-radius: 5px;
            &:last-child {
              margin-right: 0;
            }
            section {
                width: 100%;
              color: #fe5443;
            }
            & > section:last-child {
              width: 100%;
              img {
                width: 15px;
                height: 15px;
              }
            }
            .nullBorder {
              margin: 0 auto 0.5px auto;
              width: 14px;
              height: 4px;
              border: 0.5px solid #fe5443;
              border-radius: 50%;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              -ms-border-radius: 50%;
              -o-border-radius: 50%;
            }
            &.active {
              background: #fe5443;
              border-color: #e53220;
              section {
                color: #fff;
              }
            }
            &.past {
              background: #fff;
              border-color: #999999;
              section {
                color: #999999;
              }
              .nullBorder {
                border-color: #999999;
              }
            }
          }
        }
      }
      a {
        display: block;
        width: 48%;
        height: 35px;
        line-height: 35px;
        border: 0.5px solid #fe5443;
        border-radius: 35px;
        -webkit-border-radius: 35px;
        -moz-border-radius: 35px;
        -ms-border-radius: 35px;
        -o-border-radius: 35px;
        color: #fe5443;
        font-size: 1.6rem;
        margin: 0 auto;
      }
      p{
          font-size: 1.2rem;
          color: #353535;
          padding:10px 20px;
      }
    }
  }
}
</style>

