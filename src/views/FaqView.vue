<template>
    <div class="about">
        <FaqHero />
        <AccordionComponent />
        <FaqHelp />
        <FaqLast />
        <FooterSection />
    </div>
</template>


<script>
import FaqHero from '@/components/FaqHero.vue';
import AccordionComponent from '@/components/AccordionComponent.vue';
import FooterSection from '@/components/FooterSection.vue';
import FaqHelp from '@/components/FaqHelp.vue';
import FaqLast from '@/components/FaqLast.vue';

export default {
    components: { FooterSection, AccordionComponent, FaqHero, FaqHelp, FaqLast }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 430px) {}
</style>