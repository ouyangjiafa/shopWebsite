<template>
  <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
     <!-- <router-view></router-view> -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar';
// import './assets/iconfont/iconfont.css'
export default {
  name: 'App',
  components: {
    Tabbar
  }
};
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 36px;
  height: 24px;
  margin-bottom: -5px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;

}
.fade-enter-active, .fade-leave-active{
 transition: all .8s;
 position:absolute;
}
.fade-enter, .fade-leave-to{
 opacity: 0;
 transform: translateX(100%);
}
</style>
