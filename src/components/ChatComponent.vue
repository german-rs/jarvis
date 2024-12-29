<script setup>
import MessageListComponent from '@/components/MessageListComponent.vue'

defineProps({
  messages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="chat-component">
    <MessageListComponent :messages="messages" />
    <!-- Quita el props. -->
  </div>
</template>
