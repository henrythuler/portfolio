import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import routes from './routes/index'
import HeaderModel from './components/layout/HeaderModel.vue'
import CardModel from './components/layout/CardModel.vue'

const app = createApp(App)
app.use(routes)
app.use(store)
app.component('HeaderModel', HeaderModel)
app.component('CardModel', CardModel)
app.mount('#app')