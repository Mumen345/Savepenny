<template>
    <nav class="navbar">
        <div class="container">

           <router-link class="nav-link me-5 logo_remove" to="/"><img
                        src="../assets/main-logo.svg" alt=""></router-link>

            <button class="hamburger" @click="toggleMenu">
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
            </button>

            <ul :class="['nav-links', { show: isOpen }]">
                 <li class="nav-item "  @click="closeMenu">
                    <router-link class="nav-link" to="/stokvel">Stokvel</router-link>
                </li>
                <li class="nav-item "  @click="closeMenu">
                    <router-link class="nav-link" to="/flexrand">FlexRand</router-link>
                </li>
                <li class="nav-item "  @click="closeMenu">
                    <router-link class="nav-link" to="/security">Security</router-link>
                </li>
                <li class="nav-item "  @click="closeMenu">
                    <router-link class="nav-link" to="/faq">FAQs</router-link>
                </li>

                <div v-if="isOpen" class="mobile-download">
                    <a href="#" class="download-btn google" @click="closeMenu"><img src="../assets/googleplay.svg" alt="" /></a>
                    <a href="#" class="download-btn apple" @click="closeMenu"><img src="../assets/appstore.svg" alt="" /></a>
                </div>
            </ul>

            <div class="right-btns">
                <a class="" href="#" role="button"><img src="../assets/appstore.svg" alt="" /> </a>
                <a class="" href="#" role="button"><img src="../assets/googleplay.svg" alt="" />
                </a>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        }
    }
};
</script>

<style scoped>
/* NAV BAR BASE */
ul{
    margin-top: 1rem;
}
.navbar {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.container {
    max-width: 1240px;
    margin: auto;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* LOGO */
.logo {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
}

/* NAV LINKS */
.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: #222;
    font-size: 1rem;
}

.nav-links li a:hover {
    color: #007bff;
}

/* RIGHT BUTTONS */
.right-btns {
    display: flex;
    gap: 10px;
}

.download-btn {
    /* padding: 0.55rem 1.2rem; */
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    display: inline-block;
}


/* HAMBURGER */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
}

.hamburger span {
    width: 26px;
    height: 3px;
    background: #222;
    transition: 0.3s;
}

/* Hamburger → X animation */
.hamburger span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* MOBILE STYLING */
@media (max-width: 974px) {
    .hamburger {
        display: flex;
    }

    .right-btns {
        display: none;
        /* Hide desktop buttons */
    }

    .nav-links {
        display: none;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        padding: 1.5rem 0;
        background: #fff;
        border-bottom: 1px solid #eee;
        padding-left: 18px;
        text-align: left;
    }

    .nav-links.show {
        display: flex;
        animation: fadeDown 0.25s ease;
    }

    @keyframes fadeDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* MOBILE DOWNLOAD BUTTONS */
    .mobile-download {
        display: flex;
        gap: 10px !important;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        padding: 0;
    }

}
</style>