<template>
<!-- 这是一个条形导航栏组件，包括添加及选择，通过按钮选择后watch组件会跳转到相应的up主，
存在一个问题：如何调整子组件在父组件中的位置？ -->
    <div class="bar">
        <div class="finding">
            <input class="addInput" type="text" />
            <button class="addBtn" @click="addItem">添加</button>
        </div>
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
      // itemLen: Number,
      getData: {}
    }
  },
  methods: {
    skip (a) {
      Bar.$emit('bar', this.getData[a])
      // 发给组件watch
    },
    addItem () {
      // 暂时给页面增加选项，之后要传给后端数据
    }
  },
  created () {
    this.$axios.get('/api/getVideo').then((resp) => {
      this.getData = resp.data.data
      // this.itemLen = Object.keys(this.getData).length
      console.log(this.getData)
    })
    // fetch('D:/learngit/data.json').then((resp) => {
    //   this.itemLen = Object.keys(resp.data).length
    //   this.getData = resp.data
    // })
  }
}
</script>

<style scoped>

    .addInput {
        padding-left: 10px;
        margin-right: 10px;
        width: 90%;
        height: 30px;
        border-radius: 10px;
        border-width: 0px;
        outline: none;
    }

    .bar {
        padding-left: 10px;
        padding-right: 10px;
    }

    /* 添加按钮addBtn */
    .addBtn{
        margin-top: 10px;
        border-radius: 10px;
        border-width: 0px;
        width: 90%;
        height: 30px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15),
        -3px -3px 6px rgba(255, 255, 255, 0.8);
        background: linear-gradient(150deg,#f0f0f0,#cacaca);
        outline: none;
    }

    .addBtn:active {
        box-shadow:1px 1px 2px rgba(0, 0, 0, 0.15),
        -.5px -.5px 1px rgba(255, 255, 255, 0.8);
        background:none;
    }

    .finding {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 10px;
    }

    .chooseUP {
        width: 100%;
        height: 50px;
        background-color: rgba(0, 0, 0, 0%);
        border-color: rgba(255, 255, 255, 0%);
        margin-bottom: 10px;
        outline: none;
    }

    .chooseUP:focus {
        color: rgb(0, 0, 0);
        border-radius: 10px;
        box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.2),
        inset -1px -1px 3px rgba(255, 255, 255, 0.9);
    }

    button:hover {
        color: rgba(0, 0, 0, 0.6);
    }
</style>
