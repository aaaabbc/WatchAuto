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

    body {
        background-color: #000;
    }

    .comBar {
        border-radius: 20px;
        margin-top: 15px;
        margin-right: 10px;
        margin-left: 20px;
        width: 20%;
        height: 95%;
        background-color: #e0e0e0;
        min-width: 235px;
        max-width: 250px;
    }

    .comWatch {
        padding-top: 5%;
        padding-left: 15%;
        float: right;
        width: 80%;
    }

    .finded {
        background-color: rgba(0, 0, 0, 0);
        height: 900px;
        display: flex;
    }

    li {
        list-style: none;
    }

    /* .comWatch {
        float: right;
    } */
</style>
