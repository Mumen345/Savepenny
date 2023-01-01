<template>
    <div class="section_two">
        <div v-motion-slide-visible-once-left class="section_two_left">
            <h2>Payments designed with you in mind</h2>
            <p class="sub_text">We designed an app so easy to enable you carry out your transactions swiftly and on
                time.
                It’s
                so simple, the
                pleasure is in the details.</p>
        </div>
        <img v-motion-slide-visible-once-right class="web" src="../assets/second_section.png" alt="">
        <img v-motion-slide-visible-once-right class="mobile" src="../assets/second_section_mobile.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobile {
    display: none;
}

.web {
    display: block;
}

.sub_text {
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    color: #404040;
}

.section_two {
    background-color: #FAF6FF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 70px;
    gap: 30px;
    margin-top: 40px;
}

.section_two_left {
    width: 503px;
}

@media screen and (max-width: 990px) {
    .section_two {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        gap: 30px;
        width: 100%;

    }

    .section_two_left {
        width: 100%;
        margin: 0 auto;
        text-align: center;

    }
}

@media screen and (max-width: 500px) {
    .mobile {
        display: block;
    }

    .web {
        display: none;
    }

}
</style>