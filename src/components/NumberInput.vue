<script setup lang="ts">
import * as numberInput from "@zag-js/number-input"
import { normalizeProps, useMachine, useSetup, PropTypes } from "@zag-js/vue"
import { computed } from "vue"
import { CButton, CBox, CInput, chakra } from "@chakra-ui/vue-next"

const [state, send] = useMachine(numberInput.machine({
    min: -1,
    max: 10,
  }))
const ref = useSetup({ send, id: "1" })
const api = computed(() =>
  numberInput.connect<PropTypes>(state.value, send, normalizeProps)
)
</script>

<template>
  <div ref="ref" v-bind="api.rootProps">
    <label v-bind="api.labelProps">Enter number</label>
    <CBox position="relative" display="inline-block">
      <CInput
        borderWidth="1px"
        height="14"
        pr="5"
        pl="3"
        ml="2"
        v-bind="api.inputProps"
      />
      <CBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="absolute"
        width="6"
        right="3px"
        top="3px"
      >
        <chakra.button
          width="full"
          bg="gray.100"
          display="flex"
          justifyContent="center"
          :_disabled="{ opacity: 0.5 }"
          v-bind="api.incrementButtonProps"
        >
          +
        </chakra.button>
        <chakra.button
          mt="2px"
          width="full"
          bg="gray.100"
          display="flex"
          justifyContent="center"
          :_disabled="{ opacity: 0.5 }"
          v-bind="api.decrementButtonProps"
        >
          -
        </chakra.button>
      </CBox>
    </CBox>
  </div>
</template>