<template>
  <div class=wrap>
    <div class="header">
      <div class="message">
        <div class="img">
          <img :src="info.img" width="35" height="35">
        </div>
        <div class="name">
          <span>{{info.name}}</span>
          <span>会员名： {{info.member}}</span>
        </div>
      </div>
      <div class="adderss">
        <span>我的收货地址</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  info: {
    img: '../../../static/img/personal/vip.png',
    name: '欧阳',
    meber: 'baba逼'
  }
};
</script>
<style lang="less" scoped>

</style>
