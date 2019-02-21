<template>
  <div id="cart" :style="{height:screenHeight+'px'}">
    <mt-header fixed title="购物车"></mt-header>
    <div class="section" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <div class="flex cartList" v-for="(item,index) in list" :key="item.goods_id">
        <div class="flex left" @click="checked(index)">
          <img src="/static/img/circle1.png" alt="" v-if="item.checked">
          <img src="/static/img/circle.png" alt="" v-else>

        </div>
        <div class="center">
          <img :src="item.img" alt="">
        </div>
        <div class="right">
          <div class="name">{{item.name}}</div>
          <div class="attr">{{item.attr}};{{item.size}}</div>
          <div class="price">￥{{item.price}}</div>
          <div class="flex bottom">
            <number :num="item.num" :id="item.goods_id" @change='change' />
            <div class="remove text-center" @click="remove(index)">删除</div>
          </div>
        </div>

      </div>
      <p :style="{display:loading?'block':'none'}">
        <mt-spinner :type="3" color="rgb(0, 0, 0)"></mt-spinner>
      </p>
    </div>
    <div class="flex section1">
      <div class="allCheck flex" @click="allCheck">
        <div>
          <img src="/static/img/circle1.png" alt="" v-if="AllCheck">
          <img src="/static/img/circle.png" alt="" v-else>
        </div>
        <div>全选</div>
      </div>
      <div class="flex total">
        <div class="totalNum flex">结算({{total!=0?totalNum:0}})</div>
        <div>
          <span v-show="total!=0">不含运费<br></span>
          合计
          <span>￥{{total}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import number from "../components/number/number";
export default {
  name: "home",
  data() {
    return {
      screenHeight: window.innerHeight - 50,
      loading: false,
      AllCheck: false, //是否全选
      total: 0, //总价
      totalNum: 0, //选中的件数
      list: [
        {
          checked: false,
          img:
            "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
          name: "连衣裙",
          price: 120,
          size: "4xl",
          attr: "168灰色",
          num: 1,
          goods_id: 0
        },
        {
          checked: false,
          img:
            "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
          name: "连衣裙",
          price: 120,
          size: "4xl",
          attr: "168灰色",
          num: 1,
          goods_id: 1
        },
        {
          checked: false,
          img:
            "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
          name: "连衣裙",
          price: 120,
          size: "4xl",
          attr: "168灰色",
          num: 1,
          goods_id: 2
        },
        {
          checked: false,
          img:
            "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
          name: "连衣裙",
          price: 120,
          size: "4xl",
          attr: "168灰色",
          num: 1,
          goods_id: 3
        }
      ]
    };
  },
  created() {},
  methods: {
    //点击选择商品
    checked(index) {
      // console.log(index)
      this.list[index].checked = !this.list[index].checked;
      if (this.list[index].checked) {
        this.total =
          this.total +
          parseFloat(this.list[index].price) * this.list[index].num;
      } else {
        this.total =
          this.total -
          parseFloat(this.list[index].price) * this.list[index].num;
      }
      let total = 0;
      this.list.forEach(item => {
        total += parseFloat(item.price) * item.num;
        if (total == this.total) {
          this.AllCheck = true;
        } else {
          this.AllCheck = false;
        }
      });
      this.TotalNum() 
    },
    //全选
    allCheck() {
      if (this.AllCheck) {
        this.AllCheck = false;
        this.list.forEach(item => {
          item.checked = false;
        });
        this.total = 0;
        this.totalNum = 0;
      } else {
        this.AllCheck = true;
        this.list.forEach(item => {
          item.checked = true;
          this.total += parseFloat(item.price) * item.num;
          this.totalNum += item.num;
        });
      }
      this.TotalNum() 
    },
    //删除
    remove(index) {
      let that = this;
      this.$messagebox({
        title: "温馨提示",

        message: "确定删除吗？",

        showCancelButton: true,

        confirmButtonText: "确定",

        cancelButtonText: "取消"
      }).then(action => {
        if (action == "confirm") {
          that.list.splice(index, 1);
          this.$toast({
            message: "删除成",
            position: "middle",
            duration: 2000
          });
        } else {
          this.$toast({
            message: "删除失败",
            position: "middle ",
            duration: 2000
          });
        }
      });
    },
    //商品数量变化
    change(id,num){
      this.list.some(item=>{
        if(item.goods_id===id){
          item.num=num
          return true
        }
      })
      this.TotalNum()      
    },
    //总结件数
    TotalNum(){
      this.totalNum=0
      this.total=0
      this.list.forEach(item=>{
        if(item.checked){
          this.totalNum+=item.num
          this.total+=item.price*item.num
        }
      })
    },
    //滚动加载
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let length = this.list.length;
        for (let i = 1; i <= 10; i++) {
          this.list.push({
            checked: false,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
            name: "连衣裙",
            price: 120,
            size: "4xl",
            attr: "168灰色",
            num: 1,
            goods_id: length + i
          });
        }
        this.loading = false;
        this.AllCheck = false;
      }, 2000);
      console.log(this.list);
    }
  },
  components: {
    number
  }
};
</script>
<style lang="scss" scoped>
#cart {
  padding: 41px 0 0;
  .section {
    padding-bottom: 100px;
    & > p {
      width: 28px;
      margin: 15px auto;
    }
    & > .cartList {
      margin-bottom: 10px;
      background: #fff;
      padding: 10px 0;
      .left {
        width: 13%;
        align-items: center;
        img {
          display: block;
          width: 25px;
          height: 25px;
          margin: 0 auto;
        }
      }
      .center {
        width: 22%;
      }
      .right {
        width: 65%;
        padding: 0 15px;
        .name {
          color: #353535;
          font-size: 1.5rem;
          margin-bottom: 5px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .attr {
          color: #666;
          font-size: 1.2rem;
        }
        .price {
          color: #fe4543;
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
        .bottom {
          align-items: center;
          .remove {
            margin-left: 10px;
            width: 48px;
            height: 25px;
            line-height: 24px;
            border-radius: 20px;
            border: 1px solid #fe4543;
            color: red;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
  .section1 {
    position: fixed;
    bottom: 50px;
    right: 0;
    left: 0;
    height: 50px;
    background: #fff;
    border-top: 1px solid #ccc;
    align-items: center;
    justify-content: space-between;
    .allCheck {
      align-items: center;
      & > div:last-child {
        font-size: 1.5rem;
      }
      img {
        display: block;
        width: 25px;
        height: 25px;
        margin: 0 10px 0 15px;
      }
    }
    .total {
      align-items: center;
      width: 70%;
      flex-direction: row-reverse;
      & > div:last-of-type {
        width: 40%;
        text-align: right;
        font-size: 1.2rem;
        span {
          &:first-of-type {
            font-size: 1rem;
            color: #666;
          }
          &:last-of-type{
            color: #fe4543;
          }
        }
      }
    }
    .totalNum {
      height: 50px;
      align-items: center;
      padding: 0 20px;
      background: #fd7b9a;
      color: #fff;
      margin-left: 30px;
      font-size: 1.5rem;
    }
  }
}
</style>

