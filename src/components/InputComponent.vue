<script setup>
import { ref } from 'vue'

const props = defineProps({
  onSendMessage: {
    type: Function,
    required: true,
  },
})

const messageContent = ref('')

const sendMessage = () => {
  if (messageContent.value.trim()) {
    props.onSendMessage(messageContent.value)
    messageContent.value = ''
  }
}
</script>

<template>
  <div class="input-component">
    <input
      class="input-component__input"
      v-model="messageContent"
      @keyup.enter="sendMessage"
      placeholder="Escribe un mensaje..."
    />
  </div>
</template>
