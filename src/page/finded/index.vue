<template>
    <div class="finded">
        <button class="backBTN" @click='back'>返回</button>
        <br/>
        <input type="text" />
        <button @click="addItem">添加</button>
        <ul>
            <button v-for="(item, index) in getData" :key="item.UID" @click="skip(index)">{{index}}</button>
        </ul>
        <p>
            <router-link to="/watch">{{ use }}</router-link>
        </p>
        <watch :IDArr="IDArr" v-if="false"></watch>
        <router-view></router-view>
    </div>
</template>

<script>
import watch from '../../components/watch'
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
  methods: {
    back () {
      this.$router.go(-1)
    },
    addItem () {
      // 暂时给页面增加选项，之后要传给后端数据
    },
    skip (a) {
      console.log(this.getData[a]['UID'])
      // 发给组件watch
    }
  },
  created () {
    this.$axios.get('../static/value.json').then((resp) => {
      this.itemLen = Object.keys(resp.data).length
      for (let i = 0; i < this.itemLen; i++) {
        this.IDArr.push(Object.keys(resp.data)[i])
        this.getData = resp.data
      }
      // console.log(Object.keys(resp.data)[0])
    })
  },
  components: {
    watch
  }
}
</script>

<style scoped>

    .finded {
        background-color: teal;
        height: 1000px;
    }

    li {
        list-style: none;
    }
</style>
