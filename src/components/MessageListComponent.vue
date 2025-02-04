<script setup>
import { marked } from 'marked'
import { ref } from 'vue'
import CodeBlockComponent from './CodeBlockComponent.vue'

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

const messageCache = new Map()

const processMessage = (content) => {
  if (!content) return { isCode: false, content: '' }

  const cached = messageCache.get(content)
  if (cached) return cached

  // Regex mejorado para detectar bloques de código
  const codeBlockRegex = /^```\s*(\w+)?\s*\n([\s\S]+?)\n```/gm
  const match = codeBlockRegex.exec(content)

  if (match) {
    const langMap = {
      js: 'javascript',
      py: 'python',
      ts: 'typescript',
      cpp: 'cpp',
      'c++': 'cpp',
      sh: 'bash',
      shell: 'bash',
      md: 'markdown',
      json: 'json',
      java: 'java',
      html: 'markup',
      xml: 'markup',
      css: 'css',
      '': 'plaintext',
      text: 'plaintext',
      plain: 'plaintext',
    }

    const rawLang = (match[1] || 'plaintext').toLowerCase()
    const lang = langMap[rawLang] || rawLang
    const code = match[2].trim()

    const result = {
      isCode: true,
      language: lang,
      content: code,
    }

    messageCache.set(content, result)
    return result
  }

  const result = {
    isCode: false,
    content: marked(content || ''),
  }

  messageCache.set(content, result)
  return result
}
</script>

<template>
  <div class="messages container">
    <div v-for="(message, index) in messages" :key="index" :class="messageClass(message.type)">
      <div class="message-wrapper">
        <template v-if="processMessage(message.content).isCode">
          <CodeBlockComponent
            :code="processMessage(message.content).content"
            :language="processMessage(message.content).language"
          />
        </template>
        <div v-else class="message-content" v-html="processMessage(message.content).content" />

        <button
          v-if="message.type !== 'user'"
          class="copy-button"
          @click="copyToClipboard(message, index)"
          :class="{ copied: copiedMessageId === index }"
          :aria-label="copiedMessageId === index ? 'Copiado!' : 'Copiar mensaje'"
        >
          <span class="copy-icon" v-if="copiedMessageId !== index">
            <!-- SVG del icono de copiar -->
          </span>
          <span class="check-icon" v-else>
            <!-- SVG del icono de check -->
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
