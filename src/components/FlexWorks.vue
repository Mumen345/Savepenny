<template>
    <div class="works_container">
        <h2 class="fw-bold">How FlexRand Works</h2>
        <div class="step_container">
            <div class="steps">
                <div class="number_circle">1</div>
                <div class="content">
                    <h6>Fund Your Wallet</h6>
                    <p>Deposit money in rands using your linked bank or wallet.</p>
                </div>
            </div>
            <div class="steps">
                <div class="number_circle">2</div>
                <div class="content">
                    <h6>Earn Daily Returns</h6>
                    <p>Your balance grows automatically as long as it stays active.</p>
                </div>
            </div>
            <div class="steps">
                <div class="number_circle">3</div>
                <div class="content">
                    <h6>Withdraw Anytime</h6>
                    <p>Access your funds instantly whenever you need them.</p>
                </div>
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
    width: 205px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.number_circle {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    background: #00BFA6;
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
    justify-content: space-between;
    align-content: center;

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
    background: #E6FAF7;
    padding: 80px 20%;
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
        background: #E6FAF7;
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
        background: #E6FAF7;
        padding: 30px;
        border-radius: 16px;
    }
    .steps_img {display: none;}
    .step_container {
    gap: 20px;

}
}

</style>