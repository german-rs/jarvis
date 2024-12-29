<script setup>
const { messages } = defineProps({
  messages: {
    type: Array,
    required: true,
  },
})

const messageClass = (type) => {
  return type === 'user'
    ? 'messages__item messages__item--user'
    : 'messages__item messages__item--response'
}
</script>

<template>
  <div class="messages">
    <div v-for="(message, index) in messages" :key="index" :class="messageClass(message.type)">
      {{ message.content }}
    </div>
  </div>
</template>
