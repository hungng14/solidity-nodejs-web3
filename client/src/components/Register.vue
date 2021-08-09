<template>
  <div class="hello">
    <form @submit="onRegister">
      <input type="text" placeholder="name" v-model="name" />
      <input type="email" placeholder="email" v-model="email" />
      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

async function onRegister(event) {
  event.preventDefault();
  if (this.$data.hasMetamask) {
    try {
      const self = this;
      const accts = await accounts();
      const result = await http.post("http://localhost:8888/register", {
        email: self.$data.email,
        name: self.$data.name,
        address: accts[0],
      });
      console.log(result);
      alert("Register succesfully");
    } catch (error) {
      alert("Error occurred");
      console.error(error);
    }
  } else {
    alert("Please install metamask extension");
  }
}

const accounts = async () => {
  const list = await window.ethereum.request({ method: "eth_requestAccounts" });
  return list;
};

export default {
  name: "Register",
  props: {},
  data() {
    return {
      email: "",
      name: "",
      hasMetamask: window.ethereum !== "undefined",
    };
  },
  methods: {
    onRegister,
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 300px;
  gap: 10px;
  place-content: center;
}
</style>
