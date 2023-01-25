<template>
    <div>
        <TermsComponent />
        <FifthSection />
        <FooterSection />
    </div>
</template>

<script>
import TermsComponent from '@/components/TermsComponent.vue';
import FifthSection from '@/components/FifthSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { FooterSection, FifthSection, TermsComponent }
}
</script>

<style scoped>

</style>