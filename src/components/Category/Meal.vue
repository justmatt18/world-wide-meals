<template>
  <div class="random-meals">
    <b-container>
      <div class="separator mt-5"></div>
      <h2 class="py-5">Latest <span class="meal-text">Meals</span></h2>
      <b-row align-h="center">
        <b-col class="p-4 col-category" sm="6" md="4" v-for="category in categories" :key="category.idCategory">
          <img :src="category.strCategoryThumb" alt="Image Category">
          <p class="pt-2">{{ category.strCategory }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: {},
      api: {
        listOfCategories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        randomMeals: 'https://www.themealdb.com/api/json/v1/1/random.php'
      }
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      let res = await fetch(this.api)
      let data = await res.json()
      this.categories = data.categories
    }
  }
}
</script>

<style lang="scss">
  .random-meals {
    height: 550px;
  }
  .separator {
    border-top: 3px solid;
    border-top-color: #2c3e50;
  }
  .meal-text {
    color: #42b983;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
  }
  .col-category:hover {
    cursor: pointer;
  }
</style>
