<!-- <template>
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
                        <router-link class="nav-link" to="/stokvel">Stokvel</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/flexrand">FlexRand</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/security">Security</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link" to="/faq">FAQs</router-link>
                    </li>
                </ul>


                <div class="d-flex align-items-center">
                    <div class="download_container">
                        <a class="" href="#" role="button"><img src="../assets/appstore.svg" alt="" /> </a>
                        <a class="" href="#" role="button"><img src="../assets/googleplay.svg" alt="" />
                        </a>
                    </div>
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
</style> -->


<template>
    <nav class="navbar1">
        <div class="nav-container">
            <div class="nav-logo"><router-link class="nav-link me-5 logo_remove" to="/"><img
                        src="../assets/main-logo.svg" alt=""></router-link>
            </div>

            <!-- NAV LINKS -->
            <ul class="nav-links" :class="{ open: isOpen }">
                <li class="nav-item ">
                    <router-link class="nav-link" to="/stokvel">Stokvel</router-link>
                </li>
                <li class="nav-item ">
                    <router-link class="nav-link" to="/flexrand">FlexRand</router-link>
                </li>
                <li class="nav-item ">
                    <router-link class="nav-link" to="/security">Security</router-link>
                </li>
                <li class="nav-item ">
                    <router-link class="nav-link" to="/faq">FAQs</router-link>
                </li>
                <div class="d-flex align-items-center mobile  ">
                    <div class="download_container">
                        <a class="" href="#" role="button"><img src="../assets/appstore.svg" alt="" /> </a>
                        <a class="" href="#" role="button"><img src="../assets/googleplay.svg" alt="" />
                        </a>
                    </div>
                </div>
            </ul>


            <!-- CTA (hidden on mobile) -->
            <div class="d-flex align-items-center web">
                <div class="download_container">
                    <a class="" href="#" role="button"><img src="../assets/appstore.svg" alt="" /> </a>
                    <a class="" href="#" role="button"><img src="../assets/googleplay.svg" alt="" />
                    </a>
                </div>
            </div>

            <!-- HAMBURGER MENU -->
            <div class="nav-toggle" :class="{ active: isOpen }" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            isOpen: false, // <---- Vue reactivity
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped lang="scss">
nav {
    padding: 10px;
}

.web {
    display: block !important;

    @media (max-width: 900px) {
        display: none !important;
    }
}

.mobile {
    display: none !important;

    @media (max-width: 900px) {
        display: block !important;
    }
}

.navbar1 {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 900px) {
        justify-content: space-between;
        padding: 0;

    }
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;

    li a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: 0.3s ease;

        &:hover {
            color: #1a73e8;
        }
    }
}

.nav-links ul {
    margin-top: auto;
}

.nav-cta {
    padding: 10px 18px;
    background: #1a73e8;
    border: none;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background: #155ec4;
    }
}

/* ---- MOBILE ---- */
.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
        width: 25px;
        height: 3px;
        background: #333;
        transition: 0.3s;
    }
}

@media (max-width: 900px) {
    .nav-links {
        position: fixed;
        top: 65px;
        right: 0;
        width: 100%;
        max-width: 300px;
        height: 100vh;
        background: #ffffff;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
        flex-direction: column;
        padding: 2rem 1.5rem;
        gap: 1.5rem;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;

        &.open {
            transform: translateX(0%);
        }
    }

    .nav-toggle {
        display: flex;
    }

    /* Hamburger → X */
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(36deg) translateY(9.5px);
    }

    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-40deg) translateY(-10.2px);
    }

    /* Hide CTA on mobile */
    .nav-cta {
        display: none;
    }

    /* ===== DARK OVERLAY ===== */
    .overlay {
        position: fixed;
        top: 65px;
        /* below navbar */
        left: 0;
        width: 100%;
        height: calc(100vh - 65px);
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(2px);
        z-index: 9000;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
}
</style>