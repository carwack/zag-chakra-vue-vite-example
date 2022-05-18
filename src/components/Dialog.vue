<script setup lang="ts">
import * as dialog from "@zag-js/dialog"
import { normalizeProps, useMachine, useSetup, PropTypes } from "@zag-js/vue"
import { computed, Teleport } from "vue"
import { CButton, CBox, CCenter, CCloseButton, CFlex, CHeading, CText, chakra } from "@chakra-ui/vue-next"

const [state, send] = useMachine(dialog.machine)
const ref = useSetup({ send, id: "1" })
const api = computed(() =>
  dialog.connect<PropTypes>(state.value, send, normalizeProps)
);

const saveChanges = () => {
  console.log('save changes')
  api.value.close()
}
</script>

<template>
  <CButton ref="ref" v-bind="api.triggerProps">Open Dialog</CButton>
  <Teleport to="body">
    <div v-if="api.isOpen" className="modal">
      <CBox
        position="fixed"
        inset="0"
        bg="blackAlpha.500"
        z-index="modal"
        v-bind="api.backdropProps"
      />
      <CCenter
        height="100vh"
        width="100vw"
        position="fixed"
        z-index="modal"
        inset="0"
        v-bind="api.underlayProps"
      >
        <CBox
          width="full"
          max-w="400px"
          rounded="md"
          bg="white"
          padding="5"
          position="relative"
          pointer-events="auto"
          v-bind="api.contentProps"
        >
          <CHeading
            as="h2"
            font-weight="semibold"
            font-size="lg"
            mb="2"
            v-bind="api.titleProps"
          >
            Edit profile
          </CHeading>
          <CText font-size="sm" mb="3" v-bind="api.descriptionProps">
            Make changes to your profile here. Click save when you are done.
          </CText>
          <CFlex>
            <chakra.input
              flex="1"
              fontSize="sm"
              borderWidth="1px"
              px="2"
              py="1"
              mr="2"
              placeholder="Enter name..."
            />
            <CButton color-scheme="green" size="sm" @click="saveChanges">Save Changes</CButton>
          </CFlex>
          <CCloseButton
            display="flex"
            position="absolute"
            top="3"
            right="3"
            v-bind="api.closeButtonProps"
          />
        </CBox>
      </CCenter>
    </div>
  </Teleport>
</template>