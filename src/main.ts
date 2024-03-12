import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

function add(n) {
  console.log('测试格式化代111码1' + n)
}

add(1)
createApp(App).mount('#app')
