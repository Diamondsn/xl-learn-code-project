<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a
            href="javascript:void(0)"
            class="default cur"
          >Default</a>
          <a
            href="javascript:void(0)"
            class="price"
          >Price <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg></a>
          <a
            href="javascript:void(0)"
            class="filterby stopPop"
            @click="showFilterPop"
          >Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div
            class="filter stopPop"
            id="filter"
            v-bind:class="{'filterby-show':filterby}"
          >
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd @click="priceChecked='all'"><a href="javascript:void(0)"  v-bind:class="{'cur':priceChecked==='all'}" >All</a></dd>
              <dd v-for="(item,index) in priceFilter" :key="index" @click="setPriceFilter(index)">
                <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked===index}">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img
                        v-lazy="'/static/'+item.prodcutImg"
                        alt=""
                      ></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a
                        href="javascript:;"
                        class="btn btn--m"
                      >加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import NavHeader from "./../components/NavHeader.vue";
import NavFooter from "./../components/NavFooter.vue";
import NavBread from "./../components/NavBread.vue";
import axios from 'axios';
export default {
  data() {
    return {
        goodsList:[],
        priceFilter:[
          {
            startPrice:'0.00',
            endPrice:'500.00'
          },
          {
            startPrice:'500.00',
            endPrice:'1000.00'
          },
          {
            startPrice:'1000.00',
            endPrice:'2000.00'
          }
        ],
        priceChecked:'all',
        filterby:false,
        overLayFlag:false
    };
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  mounted:function(){
      this.getGoodsList();
  },
  methods:{
      getGoodsList(){
          axios.get('/api/goods.json').then((res)=>{
              var data=res.data;
              this.goodsList=data.result;
              console.log(data);
          })
      },
      handleClick:function(){
        this.priceChecked='all';
        console.log(this.priceChecked);
      },
      showFilterPop(){
         this.filterby=true;
         this.overLayFlag=true;
      },
      closePop(){
        this.filterby=false;
         this.overLayFlag=false;
      },
      setPriceFilter(index){
        this.priceChecked=index;
        this.closePop();
      }
  }
};
</script>
<style scope>
</style>
