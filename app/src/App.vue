<template>
  <div id="app">
    <div>
    <a href="https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html">ここらへん参照する</a>
    <a href="https://qiita.com/daikiojm/items/b02c19cfea6766c308ca">ここらへん参照する</a>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
    <Link />
  </div>
</template>

<script>
import Link from '@/components/Link'
export default {
  name: 'App',
  components: {
    'Link': Link
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
