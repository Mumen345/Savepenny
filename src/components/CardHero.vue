<template>
    <div class="career_hero_container">
        <div v-motion-slide-left class="career_container">
            <div class="s_btn">
                <img src="../assets/noto_star.svg" alt="">
                <p>Number 1 Payment Platform</p>
            </div>
            <h1 class="hero_heading">Spend Globally
                with <span>Ease</span></h1>
            <p class="hero_subtitle">Get a <span class="purple_text">purplepay</span> virtual card on the <span
                    class="purple_text">purplepay</span> app to pay
                for subscriptions or shop online with ease. </p>
            <div class="hero_btn_div_resp">
                <a href="https://play.google.com/store/apps/details?id=com.purplepay" class="btn me-3 hero_btn"><img
                        src="../assets/googleplay_logo.svg" alt="" /> Play Store</a>
                <a href="https://apps.apple.com/ng/app/purplepay/id1548285634" class="btn hero_btn_orange"><img
                        src="../assets/apple_icon.svg" alt="" /> Apple Store</a>
            </div>
        </div>
        <div v-motion-slide-right class="hero_mockup">
            <img class="web" src="../assets/Two_cards.svg" alt="">
            <img class="mobile" src="../assets/Two_cards_mobile.svg" alt="">
        </div>
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

.career_hero_container {
    background-image: url("../assets/career_hero_bg.svg");
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px auto;

}

.career_container {
    width: 513px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.s_btn p {
    margin-top: 0;
    margin-bottom: 0rem;
    font-size: 12px;
    font-weight: 500;
    font-size: 14.5488px;
    line-height: 178.5%;
    color: #7750A1;
    letter-spacing: 0.02em;
    text-transform: capitalize;
}

.s_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    border: 2px dashed #7750A1;
    padding: 7px 20px;
    background-color: #F7EEFF;
    width: 300px;
}

.purple_text {
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FA9445;
    text-align: center;
}

.hero_heading span {
    background: #FA9445;
    transform: matrix(1, 0.04, -0.04, 1, 0, 0);
    color: #ffffff;
    padding: 0px 31px;
}

/* .hero_btn_orange {
    border: 1px solid #FA9445;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    padding: 15px;
    color: #FA9445;
    font-weight: 500;
    background-color: #fff6ee;
} */

.hero_btn_orange {
    border: none;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    padding: 15px;
    color: #FFFFFF;
    font-weight: 500;
    background-color: #7750A1;
}

/* .hero_btn {
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    padding: 15px;
    background-color: #F7EEFF;
    color: #7750A1;
    font-weight: 500;
} */

.hero_btn_div_resp {
    display: flex;
    align-items: center;
    flex-direction: row;
}


.hero_btn {
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    border: 1px solid #7750A1;
    width: 250px;
    padding: 15px;
    background-color: #F7EEFF;
    color: #7750A1;
    font-weight: 500;
}

.hero_btn_div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row !important;
}

@media screen and (max-width: 500px) {
    .hero_btn_div {
        display: flex;
        flex-direction: column !important;
        gap: 30px;
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
        margin-right: 0rem !important;
    }

    .hero_btn_div_resp {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        gap: 30px;
    }
}

@media screen and (max-width: 443px) {
    .hero_btn_div_resp {
        /* margin-top: 100px; */
    }
}

@media screen and (max-width: 990px) {
    .career_hero_container {
        background-image: none;
        background-size: cover;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 60px auto;
        gap: 50px;
        text-align: center;
    }

    .career_container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        margin-top: 60px;
    }

    .mobile {
        display: block;
    }

    .web {
        display: none;
    }


}
</style>