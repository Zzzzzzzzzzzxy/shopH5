<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :key="item.id" :good-item="item"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from './GoodListitem.vue'

export default {
  data() {
    return {}
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  },
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
