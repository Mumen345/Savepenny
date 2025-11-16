<template>
    <div class="fifth_section_container">
        <h1 class="text-white">Be among the first to experience South Africa’s next generation of savings.</h1>
        <div class="download_container">
            <a class="" href="#" role="button"><img src="../assets/appstore.svg" alt="" /> </a>
            <a class="" href="#" role="button"><img src="../assets/googleplay.svg" alt="" />
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.download_container {
    display: flex;
    gap: 10px;
}

h1 {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.2px;
    font-weight: 500;
    width: 900px;
    text-align: center;

}

.fifth_section_container {
    /* background-image: url("../assets/download_bg.png"); */
    background-image: linear-gradient(to right, #5856D6, #6E6BFF);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100% !important;
    max-width: 2000px;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px;
    gap: 20px;
    
}

@media screen and (max-width: 900px) {
    h1 {
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 0.2px;
        font-weight: 500;
        width: 100% !important;
        text-align: center;
        
    }
}


@media screen and (max-width: 600px) {
    .fifth_section_container {
        padding: 96px 15px;
        
    }
    
}
</style>