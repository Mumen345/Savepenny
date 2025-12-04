<template>
    <div>
        <TermsHero />
          <div class="text-center p-5 bg-light">
            <hr>
            <p>
                Last updated: January 10, 2026
            </p>
        </div>
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