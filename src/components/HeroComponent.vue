<template>
    <div class="hero_container">
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="hero_writeup">
            <div class="s_btn">
                <img src="../assets/noto_star.svg" alt="">
                <p>Number 1 Payment Platform</p>
            </div>
            <h1 class="hero_heading">Forget the Rest, Get the <span>Best</span></h1>
            <p class="hero_subtitle">Enjoy the <span class="purple_text">purpleway</span> of life and enjoy access to
                financial services that are
                tailored to your needs. We are the new standard in payment Services</p>
        </div>
        <div class="hero_btn_div">
            <button class="btn me-3 hero_btn"><img src="../assets/googleplay_logo.svg" alt="" /> Play Store</button>
            <button class="btn hero_btn_orange"><img src="../assets/bi_apple_orange.svg" alt="" /> Apple Store</button>
        </div>
        <div class="hero_mockup">
            <img class="web" src="../assets/mockup.svg" alt="">
            <img class="mobile" src="../assets/mockup_mobile.svg" alt="">
        </div>
        <h2 class="hero_slogan">Money talks, PurplePays!</h2>
    </div>
</template>
  
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

.hero_mockup {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero_btn_orange {
    border: 1px solid #FA9445;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    height: 60px;
    color: #FA9445;
    font-weight: 500;
    background-color: #fff6ee;
}

.hero_btn {
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    border: 1px solid #7750A1;
    width: 250px;
    height: 60px;
    background-color: #F7EEFF;
    color: #7750A1;
    font-weight: 500;

}

.hero_btn_div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

}

.hero_subtitle {
    text-align: center;
    width: 70%;
    letter-spacing: 0.02em;
    font-size: 16px;
    line-height: 258.5%;
    /* margin: 30px auto; */

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
}

.hero_writeup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
}

.hero_heading span {
    background: #FA9445;
    transform: matrix(1, 0.04, -0.04, 1, 0, 0);
    color: #ffffff;
    padding: 0px 31px;
}

.hero_heading {
    text-align: center;
}

.purple_text {
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FA9445;
    text-align: center;
}

.hero_slogan {
    font-size: 36px;
    line-height: 57px;
    letter-spacing: 0.05em;
    font-family: Quentin;
    color: #FA9445;
    text-align: center;
}

.hero_container {
    background-image: url("../assets/Hero_bg.svg");
    background-size: cover;
    height: 1300px;
    width: 100%;

}

@media screen and (max-width: 1000px) {
    .hero_container {
        background-image: none;
        height: auto;
        width: 100%;
    }

    .hero_subtitle {
        text-align: center;
        width: 100%;
        letter-spacing: 0.02em;
        font-size: 16px;
        line-height: 258.5%;
        /* margin: 30px auto; */

    }

    .hero_writeup {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        flex-direction: column;
        margin: 0 auto;
        gap: 20px;
    }

    @media screen and (max-width: 500px) {
        .mobile {
            display: block;
        }

        .web {
            display: none;
        }

        .hero_btn {
            margin-right: 0rem !important;

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
    }
}
</style>