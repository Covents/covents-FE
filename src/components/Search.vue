<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="search-input"
      type="text"
      v-model="keyword"
      placeholder="search events..."
    />
    <button class="search-btn">
      <img
        class="search-icon"
        src="../../public/search.png"
        alt="search button"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let keyword = this.keyword;
      this.$emit("submit-search", keyword);
      this.keyword = "";
    },
  },
};
</script>

<style scoped>
.search-btn {
  background: #ef476f;
  border: 1px solid rgb(243, 88, 125);
  border-radius: 0 10px 10px 0;
  height: 35px;
  width: 35px;
  padding: 2px;
  cursor: pointer;
}

.search-icon {
  height: 25px;
  width: 25px;
  border: none;
}

form {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 10px;
  border: 1px solid #118ab2;
  border-radius: 10px;
  width: 100%;
  padding: 15px 8px;
}

.search-input {
  font-family: "Roboto Condensed", sans-serif;
  font-style: italic;
  border: none;
  font-size: 16px;
  border-radius: 10px 0 0 10px;
  height: 35px;
  padding: 0px 10px;
  width: 70%;
  color: #ef476f;
}

input::placeholder {
  color: #ef476f;
}
</style>
