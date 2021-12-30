<template>
  <div class="good-list-itme">
    <img :src="goodItem.shangpinimg" alt="" @load="imageLoad"/>
    <div>
      <span>{{ goodItem.shangpinjieshao }}</span>
      <span>{{ goodItem.shangpinjiage }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  methods: {
    imageLoad() {
      this.$bus.$emit('imgItemLoad')
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.good-list-itme {
  box-sizing: border-box;
  width: 50%;
  padding: .133333rem;
  img {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
