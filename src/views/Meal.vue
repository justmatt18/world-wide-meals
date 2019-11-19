<template>
  <div class="meal-view">
    <div class="warning text-center" v-if="apiError">
      <p>Error in meal API</p>
    </div>
    
    <b-container>
      <b-row align-h="center" class="py-5">
        <b-col sm="4" class="image-col">
          <p class="meal-name">{{ meal.strMeal }}</p>
          <img fluid :src="meal.strMealThumb" alt="Meal Image">
        </b-col>
        <b-col sm="8">
          <b-row align-h="center">
            <b-col sm="3">
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'meal',
  data () {
    return {
      // get api by name
      mealApi: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      apiError: false,
      meal: {},
      ingredients: [],
      ingredient: {
        name: '',
        measure: ''
      }
    }
  },
  computed: {
    getApi () {
      return this.mealApi + this.$route.params.name
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
        this.meal = data.meals[0]
      } catch (err) {
        this.apiError = true
        console.log(`Error in meal api: ${err}`)
      }
    }
  }
}
</script>

<style lang="scss">
.image-col {
  p {
    font-size: 25px;
  }
  img {
    width: 95%;
  }
}
</style>
