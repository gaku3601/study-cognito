<template>
  <div class="confirm">
    <h2>パスワードを忘れたフロー</h2>
    <form @submit.prevent="confirm">
      <div>
        メール:
        <input type="text" placeholder="メール" v-model="username" required>
      </div>
      <button>確認</button>
    </form>
    <router-link to="/login">ログイン</router-link>
    <router-link to="/singup">ユーザー登録</router-link>
    <router-link to="/changepassword">強制パスワードの変更</router-link>
    <router-link to="/passwordreset">リセット時処理</router-link>
    <router-link to="/sendkey">確認コードの再送信(未認証)</router-link>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    confirm () {
      this.$cognito.sendKey(this.username)
        .then(result => {
          this.$router.replace('/passwordreset')
        })
        .then(err => {
          this.error = err
        })
    }
  }
}
</script>
