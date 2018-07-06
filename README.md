# 参考文献
https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html  
https://qiita.com/daikiojm/items/b02c19cfea6766c308ca  

# セットアップ
## ライブラリの組み込み

    npm i aws-sdk --save
    npm i amazon-cognito-identity-js --save

## 設定ファイル編集
### src/config.js

    export default {
      Region: 'ap-northeast-1',
      UserPoolId: 'ap-northeast-1_XXXXXXXXX',
      ClientId: 'YYYYYYYYYYYYYYYYYYYYYYYYYY', // アプリケーションID
      IdentityPoolId: 'ap-northeast-1:XXXXXXXX-YYYY-XXXX-YYYY-XXXXXXXXXXXX'
    }

### src/cognito/cognito.js, src/cognito/index.js
このリポジトリ内のものをコピーして流用する

### src/main.js

    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import cognito from './cognito'
    
    Vue.config.productionTip = false
    
    new Vue({
      el: '#app',
      router,
      cognito,
      template: '<App/>',
      components: { App }
    })

# 使い方
componentとrouterを設定する。  
そこらへんはこのリポジトリ内に格納されているものを参照して実装する。  
