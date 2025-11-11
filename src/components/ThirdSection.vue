<template>
    <div class="third_section_container">
        <h3 class="text-dark text-center mb-5 container_header">How It Works</h3>
        <div class="card_container">
            <div class="base_container">
                <div class="top">
                    <img src="../assets/1.svg" alt=""> <img src="../assets/smart_phone.svg" alt="">

                </div>
                <div>
                    <h5 class="text-dark">Download the App</h5>
                    <p>Available on Play Store and App Store</p>
                </div>
            </div>
            <div class="base_container">
                <div class="top">
                    <img src="../assets/2.svg" alt=""> <img src="../assets/contact_card.svg" alt="">

                </div>
                <div>
                    <h5 class="text-dark">Verify Your KYC</h5>
                    <p>Quick and secure onboarding process</p>
                </div>
            </div>
            <div class="base_container">
                <div class="top">
                    <img src="../assets/3.svg" alt=""> <img src="../assets/money_bag.svg" alt="">

                </div>
                <div>
                    <h5 class="text-dark">Start Saving</h5>
                    <p>Join a Stokvel or open FlexRand</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container_header {
    font-family: inter;
    font-weight: 700;
    letter-spacing: 0.2px;
    line-height: 32px;
}

.top {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 8px;
}
p{
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.2px;
}
.card_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    align-items: center;
    flex-wrap: wrap;
}

.sub_text {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #6F6F7B;
}

.base_container h5 {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
}

.base_container {
    background: #F9F9FB;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    gap: 12px;
    width: 320px;
}
.third_section_container {
        padding: 96px 0;

}



@media screen and (max-width: 990px) {
    .third_section_container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0 auto 50px;
    }

    .third_text {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sub_text {
        font-weight: 500;
        font-size: 16px;
        line-height: 40px;
        color: #404040;
        width: 80%;
    }

    .thirdSection_img {
        width: 80%;
    }
}

@media screen and (max-width: 873px) {
    .base_container {
        width: 100%;
    }

    .card_container {
        padding: 20px;
        gap: 15px;
    }

}
</style>