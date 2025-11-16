<template>
    <div>
        <FlexFirst />
        <FlexSecond />
        <FlexWorks />
        <FlexCreate />
        <FooterSection />
    </div>
</template>
  

<script>
import FlexFirst from '@/components/FlexFirst.vue';
import FlexSecond from '@/components/FlexSecond.vue';
import FlexWorks from '@/components/FlexWorks.vue';
import FlexCreate from '@/components/FlexCreate.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { FlexFirst, FlexSecond,FlexWorks, FlexCreate, FooterSection }
}
</script>

<style lang="scss" scoped>

</style>