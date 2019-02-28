<template>
  <div class="bar_wrap">
    <!-- 首页 -->
    <div class="bar_select" @click="activeColor('shop')">
      <router-link to="/home" class="bar_select_link">
        <svg v-if="shop" class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-huabanfuben"></use>
        </svg>
        <svg v-else class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-shangdian"></use>
        </svg>
        <span class="bar_select_text">首页</span>
      </router-link>
    </div>
    <!-- 分类 -->
    <div class="bar_select" @click="activeColor('sort')">
      <router-link to="/sort" class="bar_select_link">
        <svg v-if="sort" class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-icon--"></use>
        </svg>
        <svg v-else class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-fenlei"></use>
        </svg>
        <span class="bar_select_text">分类</span>
      </router-link>
    </div>
    <!-- 发现 -->
    <div class="bar_select" @click="activeColor('find')">
      <router-link to="/find" class="bar_select_link">
        <svg v-if="find" class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-iconkuozhan_faxianpre"></use>
        </svg>
        <svg v-else class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-im_faxian"></use>
        </svg>
        <span class="bar_select_text">发现</span>
      </router-link>
    </div>
    <!-- 购物车 -->
    <div class="bar_select" @click="activeColor('car')">
       <router-link to="/shopCar" class="bar_select_link">
        <svg v-if="car" class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <svg v-else class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-icon8"></use>
        </svg>
        <span class="bar_select_text">购物车</span>
      </router-link>
    </div>
    <!-- 我的 -->
    <div class="bar_select" @click="activeColor('personal')">
       <router-link to="personal" class="bar_select_link">
        <svg v-if="personal" class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin1"></use>
        </svg>
        <svg v-else class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-renyuanjieshao"></use>
        </svg>
        <span class="bar_select_text">会员</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shop: true, // 首页
      sort: false, // 分类
      find: false, // 发现
      car: false, // 购物车
      personal: false // 个人中心

    };
  },
  methods: {
    activeColor (item) {
      switch (item) {
        case 'shop':
          this.shop = true;
          this.sort = false;
          this.find = false;
          this.car = false;
          this.personal = false;
          break;
        case 'sort':
          this.sort = true;
          this.shop = false;
          this.find = false;
          this.car = false;
          this.personal = false;
          break;
        case 'find':
          this.find = true;
          this.shop = false;
          this.sort = false;
          this.car = false;
          this.personal = false;
          break;
        case 'car':
          this.car = true;
          this.shop = false;
          this.find = false;
          this.sort = false;
          this.personal = false;
          break;
        case 'personal':
          this.sort = false;
          this.shop = false;
          this.find = false;
          this.car = false;
          this.personal = true;
          break;
      }
    }
  }
};
</script>
<style scoped lang="less">
.bar_wrap{
  width:100%;
  height: auto;
  padding: 2px 0;
  position: fixed;
  bottom: 0;
  z-index: 5000;
  background-color: #e4e4e4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .bar_select{
    width: 36px;
    height: auto;
    text-align: center;
    .bar_select_link{
      display: block;
      .bar_select_text{
        margin-top: 6px;
        display: inline-block;
        white-space:nowrap;
        font-size: 12px;
      }
    }
    .link-active{ // 修改router-link-active
      &:active{
        color: #333333;
        background-color: #e4e4e4;
      }
    }
  }
}

</style>
