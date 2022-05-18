<script setup lang="ts">
import * as editable from "@zag-js/editable"
import { normalizeProps, useMachine, useSetup } from "@zag-js/vue"
import { computed } from "vue"
import { CButton, CBox, CFlex, chakra } from "@chakra-ui/vue-next"

const [state, send] = useMachine(editable.machine({
    autoResize: true,
    placeholder: "Enter text...",
  }))
const ref = useSetup({ send, id: "1" })
const api = computed(() => editable.connect(state.value, send, normalizeProps))


</script>

<template>
  {{ api.inputProps.value }}
  <CBox width="300px" ref="ref" v-bind="api.rootProps">
    <CBox mb="3" v-bind="api.areaProps">
      <chakra.input
        class="focus-outline"
        v-bind="api.inputProps"
      />
      <span v-bind="api.previewProps" />
    </CBox>
    <CBox>
      <CButton
        size="sm"
        variant="outline"
        bg="white"
        v-if="!api.isEditing"
        v-bind="api.editButtonProps"
      >
        Edit
      </CButton>
      <CFlex v-if="api.isEditing">
        <CButton size="sm" color-scheme="green" v-bind="api.submitButtonProps">
          Save
        </CButton>
        <CButton
          size="sm"
          variant="outline"
          bg="white"
          v-bind="api.cancelButtonProps"
        >
          Cancel
        </CButton>
      </CFlex>
    </CBox>
  </CBox>
</template>