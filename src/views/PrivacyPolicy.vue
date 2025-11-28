<template>
    <div>
        <PrivacyHero />
        <PrivacyFifth />
        <FooterSection />
    </div>
</template>

<script>
import FooterSection from '@/components/FooterSection.vue';
import PrivacyFifth from '@/components/PrivacyFifth.vue';
import PrivacyHero from '@/components/PrivacyHero.vue';

export default {
    components: { FooterSection, PrivacyHero,PrivacyFifth }
}
</script>

<style scoped>

</style>