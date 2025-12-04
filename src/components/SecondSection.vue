<template>
    <div class="section_two">
        <div class="section_two_left ">
            <img src="../assets/group_savings.svg" alt="">
            <div>
                <h4 class="text-white">Stokvel — Group Savings Made Simple</h4>
                <p class="sub_text">
                    Create or join savings groups with friends and manage contributions transparently.
                </p>
            </div>
            <a class="text-white " href="#">Learn More</a>
        </div>
        <div class="section_two_left ">
            <img src="../assets/walet.svg" alt="">
            <div>
                <h4 class="text-white">FlexRand — Save at Your Pace</h4>
                <p>Flexible savings that let you deposit or withdraw anytime, without penalties.</p>
            </div>
            <a class="text-white" href="#">Learn More</a>
        </div>
    </div>
</template>
<!-- v-motion-slide-visible-once-left  -->

<script>
export default {

}
</script>

<style scoped>
.mobile {
    display: none;
}

.web {
    display: block;
}

.sub_text {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 20px;
    color: #ffffff;
    font-weight: 400;
}

.section_two {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 96px 17%;
    gap: 30px;
}

.section_two_left {
    width: 100%;
    padding: 32px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content: space-around;
    gap: 12px;
    height: 300px;
    background: #5856D6;
    color: #ffffff;

}

@media screen and (max-width: 1200px) {
    .section_two {
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
        padding: 96px 10%;
        gap: 30px;
    }
}
@media screen and (max-width: 990px) {
    .section_two {
        padding: 96px 20px;
        
    }
    
    
    .section_two_left {
        width: 100%;
        margin: 0 auto;
        /* text-align: center; */
        
    }
}

@media screen and (max-width: 740px) {
    .section_two {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 56px 20px;
    }

}
@media screen and (max-width: 500px) {
    .mobile {
        display: block;
    }

    .web {
        display: none;
    }

}
</style>