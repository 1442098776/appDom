<template>
  <div id="particulars" :style="{height:popup?screenHeight+'px':'auto'}">
    <mt-header fixed title="详情">
      详情
    </mt-header>
    <section>
      <carousel :list="list.slid" />
    </section>
    <section class="section">
      <section class="price flex">
        <span>￥{{list.goods.price}}</span>
        <section>
          <section class="mui-icon-extra mui-icon-extra-share"></section>
          <section>分享</section>
        </section>
      </section>
      <p>
        <span ref="range"></span>
      </p>
      <section class="content">
        <section class="flex">
          <section class="name">{{list.goods.name}}</section>
          <section>销量：{{list.goods.sales}}</section>
        </section>
        <section>{{list.goods.describe}}</section>
      </section>
    </section>
    <section class="section1">
      <section>限时限量&nbsp;疯狂抢购</section>
      <section class="flex count" ref="count" @click="integral">
        <section>
          <span>积分</span>
          <span>购买可得{{list.goods.integral}}积分</span>
        </section>
        <section class="mui-icon mui-icon-arrowright"></section>
      </section>
      <section class="flex count1" @click="basics">
        <section class="flex">
          <section class="flex" v-for="item in title" :key="item">
            <img src="/static/img/heart.png" alt="">
            <section>{{item}}</section>
          </section>
        </section>
        <section class="mui-icon mui-icon-arrowright"></section>
      </section>
    </section>
    <section class="section2">
      <section class="flex count" @click="checked">
        <section>选择
          <span>{{color==null?'颜色':check.color[color]}}</span>
          <span>{{size==null?'尺码':check.size[size]}}</span>
        </section>
        <section class="mui-icon mui-icon-arrowright"></section>
      </section>
      <section class="flex count" @click="parameters">
        <section>产品参数</section>
        <section class="mui-icon mui-icon-arrowright"></section>
      </section>
    </section>

    <section class="popup" v-show="popup" @click.self="closePopup">
      <transition name="popup" appear>
        <section v-show="popup">
          <section class="count" v-show="popupSection1">
            <p>
              <span>积分</span>
              <span>购买可得{{list.goods.integral}}积分</span>
            </p>
          </section>
          <section class="count1" v-show="popupSection2">
            <h4 class="text-center">基础保障</h4>
            <ul>
              <li v-for="(item,index) in safeguard" :key="index">
                <p>{{item.title}}</p>
                <p>{{item.conent}}</p>
              </li>
            </ul>
          </section>
          <mt-button type="danger" class="done" v-show="popupSection1 || popupSection2 || popupSection4" @click="closePopup">完成</mt-button>
          <section class="count2" v-show="popupSection3">
            <section class="mui-icon mui-icon-closeempty close" @click="closePopup"></section>
            <section class="top">
              <section><img :src="check.img" alt=""></section>
              <section>
                <h4>￥
                  <span v-show="color==null || size==null">{{check.price1}}-{{check.price2}}</span>
                  <span v-show="color!=null && size!=null">{{check.price}}</span>
                </h4>
                <p>库存{{check.stock}}件</p>
                <p>
                  请选择
                  <span>{{color==null?'颜色':check.color[color]}}</span>
                  <span>{{size==null?'尺码':check.size[size]}}</span>
                </p>
              </section>
            </section>
            <section class="null"></section>
            <section class="bottom">
              <p>颜色</p>
              <ul>
                <li v-for="(item,index) in check.color" :key="item" :class="color==index?'active':''" @click="checkColor(index)">{{item}}</li>
              </ul>
              <p>尺码</p>
              <ul>
                <li v-for="(item,index) in check.size" :key="item" :class="size==index?'active':''" @click="checkSize(index)">{{item}}</li>
              </ul>
              <section class="flex num">
                <span>购买数量</span>
                <number :num="list.goods.num" :id="id" @change="changeNum" />
              </section>
            </section>
          </section>
          <section class="flex cart text-center" v-show="popupSection3 &&　popupSection5==false">
            <section @click="addCart">加入购物车</section>
            <section @click="buy">立即购买</section>
          </section>
          <section class="text-center confirm" @click="confirm" v-show="popupSection5">确定</section>
          <section class="count3" v-show="popupSection4">
            <h4 class="text-center">产品参数</h4>
            <section class="section">
              <section class="parameter flex">
                <section class="left">品牌</section>
                <section class="right">{{parameter.brand}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">主材含量</section>
                <section class="right">{{parameter.content}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">尺码</section>
                <section class="right">
                  <span v-for="item in parameter.size" :key="item">{{item}}</span>
                </section>
              </section>
              <section class="parameter flex">
                <section class="left">图案</section>
                <section class="right">{{parameter.pattern}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">腰型</section>
                <section class="right">{{parameter.waist}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">颜色</section>
                <section class="right">
                  <span v-for="item in parameter.color" :key="item">{{item}}</span>
                </section>
              </section>
              <section class="parameter flex">
                <section class="left">上市时间</section>
                <section class="right">{{parameter.lnage}}年</section>
              </section>
              <section class="parameter flex">
                <section class="left">货号</section>
                <section class="right">{{parameter.itemNo}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">弹力</section>
                <section class="right">{{parameter.elastics}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">细分风格</section>
                <section class="right">{{parameter.manner}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">基础风格</section>
                <section class="right">{{parameter.style}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">适用季节</section>
                <section class="right">{{parameter.season}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">上市年份季节</section>
                <section class="right">{{parameter.lnage}}年{{parameter.season}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">厚薄</section>
                <section class="right">{{parameter.thickness}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">适用场景</section>
                <section class="right">{{parameter.scene}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">服装版型</section>
                <section class="right">{{parameter.model}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">款式细节</section>
                <section class="right">{{parameter.design}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">工艺处理</section>
                <section class="right">{{parameter.craft}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">适用对象</section>
                <section class="right">{{parameter.object}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">适用对象</section>
                <section class="right">{{parameter.object}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">销售渠道类型</section>
                <section class="right">{{parameter.sell}}</section>
              </section>
              <section class="parameter flex">
                <section class="left">材质成分</section>
                <section class="right">{{parameter.ingredient}}</section>
              </section>
            </section>
          </section>
        </section>
      </transition>
    </section>

    <section class="section3">
      <router-link to="" tag="section" class="flex title">
        <section>商品评价</section>
        <section class="mui-icon mui-icon-arrowright"></section>
      </router-link>
      <section v-for="(item,index) in list.evaluate" :key="item.id">
        <section class="flex flex-justify top">
          <span>{{item.user}}</span>
          <span>{{item.time}}</span>
        </section>
        <section class="middle">
          {{item.conent}}
        </section>
        <section class="bottom">
          <vue-preview class="preview-img img-responsive" :list="item.img" :thumbImageStyle="{width: '60px', margin: '5px'}" :tapToClose="true" />
        </section>
      </section>
    </section>
    <section class="section4">
      <section class="flex flex-justify">
        <span>优选推荐</span>
        <section class="mui-icon mui-icon-arrowright"></section>
      </section>
      <section id="slider" class="mui-slider">
        <section id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <section class="mui-scroll">
            <router-link class="mui-control-item" :to="'/particulars/'+item.id" v-for="item in list.sift" :key="item.id">
              <img :src="item.img" alt="">
              <section class="content text-center">
                <section class="name">{{item.name}}</section>
                <section class="price">￥{{item.price}}</section>
              </section>
            </router-link>
          </section>
        </section>
      </section>
    </section>
    <section class="section5">
      <section>商品详情</section>
      <section>
        <img :src="list.detail" alt="" title="" class="img-responsive">
      </section>
    </section>
    <section class="section6 text-center flex">
      <section @click="addCart">加入购物车</section>
      <section @click="buy">立即购买</section>
    </section>

  </div>
</template>
<script>
import carousel from "../components/Carousel/carousel";
import number from "../components/number/number";

export default {
  name: "particulars",
  data() {
    return {
      screenHeight: window.innerHeight - 50,
      popup: false,
      popupSection1: false,
      popupSection2: false,
      popupSection3: false,
      popupSection4: false,
      popupSection5: false,
      id: this.$route.params.id,
      time: 0,
      checkBuy: null, //0是加入购物车，1是购买
      list: {
        slid: [
          "http://p7.yokacdn.com/pic/YOKA/2018-12-06/U10015P1TS1544074478_54738.jpg",
          "http://p2.yokacdn.com/pic/YOKA/2018-12-03/U10087P1TS1543800878_52406.jpg",
          "http://p9.yokacdn.com/pic/YOKA/2018-11-29/U10085P1TS1543489309_70792.jpg",
          "http://p2.yokacdn.com/pic/YOKA/2018-11-29/U10087P1TS1543480452_30244.jpg",
          "http://p10.yokacdn.com/pic/YOKA/2018-11-27/U10085P1TS1543282744_10659.jpg"
        ],
        goods: {
          price: 128,
          name: "夹克",
          describe: "优雅高贵，质感舒悉，质量优良",
          sales: 2400,
          integral: 0,
          num: 1,
          img:
            "http://p10.yokacdn.com/pic/YOKA/2018-11-27/U10085P1TS1543282744_10659.jpg"
        },
        evaluate: [
          {
            id: 0,
            user: "摩登$",
            time: "2019-01-02",
            conent:
              "性价比高好用，值得购买；性价比高好用，值得购买；性价比高好用，值得购买",
            img: [
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
                w: 320,
                h: 400
              },

              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
                w: 320,
                h: 400
              },
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              },
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              }
            ]
          },
          {
            id: 1,
            user: "摩登$",
            time: "2019-01-02",
            conent:
              "性价比高好用，值得购买；性价比高好用，值得购买；性价比高好用，值得购买",
            img: [
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
                w: 320,
                h: 400
              },

              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              },
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              },
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              }
            ]
          },
          {
            id: 2,
            user: "摩登$",
            time: "2019-01-02",
            conent:
              "性价比高好用，值得购买；性价比高好用，值得购买；性价比高好用，值得购买",
            img: [
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
                w: 320,
                h: 400
              },

              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              },
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
                w: 320,
                h: 400
              },
              {
                src:
                  "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
                w: 320,
                h: 400
              }
            ]
          }
        ],
        sift: [
          {
            id: 0,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
            name: "连衣裙",
            price: 120
          },
          {
            id: 1,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
            name: "连衣裙",
            price: 120
          },
          {
            id: 2,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
            name: "连衣裙",
            price: 120
          },
          {
            id: 3,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
            name: "连衣裙",
            price: 120
          },
          {
            id: 4,
            img:
              "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg",
            name: "连衣裙",
            price: 120
          }
        ],
        detail:
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-5-8810744545310.jpg"
      },
      title: ["自营电商", "正品保证", "七天退换", "全场包邮"],
      safeguard: [
        { title: "正品保证", conent: "该商品由中国人保正保险" },
        {
          title: "七天无理由退换",
          conent:
            "消费者在满足7天无理由退换货申请条件的前提下，可以提出“7天无理由退换货”的申请"
        },
        {
          title: "极速退款",
          conent:
            "极速退款是为诚信会员提供的退款退货流程的专享特权，额度是根据每个用当前的信誉评级情况而定"
        },
        {
          title: "赠运费险",
          conent: "卖家为您购买的商品投保退货运费险（保单生效以下单显示为准"
        },
        { title: "极速退货", conent: "预约后准时上门取件，极速退款到账" },
        {
          title: "公益宝贝",
          conent:
            "购买该商品，每笔成交都会有相应金额捐赠给公益。感谢您的支持，愿公益的快乐伴随您每一天。"
        }
      ],
      check: {
        img:
          "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_1238/cruise-2018-19-6-8810745593886.jpg",
        price: 120,
        price1: 130,
        price2: 125,
        stock: 15544,
        color: [
          "黑色加绒",
          "深蓝加绒",
          "黑色加厚",
          "深蓝加厚",
          "黑色溥款",
          "蓝色溥款",
          "71881-黑色溥款",
          "71881-蓝色溥款"
        ],
        size: [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
      },
      color: null,
      size: null,
      parameter: {
        brand: "PLAYBOY/花花公子",
        content: "其它",
        size: [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        pattern: "纯色",
        waist: "中腰",
        color: [
          "黑色加绒",
          "深蓝加绒",
          "黑色加厚",
          "深蓝加厚",
          "黑色溥款",
          "蓝色溥款",
          "71881-黑色溥款",
          "71881-蓝色溥款"
        ],
        lnage: 2018,
        itemNo: "GY-HH-MKCB718881",
        elastics: "微弹",
        manner: "商务休闲",
        style: "时尚都市",
        season: "秋季",
        thickness: "常规",
        scene: "其它休闲",
        model: "修身",
        design: "口袋装饰",
        craft: "免烫处理",
        object: "青年",
        sell: "纯电商(只在线上销售)",
        ingredient: "聚酯纤维73%粘胶纤维（粘纤）21%聚氨酯弹性纤维（氨纶）6%"
      }
    };
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      console.log(newVal);
    }
  },
  created() {
    var i = 0;
    this.time = setInterval(() => {
      i += 1;
      this.$refs.range.style.width = i + "%";
      if (i >= 100) {
        clearInterval(this.time);
      }
    }, 1000);
  },
  mounted() {
    //左右滑动
    this.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    integral() {
      this.popup = this.popupSection1 = true;
    },
    basics() {
      this.popup = this.popupSection2 = true;
    },
    //关闭弹窗
    closePopup() {
      this.popup1();
    },
    popup1() {
      this.popup = this.popupSection1 = this.popupSection2 = this.popupSection3 = this.popupSection4 = this.popupSection5 = false;
    },
    //选择大小、颜色弹出弹窗
    checked() {
      this.popup = this.popupSection3 = true;
    },
    //选择颜色
    checkColor(index) {
      if (this.color != index) {
        this.color = index;
      } else {
        this.color = null;
      }
    },
    //选择大小
    checkSize(index) {
      if (this.size != index) {
        this.size = index;
      } else {
        this.size = null;
      }
    },
    //商品数量
    changeNum(n) {
      // console.log(n)
      this.list.goods.num = n;
    },
    //查看参数
    parameters() {
      this.popup = this.popupSection4 = true;
    },
    //加入购物车
    addCart() {
      this.attribute(0);
      this.attribute1(0);
    },
    buy() {
      this.attribute(1);
      this.attribute1(1);
    },
    //确定购买或加入购物车
    confirm() {
      if (this.color == null || this.size == null) {
        return;
      }
      let n = this.checkBuy;
      this.attribute1(n);
    },
    //判断是否选择了属性
    attribute(n) {
      if (this.color == null || this.size == null) {
        if (!this.popupSection3) {
          this.popupSection5 = true;
        }
        this.popup = this.popupSection3 = true;
        this.checkBuy = n;
      }
    },
    attribute1(n) {
      if (this.color != null && this.size != null) {
        // console.log(n);
        this.checkBuy = n;
        if (n == 0) {
          let goods = {
            goods_id: this.id,
            num: this.list.goods.num,
            price: this.list.goods.price,
            size: this.size,
            attr: this.color,
            checked: true,
            img: this.list.goods.img
          };
          this.$store.commit("addCar", goods);
          this.popup1();
          this.$toast({
            message: "添加购物车成，在购物车等亲",
            position: "bottom",
            duration: 3000
          });
        }
        if (n == 1) {
          this.$router.push({name:'order',params:{id:this.id}})
        }
      }
    }
  },

  components: {
    carousel,
    number
  },
  beforeRouteLeave(to, from, next) {
    if (from.name == "particulars") {
      clearInterval(this.time);
      next();
    }
  }
};
</script>
<style lang="scss">
#particulars {
  * {
    touch-action: pan-y;
  }
  padding-top: 40px;
  overflow: hidden;
  .section {
    background: #fff;
    margin-bottom: 10px;
    .price {
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      & > span {
        &:first-of-type {
          color: #fe4543;
          font-size: 3.6rem;
        }
      }
      & ~ p {
        height: 5px;
        background: #000;
        position: relative;
        & > span {
          display: block;
          width: 0%;
          height: 100%;
          background: #fe4543;
        }
      }
    }
    .content {
      padding: 0 15px 21px;
      & > section {
        &:first-of-type {
          justify-content: space-between;
          margin-bottom: 12px;
          & > .name {
            color: #353535;
            font-size: 1.7rem;
          }
          & > section:last-of-type {
            color: #666666;
            font-size: 1.2rem;
          }
        }
        &:last-of-type {
          color: #666666;
          font-size: 1.2rem;
          padding-bottom: 12px;
          border-bottom: 0.5px solid #eaeaea;
        }
      }
    }
  }
  .section1 {
    background: #fff;
    & > section {
      padding: 10px 10px;
      color: #666;
      font-size: 1.2rem;
      &:first-of-type {
        padding: 10px 10px 0;
      }
    }
    .count {
      border-bottom: 0.5px solid #ccc;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 1.2rem;
        &:first-of-type {
          padding: 0 2px;
          border: 1px solid red;
          color: red;
        }
      }
    }
    .count1 {
      & > section {
        &:first-of-type {
          width: 92%;
          & > section {
            flex: 1;
            font-size: 1.2rem;
            align-items: center;
            img {
              width: 12px;
              height: 11px;
              margin-right: 2px;
            }
          }
        }
        &:last-of-type {
          width: 8%;
        }
      }
    }
  }
  .section2 {
    background: #fff;
    margin-top: 10px;
    & > .count {
      padding: 10px 10px;
      align-items: center;
      justify-content: space-between;
      &:first-of-type {
        border-bottom: 0.5px solid #ccc;
      }
      & > section {
        &:first-of-type {
          color: #000;
          font-size: 1.4rem;
        }
        &:last-of-type {
          color: #666;
        }
      }
    }
  }
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    .popup-enter,
    .popup-leave-to {
      height: 0px;
    }
    .popup-enter-active,
    .popup-leave-active {
      transition: all 0.5s ease;
    }
    & > section {
      background: #fff;
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      height: 450px;
      .count {
        height: calc(100% - 41px);
        padding: 10px;
        overflow-y: auto;
        span {
          color: #000;
          &:first-of-type {
            border: 0.5px solid red;
            padding: 0 3px;
          }
        }
      }
      .done {
        width: 100%;
        border-radius: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        -o-border-radius: 0;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .count1 {
        height: 409px;
        overflow-y: auto;
        padding: 10px 15px;
        h4 {
          color: #f2480d;
          font-size: 1.6rem;
          font-weight: 500;
        }
        p {
          &:first-of-type {
            color: #000;
            margin-bottom: 5px;
          }
          &:last-of-type {
            color: #666;
            font-size: 1.2rem;
            margin-bottom: 15px;
          }
        }
      }
      .count2 {
        position: relative;
        p {
          color: #000;
        }
        & > .close {
          position: absolute;
          top: 0px;
          right: 5px;
          border-radius: 50%;
          border: 2px solid #666;
          color: #666;
          z-index: 50;
        }
        & > .top {
          height: 100px;
          position: relative;
          padding-left: 40%;
          & > section {
            &:first-of-type {
              background: #fff;
              position: absolute;
              top: -20px;
              left: 10px;
              width: 100px;
              height: 100px;
              padding: 3px;
              border-radius: 5px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              -ms-border-radius: 5px;
              -o-border-radius: 5px;
              box-shadow: 0 0 1px 1px #ccc;
              -webkit-box-shadow: 0 0 1px 1px #ccc;
              -ms-box-shadow: 0 0 1px 1px #ccc;
              -moz-box-shadow: 0 0 1px 1px #ccc;
              -o-box-shadow: 0 0 1px 1px #ccc;
              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        & > .null {
          height: 10px;
          background: #fafafa;
        }
        & > .bottom {
          height: 300px;
          overflow-y: scroll;
          padding: 15px 10px;
          font-size: 1.2rem;
          ul {
            border-bottom: 0.5px solid #ecebeb;
            padding-bottom: 10px;
            margin-bottom: 10px;
            li {
              display: inline-block;
              background: #ecebeb;
              color: #000;
              margin: 5px 5px 5px 0;
              border-radius: 10px;
            }
            .active {
              background: red !important;
              color: #fff !important;
              transition: all 1s ease;
              -webkit-transition: all 1s ease;
              -moz-transition: all 1s ease;
              -ms-transition: all 1s ease;
              -o-transition: all 1s ease;
            }
            &:first-of-type {
              li {
                padding: 2px 10px;
              }
            }
            &:last-of-type {
              li {
                padding: 2px 12px;
              }
            }
          }
          & > .num {
            justify-content: space-between;
            align-items: center;
            padding: 10px 0 15px;
            border-bottom: 0.5px solid #ecebeb;
            .mui-numbox,
            .mui-numbox .mui-numbox-input {
              border: 0 !important;
            }
          }
        }
      }
      .cart {
        height: 40px;
        line-height: 40px;
        color: #fff;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
        section {
          width: 50%;
          &:first-of-type {
            background: linear-gradient(left, #ecae29, #f07631);
            background: -webkit-linear-gradient(left, #ecae29, #f07631);
            background: -moz-linear-gradient(left, #ecae29, #f07631);
            background: -ms-linear-gradient(left, #ecae29, #f07631);
            background: -o-linear-gradient(left, #ecae29, #f07631);
          }
          &:last-of-type {
            background: linear-gradient(left, #f45d19, #f02908);
            background: -webkit-linear-gradient(left, #f45d19, #f02908);
            background: -moz-linear-gradient(left, #f45d19, #f02908);
            background: -ms-linear-gradient(left, #f45d19, #f02908);
            background: -o-linear-gradient(left, #f45d19, #f02908);
          }
        }
      }
      .count3 {
        h4 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          height: 40px;
          line-height: 40px;
        }
        & > .section {
          height: 365px;
          overflow-y: scroll;
          padding: 10px 15px;
          font-size: 1.4rem;
          & > .parameter {
            border-bottom: 0.5px solid #e8e8e8;
            padding: 10px 0;
            color: #000;
            .left {
              width: 20%;
            }
            .right {
              width: 80%;
              padding-left: 20px;
              span {
                display: inline-block;
                margin-right: 2px;
              }
            }
          }
        }
      }
      .confirm {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        height: 40px;
        line-height: 40px;
        font-size: 1.8rem;
        color: #fff;
        background: #ef4f4f;
      }
    }
  }
  .section3 {
    margin: 10px 0;
    background: #fff;
    padding: 10px;
    & > .title {
      justify-content: space-between;
      align-items: center;
      color: #353535;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    & > section {
      &:not(:first-of-type) {
        padding: 0 0 18px;
        border-bottom: 0.5px solid #eaeaea;
      }
      &:last-of-type {
        border: 0;
      }
    }
    .top {
      color: #999999;
      font-size: 1.1rem;
    }
    .middle {
      color: #666666;
      font-size: 1.2rem;
      padding: 15px 0 10px;
    }
  }
  .section4 {
    background: #fff;
    padding: 15px 10px;
    margin-bottom: 10px;
    & > section:first-of-type {
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    #slider {
      & > section {
        height: 160px;
        & > section {
          height: 160px;
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
              height: 40px;
              font-size: 1.3rem;
              .name {
                color: #353535;
                line-height: 22px;
              }
              .price {
                color: #fe4543;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
  .section5 {
    background: #fff;
    padding: 15px 10px 55px;
    color: #353535;
    font-size: 1.5rem;
    & > section:first-of-type {
      margin-bottom: 10px;
    }
  }
  .section6 {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    & > section {
      width: 50%;
      color: #fff;
      height: 40px;
      line-height: 40px;

      &:first-of-type {
        background: linear-gradient(left, #ecae29, #f07631);
        background: -webkit-linear-gradient(left, #ecae29, #f07631);
        background: -moz-linear-gradient(left, #ecae29, #f07631);
        background: -ms-linear-gradient(left, #ecae29, #f07631);
        background: -o-linear-gradient(left, #ecae29, #f07631);
      }
      &:last-of-type {
        background: linear-gradient(left, #f45d19, #f02908);
        background: -webkit-linear-gradient(left, #f45d19, #f02908);
        background: -moz-linear-gradient(left, #f45d19, #f02908);
        background: -ms-linear-gradient(left, #f45d19, #f02908);
        background: -o-linear-gradient(left, #f45d19, #f02908);
      }
    }
  }
}
</style>

