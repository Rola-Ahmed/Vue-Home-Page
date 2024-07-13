`<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/main/Navbar.vue';
import Footer from '@/components/main/Footer.vue';

export default {
  name: 'AppLayout',
  components: {
    Navbar,
    Footer
  }
};
</script>

`