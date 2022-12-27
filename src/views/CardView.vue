<template>
  <div class="about">
    <CardHero />
    <CardSecondsection />
    <CardThird />
    <FifthSection />
    <FooterSection />
  </div>
</template>


<script>
import CardHero from '@/components/CardHero.vue';
import FifthSection from '@/components/FifthSection.vue';
import CardSecondsection from '@/components/CardSecondsection.vue';
import CardThird from '@/components/CardThird.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  components: { CardHero, FooterSection, FifthSection, CardSecondsection, CardThird }
}
</script>

<style lang="scss" scoped>

</style>