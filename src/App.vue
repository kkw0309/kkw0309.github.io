<template>
  <div id="app">
    <VueDragResize :isActive="true"  :isResizable="false" >
      <img src="./assets/email.png"  height="40px" width="40px" class="drag_img"/>
    </VueDragResize>
    <van-tabbar v-model="active" active-color="orange" route>
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="description">课程</van-tabbar-item>
      <van-tabbar-item icon="records">约课记录</van-tabbar-item>
      <van-tabbar-item icon="orders-o">练习</van-tabbar-item>
      <van-tabbar-item to="/login" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";
export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.vdr.active:before{
  outline: none
}
.drag_img{
  position: absolute;
  top:640px;
  left: 350px;
  z-index: 1;
}
</style>
