<template>
    <div class="forth_div_container">
      <img src="../assets/shield.svg" alt="">
      <div>
        <h4>Your Savings, Always Secure</h4>
        <p>PockieSafe operates under a Financial Services Provider (FSP) License 2025/128579/07, with full POPIA compliance and encrypted data protection.</p>
      </div>
      <div class="pills_container">
        <div class="pills">Bank-Grade Encryption</div>
        <div class="pills">POPIA Compliant</div>
        <div class="pills">FSP Certified</div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sub_text {
    font-weight: 500;
    width: 517px;
    font-size: 16px;
    line-height: 40px;
    color: #404040;
}

.love_img_mobile {
    display: none;
}
h4 {
    font-size: 24px;
    color: #12121C;
    line-height: 32px;
    letter-spacing: 0.2px;
    font-weight: 700;

}
p{
    font-size: 15px;
    color: #6F6F7B;
    line-height: 20px;
    letter-spacing: 0.2px;
    font-weight: 400;
}
.forth_div_container {
    background-color: #F6F8FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 96px 25%;
    gap: 24px;
    text-align: center;
}
.pills_container{
    display: flex;
    flex-direction: row;
    gap: 12px;
}
.pills {
    color: #5856D6;
    background: #ECEBFF;
    border: 1px solid #C4C2F3;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 13px;
    letter-spacing: 0.2px;
    line-height: 16px;
    width: auto;
}


@media screen and (max-width: 990px) {
    .forth_div_container {
       
    padding: 96px 15%;
    }

    .sub_text {
        font-weight: 500;
        width: 100%;
        font-size: 16px;
        line-height: 40px;
        color: #404040;
    }

    .forthDiv_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

@media screen and (max-width: 658px) {
      .forth_div_container {
    padding: 96px 20px;
    }

}
@media screen and (max-width: 484px) {
    .pills {
        width: auto !important;
    }
    .pills_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
}
}
</style>