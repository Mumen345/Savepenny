<template>
    <div class="works_container">
        <h2>How We Protect You</h2>
        <div class="step_container">
            <div class="steps">
                <div class="number_circle">1</div>
                <div class="content">
                    <h6>Multi-Factor Authentication</h6>
                    <p>Every sign-in and transaction is verified via SMS or device trust.</p>
                </div>
                <img class="steps_img" src="../assets/circle_lock.svg" alt="">
            </div>
            <div class="steps">
                <div class="number_circle">2</div>
                <div class="content">
                    <h6>Data Encryption</h6>
                    <p>All data stored and transmitted is protected by 256-bit encryption.</p>
                </div>
                <img class="steps_img" src="../assets/lock_coins.svg" alt="">
            </div>
            <div class="steps">
                <div class="number_circle">3</div>
                <div class="content">
                    <h6>Regular Audits</h6>
                    <p>Systems are audited quarterly to maintain compliance.</p>
                </div>
                <img class="steps_img" src="../assets/audits.svg" alt="">
            </div>
            <div class="steps">
                <div class="number_circle">4</div>
                <div class="content">
                    <h6>Secure Cloud Hosting</h6>
                    <p>Your funds and info are hosted on protected, ISO-certified infrastructure.</p>
                </div>
                <img class="steps_img" src="../assets/clouds.svg" alt="">
            </div>
        </div>
    </div>
</template>


<script>


export default {
}
</script>

<style lang="scss" scoped>
.steps {
    width: 202px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-direction: column;
    align-items: start;
}

.number_circle {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
    background: #5856D6;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
}

.step_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: start !important;
    gap: 40px;

}

h2 {
    color: #12121C;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.2px;
    text-align: center;
}

h6 {
    font-size: 15px;
    font-weight: 500;
    color: #12121C;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 20px;
    width: 100%;
}

p {
    font-size: 13px;
    color: #6F6F7B;
    width: 100%;
}

.works_container {
    background: #F7F7FB;
    padding: 80px 10%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 40px;
    margin-top: 10%;
}

.content {
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 1160px) {
    .works_container {
        background: #F7F7FB;
        padding: 80px 12%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-top: 10%;
    }
    .step_container {
        display: flex;
        flex-wrap: wrap;
    
    }
}

@media screen and (max-width: 800px) {
    .works_container {
        background: none;
        padding: 80px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10%;
    }

    .steps {
        width: 100%;
        background: #F9F9FB;
        padding: 30px;
        border-radius: 16px;
    }
    .steps_img {display: none;}
    .step_container {
    gap: 20px;

}
}


</style>