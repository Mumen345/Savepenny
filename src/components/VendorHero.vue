<template>
    <div class="hero_section">
        <div v-motion-slide-left class="Hero_container">
            <h2>Accept Payments from customers with <span>Ease</span></h2>
            <p>Accept instant payments from your customers via POS, and cards.</p>
            <button class="btn">Contact Sales</button>
        </div>
        <img v-motion-slide-right class="web" src="../assets/pos_img.svg" alt="">
        <img v-motion-slide-right class="mobile" src="../assets/pos_img_mobile.svg" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.web {
    display: block;
}

.mobile {
    display: none;
}

.Hero_container button {
    outline: none;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    border: 1px solid #7750A1;
    width: 100%;
    height: 60px;
    background-color: #F7EEFF;
    color: #7750A1;
    font-weight: 500;
}

.Hero_container p {
    color: #ffffff;
}

.Hero_container span {
    background: #FA9445;
    transform: matrix(1, 0.04, -0.04, 1, 0, 0);
    color: #ffffff;
    padding: 0px 31px;
}

.Hero_container {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.Hero_container h2 {
    color: #ffffff;
}

.hero_section {
    background-color: #5E0083;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;

}

@media screen and (max-width: 990px) {
    .hero_section {
        background-color: #5E0083;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        gap: 50px;

    }

    .Hero_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80%;
        margin: 0 auto;
        gap: 20px;
    }

    .web {
        display: none;
    }

    .mobile {
        display: block;
    }
}
</style>