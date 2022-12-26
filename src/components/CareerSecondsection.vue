<template>
    <div class="section_two">
        <div v-motion-slide-visible-once-left class="section_two_left">
            <h2>Accepted Globally</h2>
            <p class="sub_text">You get a Mastercard that can be used on every digital store. For your Spotify, Netflix,
                and other streaming subscriptions. Shop on Amazon, buy call of duty credits and more online. </p>
        </div>
        <img v-motion-slide-visible-once-right class="web" src="../assets/buy_subscribe.png" alt="">
        <img v-motion-slide-visible-once-right class="mobile" src="../assets/buy_subscribe_mobile.png" alt="">
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
    margin-top: 0;
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