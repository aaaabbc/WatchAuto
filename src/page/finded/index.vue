<template>
    <div class="finded">
        <div class="comBar">
            <bar></bar>
        </div>
        <watch class="comWatch"></watch>
    </div>
</template>

<script>
import watch from '../../components/watch'
import bar from '../../components/bar'
export default {
  name: 'finded',
  data () {
    return {
      IDArr: [],
      itemLen: Number,
      getData: {}
    }
  },
  components: {
    watch,
    bar
  }
}
</script>

<style scoped>

    .comBar {
        width: 20px;
        height: 100%;
        background-image: linear-gradient(to left, white 0%, teal 100%);
        min-width: 235px;
        max-width: 250px;
    }

    .comWatch {
        float: right;
        width: 80%;
    }

    .finded {
        background-color: white;
        height: 800px;
        display: flex;
    }

    li {
        list-style: none;
    }

    /* .comWatch {
        float: right;
    } */
</style>
