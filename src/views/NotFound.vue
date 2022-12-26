<template>
    <div class="resp_img">
        <img class="" alt="Vue logo" src="../assets/error.svg" />
        <br />
        <br />
        <button class="primary_btn"> <router-link to="/"> Go Home</router-link></button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {
    color: #ffffff;
    text-decoration: none;
}

.resp_img {
    margin: 100px auto;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>