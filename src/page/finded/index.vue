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
        border-radius: 20px;
        margin-top: 10px;
        margin-right: 10px;
        width: 20%;
        height: 95%;
        background-color: #e0e0e0;
        min-width: 235px;
        max-width: 250px;
    }

    .comWatch {
        padding-top: 10%;
        padding-left: 15%;
        float: right;
        width: 80%;
    }

    .finded {
        background-color: #fcfcfc;
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
