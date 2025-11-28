<template>
    <div class="">
        <div class="terms_hero_container">
            <h1>Privacy Policy</h1>
            <p class="p">How PockieSafe collects, uses, and protects your personal information in compliance with South
                Africa’s POPIA regulation.</p>
        </div>
        <div class="terms-container">

            <!-- SIDEBAR NAV -->
            <nav class="terms-sidebar">
                <h5 class=" p-4">Table of Contents</h5>
                <ul>
                    <li :class="active" @click="introActive">
                        Introduction
                    </li>
                    <li @click="defActive">
                        Information We Collect
                    </li>
                    <li @click="eliActive">
                        How We Use Your Information
                    </li>
                    <li @click="actActive">
                        Data Storage & Security
                    </li>
                    <li @click="userActive">
                        Consent
                    </li>
                    <li @click="stokActive">
                        Sharing & Third-Party Access
                    </li>
                    <li @click="flexActive">
                        Your Rights
                    </li>
                    <li @click="feesActive">
                        POPIA Compliance
                    </li>
                    <li @click="secActive">
                        Retention
                    </li>
                    <li @click="termActive">
                        Policy Updates
                    </li>
                </ul>
            </nav>

            <!-- CONTENT AREA -->
            <main class="terms-content">
                <div v-if="intro">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Introduction</h2>
                            <p>PockieSafe values your privacy. This Policy outlines how we collect, use, and safeguard
                                your information across our website and mobile app.</p>
                        </section>
                    </transition>
                </div>
                <div v-if="definitions">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Information We Collect</h2>

                            <ul>
                                <li>Personal details (name, ID number, email) </li>
                                <li>
                                    Financial information (linked bank accounts)
                                </li>
                                <li>
                                    Transaction data (contributions, withdrawals)
                                </li>
                                <li>
                                    Device and usage logs (IP, app version)
                                </li>

                            </ul>

                        </section>
                    </transition>
                </div>
                <div v-if="eligibility">
                    <transition name="fade-slide" mode="out-in">
                      <section class="terms-panel">
                            <h2>How We Use Your Information</h2>

                            <ul>
                                <li>To verify user identity (KYC) </li>
                                <li>
                                    To facilitate transactions within Stokvel or FlexRand
                                </li>
                                <li>
                                   To communicate updates, alerts, or policy changes
                                </li>
                                <li>
                                  To comply with legal and regulatory obligations
                                </li>

                            </ul>

                        </section>
                    </transition>
                </div>
                <div v-if="registration">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Data Storage & Security</h2>
                            <p>▮ Important: All data is stored in encrypted servers compliant with ISO/IEC 27001 standards. PockieSafe employs 256-bit SSL encryption and multi-factor authentication to protect your data.</p>

                        </section>
                    </transition>
                </div>
                <div v-if="responsibility">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Consent</h2>
                            <p>By using the PockieSafe platform, you consent to the collection and use of your data as described in this Policy.</p>
                        </section>
                    </transition>
                </div>
                <div v-if="stokvelTerms">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Sharing & Third-Party Access</h2>
                           <p>We never sell user data. Information is shared only with:</p>
                            <ul>

                                <li>Licensed payment processors</li>
                                <li>Regulatory authorities (when legally required)</li>
                                <li>Cloud providers under confidentiality agreements</li>
                            </ul>
                        </section>
                    </transition>
                </div>
                <div v-if="flexRand">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Your Rights</h2>
                            <p>You may request:</p>
                            <ul>

                                <li>Access to your stored information</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion of your account and associated data</li>
                            </ul>
                        </section>
                    </transition>
                </div>
                <div v-if="fees">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>POPIA Compliance</h2>
                            <p>▮ Note: PockieSafe complies with South Africa’s Protection of Personal Information Act (POPIA). All user data is processed lawfully, fairly, and transparently.</p>
                        </section>
                    </transition>
                </div>
                <div v-if="security">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Retention</h2>
                            <p>We retain user information only as long as required by law or business needs (typically 5 years post-account closure).</p>
                        </section>
                    </transition>
                </div>
                <div v-if="termination">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Policy Updates</h2>
                            <p>We may update this Policy periodically and will notify you via email or app alerts. <b>Effective Date:</b> January 10, 2026</p>
                        </section>
                    </transition>
                </div>

            </main>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            intro: true,
            definitions: false,
            eligibility: false,
            registration: false,
            responsibility: false,
            stokvelTerms: false,
            flexRand: false,
            fees: false,
            security: false,
            termination: false,
            disclaimer: false,
            govern: false,
            update: false,
            contact: false,
        };
    },
    computed: {
        currentTab() {
            return this.tabs.find(t => t.key === this.activeTab);
        }
    },
    methods: {
        introActive() {
            this.intro = true;
            this.eligibility = false;
            this.definitions = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;
        },
        eliActive() {
            this.eligibility = true;
            this.intro = false;
            this.definitions = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        defActive() {
            this.definitions = true;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        actActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = true;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        userActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = true;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        stokActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = true;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        flexActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = true;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        feesActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = true;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        secActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = true;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        termActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = true;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        disActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = true;
            this.govern = false;
            this.update = false;
            this.contact = false;

        },
        govActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = true;
            this.update = false;
            this.contact = false;

        },
        updateActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = true;
            this.contact = false;

        },
        contactActive() {
            this.definitions = false;
            this.eligibility = false;
            this.intro = false;
            this.registration = false;
            this.responsibility = false;
            this.stokvelTerms = false;
            this.flexRand = false;
            this.fees = false;
            this.security = false;
            this.termination = false;
            this.disclaimer = false;
            this.govern = false;
            this.update = false;
            this.contact = true;

        },

    }
};
</script>
<style lang="scss" scoped>
.terms_hero_container {
    background-image: linear-gradient(to bottom, #F7F7FB, #ffffff);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100% !important;
    max-width: 2000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 0;
    gap: 10px;

}

h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 56px;
    letter-spacing: 0.2px;
    color: #12121C;
    text-align: center;
}

.p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #6F6F7B;
    letter-spacing: 0.2px;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

/* Container Layout */
.terms-container {
    display: flex;
    gap: 2rem;
    padding: 2.5rem;
    min-height: 50vh;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        padding: 1.5rem;
    }

    @media (max-width: 900px) {
        max-width: 100%;

    }
}

/* Sidebar */
.terms-sidebar {
    width: 280px;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #EDEDED;
    padding: 2rem 0;
    position: sticky;
    top: 20px;
    height: fit-content;

    @media (max-width: 900px) {
        width: 100%;
        position: relative;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 14px 22px;
        font-weight: 500;
        font-size: 15px;
        color: #5f6b7a;
        cursor: pointer;
        transition: 0.25s ease;
        border-left: 4px solid transparent;

        &:hover {
            color: #000;
            background: #f0f3f7;
        }

        &.active {
            color: #0d6efd !important;
            background: #eaf1ff;
            border-left-color: #0d6efd;
            font-weight: 600;
        }
    }
}

/* CONTENT AREA */
.terms-content {
    flex: 1;
}

.terms-panel {
    background: #ffffff;
    padding: 2rem 2.5rem;
    border-radius: 20px;
    animation: fadeIn 0.3s ease;

    @media (max-width: 900px) {
        padding: 0.2rem;
    }

    h2 {
        margin-bottom: 0.5rem;
        font-weight: 700;
        font-size: 28px;
    }

    .lead {
        color: #6c7a89;
        margin-bottom: 2rem;
        font-size: 16px;
    }

    .terms-block {
        // margin-bottom: 1.8rem;

        h4 {
            font-size: 19px;
            margin-bottom: 6px;
            font-weight: 600;
            color: #313c47;
        }

        p {
            color: #6c7a89;
            line-height: 1.7;
            font-size: 15px;
        }
    }
}

/* Fade Slide Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all .35s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(12px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}

/* Extra smooth fade */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>