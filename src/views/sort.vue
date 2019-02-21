<template>
    <div id="sort">
        <mt-header fixed title="分类"></mt-header>
        <div class="section flex">
            <div class="left">
                <ul>
                    <li v-for="(item, index) in list.sort" :key="item.id" @click="sort(index,item.id)" :class="[sortIndex==index?'active':'']">{{item.name}}</li>
                </ul>
            </div>
            <div class="right" :style="{height:screenHeight+'px'}">
                <div>
                    <img :src="list.group.banner" alt="">
                </div>
                <div>
                    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" class="flex">
                        <router-link :to="'/particulars/'+item.goods_id" tag="li" v-for="item in list.group.goods" :key="item.goods_id">
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
        </div>
    </div>
</template>
<script>
export default {
  name: "sort",
  data() {
    return {
      screenHeight: window.innerHeight - 50 - 41,
      sortIndex: 0,
      loading:false,
      list: {
        sort: [
          { id: 0, name: "爆款" },
          { id: 1, name: "夹克" },
          { id: 2, name: "连衣裙" },
          { id: 3, name: "上衣" },
          { id: 4, name: "外套" },
          { id: 5, name: "针织品" }
        ],
        group: {
          banner:
            "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1920/FSH-1544008513601-19aheadercollectiond.jpg",
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
      }
    };
  },
  methods: {
    sort(index, id) {
      this.sortIndex = index;
      //   this.$http.get().then(res=>{
      //       console.log(res)
      //   })
    },
    //滚动加载
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list.group.goods[this.list.group.goods.length - 1],
          length = this.list.group.goods.length;
        for (let i = 1; i <= 10; i++) {
          this.list.group.goods.push({
            id: length + i,
            goods_id: length + i,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-48-8810745790494.jpg",
            name: "夹克",
            price: "310",
            sales: 100
          });
        }
        this.loading = false;
      }, 2000);
      console.log(this.list.group.goods);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
#sort {
  padding-top: 41px;
  overflow-y: auto;
  .section {
    .left {
      width: 27%;
      position: fixed;
      top: 41px;
      left: 0;
      bottom: 0;
      z-index: 10;
      color: #353535;
      background: #fafafa;
      li {
        display: block;
        height: 50px;
        line-height: 50px;
        padding: 0 16px;
        text-align: justify;
        text-align-last: justify;
        letter-spacing: -2rpx;
        font-size: 1.7rem;
        border-left: 3px solid #fafafa;
        &.active {
          transition: all 1s ease;
          background: #fff;
          border-left: 3px solid #fe4543;
          color: #fe4543 !important;
        }
      }
    }
    .right {
      margin-left: 27%;
      width: 73%;
      background: #fff;
      ul {
        list-style-type: none;
        li {
          width: 50%;
          margin-bottom: 20px;
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
            font-size: 1.1rem;
            padding: 8px 0 10px;
          }
          .count {
            align-items: center;
            .price {
              color: #fe4543;
              margin-right: 7px;
              font-family: " ArialMT";
              font-size: 21px;
              span {
                font-size: 1.4rem;
                font-weight: bold;
                font-family: "PingFang-SC";
              }
            }
            .sales {
              color: #666666;
              font-size: 0.6rem;
            }
          }
        }
      }
      p {
        width: 28px;
        margin: 15px auto;
      }
    }
  }
}
</style>

