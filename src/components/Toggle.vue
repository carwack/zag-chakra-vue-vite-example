<script setup lang="ts">
import { computed } from "vue"
import * as toggle from "@zag-js/toggle"
import { CButton } from "@chakra-ui/vue-next"
import { useMachine, useSetup, normalizeProps } from "@zag-js/vue"

const [state, send] = useMachine(toggle.machine)
const ref = useSetup({ send, id: "1" })
const api = computed(() => toggle.connect(state.value, send, normalizeProps))
</script>

<template>
  <c-button ref="ref" v-bind="api.buttonProps">
    {{ api.isPressed }}
  </c-button>
</template>