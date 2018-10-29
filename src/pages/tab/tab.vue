<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-item__icon tab-item__icon--home"></span>
      <span class="tab-item__text">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/shop">
      <span class="tab-item__icon  tab-item__icon--shop"></span>
      <!-- <span class="tab-item__shop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shandian1"></use>
        </svg>
      </span> -->
      <span class="tab-item__text">闪购</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/order">
      <span class="tab-item__icon tab-item__icon--order"></span>
      <span class="tab-item__text">订单</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mine">
      <span class="tab-item__icon tab-item__icon--mine"></span>
      <span class="tab-item__text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable.styl";
.tab
  position fixed
  display flex
  flex-direction row
  bottom 0
  left 0
  width 100%
  height 50px
  text-align center
  background-color rgba(246,246,246,0.95)
  border-top 1px solid #b6b6b6
  &-item
    flex 1
    display flex
    align-content center
    justify-content center
    flex-direction column
    &__icon
      margin 0 auto
      display block
      width 25px
      height 25px
      background url('./tab.png')
      background-size 25px  auto
      &--home
        background-position 0 -75px
      &--mine
        background-position 0 -125px
      &--order
        background-position 0 -25px
      &--shop
        background url('./shop1.png')
        background-size 25px  auto
    &__text
      line-height 16px
      font-size $font-size-xs
      color $color-text-gray
.router-link-active
  .tab-item__icon
    &--home
      background-position 0 -50px
    &--mine
      background-position 0 -100px
    &--order
      background-position 0 0
    &--shop
      background url('./shop2.png')
      background-size 25px  auto
  .tab-item__text
    color $color-text-dark
</style>
