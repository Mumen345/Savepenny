<template>
    <div class="hero_container">
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/purple_lock.svg" alt="">
                <div>
                    <h4>Bank-Grade Encryption</h4>
                    <p>All user data and transactions are encrypted end-to-end for maximum security.</p>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/license.svg" alt="">
                <div>
                    <h4>Licensed & Regulated</h4>
                    <p>PockieSafe operates under Financial Services Provider License 2025/128579/07.</p>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="writeup_top">
                <img src="../assets/scale.svg" alt="">
                <div>
                    <h4>POPIA Compliance</h4>
                    <p>We adhere to South Africa’s POPIA data privacy and protection framework.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ContactForm from './ContactForm.vue';

export default {
    // data() {
    //     return {
    //         showForm: false
    //     }
    // },
    // methods: {
    //     showNewForm() {
    //         this.$router.push({ path: '/vendors' })
    //     },
    // }
}
</script>

<style scoped>
h4 {
    font-size: 20px;
    font-weight: 600;
    color: #12121C;
}
.cards{
    background: #ECEBFF;
    display: flex;
    flex-direction: column;
    padding: 32px;
    border: 1px solid #EDEDED;
    border-radius: 20px;
    justify-content: center;
    height: 260px;
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
    margin-bottom: 65px;
}


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

@media screen and (max-width: 750px) {
       .cards{
        width: 100%;
    }
}
</style>