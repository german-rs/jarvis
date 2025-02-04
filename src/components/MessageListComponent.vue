<script setup>
import { marked } from 'marked'
import { ref } from 'vue'

defineProps({
  messages: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const copiedMessageId = ref(null)

const messageClass = (type) => {
  return type === 'user'
    ? 'messages__item messages__item--user'
    : 'messages__item messages__item--cohere'
}

marked.setOptions({
  breaks: true,
  gfm: true,
})

const processMessage = (content) => {
  return marked(content || '')
}

const copyToClipboard = async (message, index) => {
  try {
    await navigator.clipboard.writeText(message.content)
    copiedMessageId.value = index
    setTimeout(() => {
      copiedMessageId.value = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text:', err)
  }
}
</script>

<template>
  <div class="messages container">
    <div v-for="(message, index) in messages" :key="index" :class="messageClass(message.type)">
      <div class="message-wrapper">
        <div class="message-content" v-html="processMessage(message.content)"></div>
        <button
          v-if="message.type !== 'user'"
          class="copy-button"
          @click="copyToClipboard(message, index)"
          :class="{ copied: copiedMessageId === index }"
          :aria-label="copiedMessageId === index ? 'Copiado!' : 'Copiar mensaje'"
        >
          <span class="copy-icon" v-if="copiedMessageId !== index">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </span>
          <span class="check-icon" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </div>

    <div v-if="isLoading" class="messages__item messages__item--cohere messages__item--typing">
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
