<template>
    <div>
        <PrivacyHero />
        <div class="text-center p-5 bg-light">
            <hr>
            <p>
                Last updated: January 10, 2026
            </p>
        </div>
        <PrivacyFifth />
        <FooterSection />
    </div>
</template>

<script>
import FooterSection from '@/components/FooterSection.vue';
import PrivacyFifth from '@/components/PrivacyFifth.vue';
import PrivacyHero from '@/components/PrivacyHero.vue';

export default {
    components: { FooterSection, PrivacyHero, PrivacyFifth }
}
</script>

<style scoped></style>