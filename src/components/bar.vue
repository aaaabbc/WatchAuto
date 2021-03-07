<template>
<!-- 这是一个条形导航栏组件，包括添加及选择，通过按钮选择后watch组件会跳转到相应的up主，
存在一个问题：如何调整子组件在父组件中的位置？ -->
    <div class="bar">
        <div class="finding">
            <input type="text" />
            <button @click="addItem">添加</button>
        </div>
        <button class="chooseUP" v-for="(item, index) in getData" :key="item.UID" @click="skip(index)">{{item.name}}</button>
    </div>
</template>

<script>
import Bar from '../bar'
export default {
  name: 'bar',
  data () {
    return {
      url: 'https://space.bilibili.com/',
      itemLen: Number,
      getData: {}
    }
  },
  methods: {
    skip (a) {
      Bar.$emit('bar', this.getData[a]['url'])
      // 发给组件watch
    },
    addItem () {
      // 暂时给页面增加选项，之后要传给后端数据
    }
  },
  created () {
    this.$axios.get('../static/value.json').then((resp) => {
      this.itemLen = Object.keys(resp.data).length
      this.getData = resp.data
    })
  }
}
</script>

<style scoped>

    .finding {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 10px;
    }

    .chooseUP {
        width: 100%;
        height: 50px;
        background-color: rgba(0, 0, 0, 0%);
    }
</style>
