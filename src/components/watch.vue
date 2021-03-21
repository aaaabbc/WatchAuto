<template>
  <div class="hello">
    <div class="biliVideo">
      <p class="bilititle">{{ title }}</p>
      <iframe width="800px" height="640px" v-if="url" :src="url" frameborder="0" allowfullscreen> </iframe>
    </div>
  </div>
</template>

<script>
import Bar from '../bar'
export default {
  name: 'watch',
  data () {
    return {
      url: '',
      title: ''
    }
  },
  created () {
    Bar.$on('bar', data => {
      this.url = '//player.bilibili.com/player.html?bvid=' + data[0] + '&amp;page=1'
      this.title = data[1]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .bilititle {
      align-content: center;
    }

    .biliVideo {
        width: 100%;
        height: 0;
        position: relative;
        padding-bottom: 80%;
    }

    .biliVideo iframe {
        position: absolute;
        top: 100px;
        right: 0;
        left: 0;
        bottom: 0;
    }

    /* iframe {
        position: absolute;
        right: 20%;
        top: 100px;
        height:400px;
        width:80%;
        min-width: 500px;
        max-width: 580px;
    } */

</style>
