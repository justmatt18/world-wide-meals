<template>
  <div class="meal-view">
    <div class="warning" v-if="apiError">
      <p>Error in meal API</p>
    </div>
    <h1>Meal Name: {{ $route.params.name }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // get api by name
      mealApi: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      // api: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.$router.params.name,
      apiError: false,
      meal: {}
    }
  },
  mounted () {
    this.getMeal()
  },
  methods: {
    async getMeal () {
      try {
        const api = this.mealApi + this.$route.params.name
        let res = await fetch(api)
        let data = await res.json()
        console.log(data.meals[0])
        this.meal = data.meals[0]
      } catch (err) {
        this.apiError = true
        console.log(`Error in meal api: ${err}`)
      }
    }
  }
}
</script>
