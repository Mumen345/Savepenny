<template>
    <div class="vendor_main_div">
        <div class="vendor_hero_container">
            <div v-motion-slide-left>
                <div class="Vendor_hero_writeup">
                    <h2>Instant payment solution for your business</h2>
                    <p>For offline businesses, purplepay offers an easy way to accept payments from your customers.</p>
                </div>
                <div class="vendor_cards_container">
                    <div class="vendors_cards">
                        <img src="../assets/wallet.svg" alt="">
                        <div>
                            <p>Instant Settlement</p>
                            <p>Receive money instantly from your customers into your Purplepay account when they pay
                                you.
                            </p>
                        </div>
                    </div>
                    <div class="vendors_cards">
                        <img src="../assets/network.svg" alt="">
                        <div>
                            <p>Reliable Network</p>
                            <p>Accept payments from your customers. With 99.99% uptime, you can be sure payments will
                                never
                                fail.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img class="web" v-motion-slide-right src="../assets/payment_solution.png" alt="">
        </div>
        <button v-motion-slide-right class="btn contact_btn">Contact Sales</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
    font-size: 16px;
    line-height: 40px;
}

.web {
    display: block;
}

.vendor_cards_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
}

.Vendor_hero_writeup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
    width: 553px;

}

.vendor_hero_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: px;
    gap: 140px;
    justify-content: center;
    gap: 50px;
    width: 80%;
    margin: 100px auto;

}

.vendors_cards {
    background-color: #7750A1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 26px;
    gap: 20px;
    color: #ffffff;
    border-radius: 15px;
}

.vendor_main_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FAF6FF;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-bottom: 100px;
}


.contact_btn {
    width: 30%;
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


@media screen and (max-width: 990px) {
    .web {
        display: none;
    }

    .vendor_main_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FAF6FF;
        margin-top: 100px;
        margin-bottom: 100px;
        padding-bottom: 100px;
    }

    .contact_btn {
        width: 80%;
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

    .Vendor_hero_writeup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 14px;
        width: 80%;
        margin: 0 auto;
        text-align: center;

    }
}
</style>