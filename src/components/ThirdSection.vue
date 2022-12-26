<template>
    <div class="third_section_container">
        <img v-motion-slide-visible-once-left class="thirdSection_img" src="../assets/section3.svg" alt="">
        <div v-motion-slide-visible-once-right class="third_text">
            <h2>Decide. Pay. Done</h2>
            <p class="sub_text">Whatever you decide to do with your money, we’ll make sure it’s done better. It’s more
                than money, it’s a
                lifestyle</p>
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
    font-size: 16px;
    line-height: 40px;
    color: #404040;
    width: 414px;
}

.third_section_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 100px;
    width: 80%;
    margin: 100px auto;
}

@media screen and (max-width: 990px) {
    .third_section_container {
        display: flex;
        justify-content: center;
        flex-direction: column-reverse;
        align-items: center;
        gap: 100px;
        width: 100%;
        margin: 100px auto;
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
</style>