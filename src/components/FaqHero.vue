<template>
    <div class="faq_hero_container">
        <div>
            <h1>Got Questions? We’ve Got You.</h1>
            <p>Find quick answers about PockieSafe, your savings, and how to get started.</p>
        </div>
        <div class="container">
            <input class="search" type="search" placeholder="Search" aria-label="Search">
        </div>
    </div>
</template>


<script>


export default {
}
</script>

<style lang="scss" scoped>
.faq_hero_container {
    background-image: url("../assets/faq_bg.png");
    background-size: cover;
    height: 464px;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:#ffffff;
    
}
.search {
    border: 1px solid #EDEDED;
    padding: 15px;
    width: 600px;
    border-radius: 14px;
}
h1 {
    font-weight: 700;
    font-size: 48px;
    width: 368px;
    line-height: 56px;
    margin: 0 auto;
    color:#ffffff;
    letter-spacing: 0.2px;
}
p {
    font-weight: 18px;
    line-height: 56px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color:#ffffff;
    letter-spacing: 0.2px;
    width: 460px;
    margin: 16px auto;
}

@media screen and (max-width: 780px) {
    .search {
        width: 100%;
    }
    h1 {
        width: 100%;
        font-size: 36px;
        line-height: auto;
    }
    p {
        width: 100%;
        padding: 20px;
        margin: 0 auto;
        
    }
}

@media screen and (max-width: 800px) {}
</style>