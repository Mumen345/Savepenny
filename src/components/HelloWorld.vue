<template>
  <div>
    <HeroComponent />
    <SecondSection />
    <ThirdSection />
    <ForthSection />
    <FifthSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroComponent from './HeroComponent.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
import ForthSection from './ForthSection.vue';
import FifthSection from './FifthSection.vue';
import FooterSection from './FooterSection.vue';

export default {
  components: { HeroComponent, SecondSection, ThirdSection, ForthSection, FifthSection, FooterSection }
}
</script>


<style scoped>

</style>