<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街道</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="conentScroll" @pullingUp="pullingUp">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="~assets/img/swipe/111.jpeg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/swipe/222.jpeg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/swipe/333.jpeg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/swipe/444.jpeg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/swipe/555.jpeg">
        </van-swipe-item>
      </van-swipe>
      <feature-view></feature-view>
      <tab-control :titles="titles" ref="tabControl"></tab-control>
      <goods :goods="goods"></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShwoBackTop">瞎写</back-top>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import Goods from 'components/content/goods/GoodList'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue';

import { Swipe, SwipeItem } from 'vant';

import { GetAllInfoAndCount } from '@/api/home'

export default {
  data () {
    return {
      goods: [],
      isShwoBackTop: false,
      tabOffsetTop: 0,
      stompClient:'',
      timer:'',
      titles: [{
        id: 'asdasda',
        title: '流行'
      },{
        id: 'sasdasd',
        title: '新款'
      },{
        id: 'asfasff',
        title: '精选'
      }]
    }
  },
  components: {
    Goods,
    NavBar,
    BackTop,
    Scroll,
    TabControl,
    FeatureView,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {
    debounce(func, delay) {
      let timer = null
      return function(args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    conentScroll(position) {
      this.isShwoBackTop = (-position.y) > 1000
    },
    pullingUp() {
      console.log('上拉加载更多')
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500) // 调用组件中的方法
    },
    /**
     * 获取数据
     * 
     */
    GetAllInfoAndCount() {
      let that = this
      let params = {
        pageindex: 1,
        pagecount: 1000
      }
      GetAllInfoAndCount(params).then(res => {
        let { data } = res
        that.goods = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.GetAllInfoAndCount();
  },
  mounted () {
    let that = this
    // 所有组件都有$el 是用来获取组件中的元素的
    this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    console.log('获取tabOffsetTop', this.tabOffsetTop)
    const refresh =  that.debounce(this.$refs.scroll.refresh, 200) //防抖函数
    this.$bus.$on('imgItemLoad', () => {
      // this.$refs.scroll.refresh()
      refresh()
    })
  },
  destroyed() {
    // 页面离开时断开连接,清除定时器
    clearInterval(this.timer);
  }
}
</script>
<style lang="scss" scoped>
.lunbo {
  width:100%;
  height: 5.333333rem;
}
.tab-control {
  position: sticky;
  top: 1.173333rem;
  background: #fff;
}
#home {
  height: 100vh;
  position: relative;
}
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.van-swipe {
  color: #fff;
  font-size: 20px;
  height: 5.333333rem;
  line-height: 5.333333rem;
  text-align: center;
  background-color: #39a9ed;
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.content {
  position: absolute;
  top: 1.173333rem;
  bottom: 1.306667rem;
  left: 0;
  right: 0;
}
</style>
