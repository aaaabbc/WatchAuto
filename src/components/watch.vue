<template>
  <div class="hello">
    <!-- <p>
        <iframe class="bilivideo" src="//player.bilibili.com/player.html?bvid=BV1nD4y197gW&amp;page=3" frameborder="0" framespacing="0" allowfullscreen="true" > </iframe>
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'watch',
  props: ['IDArr'],
  data () {
    return {
      msg: 'hello',
      UPname: this.IDArr
    }
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
