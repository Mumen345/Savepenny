<template>
    <div class="">
        <div class="terms_hero_container">
            <h1>Terms & Conditions</h1>
            <p class="p">These terms govern your use of the PockieSafe platform and services. Please read them
                carefully.</p>
        </div>
        <div class="terms-container">

            <!-- SIDEBAR NAV -->
            <nav class="terms-sidebar">
                <h5 class="mb-4">Table of Contents</h5>
                <ul>
                    <li :class="active" @click="introActive">
                        Introduction
                    </li>
                    <li @click="defActive">
                        Definitions
                    </li>
                    <li @click="eliActive">
                        Eligibility
                    </li>
                    <li @click="actActive">
                        Account Registration
                    </li>
                    <li @click="userActive">
                        User Responsibilities
                    </li>
                    <li @click="stokActive">
                        Stokvel Terms
                    </li>
                    <li @click="flexActive">
                        FlexRand Terms
                    </li>
                    <li @click="feesActive">
                        Fees & Payments
                    </li>
                    <li @click="secActive">
                        Security & Data
                    </li>
                    <li @click="termActive">
                        Termination
                    </li>
                    <li @click="disActive">
                        Disclaimers
                    </li>
                    <li @click="govActive">
                        Governing Law
                    </li>
                    <li @click="updateActive">
                        Updates to These Terms
                    </li>
                    <li @click="contactActive">
                        Contact Information
                    </li>
                </ul>
            </nav>

            <!-- CONTENT AREA -->
            <main class="terms-content">
                <div v-if="intro">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Introduction</h2>
                            <p class="lead text-dark">Welcome to <b class="fw-bold">PockieSafe</b> , a savings platform
                                designed to help individuals and groups save transparently and securely through digital
                                tools such as <b class="fw-bold">Stokvels</b> and <b class="fw-bold">FlexRand</b>
                                wallets. 
                                By accessing or using our website, mobile app, or related services, you agree to these
                                Terms
                                & Conditions (“Terms”). If you do not agree, please discontinue use immediately.</p>
                            <p>

                                These Terms constitute a binding agreement between you (“User”, “you”, or “your”) and <b
                                    class="fw-bold"> Pockie Technologies Global (Pty) Ltd </b> (“PockieSafe”, “we”,
                                “us”, or
                                “our”).</p>

                            <!-- <div class="terms-block">
                                <h4>Section Title</h4>
                                <p>App” refers to the PockieSafe mobile application and web portal.</p>
                                <li>Item 1</li>
                            </div> -->

                        </section>
                    </transition>
                </div>
                <div v-if="definitions">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Definitions</h2>
                            <p>For clarity in these Terms:</p>
                            <ul>
                                <li><b>“App”</b>refers to the PockieSafe mobile application and web portal.</li>
                                <li><b>"User"</b>means any individual or entity registered to use PockieSafe services.
                                </li>
                                <li><b>“Stokvel”</b>means a group savings structure where members contribute fixed
                                    amounts
                                    periodically.</li>
                                <li><b>"FlexRand"</b>refers to PockieSafe’s flexible savings wallet for individual
                                    users.
                                </li>
                                <li><b>"FSP License"</b>refers to our Financial Services Provider license issued under
                                    South
                                    African law.</li>
                                <li><b>"POPIA"</b>means the Protection of Personal Information Act (South Africa).</li>
                                <li><b>"Funds"</b>means money deposited or saved through the app under your account.
                                </li>
                            </ul>
                            <!-- <div class="terms-block">
                                <h4>Section Title</h4>
                                <p>App” refers to the PockieSafe mobile application and web portal.</p>
                                <li>Item 1</li>
                            </div> -->

                        </section>
                    </transition>
                </div>
                <div v-if="eligibility">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Eligibility</h2>
                            <p>To use PockieSafe, you must:</p>
                            <ol>
                                <li>Be<b> 18 years or older.</b></li>
                                <li>Possess a valid<b>"South African ID</b>or <b>passport</b></li>
                                <li>Complete<b>KYC (Know Your Customer)</b> verification as required by regulation.</li>
                                <li>Have legal capacity to enter into binding agreements.</li>
                            </ol>
                            <p>We reserve the right to deny or suspend access if eligibility requirements are not met or
                                if
                                false information is provided during registration.</p>
                            <!-- <div class="terms-block">
                                <h4>Section Title</h4>
                                <p>App” refers to the PockieSafe mobile application and web portal.</p>
                                <li>Item 1</li>
                            </div> -->

                        </section>
                    </transition>
                </div>
                <div v-if="registration">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Account Registration</h2>
                            <p>Users must create a personal account using accurate and verifiable information.</p>
                            <p>You are responsible for:</p>
                            <ul>
                                <li>Maintaining the confidentiality of your login credentials.</li>
                                <li>Ensuring your contact and banking details remain accurate.</li>
                                <li>Reporting unauthorized access or suspicious activity immediately.</li>
                            </ul>
                            <p>PockieSafe reserves the right to terminate or restrict access to any account violating
                                these
                                Terms or applicable laws.</p>
                            <!-- <div class="terms-block">
                                <h4>Section Title</h4>
                                <p>App” refers to the PockieSafe mobile application and web portal.</p>
                                <li>Item 1</li>
                            </div> -->

                        </section>
                    </transition>
                </div>
                <div v-if="responsibility">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>User Responsibilities</h2>
                            <p>By using PockieSafe, you agree to:</p>
                            <ul>
                                <li>Use the platform for lawful financial saving purposes only.</li>
                                <li>Avoid fraudulent, misleading, or deceptive actions.</li>
                                <li>Not interfere with or disrupt the security, performance, or integrity of the app.
                                </li>
                                <li>Comply with South African financial and anti-money-laundering regulations.</li>
                            </ul>
                            <p>Users are responsible for ensuring that their contributions and withdrawals comply with
                                local
                                tax and reporting obligations.</p>


                        </section>
                    </transition>
                </div>
                <div v-if="stokvelTerms">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Stokvel Terms</h2>
                            <h6 class="fw-bold">Group Creation & Participation:</h6>
                            <ul>

                                <li>Stokvel groups can be created by verified users only.</li>
                                <li>Members must agree to the group’s defined rules (cycle length, contribution amount,
                                    payout order).</li>
                            </ul>
                            <h6 class="fw-bold">Group Creation & Participation:</h6>
                            <ul>
                                <li>Contributions are automatically tracked through the app.</li>
                                <li>Missed or late payments are visible to all members for transparency.</li>
                            </ul>
                            <h6 class="fw-bold">Withdrawals & Payouts:</h6>
                            <ul>
                                <li>Funds are released to members according to the group rotation or payout schedule.
                                </li>
                                <li>Group funds are stored in a regulated trust account under the PockieSafe FSP
                                    license.
                                </li>
                            </ul>
                            <h6 class="fw-bold">Dissolution:</h6>
                            <ul>
                                <li>A group may close once its saving cycle ends or by unanimous member agreement.</li>
                            </ul>
                        </section>
                    </transition>
                </div>
                <div v-if="flexRand">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>FlexRand Terms</h2>
                            <h6 class="fw-bold">Deposits & Withdrawals:</h6>
                            <ul>

                                <li>You can deposit or withdraw funds anytime, without penalty.</li>
                                <li>Withdrawals are processed instantly to your linked bank account (subject to bank
                                    processing times).</li>
                            </ul>
                            <h6 class="fw-bold">Earnings:</h6>
                            <ul>
                                <li>FlexRand balances may earn variable growth over time.</li>
                                <li>PockieSafe is not a bank and does not guarantee fixed interest rates.</li>
                            </ul>
                            <h6 class="fw-bold">Usage Limits:</h6>
                            <ul>
                                <li>Certain limits may apply to prevent misuse or meet compliance standards.</li>
                                <li>Users will be notified of applicable limits within the app.</li>
                            </ul>
                        </section>
                    </transition>
                </div>
                <div v-if="fees">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Fees & Payments</h2>
                            <h6 class="fw-bold">Transparent Pricing:</h6>
                            <p>
                                PockieSafe does not charge any hidden fees. All costs are clearly disclosed before you
                                use
                                our services.</p>
                            <h6 class="fw-bold">Annual Maintenance Fee:</h6>
                            <p>
                                A flat R200 annual maintenance fee applies to every active user account.  This fee
                                supports
                                secure infrastructure, transaction protection, and customer support operations.  <br>The
                                fee
                                may be reviewed annually but will always be communicated in advance before renewal.
                            </p>
                            <h6 class="fw-bold">Transactions & Group Use:</h6>
                            <ul>
                                <li>
                                    <b>Deposits, contributions, and withdrawals </b>
                                    within Stokvel or FlexRand are free of charge.
                                </li>
                                <li>Users will be notified of applicable limits within the app.</li>
                                <li>
                                    There are
                                    <b>
                                        no penalties or percentage-based deductions
                                    </b>
                                    on withdrawals.
                                </li>
                                <li>
                                    Any future paid premium services (if introduced) will be <b>optional</b> and clearly
                                    indicated before activation.
                                </li>
                            </ul>
                            <h6 class="fw-bold">Taxes:</h6>
                            <p>Users are responsible for any personal tax obligations arising from their savings
                                activity or
                                returns earned within the app.</p>
                        </section>
                    </transition>
                </div>
                <div v-if="security">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Security & Data Protection</h2>
                            <p>Your security and privacy are our top priorities.</p>

                            <ul>
                                <li>
                                    All data and transactions are protected with <b>256-bit encryption</b> and
                                    <b>multi-factor authentication.</b>

                                </li>
                                <li>PockieSafe is fully <b>POPIA</b> compliant and never sells or shares your personal
                                    data
                                    without consent.</li>

                                <li>
                                    Our systems are hosted on secure, ISO-certified cloud infrastructure.
                                </li>
                                <li>
                                    We may perform periodic security audits and updates to maintain compliance and
                                    safety.
                                </li>
                            </ul>
                            <p>For more on privacy, see our Privacy Policy.</p>
                        </section>
                    </transition>
                </div>
                <div v-if="termination">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Termination of Use</h2>
                            <p>PockieSafe may suspend or terminate your account if:</p>

                            <ul>


                                <li>
                                    You breach these Terms or applicable laws.
                                </li>
                                <li>
                                    Fraudulent, illegal, or harmful activity is detected.
                                </li>
                                <li>
                                    You request account deletion via Settings → Account → Delete.
                                </li>

                            </ul>
                            <p>
                                Upon termination, all pending group or wallet balances will be processed per your last
                                valid
                                instruction, subject to regulatory requirements.</p>
                        </section>
                    </transition>
                </div>
                <div v-if="disclaimer">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Disclaimers & Limitation of Liability</h2>

                            <ul>


                                <li>
                                    PockieSafe is a digital savings platform, <b>not a bank or lender.</b>
                                </li>
                                <li>
                                    PockieSafe will not be liable for losses resulting from:
                                    <ul>
                                        <li>User negligence, unauthorized access, or incorrect transactions.</li>
                                        <li>Bank or third-party downtime.</li>
                                        <li>Events beyond our control (e.g., system failure, force majeure).</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>
                                Your use of PockieSafe is at your sole risk, and services are provided on an “as-is”
                                basis.
                            </p>
                        </section>
                    </transition>
                </div>
                <div v-if="govern">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Governing Law & Dispute Resolution</h2>
                            <p>These Terms are governed by the laws of the Republic of South Africa.  <br> Any disputes
                                shall be resolved through mediation or, failing that, the competent courts of South
                                Africa. <br> Users outside South Africa agree to submit to South African jurisdiction
                                for
                                any disputes related to PockieSafe.</p>

                        </section>
                    </transition>
                </div>
                <div v-if="update">
                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Updates to These Terms</h2>
                            <p>We may update these Terms periodically to reflect changes in our services or legal
                                requirements. <br> When we do, we will:</p>
                            <ul>
                                <li>Post the updated version with a new <b>“Effective Date.”</b> </li>
                                <li>Notify users via email or in-app message.</li>
                            </ul>
                            <p>Continued use of PockieSafe after updates constitutes acceptance of the revised Terms.
                            </p>
                        </section>
                    </transition>
                </div>
                <div v-if="contact">

                    <transition name="fade-slide" mode="out-in">
                        <section class="terms-panel">
                            <h2>Contact Information</h2>
                            <p>If you have any questions or concerns about these Terms, please contact us at:
                            </p>
                            <p><a href="mailto:support@pockiesafe.co.za">support@pockiesafe.co.za</a></p>
                            <p>Pockie Technologies Global (Pty) Ltd</p>
                            <p>Continued use of PockieSafe after updates constitutes acceptance of the revised Terms.
                            </p>
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
    width: 260px;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #EDEDED;
    padding: 2rem 20px;
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