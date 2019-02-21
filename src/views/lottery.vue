<template>
    <section id="lottery" :style="{height:screenHeight+'px'}">
        <mt-header fixed title="抽奖">
            抽奖
        </mt-header>
        <header class="title"><img src="/static/img/lotteryTitle.png" alt=""></header>
        <section class="section">
            <section class="circle" v-for="(item,index) in circleList" :style="{top:item.topCircle+'px',left:item.leftCircle+'px',backgroundColor:(index%2==0)?colorCircleFirst:colorCircleSecond}" :key="index"></section>
            <section class="container-in">
                <section class="content-out" v-for="(item1,index1) in awardList" :style="{top:item1.topAward+'px',left:item1.leftAward+'px',backgroundColor:(index1==indexSelect)?colorAwardSelect:colorAwardDefault}" :key="index1">
                    <img class="award-image" :src="item1.imageAward" />
                </section>
                <section class="start-btn" :style=" {backgroundColor:isRunning?'#e7930a':'#ffe400'}" @click="startGame">立即抽奖</section>
            </section>
        </section>
    </section>
</template>
<script>
export default {
  name: "lottery",
  data() {
    return {
      screenHeight: window.innerHeight,
      circleList: [], //圆点数组
      awardList: [], //奖品数组
      colorCircleFirst: "#FEDF2B", //圆点颜色1
      colorCircleSecond: "#F57069", //圆点颜色2
      colorAwardDefault: "#F5F0FC", //奖品默认颜色
      colorAwardSelect: "#ffe400", //奖品选中颜色
      indexSelect: 0, //被选中的奖品index
      isRunning: false, //是否正在抽奖
      list: {}
    };
  },
  created() {
    if (this.$store.state.userinfo != null) {
      //奖品item设置
      var awardList = [],
        lucky = [
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg",
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_460/cruise-2018-19-5-8810744545310.jpg"
        ];
      //间距,怎么顺眼怎么设置吧.
      var topAward = 25;
      var leftAward = 5,
        j;
      for (j = 0; j < 8; j++) {
        if (j == 0) {
          topAward = 0;
          leftAward = 2;
        } else if (j < 3) {
          topAward = topAward;
          //166.6666是宽.15是间距.下同
          leftAward = leftAward + 86;
        } else if (j < 5) {
          leftAward = leftAward;
          //150是高,15是间距,下同
          topAward = topAward + 85;
        } else if (j < 7) {
          leftAward = leftAward -86;
          topAward = topAward;
        } else if (j < 8) {
          leftAward = leftAward;
          topAward = topAward - 85;
        }
        var imageAward = lucky[j];
        awardList.push({
          topAward: topAward,
          leftAward: leftAward,
          imageAward: imageAward
        });
      }
      this.awardList = awardList;
      console.log("aaa");
    }
    var _this = this;
    //圆点设置
    var leftCircle = 10;
    var topCircle = 10;
    var circleList = [];
    for (var i = 0; i < 24; i++) {
      if (i == 0) {
        topCircle = 0;
        leftCircle = 0;
      } else if (i < 6) {
        topCircle = 0;
        leftCircle = leftCircle + 45;
      } else if (i == 6) {
        topCircle = 0;
        leftCircle = 270;
      } else if (i < 12) {
        topCircle = topCircle + 45;
        leftCircle = 270;
      } else if (i == 12) {
        topCircle = 270;
        leftCircle = 270;
      } else if (i < 18) {
        topCircle = 270;
        leftCircle = leftCircle - 45;
      } else if (i == 18) {
        topCircle = 270;
        leftCircle = 0;
      } else if (i < 24) {
        topCircle = topCircle - 45;
        leftCircle = 0;
      } else {
        return;
      }
      circleList.push({ topCircle: topCircle, leftCircle: leftCircle });
    }
    this.circleList = circleList;
    //圆点闪烁
    setInterval(function() {
      if (_this.colorCircleFirst == "#FEDF2B") {
        (_this.colorCircleFirst = "#F57069"),
          (_this.colorCircleSecond = "#FEDF2B");
      } else {
        (_this.colorCircleFirst = "#FEDF2B"),
          (_this.colorCircleSecond = "#F57069");
      }
    }, 500); //设置圆点闪烁的效果
  },
  methods: {
    startGame() {
    // if(this.data.list.integrales<this.data.list.jifen){
    //   util.showModal('您的积分不足',false,'知道了').then(res=>{
    //     console.log()
    //   })
    // }else{
      if (this.isRunning) return
     
        this.isRunning=true

      var _this = this;
      let indexSelect = 0
      var i = 0;
      var num = 0;    //请求回来的中奖奖品的下标
      var lotteryCount = ''      //中奖提示
      // util.request(api.lucky, { thr_session: app.globalData.loginState }, "GET").then(res => {
      //   console.log(res)
      //   var allIndex = _this.data.list.lucky.findIndex((item, i) => {
      //     if (item.order_id == res.id) {
      //       return true;
      //     }
      //   })
      //   num = allIndex
      //   lotteryCount = res.prize_title
      // })
      var timer = setInterval(function () {
        indexSelect++;
        //这里我只是简单粗暴用y=30*x+200函数做的处理.可根据自己的需求改变转盘速度  
        i += 30;
        indexSelect = indexSelect % 8;
        if (indexSelect >= _this.awardList.length) {
          let indexSelect = 0
        }
        _this.indexSelect=indexSelect
        if (i > 1000) {
          //去除循环  
          let indexSelect = num
          _this.indexSelect= indexSelect
          clearInterval(timer)
          //获奖提示  
        }
      }, 80)
    }
  },
  // }
};
</script>
<style lang="scss" scoped>
#lottery {
  background: url("/static/img/lotteryBg.png") no-repeat;
  background-size: 100% 100%;
  padding-top: calc(10% + 41px);
  .title {
    width: 54%;
    margin: 0 auto 0.01% auto;
  }
  .section {
    width: 280px;
    height: 280px;
    margin: 0 auto 10px auto;
    background: url("/static/img/lotteryBg1.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .container-in {
      width: 260px;
      height: 255px;
      background-color: #fd3325;
      border-radius: 5px;
      position: absolute;
      left: 0;
      right: 0;
      top: 2px;
      bottom: 0;
      margin: auto;
      .content-out {
        position: absolute;
        height: 75px;
        width: 84px;
        background-color: #febdbe;
        border-radius: 5px;
        box-shadow: 0 5px 0 #febdbe;
        img{
            height: 75px;
            width: 76px;
            transform: translateX(4px);
        }
      }
    }
    .circle {
      position: absolute;
      display: block;
      border-radius: 50%;
      height: 10px;
      width: 10px;
    }

    .content-out {
      position: absolute;
      height: 150px;
      width: 167px;
      background-color: #febdbe;
      border-radius: 10px;
      box-shadow: 0 5px 0 #febdbe;
    }

    /**居中 加粗*/

    .start-btn {
     
      position: absolute;
      // margin: auto;
      top: 84px;
      left: 88px;
      border-radius: 15px;
      height: 75px;
      width: 84px;
      background-color: #ffe400;
      box-shadow: 0 5px 0 #e7930a;
      color: #fd3325;
      text-align: center;
      font-size: 1.8rem !important;
      line-height: 75px;
    }
  }
}
</style>
