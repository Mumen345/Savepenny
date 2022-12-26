<template>
    <div class="forth_div_container">
        <div v-motion-slide-visible-once-left class="forthDiv_text">
            <h2>Be Loved, Be Purple</h2>
            <p class="sub_text">We’re always here for you. Drop us a tweet, a comment on instagram, or send us an email.
                We’ll always be here
                to attend to your needs, no matter how you decide to contact us.</p>
        </div>
        <img v-motion-slide-visible-once-right class="love_img" src="../assets/purple_love.png" alt="">
        <img class="love_img_mobile" src="../assets/purple_love_mobile.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sub_text {
    font-weight: 600;
    width: 517px;
    font-size: 16px;
    line-height: 40px;
    color: #404040;
}

.love_img_mobile {
    display: none;
}

.forth_div_container {
    background-color: #FAF6FF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 70px;
    gap: 50px;
    margin-top: 40px;
}

@media screen and (max-width: 430px) {
    .love_img {
        display: none;
    }

    .love_img_mobile {
        display: block;
    }
}

@media screen and (max-width: 990px) {
    .forth_div_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sub_text {
        font-weight: 600;
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
</style>