<template>
    <div>
        <TermsHero />
        <TermsFifth />
        <FooterSection />
    </div>
</template>

<script>
import TermsHero from '@/components/TermsHero.vue';
import FooterSection from '@/components/FooterSection.vue';
import TermsFifth from '@/components/TermsFifth.vue';

export default {
    components: { FooterSection, TermsHero,TermsFifth }
}
</script>

<style scoped>

</style>