<template>
  <div class="home">
    <Highlights />
  </div>
</template>

<script>
// @ is an alias to /src
import Highlights from '@/components/Highlights.vue'

export default {
  name: 'Home',
  components: {
    Highlights
  }
}
</script>
