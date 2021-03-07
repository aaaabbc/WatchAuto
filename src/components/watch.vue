<template>
  <div class="hello">
    <!-- <p>
        <iframe class="bilivideo" src="//player.bilibili.com/player.html?bvid=BV1nD4y197gW&amp;page=3" frameborder="0" framespacing="0" allowfullscreen="true" > </iframe>
    </p> -->
    <a :href="url">看看我aaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
  </div>
</template>

<script>
import Bar from '../bar'
export default {
  name: 'watch',
  props: ['IDArr'],
  data () {
    return {
      url: '',
      msg: 'hello',
      UPname: this.IDArr
    }
  },
  created () {
    Bar.$on('bar', url => {
      this.url = url
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .bilivideo{
        position: relative;
        left:30%;
        top: 100px;
        height:400px;
        width:40%;
    }

</style>
