<script setup>
// import HelloWorld from './components/HelloWorld.vue'

import { onMounted, inject } from "vue";
import { useSocketIO } from "@hlf01/vue3-socket.io";
const socketIO = useSocketIO();
const socket = inject("socket");

onMounted(() => {
    socketIO.subscribe("connect", () => {
        console.log("Socket connected:", socket.id);
    });

    // Custom event name
    socketIO.subscribe("chat", (messages) => {
        console.log("Received messages:", messages);
    });
});

// All event listeners will be unsubscribed automatically once the component is unmounted
// function unsubscribeEvent(eventName) {
//     // Unsubscribe event for current instance
//     socketIO.unsubscribe(eventName);
// }

function sendMessage(message) {
    // Emit event
    console.log('sendmessage', socket);
    socket.emit("chat message", message);
}

</script>

<template>
<div>
  <button @click="sendMessage('test')">Send message</button>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</div>
</template>

<style scoped>
</style>
