<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  components: {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      console.log('refresh')
      this.scroll && this.scroll.refresh()
    }
  },
  created () {},
  mounted () {
    // 1.创建BScoller对象
    this.scroll = new BScroll(this.$refs.wrapper, { // 通过ref获取的元素不会和其他模块冲突
      click: true, // 设置元素是否可以点击
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 2.监听滚动的位置
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })

    // 3.监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
    console.log(this.scroll)
    console.log(this.scroll.scrollerHeight)
  }
}
</script>
<style lang="scss" scoped>
</style>
