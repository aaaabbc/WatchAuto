<template>
    <div class="finded">
        <bar class="comBar"></bar>
        <!-- <p>
            <router-link to="/watch">{{ use }}</router-link>
        </p> -->
        <watch :IDArr="IDArr" class="comWatch"></watch>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import watch from '../../components/watch'
import bar from '../../components/bar'
export default {
  name: 'finded',
  data () {
    return {
      use: 'aaa',
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

    .bar {
        width: 20%;
        height: 100%;
        min-width: 235px;
        max-width: 250px;
    }

    .finded {
        background-color: teal;
        height: 1000px;
    }

    li {
        list-style: none;
    }

    /* .comWatch {
        float: right;
    } */
</style>
