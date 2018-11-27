<template>
<div class="list" ref="wrapper">
   <div>
       <div clas="area">
            <div class="title border-topbottom">
                当前城市
            </div>
            <div class="button-list">
               <div class="button-wrapper">
                    <div class="button">武汉</div>
               </div>
            </div>
        </div>
        <div clas="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                 <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                      <div class="button">{{item.name}}</div>
                 </div>
            </div>
        </div>
        <div clas="area" v-for="(item,key) of cities" :key="key">
             <div class="title border-topbottom">{{key}}</div>
             <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
                  <div class="item border-bottom">
                  {{innerItem.name}}
                  </div>
             </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
.title
  line-height: .54rem
  background: #eee
  padding-left: .2rem
  color: #666
  font-weight: bold
  font-size: .26rem
.button-list
  padding: .1rem
  overflow: hidden
  padding: .1rem .6rem .1rem .1rem
  .button-wrapper
    width: 33.33%
    float: left
    .button
      margin: .1rem
      text-align: center
      border: .02rem solid #ccc
      padding: .1rem 0
      border-radius: .06rem
.item-list
  .item
    line-height: .76rem
    padding-left: .2rem
</style>
