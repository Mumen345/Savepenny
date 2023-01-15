<template>
    <div v-motion-slide-visible-bottom class="section_pos">
        <div class="pos_writeup">
            <h2>Pos for your business</h2>
            <p>Accept card payments via POS, print receipts for transactions and much more.</p>
        </div>
        <img class="web" src="../assets/pos in hand 1.png" alt="">
        <img class="mobile" src="../assets/pos in hand 1.png" alt="">

        <a class="btn contact_btn" href="https://business.purplepayapp.com/" target="_blank">Get Started</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact_btn {
    width: 30%;
    background-color: #7750A1;
    color: #ffffff;
    outline: none;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    padding: 20px 0;
    font-weight: 500;
    justify-content: center;
    align-items: center;
}

.section_pos {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 48px;
}

.pos_writeup {
    text-align: center;
    width: 70%;
    /* margin: 0 auto; */
}

.web {
    display: block;
}

.mobile {
    display: none;
}

@media screen and (max-width: 990px) {
    .web {
        display: none;
    }

    .mobile {
        display: block;
    }

    .contact_btn {
        width: 80%;
        margin: 0 auto;
        background-color: #7750A1;
        color: #ffffff;
        outline: none;
        box-shadow: none;
        text-transform: capitalize;
        font-size: 16px;
        height: 60px;
        font-weight: 500;
        justify-content: center;
        align-items: center;
    }
}
</style>