<template>
    <div class="finded">
        <button class="backBTN" @click='back'>返回</button>
        <br/>
        <input type="text" />
        <button>添加</button>
        <p>
            <router-link to="/helloWorld">{{ use }}</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'finded',
  data () {
    return {
      use: 'aaa'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

    .finded {
        background-color: teal;
        height: 1000px;
    }

</style>
