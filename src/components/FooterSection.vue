<template>
    <footer class="footer_container">
        <div class="footer_first">
            <img src="../assets/logo_white.svg" alt="">
            <p>
                © 2026 Pockie Technologies Global (Pty) Ltd
            </p>
        </div>
        <div class="footer_middle">
            <RouterLink to="/terms">Terms</RouterLink>
            <RouterLink to="/privacypolicy">Privacy</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
        <div class="d-flex gap-3 aligh-items-center">
            <img src="../assets/facebook.svg" alt="">
            <img src="../assets/x.svg" alt="">
            <img src="../assets/ig.svg" alt="">
            <img src="../assets/tiktok.svg" alt="">
            <img src="../assets/youtube.svg" alt="">
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
}

.footer_first {
    width: 220px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.2px;
}

.footer_middle {
    display: flex;
    gap: 20px;
}

a {
    color: #6F6F7B;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    /* text-decoration: underline; */

}

@media screen and (max-width: 750px) {
    .footer_container {
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 100%;
        padding: 30px;
        gap: 30px;
    }

    .footer_first {
        width: 100%;
    }

    .footer_middle {
        flex-direction: column;
    }
}
</style>