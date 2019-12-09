<template>
  <div class="about">
    <div class="about-banner mb-md-5 mb-sm-0">
      <b-container>
        <b-row class="section-content" align-self="center" align-v="center">
          <b-col class="content py-5">
            <h1><span>Our Story</span></h1>
            <h1 class="text-uppercase text-light">Love for Food</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgLink: '../assets/About/minion.jpeg'
    }
  }
}
</script>

<style lang="scss">
.about-banner {
  height: 90vh;
  background: linear-gradient(to right bottom, rgba(41, 152, 255, .8),
  rgba(86, 67, 250, .8)),
  url("../assets/About/bg-image.jpeg") center / cover no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
}
</style>
