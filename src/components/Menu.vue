<script setup lang="ts">
import * as menu from "@zag-js/menu"
import { normalizeProps, useMachine, useSetup } from "@zag-js/vue"
import { computed } from "vue"
import { CBox, CButton, chakra } from "@chakra-ui/vue-next"

const [state, send] = useMachine(menu.machine({ "aria-label": "File" }))
const ref = useSetup({ send, id: "1" })
const api = computed(() => menu.connect(state.value, send, normalizeProps))

const data = [
  { label: "Edit", value: "edit" },
  { label: "Delete", value: "delete" },
  { label: "Export", value: "export" },
  { label: "Duplicate", value: "duplicate" },
]
</script>

<template>
  <div ref="ref">
    <chakra.button display="inline-block" size="sm" color-scheme="green" v-bind="api.triggerProps">
      Actions <chakra.span ml="1" aria-hidden>▾</chakra.span>
    </chakra.button>
    <CBox v-bind="api.positionerProps">
      <chakra.ul
        bg="white"
        width="240px"
        p="2"
        isolation="isolate"
        list-style-type="none"
        shadow="base"
        class-name="focus-outline"
        v-bind="api.contentProps"
      >
        <chakra.li
          v-for="item in data"
          px="2"
          py="1"
          cursor="pointer"
          :key="item.value"
          :_focus="{ bg: 'green.200' }"
          v-bind="api.getItemProps({ id: item.label })"
        >
          {{ item.label }}
        </chakra.li>
      </chakra.ul>
    </CBox>
  </div>
</template>