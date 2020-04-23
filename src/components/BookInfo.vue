<template>
<div class="clearfix" :class="{linkable}" @click="onclick">
  <div class="image"><img :src="book.imgae"></div>
  <div class="detail">
    <ul>
      <li></li>      
      <li></li>      
      <li></li>      
      <li></li>      
    </ul>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import {UPDATE_CURRENT} from '@mutation-types'

export default {
  name: 'book-info',
  props: {
    index: {type: Number},
    linkable: {type: Boolean, default: false},
    book: {type: Object}
  },
  methods: {
    ...mapActions([UPDATE_CURRENT]),
    onclick(){
      if(this.linkable){
        this[UPDATE_CURRENT](this.book)
        this.$router.push('/form')
      }
    }
  }
}
</script>

<style scoped>
  .linkable:hover{
    cursor: pointer;
    background-color: #ffg;
  }
</style>