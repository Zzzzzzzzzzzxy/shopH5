<template>
  <tab-bar>
    <tab-bar-item path="/Home" activeColor="#1296db">
        <img slot="tab-icon" src="~assets/img/tabbar/shouye.png" alt="">
        <img slot="tab-icon-action" src="~assets/img/tabbar/shouye-active.png" alt="">
        <div slot="tab-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/Cart" activeColor="#1296db">
        <img slot="tab-icon" src="~assets/img/tabbar/fenlei.png" alt="">
        <img slot="tab-icon-action" src="~assets/img/tabbar/fenlei-active.png" alt="">
        <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/Category" activeColor="#1296db">
        <img slot="tab-icon" src="~assets/img/tabbar/gouwuche.png" alt="">
        <img slot="tab-icon-action" src="~assets/img/tabbar/gouwuche-active.png" alt="">
        <div slot="tab-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/Profile" activeColor="#1296db">
        <img slot="tab-icon" src="~assets/img/tabbar/wode.png" alt="">
        <img slot="tab-icon-action" src="~assets/img/tabbar/wode-active.png" alt="">
        <div slot="tab-text">我的</div>
    </tab-bar-item>
</tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  data () {
    return {}
  },
  methods: {
    init () {}
  },
  components: {
    TabBar,
    TabBarItem
  },
  created () {
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped>
.tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .2);
}
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 1.306667rem;
}
.tab-bar-item img{
    height: .64rem;
    width: .64rem;
    vertical-align: middle;
    margin-top: .08rem;
    margin-bottom: .053333rem;
}
</style>
