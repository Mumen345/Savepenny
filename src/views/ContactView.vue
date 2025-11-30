<template>
  <div>
    <div class="text-center contact_first">
      <h1 class="text-white">Get in Touch</h1>
      <p class="text-white">We’re here to help with any questions about your savings, security, or partnerships.
      </p>
    </div>
    <div class="card_container">
      <div class="cards">
        <img src="../assets/support.svg" alt="">
        <div class="mb-5">
          <h4>Customer support</h4>
          <p>Get help with your Stokvel or FlexRand account.</p>
          <a href="mailto:support@pockiesafe.co.za">support@pockiesafe.co.za</a>
        </div>

      </div>
      <div class="cards two">
        <img src="../assets/partnership.svg" alt="">
        <div>
          <h4>Customer support</h4>
          <p>Get help with your Stokvel or FlexRand account.</p>
          <a href="mailto:partners@pockiesafe.co.za">partners@pockiesafe.co.za</a>
        </div>

      </div>
      <div class="cards three">
        <img src="../assets/press_media.svg" alt="">
        <div>
          <h4>Customer support</h4>
          <p>Get help with your Stokvel or FlexRand account.</p>
          <a href="mailto:media@pockiesafe.co.za">media@pockiesafe.co.za</a>
        </div>

      </div>
    </div>
    <div class="contact_container">
      <div class="contact-page">

        <div>
          <h2 class="text-right">Send Us a Message</h2>
          <p class="text-right ">We’ll respond within 24 hours.</p>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class=" ">
            <label>Name</label>
            <input type="text" v-model="form.name" required placeholder="Enter your name" />
          </div>

          <div class=" ">
            <label>Email</label>
            <input type="email" v-model="form.email" required placeholder="Enter your email" />
          </div>
          <div class=" ">
            <label>Subject</label>
            <input type="text" v-model="form.subject" required placeholder="Enter your email" />
          </div>

          <div class=" ">
            <label>Message</label>
            <textarea rows="5" cols="40" v-model="form.message" required placeholder="Your message..."></textarea>
          </div>

          <button type="submit" :disabled="loading">
            {{ loading ? "Sending..." : "Send Message" }}
          </button>

          <p v-if="success" class="success-msg">Message sent successfully!</p>
          <p v-if="error" class="error-msg">{{ error }}</p>

        </form>
      </div>
      <div class="right_container">
        <img class="map_img" src="../assets/map.png" alt="">
        <div
          class="text-center container bg-white rounded-4 border d-flex flex-column gap-2 justify-content-center align-items-center p-3">
          <img src="../assets/map_traker.svg" alt="">
          <h4 class="h3">Our Office</h4>
          <p class="fs-6 text-muted">Pockie Technologies Global (Pty) Ltd, Regus Offices, 5th Floor, Sandton City Office Tower, 83 Rivonia Road,
            Sandton, Johannesburg, 2196</p>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
// import axios from "axios";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ContatcView",
  components: {
    FooterSection,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      loading: false,
      success: false,
      error: null
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.success = false;
      this.error = null;

      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          this.form
        );

        // Check if request was successful
        if (response.status === 201 || response.status === 200) {
          this.success = true;
          this.form = { name: "", email: "", message: "" }; // Reset form
        }
      } catch (err) {
        this.error = "Something went wrong. Please try again.";
        console.error("API Error:", err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>


.contact_container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: 50px auto;
  background: #F9F9FB;
  border-radius: 20px;
  padding: 30px;
}

.right_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  gap: 30px;
  padding: 15px;
}

.contact_first {
  background-image: url("../assets/contact_hero.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 320px;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  margin: 0 auto;
  /* margin-top: 65px; */
}

.cards {
  background: #5856D6;
  padding: 32px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-radius: 20px;
  height: 260px;
  width: 330px;
  color: #ffffff;
}

.two {
  background: #00BFA6;
}

.three {
  background: #FF7A00;
}

a {
  color: #ffffff;
  text-decoration: underline;
}

.cards p {
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 20px;
  font-weight: 200 !important;
}

.card_container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  flex-wrap: wrap;


}

@media screen and (max-width: 700px) {
  .contact_container {
    padding: 0;
  }
  .card_container {
    padding: 20px;
  }

  .cards {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 1200px) {

  .contact_container {
    width: 100%;
    border-radius: 0 !important
  }
}

@media screen and (max-width: 1000px) {
  .contact_container {
    flex-direction: column;
    width: 100% !important;
  }
.right_container {
  width: 100% !important;
}
.map_img{ width: 100%;}
}

.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 
. {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: start;
  gap: 10px;
  width: 100%;
} */

input,
textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  margin-top: 10px;
}

button {
  padding: 17px;
  border: none;
  border-radius: 14px;
  background: #5856D6;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
}

button:disabled {
  background: #aac5ff;
  cursor: not-allowed;
}

.success-msg {
  color: green;
  margin-top: 10px;
  text-align: center;
}

.error-msg {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>