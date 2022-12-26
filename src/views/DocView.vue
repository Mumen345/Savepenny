<template>
    <div class="about">
        <br>
        <br>
        <img class="img_resp" src="../assets/coming_soon.svg" alt="">
        <FooterSection />
    </div>
</template>
  

<script>
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { FooterSection }
}
</script>

<style lang="scss" scoped>
.about {
    width: 100%;
    margin: 0 auto;
    background-color: #7750a1;
}

.img_resp {
    width: 50%;
    margin: 0 auto;
    display: flex;
}
</style>