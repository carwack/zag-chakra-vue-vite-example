<script setup lang="ts">
import * as accordion from "@zag-js/accordion"
import { useMachine, useSetup, normalizeProps } from "@zag-js/vue"
import { computed } from "vue"
import { CBox, CButton, chakra } from "@chakra-ui/vue-next"

const items = [
  {
    title: "Watercraft",
    desc: "Yacht, Boats and Dinghies",
    content: "Sample accordion content",
  },
  {
    title: "Automobiles",
    desc: "Cars, Trucks and Vans",
    content: "Sample accordion content",
  },
  {
    title: "Aircrafts",
    desc: "Airplanes, Helicopters and Rockets",
    content: "Sample accordion content",
  },
]

const [state, send] = useMachine(
  accordion.machine({
    collapsible: true,
  })
);

const ref = useSetup({ send, id: "1" });
const api = computed(() =>
  accordion.connect(state.value, send, normalizeProps)
)
</script>

<template>
  <c-box ref="ref" v-bind="api.rootProps">
    <c-box
      v-for="item in items"
      key="item.title"
      v-bind="api.getItemProps({ value: item.title })"
      bg="white"
      borderWidth="1px"
      fontSize="sm"
    >
      <h3>
        <chakra.button
          v-bind="api.getTriggerProps({ value: item.title })"
          width="full"
          py="2"
          px="3"
          textAlign="start"
          cursor="pointer"
        >
          <c-box fontWeight="semibold">{{ item.title }}</c-box>
          <c-box fontSize="xs" color="gray.600">
            {{ item.desc }}
          </c-box>
        </chakra.button>
      </h3>
      <c-box
        v-bind="api.getContentProps({ value: item.title })"
        width="full"
        py="2"
        px="3"
      >
        {{ item.content }}
      </c-box>
    </c-box>
  </c-box>
</template>