<template>
  <div class="create_container">
            <img src="../assets/certificate.png" alt="">
            <div class="right_container">
                <div>
                    <h2>Verified and Regulated.</h2>
                    <p>PockieSafe is registered under Financial Services Provider (FSP) license number 2025/128579/07, ensuring your savings are protected by law.</p>
                </div>
                <div class="orange_button">
                    <a href="../assets/certificate.pdf" download>Download Certificate</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.right_container {
    width: 343px;
}

.create_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
    padding: 7% 20%;
}

h2 {
    font-weight: 600;
    color: #12121C;
    letter-spacing: 0.2px;
    line-height: 40px;
}

.orange_button {
    background: #5856D6;
    color: #ffffff;
    padding: 15px;
    border-radius: 20px;
    width: 343px;
    text-align: center;
}

a {
    color: #ffffff !important;
    width: 100%;
}

p {
    color: #6F6F7B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}


@media screen and (max-width: 1200px) {
    .create_container {
        padding: 7% 12%;
    }
}

@media screen and (max-width: 900px) {
    .create_container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 40px;
        

    }
    .orange_button {
    width: 100%;
}
.right_container {
    width: 100%;
}

}

// This CSS is for the 4th design

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

.forth_div_container p {
    font-size: 15px;
    color: #6F6F7B;
    line-height: 20px;
    letter-spacing: 0.2px;
    font-weight: 400;
}

.forth_div_container {
    background-color: #E6FAF7;
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
}

.pills {
    color: #00BFA6;
    background: #E6FAF7;
    border: 1px solid #C8F3EB;
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

    .pills_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }
}
// Fifth section
download_container {
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
    background-image: linear-gradient(to right, #00BFA6, #33D1B9);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100% !important;
    max-width: 2000px;
    margin: 0 auto ;
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