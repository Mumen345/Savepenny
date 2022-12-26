<template>
    <div class="fifth_section_container">
        <div v-motion-slide-visible-top class="fifth_section_writeup">
            <img class="section_img" src="../assets/logo_white.svg" alt="">
            <img class="section_img2" src="../assets/main-logo.svg" alt="">
            <p class="fifth_section_header">Your global money is here!</p>

            <p class="section_tagline">Money talks, PurplePays.</p>
        </div>
        <div v-motion-slide-visible-right class="hero_btn_div2">
            <button class="btn me-3 hero_btn"><img src="../assets/googleplay_logo.svg" alt="" /> Play Store</button>
            <button class="btn hero_btn_orange"><img src="../assets/apple_icon.svg" alt="" /> Apple Store</button>
        </div>
        <div v-motion-slide-visible-bottom class="hero_btn_div_resp">
            <button class="btn me-3 hero_btn"><img src="../assets/googleplay_logo.svg" alt="" /> Play Store</button>
            <button class="btn hero_btn_orange"><img src="../assets/apple_icon.svg" alt="" /> Apple Store</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero_btn_div_resp {
    display: none;
}

.section_img {
    display: block;
}

.section_img2 {
    display: none;
}

.fifth_section_container {
    background-image: url("../assets/download.svg");
    height: 813px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin: 60px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.fifth_section_writeup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.fifth_section_header {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    /* identical to box height */
    font-family: Quentin;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #ffffff;
}

.section_tagline {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #FFFFFF;
}

.hero_btn_div2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    flex-direction: row;

}

.hero_btn_orange {
    border: none;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    height: 60px;
    color: #FFFFFF;
    font-weight: 500;
    background-color: #FA9445;
}

.hero_btn {
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    height: 60px;
    background-color: #F7EEFF;
    color: #7750A1;
    font-weight: 500;
}

@media screen and (max-width: 700px) {
    .hero_btn_div2 {
        display: none;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        width: 80%;

    }

    .hero_btn_orange {
        border: none;
        box-shadow: none;
        text-transform: capitalize;
        font-size: 16px;
        width: 100%;
        height: 60px;
        color: #FFFFFF;
        font-weight: 500;
        background-color: #FA9445;
    }

    .hero_btn {
        box-shadow: none;
        text-transform: capitalize;
        font-size: 16px;
        border: 1px solid #7750A1;
        width: 100%;
        height: 60px;
        background-color: #F7EEFF;
        color: #7750A1;
        font-weight: 500;
    }

    .fifth_section_container {
        background-image: none;
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        margin: 60px auto;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .hero_btn_div_resp {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 80%;
    }

    .fifth_section_header {
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 64px;
        /* identical to box height */
        font-family: Quentin;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: #7750A1;
        text-align: center;
    }

    .section_tagline {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        color: #7750A1;
        text-align: center;
    }

    .section_img {
        display: none;
    }

    .section_img2 {
        display: block;
    }

}
</style>