<template>
  <div class="home">
    <div class="home-section mb-md-5 mb-sm-0">
      <b-container>
        <b-row class="section-content" align-self="center" align-v="center">
          <b-col class="content py-5">
            <h1><span>Delicious Cuisines</span></h1>
            <h1 class="text-uppercase text-light">Discover the Menu</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <RandomMeal />
    <div class="pb-cols-2 pb-sm-2 pb-md-5"></div>
    <b-row class="newsletter-section newsletter">
      <b-col sm="12">
        <div class="content">
          <h2 class="text-light">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Enter your email">
            <span class="input-group-btn">
              <button class="btn" type="submit">Subscribe Now</button>
            </span>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="page-content py-5">
      <b-container>
        <b-row class="pb-5">
          <b-col sm="6" md="6">
            <img class="page-content-img py-sm-2" src="../assets/Home/food-img4.jpeg" alt="some-image-content">
          </b-col>
          <b-col sm="6">
            <h3 class="text-uppercase pb-3"><span>Always Fresh Ingredients</span></h3>
            <p class="text-justify page-content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit quibusdam nemo eligendi, odit possimus reiciendis aspernatur a culpa magnam aperiam voluptatum suscipit, voluptates dolorem. Doloribus possimus maxime nam dolorum qui debitis ullam vero explicabo, ab incidunt voluptas autem temporibus, tenetur ad nobis, fugiat quae alias nostrum at. Accusantium esse natus aperiam, incidunt nostrum odio non? Nemo sed dolorem, culpa architecto aspernatur doloremque ratione vero sequi fuga consectetur dolores blanditiis voluptas voluptatibus accusamus magnam itaque fugit quod nam voluptatem numquam placeat corrupti. Quas, laudantium optio! Veniam quibusdam laudantium natus facere vitae in beatae ducimus, quasi tempora officia, perspiciatis illo ullam.</p>
          </b-col>
        </b-row>
        <b-row class="pb-5">
          <b-col sm="6" md="6" order-md="1">
            <h3 class="text-uppercase pb-3"><span>Special Recipes</span></h3>
            <p class="text-justify page-content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit quibusdam nemo eligendi, odit possimus reiciendis aspernatur a culpa magnam aperiam voluptatum suscipit, voluptates dolorem. Doloribus possimus maxime nam dolorum qui debitis ullam vero explicabo, ab incidunt voluptas autem temporibus, tenetur ad nobis, fugiat quae alias nostrum at. Accusantium esse natus aperiam, incidunt nostrum odio non? Nemo sed dolorem, culpa architecto aspernatur doloremque ratione vero sequi fuga consectetur dolores blanditiis voluptas voluptatibus accusamus magnam itaque fugit quod nam voluptatem numquam placeat corrupti. Quas, laudantium optio! Veniam quibusdam laudantium natus facere vitae in beatae ducimus, quasi tempora officia, perspiciatis illo ullam.</p>
          </b-col>
          <b-col sm="6" order-md="2">
            <img class="page-content-img" src="../assets/Home/food-img2.jpeg" alt="some-image-content">
          </b-col>
        </b-row>
      </b-container>
    </div>
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
      searchInput: '',
      categories: {},
      api: {
        category: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      }
    }
  },
  mounted () {
    this.categoryApi()
  },
  methods: {
    async categoryApi () {
      try {
        let res = await fetch(this.api.category)
        let data = await res.json()
        this.categories = data.meals
      } catch (err) {
        console.log(`Error from category API: ${err}`)
      }
    }
  }
}
</script>

<style lang="scss">
.home-section {
  height: 90vh;
  background: linear-gradient(to right bottom, rgba(126, 213, 111, .8),
  rgba(40, 80, 111, .8)),
  url("../assets/Home/bg-img.jpeg") center / cover no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
}

.section-content {
  padding: 20% 1%;
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

.newsletter {
  padding: 80px 0;
  background:
    linear-gradient(
      to right bottom,
      rgba(126, 213, 111, .8),
      rgba(103, 58, 183, .8)
    ),
    url("../assets/Home/bg-img.jpeg") center / cover no-repeat;
  .content {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;

    .form-control {
      height: 50px;
      border-color: #ffffff;
      border-radius:0;

      &focus {
        box-shadow: none;
        border: 2px solid #19beda;
      }
    }

    .btn {
      min-height: 50px;
      border-radius:0;
      background: #243c4f;
      color: #fff;
      font-weight:600;

      &hover {
        color: #19beda;
      }
    }
  }

  h2 {
    color: #243c4f;
    margin-bottom: 40px;
  }

}

.page-content {
  .page-content-img {
    max-width: 100%;
    height: auto;
    display: block;
    background-size: cover;
  }

  .page-content-text {
    color: #777777;
  }
}
</style>
