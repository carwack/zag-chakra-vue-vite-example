<script setup lang="ts">
import Toggle from './components/Toggle.vue'
import Accordion from './components/Accordion.vue'
import Dialog from './components/Dialog.vue'
import Editable from './components/Editable.vue'
import Menu from './components/Menu.vue'
import NumberInput from './components/NumberInput.vue'
</script>

<template>
  <Toggle />
  <Accordion />
  <Dialog />
  <Editable />
  <Menu />
  <NumberInput />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
