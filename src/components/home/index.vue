<template>
  <div class="home_wrap">
    <div class="home_header">
      <div class="scan" @click="scan">
        <svg class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <span class="scan_text">扫一扫</span>
      </div>
      <div class="search">
        <svg class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
         <input type="text" class="search_input" :placeholder="randomValue" v-model="searchValue" @click="visible = true">
         <button type="button" class="search_btn" @click="search">搜索</button>
      </div>
      <div class="message" @click="message">
        <span class="msg_num">{{news}}</span>
        <svg class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <span class="msg_text">消息</span>
      </div>
    </div>
    <!-- 搜索历史 -->
    <div class="search_history" v-if="visible">
      <div class="header">
        <div class="input">
          <input type="text" v-model="searchValue" @blur="goCheck">
        </div>
        <button type="button" @click="cancle">取消</button>
      </div>
      <div class="content">
        <!-- <transition
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        > -->
        <div class="history" v-show="historyView">
          <div class="history_header">
            <div class="text">
              <span>历史搜索</span>
            </div>
            <!-- <div class="btn" @click="delHistory">
              <i class="el-icon-delete"></i> -->
              <cube-button type="text" class="btn" @click="delHistory">
                <i class="el-icon-delete"></i>
              </cube-button>
            <!-- </div> -->
          </div>
          <div class="history_content">
            <div v-for="(item,index) in before" :key="index" :class="['circle',randomColor()]">
              <span @click="getBefore(index)">{{item.text}}</span>
            </div>
          </div>
        </div>
        <!-- </transition> -->
        <div class="discover">
          <div class="discover_header">
            <div class="text">
              <span>搜索发现</span>
            </div>
            <div class="view" @click="viewing">
              <i class="el-icon-zoom-out" v-if="view"></i>
              <i class="el-icon-zoom-in" v-else></i>
            </div>
          </div>
          <div class="discover_content" v-if="view">
            <ul class="rows" v-for="(item, index) in discoverList" :key="index">
              <li>
                <td @click="getDiscover(index, 'first')">{{item.first}}</td>
                <td @click="getDiscover(index, 'second')">{{item.second}}</td>
              </li>
            </ul>
          </div>
          <div class="discover_hide" v-else>
            <P>当前搜索发现以隐藏</P>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      news: '9', // 消息数
      searchValue: '', // 搜索值
      visible: false, // 激活搜索历史页
      randomValue: '爆款球球', // 随机推送
      before: [
        {text: '三级头'},
        {text: '我是三级头'},
        {text: 'iphone8 Plus'},
        {text: 'mac Airbook'},
        {text: '传奇阿波罗号粑粑逼'},
        {text: '卡西欧手表'},
        {text: 'iphone8 Plus'},
        {text: 'beast 耳机'}
      ],
      historyView: true, // 展示搜索历史
      view: true, // 开启搜索发现
      discoverList: [
        {first: '耐克', second: '阿迪达斯'},
        {first: '月月图', second: '橘子黄了吗'},
        {first: '刚滑膜', second: '按他就写'},
        {first: '苹果销售呆滞', second: 'beast 潮流'},
        {first: '杰利亚', second: '小米耳机'},
        {first: '华为pro20', second: '苹果X max'}
      ]
    };
  },
  created () {
    // console.log(this.randomColor);
  },
  methods: {
    scan () { // 扫一扫
      console.log('scan');
    },
    search () { // 搜索
      this.searchValue ? this.searchValue = this.searchValue : this.searchValue = this.randomValue;
      console.log(this.searchValue);
    },
    message () { // 消息
      console.log('msg');
    },
    cancle () { // 取消搜索
      this.visible = false;
    },
    delHistory () { // 删除搜索历史
      console.log(22);
      this.$createDialog({
        type: 'confirm',
        maskClosable: true,
        content: '是否删除历史搜索',
        zIndex: 700,
        onConfirm: (e) => {
          this.historyView = false;
        }
      }).show();
    },
    randomColor () { // but随机色
      let upper = String.fromCharCode(Math.floor(Math.random() * 3) + 'A'.charCodeAt(0));
      return 'circle' + upper;
    },
    viewing () { // 展示搜索发现
      this.view = !this.view;
    },
    getBefore (i) { // 获得搜索历史的值
      this.searchValue = this.before[i]['text'];
    },
    getDiscover (i, num) { // 获得搜索发现的值
      this.searchValue = this.discoverList[i][num];
    },
    goCheck () { // 失去焦点查询
      console.log(this.searchValue);
    }
    // beforeLeave (el) {
    //   // el.style.transform = 'scale(100%, 100%)';
    // },
    // leave (el, done) {
    //   // eslint-disable-next-line no-unused-expressions
    //   el.offsetTop;
    //   el.style.transform = 'scale(1, 0)';
    //   el.style.transition = 'all 1.3s ease';
    //   done();
    // },
    // afterLeave (el) {
    //   this.historyView = !this.historyView;
    // }
  },
  computed: {
  }
};
</script>
<style lang="less" scoped>
.home_wrap{
  position: relative;
  .home_header{
    width: 100%;
    height: 40px;
    padding: 5px 0;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    background-color: #ffffff;
    border-bottom: 1px solid #ccc;
    .scan{
      margin-left: 10px;
      text-align: center;
      .icon{
        height: 15px;
        margin-bottom: 5px;
        margin-right: -2px;
        display:block;
      }
    }
    .search{
      // border: 1px solid #aaa;
      width: 65%;
      padding: 3px 0;
      background-color:#e6e6e6;
      border-radius: 30px;
      .icon{
        margin-top: 2px;
        width: 14%;
      }
      .search_input{
        width: 67%;
        height: 24px;
        background-color:inherit;
        // border: none;
        // border: 1px solid #ccc;
        outline: none;
        &:active{
           background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        }
      }
      .search_btn{
        width: 15%;
        height: 28px;
        padding: 0;
        color: #ff8443;
        background-color:inherit;
        border: none;
        outline: none;
        border-radius: 0 30px 30px 0;
         &:active{
          color: #26b5ff;
          transform: translateX(-50%);
          transition: translate linear 2s;
        }
      }
    }
    .message{
      margin-right: 10px;
      text-align: center;
      position: relative;
      .msg_num{
        padding: 2px;
        position:absolute;
        z-index: 500;
        top: -8%;
        right: -3%;
        background-color:#e61e22;
        opacity: .7;
        font-weight: bold;
        border-radius: 50%;
      }
      .icon{
        margin-top: -3px;
        margin-bottom: 0;
        display: block;
      }
    }
  }
  .search_history{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 600;
    background-color: #a1c4fd;
      .header{
        width: calc(100% - 20px);
        padding: 5px 10px;
        padding-bottom: 25px;
        font-size: 12px;
        display: flex;
        justify-content:space-between;
        // background-color:#d8eb84;
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
        .input{
          width: 83%;
          padding: 4px;
          border-radius: 30px;
          text-align: center;
          background-color: #ffffff;
          input{
            width: calc(100% - 14px);
            height: 24px;
            outline: none;
          }
        }
        button{
          border: none;
          outline: none;
          background-color:inherit;
        }
      }
      .content{
        width: calc(100% - 20px);
        height: 100%;
        padding: 5px 10px;
        position: fixed;
        top: 45px;
        border-radius: 10px 10px 0 0;
        background-color: #ffffff;
        .history{
          // width: calc(100% - 20px);
          width: 100%;
          .history_header{
            display: flex;
            justify-content: space-between;
            .text{
              span{
                font-size: 14px;
                font-weight: bold;
              }
            }
            .btn{
              width:auto;
              height: auto;
              padding:0;
              color: #292626cd;
              background-color: #ffffff;
              outline: none;
            }
          }
          .history_content{
            font-size: 12px;
            padding: 5px 0;
            margin-bottom: 15px;
            .circle{
              height: 20px;
              margin-right: 15px;
              margin-bottom: 10px;
              padding: 2px 3px;
              text-align: center;
              display: inline-block;
              border-radius: 25px;
              color: #333333;
              span{
                display: inherit;
                margin: auto 5px;
                line-height: 20px;
              }
            }
            .circleA{
              background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
            }
            .circleB{
              background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
            }
            .circleC{
              background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
            }
            .circleD{
              background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
            }
          }
        }
        .discover{
            .discover_header{
              display: flex;
              justify-content: space-between;
              .text{
               span{
                font-size: 14px;
                font-weight: bold;
               }
              }
              .view{
                padding: 2px;
              }
            }
            .discover_content{
              // display: flex;
              // justify-content: space-between;
              .rows{
                li{
                  display: flex;
                  justify-content: space-around;
                  td{
                    width: 30%;
                    padding: 4px;
                    margin: 3px 0;
                    font-size: 12px;
                  }
                }
              }
            }
            .discover_hide{
              margin-top: 20px;
              text-align: center;
              p{
                font-size: 12px;
                color: #6b5b5b;
              }
            }
          }
      }
  }
}
</style>
