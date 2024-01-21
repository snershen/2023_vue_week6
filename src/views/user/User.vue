<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<script>
import Navbar from '@/components/user/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
