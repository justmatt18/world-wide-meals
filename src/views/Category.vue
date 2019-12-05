<template>
  <div class="category">
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
