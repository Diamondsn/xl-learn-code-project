<template>
<!-- 外层添加div是为了保证当轮播图下面有其他组件或者文字的时候，图片加载较慢，可能会出现页面抖动的情况-->
<div class="wrapper">
<swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
       <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 修改swiper自己或子元素时， 自动初始化swiper
        observer: true,
        // 修改swiper的父元素时， 自动初始化swiper
        observeParents: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 2000
      },
      update: true,
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/f3/2a2cdc94741bbb02.jpg_750x200_b7b90c75.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length && this.update
    }
  },
  activated () {
    this.update = false
    setTimeout(() => {
      this.update = true
    }, 1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 31.25%
  background: #eee
  /*可以使用height: 31.25vw来替换overflow:hidden和height:0和padding-bottom:31.25% */
  .swiper-img
    width: 100%
</style>
