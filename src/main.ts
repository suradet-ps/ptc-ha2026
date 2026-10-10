import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/router'

import '@fontsource/prompt/thai-400.css'
import '@fontsource/prompt/thai-500.css'
import '@fontsource/prompt/thai-600.css'
import '@fontsource/prompt/thai-700.css'
import '@fontsource/prompt/latin-400.css'
import '@fontsource/prompt/latin-500.css'
import '@fontsource/prompt/latin-600.css'
import '@fontsource/prompt/latin-700.css'
import '@/styles/main.css'

const app = createApp(App)
app.use(router)

await router.isReady()
app.mount('#app')
