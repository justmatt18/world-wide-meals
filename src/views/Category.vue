<template>
  <div class="category">
    <Search />
    <b-container><div class="separator"></div></b-container>
    <h2 class="py-5">Meal <span class="meal-text">Categories</span></h2>
  </div>
</template>

<script>
import Search from '@/components/Category/Search'

export default {
  name: 'category',
  components: {
    Search
  }
}
</script>
