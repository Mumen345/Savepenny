<template>
    <div>
        <div class="text-center contact_first">
            <h1 class="text-white">Get in Touch</h1>
            <p class="text-white">We’re here to help with any questions about your savings, security, or partnerships.
            </p>
        </div>
        <div class="card_container">
            <div class="cards">
                <img src="../assets/support.svg" alt="">
                <div>
                    <h4>Customer support</h4>
                    <p>Get help with your Stokvel or FlexRand account.</p>
                    <a href="mailto:support@pockiesafe.co.za">support@pockiesafe.co.za</a>
                </div>

            </div>
            <div class="cards two">
                <img src="../assets/partnership.svg" alt="">
                <div>
                    <h4>Customer support</h4>
                    <p>Get help with your Stokvel or FlexRand account.</p>
                    <a href="mailto:partners@pockiesafe.co.za">partners@pockiesafe.co.za</a>
                </div>

            </div>
            <div class="cards three">
                <img src="../assets/press_media.svg" alt="">
                <div>
                    <h4>Customer support</h4>
                    <p>Get help with your Stokvel or FlexRand account.</p>
                    <a href="mailto:media@pockiesafe.co.za">media@pockiesafe.co.za</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            close: true,
            fullname: "",
            email: "",
            subject: "",
            message: "",
        }
    },
    methods: {
        closeForm() {
            this.close = false
        }
    }
}
</script>

<style scoped>
.contact_first {
    background-image: url("../assets/contact_hero.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 18%;
    align-items: center;
    justify-content: center;
    max-width: 1920px;
    margin: 4rem auto 0;
    /* margin-top: 65px; */
}
.cards {
    background: #5856D6;
    padding: 32px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 20px;
    height: 260px;
    width: 330px;
    color: #ffffff;
}
.two{
    background: #00BFA6;
}
.three{
    background: #FF7A00;
}
a {
    color: #ffffff;
    text-decoration: underline;
}
.cards p {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 20px;
    font-weight: 200 !important;
}
.card_container {
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    flex-wrap: wrap;
    
    
}
@media screen and (max-width: 700px) {
    .card_container {
        padding: 20px;
    }

.cards {
    width: 100%;
    height: auto;
}
}
@media screen and (max-width: 990px) {

}
</style>