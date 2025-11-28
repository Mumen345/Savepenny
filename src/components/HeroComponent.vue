<template>
    <div class="hero_container">
        <div class="left_container">
            <div class="left_writeup">
                <h1>
                    Save Smarter. Live Better.
                </h1>
                <p class="left_paragraph">Join transparent Stokvels with friends or build your own flexible savings plan
                    with FlexRand. Powered by PockieSafe.</p>
            </div>
            <div class="button_div">
                <div class="primary_btn">Get the app</div>
                <div class="secondary_btn">Explore features</div>
            </div>
        </div>
        <div class="">
            <img class="web_mockup" src="../assets/mockup.png" alt="">
            <img class="mobile_mockup" src="../assets/mockup_mobile.png" alt="">
        </div>
    </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.mobile_mockup {
    display: none;
}

.left_container {
    width: 80%;
    margin: 0 auto;
}

.left_writeup {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

h1 {
    color: #ffffff;
    font-size: 48px;
    font-weight: bold;
    line-height: 56px;
    letter-spacing: 0.2px;
}

h2 {
    color: #ffffff;
    font-size: 48px;
    line-height: 152.52%;

}

.hero_container {
    background-image: url("../assets/Hero_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
    padding: 0 18%;
    align-items: center;
    max-width: 1920px;
    margin: 0 auto;
    /* margin-top: 65px; */


}

.button_div {
    display: flex;
    width: 100%;
    gap: 12px;
}

.left_paragraph {
    width: 100%;
    color: #ffffff;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 400 !important;
}

@media screen and (max-width: 2000px) {}

@media screen and (max-width: 1440px) {
    .hero_container {
        width: 100%;
        padding: 0 10%;

    }

    .left_writeup {
        display: flex;
        flex-direction: column;
        gap: 16px;

    }

}

@media screen and (max-width: 1200px) {
    .hero_container {
        padding: 10%;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        text-align: center;

    }

}

@media screen and (max-width: 1000px) {
    .hero_btn_div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        flex-direction: column;
        gap: 30px;

    }

    .left_container {
        width: 80%;
        margin: 0 auto;
    }

    h1 {
        width: 400px;
        margin: 0 auto;
        font-size: 40px;
        text-align: center;
    }
}

@media screen and (max-width: 550px) {
    .left_container {
        width: 100%;
        margin: 0 auto;
    }

    h1 {
        width: 100%;
        font-size: 40px;
        text-align: center;
    }

    .mobile_mockup {
        display: block;
    }
    .web_mockup {
        display: none;
    }
    .hero_container {
        padding: 20% 25px;
    }
   .button_div {
    display: flex;
    width: 100%;
    gap: 12px;
    flex-direction: column;
}
}
</style>