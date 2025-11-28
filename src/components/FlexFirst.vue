<template>
        <div class="hero_container">
            <div class="left_container">
                <div class="left_writeup">
                    <h1>
                       Save at Your Own Pace.
                    </h1>
                    <p class="left_paragraph">Enjoy full control over your money — deposit anytime, withdraw anytime, and grow without penalties.</p>
                </div>
                <div class="button_div">
                    <div class="orange_btn">Start Saving </div>
                    <div class="orange_outline">View How it works</div>
                </div>
            </div>
            <div class="">
                <img class="web_mockup" src="../assets/flex_mockup.png" alt="">
                <img class="mobile_mockup" src="../assets/flex_mockup_mobile.png" alt="">
            </div>
        </div>
</template>

<script>
// import ContactForm from './ContactForm.vue';

export default {
    data() {
        return {
            showForm: false
        }
    },
    methods: {
        showNewForm() {
            this.$router.push({ path: '/vendors' })
        },
    }
}
</script>

<style scoped>
.orange_btn {
    background: linear-gradient(to right, #00BFA6, #33D1B9);
      color: #ffffff !important;
  font-size: 16px;
  font-weight: medium;
  outline: none;
  border: none;
  padding: 15px 20px;
  border-radius: 14px;
  width: 100%;
  text-align: center;
  font-weight: 700;
}
.orange_outline {
  background-color: none;
  color: #00BFA6;
  border: 1px solid #00BFA6;
  padding: 15px 20px;
  text-align: center;
  font-weight: 700;
border-radius: 14px;
width: 100%;
}

.mobile_mockup {
    display: none;
}

.left_container {
    display: flex;
    flex-direction: column;
    width: 606px;
    margin: 0 auto;
    gap: 32px;
}

.left_writeup {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

h1 {
    color: #12121C;
    font-size: 48px;
    font-weight: bold;
    line-height: 56px;
    letter-spacing: 0.2px;
}

h2 {
    color: #12121C;
    font-size: 48px;
    line-height: 152.52%;

}

.hero_container {
    background-image: linear-gradient(#E6FAF7, #ffffff);
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
    color: #6F6F7B;
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
        /* margin-top: 65px; */
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