import { createApp } from "vue"
import App from "./App.vue"

import ChakraUIVuePlugin from "@chakra-ui/vue-next"

const app = createApp(App).use(ChakraUIVuePlugin)

app.mount("#app")