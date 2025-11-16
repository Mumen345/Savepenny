<template>
    <div class="hero_container">
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/access.svg" alt="">
                <div>
                    <h4>Flexible Access</h4>
                    <p>Deposit or withdraw anytime. Your money is always available.</p>
                </div>
            </div>
            <div class="btn_right">
                <a href="#">Learn More</a>
                <img src="../assets/greenarrow_right.svg" alt="">
            </div>
        </div>
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/lock.svg" alt="">
                <div>
                    <h4>Zero Lock-in</h4>
                    <p>Withdraw anytime without losing your growth interest.</p>
                </div>
            </div>
            <div class="btn_right">
                <a href="#">Learn More</a>
                <img src="../assets/greenarrow_right.svg" alt="">
            </div>
        </div>
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/growth.svg" alt="">
                <div>
                    <h4>Auto-Growth</h4>
                    <p>Your balance grows daily through our flexible return model.</p>
                </div>
            </div>
            <div class="btn_right">
                <a href="#">Learn More</a>
                <img src="../assets/greenarrow_right.svg" alt="">
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
    color: #00BFA6;
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
    color: #00BFA6;
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