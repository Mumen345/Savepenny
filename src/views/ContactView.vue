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
                <div>
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
        <div>
            <div class="contact-page">
    <h2>Contact Us</h2>

    <form @submit.prevent="submitForm" class="contact-form">
      
      <div class="form-group">
        <label>Name</label>
        <input 
          type="text" 
          v-model="form.name" 
          required 
          placeholder="Enter your name"
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input 
          type="email" 
          v-model="form.email" 
          required 
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea 
          v-model="form.message" 
          required 
          placeholder="Your message..."
        ></textarea>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Sending..." : "Send Message" }}
      </button>

      <!-- SUCCESS MESSAGE -->
      <p v-if="success" class="success-msg">Message sent successfully!</p>

      <!-- ERROR MESSAGE -->
      <p v-if="error" class="error-msg">{{ error }}</p>

    </form>
  </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
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
.contact_first {
    background-image: url("../assets/contact_hero.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 18%;
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
.two{
    background: #00BFA6;
}
.three{
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
    .card_container {
        padding: 20px;
    }

.cards {
    width: 100%;
    height: auto;
}
}
@media screen and (max-width: 990px) {

}
.contact-page {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #2d6cdf;
  color: white;
  cursor: pointer;
  font-size: 16px;
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