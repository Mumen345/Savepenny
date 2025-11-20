<template>
    <div>
        <SecurityHero />
        <SecuritySecond />
        <SecurityThird />
        <SecuritySixth />
        <SecurityForth />
        <SecurityFifth />
        <FooterSection />
    </div>
</template>


<script>
import SecurityThird from '@/components/SecurityThird.vue';
import SecuritySecond from '@/components/SecuritySecond.vue';
import SecurityHero from '@/components/SecurityHero.vue';
import SecurityForth from '@/components/SecurityForth.vue';
import FooterSection from '@/components/FooterSection.vue';
import SecurityFifth from '@/components/SecurityFifth.vue';
import SecuritySixth from '@/components/SecuritySixth.vue';

export default {
    components: { FooterSection, SecurityFifth, SecurityHero,SecuritySecond, SecurityForth, SecurityThird, SecuritySixth }
}
</script>

<style lang="scss" scoped></style>