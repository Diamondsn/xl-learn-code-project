
<template>
<div>
   <div class="title">周末去哪儿</div>
   <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" />
        </div>
      <div class="item-info">
       <p class="item-title">{{item.title}}</p>
       <p class="item-desc">{{item.desc}}</P>
      </div>
    </li>
   </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
        title: '三峡人家',
        desc: '三峡风光，巴风楚韵，美景等你哦'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1711/4f/59f533696344fe.jpg_r_640x214_f8aa8c8f.jpg',
        title: '湖北泡汤圣地',
        desc: '湖北的小伙伴，来这泡汤啦'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
        title: '武汉海昌极地海洋公园',
        desc: '在“海底两万里”鱼你共舞'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: .8rem
  background: #eee
  /*文字缩进 */
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.8%
.item-img
  width: 100%
.item-info
  flex: 1
  padding: .1rem
  min-width: 0
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
