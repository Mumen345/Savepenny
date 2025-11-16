<template>
    <div class="hero_container">
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/eye.svg" alt="">
                <div>
                    <h4>Transparent Contributions</h4>
                    <p>Track deposits, cycles, and payouts in real time. No hidden records.</p>
                </div>
            </div>
            <div class="btn_right">
                <a href="#">Learn More</a>
                <img src="../assets/arrow_right.png" alt="">
            </div>
        </div>
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/eye.svg" alt="">
                <div>
                    <h4>Automated Reminders</h4>
                    <p>Never miss a contribution. Get smart reminders and payment notifications.</p>
                </div>
            </div>
            <div class="btn_right">
                <a href="#">Learn More</a>
                <img src="../assets/arrow_right.png" alt="">
            </div>
        </div>
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/eye.svg" alt="">
                <div>
                    <h4>Digital Wallet Integration</h4>
                    <p>Link your bank or wallet for instant deposits and withdrawal convenience.</p>
                </div>
            </div>
            <div class="btn_right">
                <a href="#">Learn More</a>
                <img src="../assets/arrow_right.png" alt="">
            </div>
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
h4 {
    font-size: 20px;
    font-weight: 600;
    color: #12121C;
}
.cards{
    display: flex;
    flex-direction: column;
    padding: 32px;
    border: 1px solid #EDEDED;
    border-radius: 20px;
    justify-content: space-between;
    height: 330.66px;
}
.writeup_top p {
    font-size: 14px;
    color: #6F6F7B;
}

.writeup_top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 12px;
}
.hero_container {
    background-image: #ffffff;
    width: 100%;
    padding: 0 13%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: center;
    /* margin-top: 65px; */
}

.btn_right a {
    color: #FF7A00;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    font-weight: 500;

}
.btn_right {
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: end;
    color: #FF7A00;
}

@media screen and (max-width: 2000px) {}

@media screen and (max-width: 1440px) {}

@media screen and (max-width: 1330px) {
    .hero_container {
    padding: 0 7%;
}

}

@media screen and (max-width: 1200px) {
        .hero_container {
    padding: 0 15px;
    flex-wrap: wrap;
}
.cards{
    width: 336px;
}
}

@media screen and (max-width: 726px) {
    .cards{
        width: 300px;
    }
}
@media screen and (max-width: 726px) {
       .cards{
        width: 100%;
    }
}
</style>