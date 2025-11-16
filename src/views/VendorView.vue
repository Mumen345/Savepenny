<template>
    <div>
        <br />
        <br />
        <br />
        <VendorHero />
        <InstantSolution />
        <PosSection />
        <FifthSection />
        <FooterSection />
    </div>
</template>
  

<script>
import VendorHero from '@/components/PageSection.vue';
import InstantSolution from '@/components/InstantSolution.vue';
import FifthSection from '@/components/FifthSection.vue';
import PosSection from '@/components/PosSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { VendorHero, FifthSection, FooterSection, InstantSolution, PosSection }
}
</script>

<style lang="scss" scoped>

</style>