<template>
<div class="container" @click="handleGallaryClick">
<div class="wrapper">
<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in imgs" :key="index">
       <img class="gallary-img" :src="item" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CommonGallary',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_r_800x800_e440db5b.jpg', 'http://img1.qunarzz.com/sight/p0/1805/82/82a99919b21ac6a4a3.water.jpg_r_800x800_1d5abdaf.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  z-index: 99
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
