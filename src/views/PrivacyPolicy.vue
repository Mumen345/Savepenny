<template>
    <div>
        <PrivacyComponent />
        <FifthSection />
        <FooterSection />
    </div>
</template>

<script>
import PrivacyComponent from '@/components/PrivacyComponent.vue';
import FifthSection from '@/components/FifthSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { FooterSection, FifthSection, PrivacyComponent }
}
</script>

<style scoped>

</style>