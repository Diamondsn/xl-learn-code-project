<template>
<div>
<div class="banner" @click="handleBannerClick">
  <img class="banner-img" :src="bannerImg" />
  <div class="banner-info">
     <div class="banner-title">{{sightName}}</div>
     <div class="banner-number"><span class="iconfont banner-icon">&#xe608;</span>{{this.gallaryImgs.length}}</div>
  </div>
</div>
<common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_r_800x800_e440db5b.jpg', 'http://img1.qunarzz.com/sight/p0/1805/82/82a99919b21ac6a4a3.water.jpg_r_800x800_1d5abdaf.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
  .banner-title
    flex: 1
    padding: 0 .2rem
    font-size: .32rem
  .banner-number
    margin-top: .14rem
    padding: 0 .4rem
    line-height: .32rem
    height: .32rem
    border-radius: .2rem
    font-size: .24rem
    .banner-icon
      font-size: .24rem
</style>
