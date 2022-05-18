<script setup lang="ts">
import * as pinInput from "@zag-js/pin-input"
import { normalizeProps, useMachine, useSetup } from "@zag-js/vue"
import { computed } from "vue"
import { CButton, CFlex, CInput } from "@chakra-ui/vue-next"

const [state, send] = useMachine(pinInput.machine({
    blurOnComplete: true,
  }))
const ref = useSetup({ send, id: "1" })
const api = computed(() => pinInput.connect(state.value, send, normalizeProps))
</script>

<template>
  <div>
    <CFlex justify="center" ref="ref" my="4" v-bind="api.rootProps">
      <CInput
        bg="white"
        border-width="1px"
        width="50px"
        height="50px"
        font-size="lg"
        text-align="center"
        v-for="(_, index) in 3"
        :key="index"
        v-bind="api.getInputProps({ index })"
      />
    </CFlex>
    <CButton color-scheme="green" @click="api.clearValue">
      Clear
    </CButton>
  </div>
</template>