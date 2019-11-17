<template>
  <div class="search-section">
     <b-row align-h="center" class="search-form py-lg-3">
      <b-col md="5">
        <b-form class="py-3" @submit.prevent="onSearch">
          <b-form-input
            id="search-food"
            v-model="search"
            type="text"
            placeholder="Search for food..."
          ></b-form-input>
        </b-form>
      </b-col>
    </b-row>
    <b-row align-h="center" class="meal-stats">
      <b-col cols="3" md="2">
        <span><img src="../../assets/Home/images.png" alt=""> Countries: {{ areaList.length }}</span>
      </b-col>
      <b-col cols="3" md="2">
        <span><img src="../../assets/Home/ingredients-icon.png" alt=""> Ingredients: {{ ingredientsList.length }}</span>
      </b-col>
      <b-col cols="3" md="2">
        <span><img src="../../assets/Home/meal-icon6.png" alt=""> Categories: {{ categoryList.length }}</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      areaList: {},
      ingredientsList: {},
      categoryList: {},
      search: '',
      api: {
        area: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
        ingredients: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
        category: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      },
      statsIcon: {
        countries: '../../assets/Home/meal-icon6.png',
        ingredients: '../../assets/Home/ingredients-icon.png',
        category: '../../assets/Home/images.png'
      }
    }
  },
  mounted () {
    this.areaApi()
    this.ingredientsApi()
    this.categoryApi()
  },
  methods: {
    async areaApi () {
      try {
        let res = await fetch(this.api.area)
        let data = await res.json()
        this.areaList = data.meals
      } catch (err) {
        console.log(`Error from area API: ${err}`)
      }
    },
    async ingredientsApi () {
      try {
        let res = await fetch(this.api.ingredients)
        let data = await res.json()
        this.ingredientsList = data.meals
      } catch (err) {
        console.log(`Error from ingredients API: ${err}`)
      }
    },
    async categoryApi () {
      try {
        let res = await fetch(this.api.category)
        let data = await res.json()
        this.categoryList = data.meals
      } catch (err) {
        console.log(`Error from category API: ${err}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-section {
  height: 150px;
}
#search-food:focus {
  border-color: #42b983;
  box-shadow: #2c3e50;
  -webkit-box-shadow: none;
}
.meal-stats {
  span {
    margin-left: 10px;
  }
  img {
    vertical-align: middle;
  }
  span {
    font-size: 14px;
  }
}
</style>
