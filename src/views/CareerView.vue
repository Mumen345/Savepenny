<template>
    <div>
        <CareerHero />
        <FindJobs />
        <FooterSection />
    </div>
</template>

<script>
import CareerHero from '@/components/CareerHero.vue';
import FindJobs from '@/components/FindJobs.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { CareerHero, FooterSection, FindJobs }
}
</script>

<style scoped>

</style>