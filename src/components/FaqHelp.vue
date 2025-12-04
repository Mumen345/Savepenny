<template>
    <div class="forth_div_container">
        <div>
            <h4>Still Need Help?</h4>
            <p>Our support team is here for you. Reach out anytime.</p>
        </div>
        <div class="pills_container">
            <div class="pills">Contact Support</div>
            <div class="pills_outline">Visit Help Center</div>
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

p {
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

.pills_container {
    display: flex;
    flex-direction: row;
    gap: 12px;
    flex-wrap: wrap;
}

.pills_outline {

    border: 1px solid #5856D6;
    color: #5856D6;
    padding: 18px 30px;
    border-radius: 14px;
    font-weight: 700;
}
.pills {
    background: #5856D6;
    padding: 18px 30px;
    border-radius: 14px;
    width: auto;
    font-weight: 600 !important;
    color: #ffffff;
    margin: 0 auto;
    font-weight: 400;
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
        width: 100% !important;
    }
    .pills_outline {
        width: 100% !important;
    }

    .pills_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        width: 100%;
    }
}
</style>