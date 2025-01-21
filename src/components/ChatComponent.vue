<script setup>
import { watch, nextTick } from 'vue'
import MessageListComponent from '@/components/MessageListComponent.vue'

const props = defineProps({
  messages: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

watch(
  () => props.messages,
  () => {
    nextTick(() => {
      const chatContainer = document.querySelector('.chat-component')
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight
      }
    })
  },
  { deep: true },
)
</script>

<template>
  <div class="chat-component">
    <MessageListComponent :messages="messages" :isLoading="isLoading" />
  </div>
</template>
