<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ChatComponent from '@/components/ChatComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import { sendMessage } from '@/services/cohere'

const store = useStore()
const messages = computed(() => store.state.messages)

const handleSendMessage = async (messageContent) => {
  store.dispatch('sendMessage', messageContent)

  try {
    const response = await sendMessage(messageContent)
    store.dispatch('receiveMessage', response.text)
  } catch (error) {
    console.error('Error:', error)
    store.dispatch('receiveMessage', 'Lo siento, hubo un error al procesar tu mensaje.')
  }
}
</script>

<template>
  <main class="home container">
    <h1 class="home__title">Welcome</h1>
    <div class="home__chat-container">
      <ChatComponent :messages="messages" />
    </div>
    <div class="home__input-container">
      <InputComponent :onSendMessage="handleSendMessage" />
    </div>
  </main>
</template>
