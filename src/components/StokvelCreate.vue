<template>
    <div class="create_container">
        <img src="../assets/mockup3.png" alt="">
        <div class="right_container">
            <div>
                <h2>Create a Stokvel in Minutes.</h2>
                <p>Set up your group rules, define contribution amounts, and invite friends instantly — all within the app.</p>
            </div>
            <a href="#" class="orange_button">Get the App</a>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.right_container {
    width: 100%;
    background: red;
}
.create_container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 183px;
    padding: 7% 20%;
}
h2 {
    font-weight: 600;
    color: #12121C;
    letter-spacing: 0.2px;
    line-height: 40px;
}
.orange_button {
    background: linear-gradient(to right, #FF7A00, #FF9A30);
    color: #ffffff;
    padding: 15px;
    border-radius: 20px;
    width: 343px;
    
}
</style>