<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container-fluid">
            <router-link class=" mobile me-5" to="/"><img src="../assets/main-logo.svg" alt=""></router-link>
            <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-bars"></i>
                </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarExample01">
                <router-link class="nav-link me-5 logo_remove" to="/"><img src="../assets/main-logo.svg"
                        alt=""></router-link>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/cards">Cards</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/vendors">vendors</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/careers">Careers</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/docs">API Documentation</router-link>
                    </li>
                </ul>


                <div class="d-flex align-items-center">
                    <a class="btn btn-black px-3  me-3"
                        href="https://play.google.com/store/apps/details?id=com.purplepay" role="button"><img
                            src="../assets/googleplay_logo.svg" alt="" /> Play Store</a>
                    <a class="btn btn-black px-3" href="https://apps.apple.com/ng/app/purplepay/id1548285634"
                        role="button"><img src="../assets/apple_icon.svg" alt="" />
                        Apple Store</a>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-link {
    color: #232323;
    // font-weight: 500;
}

.nav_container {
    max-width: 1440px !important;
    margin: 0 auto;
    background-color: red;
}

.mobile {
    display: none;
}

@media screen and (max-width: 990px) {
    .mobile {
        display: block;
    }

    .logo_remove {
        display: none;
    }
}
</style>