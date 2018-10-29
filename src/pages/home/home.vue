<template>
  <div>
    首页
  </div>
</template>

<script>
import { getNearby } from 'apis/home'

export default {
  data () {
    return {}
  },
  created () {
    this._initPage()
  },
  methods: {
    async _initPage () {
      const { data } = await getNearby()
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
