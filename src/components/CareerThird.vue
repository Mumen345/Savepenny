<template>
    <div class="third_section_container">
        <div v-motion-slide-visible-once-right class="third_text">
            <img src="../assets/logo_white.svg" alt="">
            <h2>Restrict access and be secured</h2>
            <p class="sub_text">Get instant and real-time notifications whenever there’s an activity on your card.
                Temporarily freeze and unfreeze your card directly from the Grey app.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sub_text {
    font-weight: 600;
    font-size: 16px;
    line-height: 40px;
    color: #ffffff;
    width: 500px;
    margin: 0 auto;
}

h2 {
    color: #ffffff;
}

.third_section_container {
    background-image: url("../assets/secure_bg.svg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    width: 100%;
    width: 100%;
    text-align: center;
}

@media screen and (max-width: 990px) {
    .third_section_container p {
        color: #ffffff;
        width: 80%;
    }

    .third_section_container {
        background-image: none;
        background-color: #5E0083;
        display: flex;
        width: 90%;
        margin: 100px auto;
        text-align: center;
        color: #ffffff !important;
    }

    .third_text {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sub_text {
        font-weight: 600;
        font-size: 16px;
        line-height: 40px;
        color: #404040;
        width: 80%;
    }

    .thirdSection_img {
        width: 80%;
    }

}
</style>