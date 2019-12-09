<template>
  <div class="meal-view">
    <div class="warning text-center" v-if="apiError">
      <p>Error in meal API</p>
    </div>
    <b-container>
      <b-row align-h="center" class="py-5">
        <b-col sm="4" class="image-col">
          <p class="meal-name pb-3">{{ meal.strMeal }}</p>
          <img class="mb-5" fluid :src="meal.strMealThumb" alt="Meal Image">
        </b-col>
        <b-col sm="8">
          <p class="text-ingredients">Ingredients</p>
          <b-row>
            <b-col class="ingredients" sm="3" v-for="ingredient in ingredients" :key="ingredient.id">
              <img class="ingredient-img py-3" :src="ingredient.image">
              <p>{{ ingredient.measure }} {{ ingredient.name }}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="youtube-embed-section text-center">
        <h6>You can also watch it the demo <strong>here</strong> on how to make this {{ meal.strMeal }}</h6>
        <youtube :video-id="getSrc" player-width="100%" player-height="550" :player-vars="{autoplay: 0}"></youtube>
      </div>
      <div class="instructions-section text-center">
        <p class="instruction-heading pt-5">Instructions</p>
        <p class="text-justify"><span v-html="meal.strInstructions"></span></p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
export default {
  name: 'meal',
  data () {
    return {
      api: {
        ingredientImage: 'https://www.themealdb.com/images/ingredients/',
        meal: 'https://www.themealdb.com/api/json/v1/1/search.php?s='
      },
      apiError: false,
      meal: {},
      ingredients: []
    }
  },
  computed: {
    getApi () {
      return this.meal + this.$route.params.name
    },
    getSrc () {
      return getIdFromURL(this.meal.strYoutube)
    }
  },
  mounted () {
    this.getMeal()
  },
  methods: {
    async getMeal () {
      try {
        const api = this.api.meal + this.$route.params.name
        let res = await fetch(api)
        let data = await res.json()
        this.meal = data.meals[0]
        for (let index = 0; index < 20; index++) {
          let num = index + 1
          let ingredientName = this.meal[`strIngredient${num}`]
          let amount = this.meal[`strMeasure${num}`]
          if (ingredientName) {
            let img = this.api.ingredientImage + ingredientName + '.png'
            const item = { id: num, name: ingredientName, measure: amount, image: img }
            this.ingredients.push(item)
          }
        }
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
  img {
    width: 100%;
    height: auto;
  }
}
.meal-name, .text-ingredients, .instruction-heading {
  font-size: 25px;
}
.ingredient-img {
  height: 170px;
  width: auto;
}
.pre-formatted {
  white-space: pre-line;
}
</style>
