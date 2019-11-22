<template>
  <b-container>
    <div class="random-meal pb-3">
      <h3 class="bordered-bottom pb-4">Random <span class="text-light-green">Meals</span></h3>
    </div>
    <b-row align-h="center">
      <b-col class="p-4 col-meals" sm="3" v-for="meal in meals" :key="meal.idMeal">
        <router-link :to="`/meals/${meal.strMeal}`">
          <img fluid :src="meal.strMealThumb" alt="Random Meal Image">
        </router-link>
        <p class="pt-2">{{ meal.strMeal }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      randomMealApi: 'https://www.themealdb.com/api/json/v1/1/random.php',
      meals: []
    }
  },
  mounted () {
    this.getRandonMeals()
  },
  methods: {
    async getRandonMeals () {
      try {
        let mealCount = this.meals.length
        while (mealCount !== 12) {
          let res = await fetch(this.randomMealApi)
          let data = await res.json()
          // Check for duplicates
          let isExist = !!this.meals.find(meal => JSON.stringify(meal) === JSON.stringify(data.meals[0]))
          if (!isExist) {
            this.meals.push(data.meals[0])
            mealCount = this.meals.length
          }
        }
      } catch (err) {
        console.log(`Error from random meals API: ${err}`)
      }
    }
  }
}
</script>

<style lang="scss">
.bordered-bottom {
  border-bottom: 5px solid;
  border-bottom-color: #3f51b5;
}
.text-light-green {
  color: #8bc34a;
}
.col-meals p {
  font-size: 18px;
}
.col-meals img {
  height: 220px;
  width: auto;
  vertical-align: middle;
  border: 0;
  cursor: pointer;
}
</style>
