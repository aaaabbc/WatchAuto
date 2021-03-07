<template>
  <div class="hello">
    <iframe v-if="url" :src="url" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </div>
</template>

<script>
import Bar from '../bar'
export default {
  name: 'watch',
  data () {
    return {
      url: ''
    }
  },
  created () {
    Bar.$on('bar', url => {
      this.url = '//player.bilibili.com/player.html?bvid=' + url.slice(31) + '&amp;page=1'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    iframe {
        position: absolute;
        right: 20%;
        top: 100px;
        height:400px;
        width:80%;
        min-width: 500px;
        max-width: 580px;
    }

</style>
