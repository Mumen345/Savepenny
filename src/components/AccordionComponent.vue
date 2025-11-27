<template>
  <div class="faq-container">
    <!-- TAB HEADERS -->
    <div class="faq-tabs mb-4">
      <button v-for="tab in tabs" :key="tab.name" class="faq-tab-btn" :class="{ active: activeTab === tab.name }"
        @click="selectTab(tab.name)">
        {{ tab.name }}
      </button>
    </div>
    <!-- TAB CONTENT -->
    <div class="faq-card  bg-white" v-for="tab in tabs" :key="tab.name" v-show="activeTab === tab.name">
      <h5 class="fw-bold mb-4">{{ tab.name }}</h5>
      <!-- ACCORDION -->
      <div class="accordion" :id="`accordion-${tab.name}`">
        <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden" v-for="(faq, index) in tab.faqs"
          :key="index">
          <h2 class="accordion-header">
            <button class="accordion-button d-flex align-items-center" :class="{ collapsed: openIndex !== index }"
              @click="toggleAccordion(index)">
              <span>{{ faq.question }}</span>

              <!-- ICON -->
              <i class="ms-auto bi" :class="openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
            </button>
          </h2>
          <transition name="accordion-slide">
            <div v-show="openIndex === index" class="accordion-collapse show">
              <div class="accordion-body">
                {{ faq.answer }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      activeTab: "General",
      openIndex: 0,
      tabs: [
        {
          name: "General",
          faqs: [
            { question: "What is PockieSafe?", answer: "PockieSafe is a digital savings platform that lets individuals and groups save securely, transparently, and flexibly. It bridges traditional Stokvel culture with modern financial technology." },
            { question: "Is PockieSafe licensed to operate??", answer: "Yes. PockieSafe operates under Pockie Technologies Global (Pty) Ltd — registered in South Africa with FSP License 2025/128579/07, ensuring your funds are legally protected." },
            { question: "Who can use PockieSafe?", answer: "Anyone 18 years or older with a South African ID or valid passport can sign up. We’re designed for individuals, groups, and businesses." },
            { question: "How do I create a PockieSafe account?", answer: "Download the app from the Google Play Store or Apple App Store, verify your KYC, and you can start saving within minutes." },
            { question: "Does PockieSafe charge any fees?", answer: "There’s no fee to open or maintain your savings account. Some optional premium services may include small transaction fees, which are clearly displayed before use." },
            { question: "Can I use PockieSafe outside South Africa?", answer: "Currently, PockieSafe operates within South Africa. Expansion to other African countries begins in 2026." },
            { question: "What makes PockieSafe different from banks?", answer: "PockieSafe focuses on community-driven and goal-based saving, offering transparent group tools (Stokvels) and flexible personal wallets (FlexRand) — not loans or traditional banking." },
          ]
        },
        {
          name: "Stokvel",
          faqs: [
            { question: "What is a Stokvel on PockieSafe?", answer: "It’s a digital version of traditional group savings where members contribute regularly and receive payouts on rotation — now managed securely through the app." },
            { question: "How do I create a new Stokvel group?", answer: "Go to “My Groups” → “Create Group”, set your contribution rules and cycle, invite members, and your group will start immediately once everyone joins." },
            { question: "How do I join an existing group?", answer: "You can join via an invite link, join code, or QR scan sent by the group admin. All groups are verified before contributions start." },
            { question: "Can I track member contributions?", answer: "Can I track member contributions?" },
            { question: "What happens if a member misses a payment?", answer: "The group admin is notified automatically, and the system will log the missed contribution. Admins can adjust or remove inactive members based on group rules." },
            { question: "Can I have more than one Stokvel group?", answer: "Yes, you can join or create multiple groups — for family, friends, or community projects — all managed in one dashboard." },
            { question: "How secure are group funds?", answer: "Funds are held in a regulated trust account under our licensed financial partner. Payouts only move according to the group’s set rotation schedule." },
          ]
        },
        {
          name: "FlexRand",
          faqs: [
            { question: "What is FlexRand?", answer: "FlexRand is a flexible personal savings wallet that lets you save and withdraw anytime — without penalties or lock-in periods." },
            { question: "How does FlexRand work?", answer: "You deposit into your FlexRand wallet through the app, and your balance grows daily based on our dynamic return model. Withdraw whenever you need — instantly." },
            { question: "Is there a minimum deposit amount?", answer: "No. You can start saving with as little as R10, and there’s no minimum balance requirement." },
            { question: "How often can I withdraw?", answer: "You can withdraw anytime, instantly — directly to your linked bank account or wallet." },
            { question: "Do I earn interest on my savings?", answer: "Yes. FlexRand offers variable daily growth, so the longer your funds stay, the more they earn." },
            { question: "Are there any penalties or hidden charges?", answer: "None. PockieSafe believes in transparent savings — no lock-ins, no hidden fees." },
            { question: "Can I use FlexRand for goals?", answer: "Yes. You can set custom goals or track milestones (e.g., “R10,000 in 3 months”) and monitor your progress visually inside the app." },
          ]
        },
        {
          name: "Security",
          faqs: [
            { question: "How safe is my money on PockieSafe??", answer: "Our official Financial Services Provider (FSP) License number is 2025/128579/07, registered under Pockie Technologies Global (Pty) Ltd." },
            { question: "Does PockieSafe comply with POPIA?", answer: "Yes. We are fully POPIA compliant, meaning your personal and financial data is protected, encrypted, and never shared without consent." },
            { question: "Where are my funds held?", answer: "Group and personal funds are held in regulated South African trust accounts with partner financial institutions under FSP oversight." },
            { question: "Does PockieSafe use two-factor authentication (2FA)?", answer: "Yes. You can enable 2FA or trusted device verification for every login or high-value transaction." },
            { question: "How does PockieSafe prevent fraud?", answer: "Through device fingerprinting, encryption, and transaction monitoring, we instantly detect and flag suspicious activity." },
            { question: "What should I do if I suspect unauthorized activity?", answer: "Immediately report it via the “Security → Report Issue” button in the app or contact our support team through email or chat." },
          ]
        },
        {
          name: "App Support",
          faqs: [
            { question: "I forgot my password — what do I do?", answer: "Tap “Forgot Password” on the login screen, enter your registered email or phone number, and follow the reset instructions." },
            { question: "The app won’t open — what should I check?", answer: "Ensure you’re using the latest version of PockieSafe. If it still doesn’t open, try clearing cache or restarting your phone before reinstalling." },
            { question: "How do I update my profile or KYC info?", answer: "Go to Profile → Edit Info. You can update your ID, address, or phone number anytime. For KYC re-verification, you may need to upload a valid document." },
            { question: "My payment failed — what next?", answer: "Failed payments are usually due to network or bank downtime. Try again after a few minutes or use a different payment method." },
            { question: "Can I contact support directly?", answer: "Yes. You can message us directly inside the app under Support → Contact Us, or email support@pockiesafe.co.za" },
            { question: "What are PockieSafe’s support hours?", answer: "Our live chat team is available Monday–Saturday, 8 AM to 8 PM (SAST). Email support runs 24/7." },
            { question: "How do I delete my PockieSafe account?", answer: "Go to Settings → Account → Delete Account. For compliance reasons, your transaction history may be stored securely for a limited legal retention period." },
          ]
        }
      ]
    };
  },

  methods: {
    selectTab(tabName) {
      this.activeTab = tabName;
    },
    toggleAccordion(index) {
      this.openIndex = this.openIndex === index ? -1 : index;
    }
  }
};
</script>

<style lang="scss" scoped>
.faq-tabs {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
}

.tab_btn {}

.faq-tab-btn {
  border: 0;
  background: #FFFFFF;
  padding: 10px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease;
}

.faq-tab-btn.active {
  background: #ffffff00;
  color: white;
  border-bottom: 2px solid #5856D6;
  color: #5856D6;
}

.faq-tab-btn:hover {
  background: #e9ecef;
}

.faq-card {
  border-radius: 16px;
}

.accordion-button {
  font-weight: 500;
  background: #f8f9fa !important;
}

.accordion-button:not(.collapsed) {
  background: #eef5ff !important;
  color: #5856D6;
}

.accordion-body {
  background: white;
  border-left: 3px solid #5856D6;
  font-size: 15px;
  font-weight: 400;
  line-height: 35px;
}

/* Chevron Animation */
.accordion-button .bi {
  transition: transform 0.25s ease;
}

.accordion-button:not(.collapsed) .bi {
  transform: rotate(180deg);
}

/* smooth accordion animation */
.accordion-slide-enter-active,
.accordion-slide-leave-active {
  transition: max-height 0.5s ease, opacity 0.2s ease;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  max-height: 0;
  opacity: 0;
}

@media screen and (max-width: 1160px) {
  .faq-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 3%;
  }
  .faq-tabs {
    justify-content: center !important;

  }
}
@media screen and (max-width: 500px) {
  .faq-tabs {
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0;
}
}
</style>