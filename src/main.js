import App from './App.vue'
import { createApp } from 'vue'
import {createStore} from 'vuex'
import tasks from './store/modules/tasks'

const store = createStore({
    modules:{
        tasks
    }
})
const app = createApp(App);

app.use(store);
app.mount('#app');
