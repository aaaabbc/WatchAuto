<template>
<!-- 这是一个条形导航栏组件，包括添加及选择，通过按钮选择后watch组件会跳转到相应的up主，
存在一个问题：如何调整子组件在父组件中的位置？ -->
    <div class="bar">
        <button class="backBTN" @click='back'>返回</button>
        <br/>
        <input type="text" />
        <button @click="addItem">添加</button>
        <button class="chooseUP" v-for="(item, index) in getData" :key="item.UID" @click="skip(index)">{{index}}</button>
    </div>
</template>

<script>
import Bar from '../bar'
export default {
  name: 'bar',
  data () {
    return {
      url: 'https://space.bilibili.com/',
      IDArr: [],
      itemLen: Number,
      getData: {}
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    skip (a) {
      this.url += this.getData[a]['UID']
      Bar.$emit('bar', this.url)
      // 发给组件watch
    },
    addItem () {
      // 暂时给页面增加选项，之后要传给后端数据
    }
  },
  created () {
    this.$axios.get('../static/value.json').then((resp) => {
      this.itemLen = Object.keys(resp.data).length
      for (let i = 0; i < this.itemLen; i++) {
        this.IDArr.push(Object.keys(resp.data)[i])
        this.getData = resp.data
      }
    })
  }
}
</script>

<style scoped>

    .bar {
        background-image: linear-gradient(to bottom, #c0c7ce 0%, #333538 100%);
    }

    .chooseUP {
        width: 100%;
        height: 50px;
        background-color: rgba(0, 0, 0, 0%);
    }
</style>
