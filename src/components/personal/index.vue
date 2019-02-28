<template>
<div class="personal_wrap">
  <div class="sticky">
    <cube-sticky
      :pos="scrollY"
      :check-top="checkTop"
      fixed-show-ani="sticky-fixed-show"
      @diff-change="diffChange">
      <cube-scroll
          :scroll-events="scrollEvents"
          @scroll="scrollHandler"
          style="background-color:#F2F3F5"
          >
          <cube-sticky-ele>
            <div class="info_wrap">
              <div class="info_header">
                <div class="info_left">
                  <div class="img"><img :src="info.img"  width="32px" height="32px"></div>
                  <div class="intrdouce">
                    <p class="name">{{info.name}}</p>
                    <div class="score">
                      <svg class="icon icon-back" aria-hidden="true">
                        <use xlink:href="#icon-tubiao207"></use>
                      </svg>
                      <p>金币({{info.score}})</p>
                    </div>
                  </div>
                </div>
                <div class="info_right" @click="goLink('goRouter')">
                  <i class="el-icon-setting"></i>
                </div>
              </div>
              <div class="info_body">
                  <div class="body_list" @click="goLink('goRouter')">
                    <span class="num">{{info.collect}}</span>
                    <span class="text">收藏夹</span>
                  </div>
                  <div class="body_list" @click="goLink('goRouter')">
                    <span class="num">{{info. focus}}</span>
                    <span class="text">关注店铺</span>
                  </div>
                  <div class="body_list" @click="goLink('goRouter')">
                    <span class="num">{{info.footPrint}}</span>
                    <span class="text">足迹</span>
                  </div>
                  <div class="body_list" @click="goLink('goRouter')">
                    <span class="num">{{info.firend}}</span>
                    <span class="text">好友</span>
                  </div>
              </div>
            </div>
          </cube-sticky-ele>
            <div class="contetn">
              <div class="club_card">
                <div class="left">
                  <svg class="icon icon-back" aria-hidden="true">
                    <use :xlink:href="getVipIcon(VIP)"></use>
                  </svg>
                  <p>淘气值 {{value}}</p>
                </div>
                <div class="center">
                  <p class="first">花小积分 换大权益</p>
                  <p class="last">进我的会员中心</p>
                </div>
                <div class="right" :style="bgPNG"></div>
              </div>
              <div class="order_form">
                <div class="title">
                  <p class="left">我的订单</p>
                  <p class="right">查看全部订单</p>
                </div>
                <div class="content">
                  <div class="btn_icon">
                    <svg class="icon icon-back" aria-hidden="true">
                      <use xlink:href="#icon-daifukuan"></use>
                    </svg>
                    <span>待付款</span>
                  </div>
                  <div class="btn_icon">
                    <svg class="icon icon-back" aria-hidden="true">
                      <use xlink:href="#icon-fahuotixing"></use>
                    </svg>
                    <span>待发货</span>
                  </div>
                  <div class="btn_icon">
                    <svg class="icon icon-back" aria-hidden="true">
                      <use xlink:href="#icon-yishouhuo"></use>
                    </svg>
                    <span>待收货</span>
                  </div>
                  <div class="btn_icon">
                    <svg class="icon icon-back" aria-hidden="true">
                      <use xlink:href="#icon-pingjia"></use>
                    </svg>
                    <span>评价</span>
                  </div>
                  <div class="btn_icon">
                    <svg class="icon icon-back shouhou" aria-hidden="true">
                      <use xlink:href="#icon-shouhou"></use>
                    </svg>
                    <span>退款/售后</span>
                  </div>
                </div>
              </div>
              <div class="tool_bar">工具栏</div>
              <div class="happy_farm">开心农场</div>
              <div class="my_bill">我的账单</div>
              <div class="achievement">我的成就</div>
            </div>
          <!-- <ul>
            <li v-for="(item, index) in items" :key="index" class="border-top-1px">{{item}}</li>
          </ul>
          <ul>
            <li v-for="(item, index) in items2" :key="index" class="border-top-1px">{{item}}</li>
          </ul>
          <ul>
            <li v-for="(item, index) in items3" :key="index" class="border-top-1px">{{item}}</li>
          </ul> -->
      </cube-scroll>
      <!-- <ul class="sticky-header" slot="fixed" ref="stickyHeader">
      <li>header</li>
      </ul> -->
      <div class="sticky-header" slot="fixed" ref="stickyHeader">
        <span class="name">{{info.name}}</span>
        <span class="set" @click="goLink('goRouter')">设置</span>
      </div>
      </cube-sticky>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      scrollEvents: ['scroll'],
      scrollY: 0,
      checkTop: true,
      info: { // 用户信息
        name: 'Any粑粑',
        img: 'http://img3.imgtn.bdimg.com/it/u=3364690548,3100520947&fm=26&gp=0.jpg',
        score: '11',
        collect: '24',
        focus: '191',
        footPrint: '999',
        firend: '992'
      },
      value: 456, // 淘气值
      VIP: 4, // 等级
      bgPNG: {
        backgroundImage: 'url(' + require('../../../static/img/personal/vip.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    };
  },
  methods: {
    scrollHandler ({ y }) {
      console.log({y});
      this.scrollY = -y;
    },
    diffChange (diff, height) {
      console.log(diff, height);
      let opacity = 0;
      if (height) {
        opacity = diff / height;
      }
      this.$refs.stickyHeader.style.opacity = opacity;
    },
    goLink (goRouter) { // 跳转router
      console.log('router');
    },
    getVipIcon (vip) { // 获得vip图标
      switch (vip) {
        case 1:
          return '#icon-chuangxiangqingtongvip';
        case 2:
          return '#icon-chuangxiangbaiyinvip';
        case 3:
          return '#icon-chuangxianghuangjinvip';
        case 4:
          return '#icon-chuangxiangzijinvip';
        case 5:
          return '#icon-chuangxiangzuanshivip';
        case 6:
          return '#icon-icon-test';
      }
    }
  }
};
</script>
<style lang="less" scoped>
.personal_wrap{
    position: relative;
    @media screen and (min-height: 560px){ // 5E
      .sticky{
       height: 530px;
        }
    }
    @media screen and(min-height: 600px){
        .sticky{
            height: 600px;
        }
    }
    @media screen and (min-height: 660px){ // iphone6/7/8
        .sticky{
       height: 630px;
        }
    }
    @media screen and (min-height: 730px){ // iphone6/7/8plus
        .sticky{
       height: 700px;
        }
    }
    @media screen and (min-height: 800px){ // iphonex
        .sticky{
       height: 780px;
        }
    }
    @media screen and (min-height: 900px){ // ipad
        .sticky{
       height: 850px;
        }
    }
    .info_wrap{
      width: calc(100% - 30px);
      padding: 10px 15px;
      background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
      .info_header{
        display: flex;
        justify-content: space-between;
        .info_left{
          display: flex;
          justify-content: space-between;
          .img{
            width: 32px;
            height: 32px;
            margin-right: 10px;
            border: 1px solid #ffc;
            border-radius: 50%;
            img{
              border-radius: 50%;
            }
          }
          .intrdouce{
            .name{
            //   margin-bottom: 1px;
              display:inline-block;
              font-size: 14px;
              font-weight: bold;
              color: #ffffff;
            }
            .score{
              svg{
                width: 14px;
                height: 24px;
                display: inline-block;
              }
              p{
                display:inline-block;
                font-size: 12px;
                color: #ffffff;
              }
            }
          }
        }
        .info_right{
         height: 16px;
         margin-top: -3px;
         margin-right: -3px;
         padding: 3px;
        }
      }
      .info_body{
        margin-top: 8px;
        padding: 3px 3px 23px 3px;
        display: flex;
        justify-content: space-around;
        .body_list{
          display: flex;
          flex-direction: column;
          text-align: center;
          span{
            padding: 2px 0;
            display: inline-block;
            font-size: 12px;
            color: #ffffff;
          }
        }
      }
    }
    .contetn{
      padding:0 15px;
      position: relative;
      .club_card{
        margin-top: -25px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        color: #9c9c9c;
        border-radius: 10px;
        .left{
          svg{
           margin-top:-7px;
            width: 60px;
            height: 40px;
          }
          p{
            margin-top: -2px;
            font-size: 12px;
          }
        }
        .center{
          .first{
            margin-bottom: 5px;
            font-size: 13px;
          }
          .last{
            font-size: 11px;
          }
        }
        .right{
          width: 40px;
          height: 30px;
          border-radius: 8px;
        }
      }
      .order_form{
        margin-top: 12px;
        padding: 10px;
        border-radius: 10px;
        background:#ffffff;
        .title{
          padding: 2px 5px 10px 5px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #F2F3F5;
          .left{
            font-size: 14px;
            font-weight: bold;
          }
          .right{
            font-size: 12px;
            color: #cccccc;
            line-height: 14px;
          }
        }
        .content{
          padding-top: 15px;
          padding-bottom: 3px;
          display: flex;
          justify-content: space-around;
          .btn_icon{
            display: flex;
            flex-direction: column;
            span{
              padding-top: 10px;
              display: inline-block;
              font-size: 12px;
            }
          }
        }
      }
    }
    .sticky-header{
      padding: 12px 8px;
      position: relative;
      text-align: center;
      background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
      .name{
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
      }
      .set{
        margin-top: -2px;
        padding: 4px;
        position: fixed;
        right: 4%;
        font-size: 12px;
        color: #ffffff;
      }
    }
}
.sticky-fixed-show-enter, .sticky-fixed-show-leave-active{
      transform: translate(0, -100%);
}
.sticky-fixed-show-enter-active, .sticky-fixed-show-leave-active{
    transition: all .5s ease-in-out;
}
</style>
