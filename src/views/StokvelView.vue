<template>
    <div>
        <PageSection />
        <StocketSecond />
        <StokvelWorks />
        <StokvelCreate />
        <FooterSection />
    </div>
</template>
  

<script>
import PageSection from '@/components/PageSection.vue';
import StokvelWorks from '@/components/StokvelWorks.vue';
import StokvelCreate from '@/components/StokvelCreate.vue';
import FooterSection from '@/components/FooterSection.vue';
import StocketSecond from '@/components/StocketSecond.vue';

export default {
    components: { PageSection, StocketSecond,StokvelWorks, StokvelCreate, FooterSection }
}
</script>

<style lang="scss" scoped>

</style>