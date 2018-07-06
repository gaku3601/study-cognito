<template>
  <div class="confirm">
    <h2>確認コード入力</h2>
    <form @submit.prevent="confirm">
      <div>
        メール:
        <input type="text" placeholder="メール" v-model="username" required>
      </div>
      <div>
        確認コード:
        <input type="text" placeholder="確認コード" v-model="confirmationCode" required>
      </div>
      <div>
        パスワード:
        <input type="password" placeholder="パスワード" v-model="password" required>
      </div>
      <button>確認</button>
    </form>
    <router-link to="/login">ログイン</router-link>
    <router-link to="/singup">ユーザー登録</router-link>
    <router-link to="/changepassword">強制パスワードの変更</router-link>
    <router-link to="/passwordreset">リセット時処理</router-link>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      username: '',
      confirmationCode: '',
      password: ''
    }
  },
  methods: {
    confirm () {
      this.$cognito.confirmPassword(this.username, this.password, this.confirmationCode)
        .then(result => {
          this.$router.replace('/login')
        })
        .then(err => {
          this.error = err
        })
    }
  }
}
</script>
