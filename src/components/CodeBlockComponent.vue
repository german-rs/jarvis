<script setup>
import { onMounted, nextTick, ref, watch } from 'vue'
import Prism from 'prismjs'

// Temas y lenguajes
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

Prism.manual = true

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'plaintext',
  },
})

const codeRef = ref(null)

const highlightCode = () => {
  nextTick(() => {
    if (codeRef.value) {
      Prism.highlightElement(codeRef.value)
    }
  })
}

// Actualizar cuando cambian las props
watch(
  () => [props.code, props.language],
  () => {
    highlightCode()
  },
)

onMounted(() => {
  highlightCode()
})
</script>

<template>
  <div class="code-block">
    <pre :data-language="language">
      <code ref="codeRef" :class="`language-${language}`">{{ code }}</code>
    </pre>
  </div>
</template>
