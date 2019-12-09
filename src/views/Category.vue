<template>
  <div class="category">
    <div class="category-banner mb-md-5 mb-sm-0">
      <b-container>
        <b-row class="section-content" align-self="center" align-v="center">
          <b-col class="content py-5">
            <h1><span>Categories</span></h1>
            <h1 class="text-uppercase text-light">Meals Around the World</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Search />
    <b-container><div class="separator"></div></b-container>
    <h2 class="pt-5 pt-sm-0">Meal <span class="meal-text">Categories</span></h2>
    <div class="pt-2">
      <b-button-group class="py-2">
        <b-button variant="success">Beef</b-button>
        <b-button variant="info">Breakfast</b-button>
        <b-button variant="warning">Chicken</b-button>
        <b-button variant="success">Dessert</b-button>
        <b-button variant="info">Goat</b-button>
        <b-button variant="warning">Lamb</b-button>
        <b-button variant="success">Miscellaneous</b-button>
        <b-button variant="info">Pasta</b-button>
        <b-button variant="warning">Pork</b-button>
        <b-button variant="success">Seafood</b-button>
        <b-button variant="info">Side</b-button>
        <b-button variant="warning">Starter</b-button>
        <b-button variant="success">Vegan</b-button>
        <b-button variant="info">Vegetarian</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Category/Search'

export default {
  name: 'category',
  components: {
    Search
  },
  data () {
    return {
      api: {
        category: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      },
      categories: []
    }
  }
}
</script>

<style lang="scss" scoped>
.category-banner {
  height: 90vh;
  background: linear-gradient(to right bottom, rgba(255, 185, 0, .8),
  rgba(255, 119, 48, .8)),
  url("../assets/Category/category-bg.jpeg") center / cover no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}
</style>
