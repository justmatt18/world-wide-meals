<template>
  <div class="home">
    <div class="header-section mb-5">
      <b-container fluid>
        <b-row class="banner-section py-5" align-v="center" align-h="center">
          <b-col sm="4">
            <p class="banner-title">Food Matters</p>
            <p class="banner-content">"There is no love sincerer than the love of food."</p>
          </b-col>
          <b-col sm="8" class="pl-5 d-sm-none d-md-block">
            <img class="meal-banner" fluid src="../assets/meal.png" alt="Meal Banner">
          </b-col>
        </b-row>
      </b-container>
    </div>
    <RandomMeal />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomMeal from '@/components/Home/RandomMeal'

export default {
  name: 'home',
  components: {
    RandomMeal
  },
  data () {
    return {
      imgSrc: '@/assets/header.jpeg',
      searchInput: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.header-section {
  line-height: 1.6;
  color: #f8f8f8;
  height: 75vh;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: #8bc34a;
}
.banner-title {
  font-size: 7vh;
  font-weight: bolder;
}
.banner-content {
  font-size: 4vh;
  font-weight: 400;
}
.meal-banner {
  max-height: 350px;
  width: 100%;
}
</style>
