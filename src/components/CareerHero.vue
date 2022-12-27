<template>
    <div>
        <br />
        <br />
        <br />
        <template>
            <div class="hero_section">
                <div class="heroSection_writeup">
                    <h2>Find the right Jobs and work without borders</h2>
                    <p>We're a fintech on a mission to make financial services more accessible, affordable and rewarding
                        for every African on the planet. 🚀</p>
                </div>
                <img class="" src="../assets/P.svg" alt="">
                <!-- <img class="mobile" src="../assets/atm_cards_mobile.svg" alt=""> -->
            </div>
        </template>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero_section {
    background-color: #5E0083;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    color: #ffffff;
    padding: 52px 159px;

}

h2 {
    color: #ffffff !important;
}


.heroSection_writeup {
    width: 550px
}

@media screen and (max-width: 550px) {
    .hero_section {
        background-color: #5E0083;
        width: 100% !important;
    }

    .heroSection_writeup {
        box-sizing: border-box;
    }
}

@media screen and (max-width: 700px) {
    .hero_section {
        background-color: #5E0083;
        width: 100% !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        margin: 0 auto;
        align-items: center;
        color: #ffffff;
        padding: 40px 0 !important;
        text-align: center;
    }

    .heroSection_writeup {
        width: 100%;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 990px) {
    .heroSection_writeup {
        width: 100%
    }

    .hero_section {
        background-color: #5E0083;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        margin: 0 auto;
        align-items: center;
        color: #ffffff;
        padding: 52px 159px;
        text-align: center;
    }
}
</style>