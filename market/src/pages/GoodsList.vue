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
          >Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div
            class="filter stopPop"
            id="filter"
          >
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd @clicck="priceChecked='all'"><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked==='all'}">All</a></dd>
              <dd v-for="(item,index) in priceFilter" v-key="index" @click="priceChecked=index">
                <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked===index}">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList" v-key="index">
                  <div class="pic">
                    <a href="#"><img
                        v-bind:src="'/static/'+item.prodcutImg"
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
        priceChecked:'all'
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
      }
  }
};
</script>
<style scope>
</style>
