<template>
  <div class="login">
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <div>
        ユーザー名:
        <input type="text" placeholder="username" v-model="username" required>
      </div>
      <div>
        パスワード:
        <input type="password" placeholder="password" v-model="password" required>
      </div>
      <button>ログイン</button>
    </form>
    <router-link to="/confirm">確認コード入力</router-link>
    <router-link to="/singup">ユーザー登録</router-link>
    <router-link to="/changepassword">強制パスワードの変更</router-link>
    <router-link to="/passwordreset">リセット時処理</router-link>
    <router-link to="/sendkey">確認コードの再送信(未認証)</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$cognito.login(this.username, this.password)
        .then(result => {
          this.$router.replace('/home')
        })
        .then(err => {
          this.error = err
        })
    }
  }
}
</script>
