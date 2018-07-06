<template>
  <div class="signup">
    <router-link to="/login">ログイン</router-link>
    <router-link to="/signup">新規登録</router-link>
    <router-link to="/confirm">確認コード入力</router-link>
    <router-link to="/changepassword">管理者がユーザ登録した際のsignup</router-link>
    <router-link to="/passwordreset">リセット時処理</router-link>
    <router-link to="/sendkey">確認コードの再送信(未認証)</router-link>
    <router-link to="/forgotpassword">パスワードを忘れた</router-link>
  </div>
</template>

<script>
export default {
  name: 'Link'
}
</script>
