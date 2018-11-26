<template>
<div>
   <div class="recommend-title">热销推荐</div>
   <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
      <div class="item-info">
       <p class="item-title">{{item.title}}</p>
       <p class="item-desc">{{item.desc}}</P>
       <button class="item-button">查看详情</button>
      </div>
    </li>
   </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_200x200_d86753f0.jpg',
        title: '知音号游船',
        desc: '帅的人都去过了，你还等什么'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
        title: '武汉欢乐谷',
        desc: '来试试中国最高的弹射过山车吧~'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
        title: '武汉海昌极地海洋公园',
        desc: '在“海底两万里”鱼你共舞'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/5b/5b17633fa671ce5a.water.jpg_200x200_ed6e9008.jpg',
        title: '楚河汉街',
        desc: '666'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/56/56758da4c81e45d990.img.png_200x200_bbb543fa.png',
        title: '武汉东湖风景区',
        desc: '1170条评论'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/ca/ca46719e0d715d9f.water.jpg_200x200_beae73dd.jpg',
        title: '农耕年华',
        desc: '273条评论'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  /*文字缩进 */
  text-indent: .2rem
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
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
    .item-button
      line-height: .44rem
      margin-top: .16rem
      border-radius: .06rem
      padding: 0 .2rem
      background: #ff9300
      color: #fff
</style>
