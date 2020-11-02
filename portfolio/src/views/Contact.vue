<template>
  <div>
    <div class="nav">
      <div class="home">
        <router-link class="link" to="/">Michaela Arratoon</router-link>
      </div>
      <div class="menu">
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
        <router-link class="link" to="/projects">Projects</router-link>
      </div>
    </div>
    <div>
      <img src="../assets/contact.png" />
    </div>
    <div class="contact">
      <form class="contact-form" @submit.prevent="sendMail">
        <h1>Let's collaborate...</h1>
        <div class="form-group">
          <input
            placeholder="email"
            type="text"
            id="msg-name"
            class="form-control"
            v-model="contactFormData.name"
          />
        </div>
        <div class="form-group">
          <input
            placeholder="name"
            type="text"
            id="msg-email"
            class="form-control"
            v-model="contactFormData.email"
          />
        </div>
        <div class="form-group">
          <textarea
            placeholder="Write something clever..."
            rows="10"
            id="msg-message"
            class="form-control"
            v-model="contactFormData.message"
          ></textarea>
        </div>
        <div class="form-result">
          <p class="alert alert-success" v-if="success && !error">
            Message sent successfully.
          </p>
          <p class="alert alert-error" v-if="!success && error">
            Message failed.
          </p>
        </div>
        <div class="form-group">
          <button class="btn" type="submit">send</button>
        </div>
        <h1>...I'll get back to you asap!</h1>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data: function() {
    return {
      contactFormData: {
        name: "",
        email: "",
        message: "",
      },
      success: false,
      error: false,
    };
  },
  methods: {
    sendMail: function() {
      const url = "https://portfolio-contact-form-4bee7.web.app/";
      const { name, email, message } = this.contactFormData;
      const payload = { name, email, message };
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(() => {
          this.success = true;
          this.resetForm();
        })
        .catch(() => {
          this.error = true;
        });
    },
    resetForm: function() {
      this.contactFormData = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.contact-form {
  margin: 5rem;
  border-radius: 4px;
  height: 50vh;
  width: 30vw;
}

h1 {
  font-family: "NaftaLight-Regular";
  text-align: center;
  margin: 2rem 0 1rem;
}
.form-group {
  padding: 10px;
  font-family: "NaftaLight-Regular";
}
.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="text"].form-control {
  margin: 8px 0;
  display: inline-block;
}
textarea.form-control {
  resize: none;
}
.btn {
  cursor: pointer;
  padding: 8px 10px;
  outline: none;
  border: none;
  background: black;
  font-size: 12px;
  font-weight: bold;
  font-family: "NaftaLight-Regular";
  color: white;
  width: 20%;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  text-align: center;
}

.btn:hover {
  background-color: pink;
  color: black;
}
.alert {
  padding: 0 10px;
}
.alert-success {
  color: black;
}
.alert-error {
  color: #ff2121;
}

@font-face {
  font-family: "NaftaLight-Regular";
  src: url("../fonts/NaftaLight-Regular.ttf");
}

.nav {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  font-family: "NaftaLight-Regular";
  font-size: 32px;
}

.link {
  text-decoration-line: none;
  color: black;
  padding: 0 2rem;
}

.link:hover {
  color: white;
  background-color: black;
  border-radius: 50px;
}

img {
  margin-top: 5rem;
  height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
