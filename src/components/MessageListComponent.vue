<script setup>
import { marked } from 'marked'
import DOMPurify from 'dompurify'

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

const messageClass = (type) => {
  return type === 'user'
    ? 'messages__item messages__item--user'
    : 'messages__item messages__item--response'
}

marked.setOptions({
  breaks: true,
  gfm: true,
})

const processMessage = (content) => {
  const rawHtml = marked(content || '')
  return DOMPurify.sanitize(rawHtml)
}
</script>

<template>
  <div class="messages">
    <div v-for="(message, index) in messages" :key="index" :class="messageClass(message.type)">
      <div class="message-content" v-html="processMessage(message.content)"></div>
    </div>

    <div v-if="isLoading" class="messages__item messages__item--response messages__item--typing">
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
