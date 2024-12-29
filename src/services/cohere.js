import { CohereClient } from 'cohere-ai'

const cohereClient = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
})

export const sendMessage = async (messageContent) => {
  try {
    const response = await cohereClient.chat({
      message: messageContent,
      model: 'command-r',
      temperature: 0.7,
    })
    return response
  } catch (error) {
    console.error('Error al enviar mensaje a Cohere:', error)
    throw error
  }
}
