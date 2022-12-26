<template>
    <div class="about">
        <CareerHero />
        <CareerSecondsection />
        <CareerThird />
        <FifthSection />
        <FooterSection />
    </div>
</template>
  

<script>
import CareerHero from '@/components/CareerHero.vue';
import FifthSection from '@/components/FifthSection.vue';
import CareerSecondsection from '@/components/CareerSecondsection.vue';
import CareerThird from '@/components/CareerThird.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { CareerHero, FooterSection, FifthSection, CareerSecondsection, CareerThird }
}
</script>

<style lang="scss" scoped>

</style>