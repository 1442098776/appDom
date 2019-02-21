<template>
  <div id="index" :style="{height:screenHeight+'px'}">
    <mt-header fixed title="首页">
      首页
    </mt-header>
    <div class="search">
      <router-link to="/search" tag="div">
        <span class="mui-icon mui-icon-search"></span>
        <input type="text" placeholder="搜索您想要卷发棒?" title="">
      </router-link>
    </div>
    <carousel :list="list.slid" />
    <div class="flex section">
      <div v-for="item in list.title" :key="item">
        <img src="/static/img/heart.png" title="">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="section1">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span>
              <img src="/static/img/group.png">
            </span>
            <div class="mui-media-body">拼团</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/sort">
            <span>
              <img src="/static/img/hot.png">
            </span>
            <div class="mui-media-body">爆款</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/cart">
            <span>
              <img src="/static/img/debris.png">
            </span>
            <div class="mui-media-body">购物车</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/lottery">
            <span>
              <img src="/static/img/lottery.png">
            </span>
            <div class="mui-media-body">抽奖</div>
          </router-link>
        </li>

      </ul>
    </div>
    <div class="section2">
      <div class="headline text-center container">
        每日拼团
      </div>
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <router-link class="mui-control-item" :to="'/particulars/'+item.goods_id" v-for="item in list.group" :key="item.id">
              <img :src="item.img" alt="">
              <div class="content">
                <div class="name">{{item.name}}</div>
                <div class="flex count">
                  <span class="price">￥{{item.price}}</span>
                  <span class="yprice">￥{{item.yprice}}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="section3">
      <img :src="list.banner" alt="">
    </div>
    <div class="section4">
      <div class="headline text-center container">
        精品推荐
      </div>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" class="flex">
        <router-link :to="'/particulars/'+item.goods_id" tag="li" v-for="item in list.goods" :key="item.goods_id">
          <img v-lazy="item.img" alt="">
          <div class="name">{{item.name}}</div>
          <div class="flex count">
            <div class="price">
              <span>￥</span>{{item.price}}</div>
            <div class="sales">销量:{{item.sales}}</div>
          </div>
        </router-link>
      </ul>
      <p :style="{display:loading?'block':'none'}">
        <mt-spinner :type="3" color="rgb(0, 0, 0)"></mt-spinner>
      </p>
    </div>
  </div>
</template>
<script>
import carousel from "../components/Carousel/carousel";
export default {
  name: "index",
  data() {
    return {
      screenHeight: window.innerHeight - 50,
      loading: false,
      list: {
        slid: [
          "http://p7.yokacdn.com/pic/YOKA/2018-12-06/U10015P1TS1544074478_54738.jpg",
          "http://p2.yokacdn.com/pic/YOKA/2018-12-03/U10087P1TS1543800878_52406.jpg",
          "http://p9.yokacdn.com/pic/YOKA/2018-11-29/U10085P1TS1543489309_70792.jpg",
          "http://p2.yokacdn.com/pic/YOKA/2018-11-29/U10087P1TS1543480452_30244.jpg",
          "http://p10.yokacdn.com/pic/YOKA/2018-11-27/U10085P1TS1543282744_10659.jpg"
        ],
        title: ["自营电商", "正品保证", "七天退换", "全场包邮"],
        group: [
          {
            id: 0,
            goods_id: 0,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-48-8810745790494.jpg",
            name: "夹克",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 1,
            goods_id: 1,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-47-8810742644766.jpg",
            name: "夹克",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 2,
            goods_id: 2,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-45-8810745954334.jpg",
            name: "连衣裙",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 3,
            goods_id: 3,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-77-8810740973598.jpg",
            name: "连衣裙",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 4,
            goods_id: 4,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
            name: "上衣",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 5,
            goods_id: 5,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-27-8810742939678.jpg",
            name: "上衣",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 6,
            goods_id: 6,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-43-8810744086558.jpg",
            name: "裙子",
            price: "3100",
            yprice: "2500"
          },
          {
            id: 7,
            goods_id: 7,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-34-8810741104670.jpg",
            name: "裙子",
            price: "3100",
            yprice: "2500"
          }
        ],
        banner:
          "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1920/FSH-1530654576359-18khchpmodedesktop.jpg",
        goods: [
          {
            id: 0,
            goods_id: 0,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-48-8810745790494.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 1,
            goods_id: 1,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-47-8810742644766.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 2,
            goods_id: 2,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-21-8810742775838.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 3,
            goods_id: 3,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-75-8810746740766.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 4,
            goods_id: 4,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-88-8810744741918.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 5,
            goods_id: 5,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-14-8810745561118.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 6,
            goods_id: 6,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-16-8810746773534.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 7,
            goods_id: 7,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-33-8810743595038.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 8,
            goods_id: 8,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-52-8810741235742.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          },
          {
            id: 9,
            goods_id: 9,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-55-8810742677534.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          }
        ]
      }
    };
  },
  created() {
    // this.$http.get().then(res=>{
    //     console.log(res)
    // })
    console.log(this.screenHeight);
  },
  mounted() {
    //解决引用MUI路由不能跳转
    var _this = this;
    this.mui("body").on("tap", "a", function() {
      var path = this.getAttribute("href");
      _this.$router.push({ path: path });
    });
    //左右滑动
    this.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    //滚动加载
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1],
          length = this.list.goods.length;
        for (let i = 1; i <= 10; i++) {
          this.list.goods.push({
            id: length + i,
            goods_id: length + i,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-48-8810745790494.jpg",
            name: "夹克",
            price: "3100",
            sales: 100
          });
        }
        this.loading = false;
      }, 2000);
      console.log(this.list.goods);
    }
  },
  components: {
    carousel
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
#index {
  padding-top: 41px;
  overflow-y: auto;
  .search {
    padding: 7px 0;
    & > div {
      width: 92%;
      margin: 0 auto;
      position: relative;
      .mui-icon-search {
        $bg: none !default;
        background: $bg;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 10px;
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
        font-size: 1.5rem;
        color: #bbb;
      }
    }
  }
  .section {
    color: #666666;
    font-size: 1.2rem;
    align-items: center;
    padding: 10px 0;
    background: #fff;
    & > div {
      flex: 1;
      text-align: center;
      img {
        width: 12px;
        height: 11px;
      }
      span {
        padding-left: 4px;
      }
    }
  }
  .section1 {
    ul {
      background: #ffffff;
      li {
        padding: 0;
        border: 0;
        img {
          width: 49px;
          height: 49px;
        }
      }
    }
  }
  .headline {
    font-size: 1.7rem;
    color: #fe4543;
    width: 62%;
    height: 27px;
    line-height: 27px;
    margin: 0px auto 26px;
    background: url("/static/img/bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .section2 {
    background: #fff;
    padding: 20px 0 36px 15px;
    margin: 10px 0;
    #slider {
      & > div {
        height: 150px;
        & > div {
          height: 150px;
          a {
            display: inline-block;
            width: 120px;
            height: 100%;
            padding: 0;
            margin-right: 10px;

            &:last-of-type {
              margin-right: 0;
            }
            img {
              width: 100%;
              height: 120px;
              display: block;
            }
            .content {
              background: rgba(254, 69, 67, 0.1);
              height: 30px;
              text-align: left;
              padding-left: 3px;
              .name {
                font-size: 0.8rem;
                color: #353535;
                line-height: 17px;
              }
              .count {
                line-height: 13px;
                & > span {
                  display: block;
                }
                .price {
                  color: #fe4543;
                  font-size: 0.9rem;
                  // line-height: 13px;
                  padding-right: 7px;
                }
                .yprice {
                  color: #666666;
                  font-size: 0.6rem;
                  text-decoration: line-through;
                }
              }
            }
          }
        }
      }
    }
  }
  .section3 {
    height: 135px;
    margin-bottom: 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .section4 {
    background: #fff;
    padding: 25px 15px 0;
    ul {
      list-style-type: none;
      li {
        width: 50%;
        margin-bottom: 30px;
        &:nth-of-type(odd) {
          padding-right: 7.5px;
        }
        &:nth-of-type(even) {
          padding-left: 7.5px;
        }
        img {
          display: block;
        }
        image[lazy="loading"] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
        .name {
          color: #353535;
          font-size: 1.5rem;
          padding: 12px 0;
        }
        .count {
          align-items: center;
          .price {
            color: #fe4543;
            margin-right: 7px;
            font-family: " ArialMT";
            font-size: 3rem;
            span {
              font-size: 2rem;
              font-weight: bold;
              font-family: "PingFang-SC";
            }
          }
          .sales {
            color: #666666;
            font-size: 0.8rem;
          }
        }
      }
    }
    & > p {
      width: 28px;
      margin: 15px auto;
    }
  }
}
</style>

