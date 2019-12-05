<template>
  <div id="app">
    <b-navbar toggleable="lg" id="nav" type="dark">
      <b-container>
      <b-navbar-brand to="/" class="brand-name">
        <img class="brand-logo" src="./assets/icon.png" alt="Brand Logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="px-md-3" to="/">Home</b-nav-item>
            <b-nav-item class="px-md-3" to="/category">Category</b-nav-item>
            <b-nav-item class="px-md-3" to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
    
    <!-- Footer -->
<footer class="page-footer light-green-bg font-small unique-color-dark">

  <div style="background-color: #6351ce;">
    <div class="container">

      <!-- Grid row-->
      <div class="row py-4 d-flex align-items-center">

        <!-- Grid column -->
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0">Get connected with us on social networks!</h6>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="social-networks col-md-6 col-lg-7 text-center text-md-right">

          <!-- Facebook -->
          <a class="fb-ic" href="#">
            <i class="fa fa-facebook white-text mr-4"> </i>
          </a>
          <!-- Twitter -->
          <a class="tw-ic" href="#">
            <i class="fa fa-twitter white-text mr-4"> </i>
          </a>
          <!-- Google +-->
          <a class="gplus-ic" href="#">
            <i class="fa fa-google-plus white-text mr-4"> </i>
          </a>
          <!--Linkedin -->
          <a class="li-ic" href="#">
            <i class="fa fa-linkedin white-text mr-4"> </i>
          </a>
          <!--Instagram-->
          <a class="ins-ic" href="#">
            <i class="fa fa-instagram white-text"> </i>
          </a>

        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row-->

    </div>
  </div>

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">

    <!-- Grid row -->
    <div class="row mt-3">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <!-- Content -->
        <h6 class="text-uppercase font-weight-bold">World Wide Meals</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>The website offers a simple but elegant way of showing different meals around the world. It consist of 24 countries cusine such as Canadian, Japanese, Indian, Italian and many more.</p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="technologies col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Technologies</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <a href="https://vuejs.org/">Vue JS</a>
        </p>
        <p>
          <a href="https://www.themealdb.com/">MealDB API</a>
        </p>
        <p>
          <a href="https://router.vuejs.org/">Vuex - Vue Router</a>
        </p>
        <p>
          <a href="https://bootstrap-vue.js.org/">Bootstrap Vue</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="useful-links col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <a href="https://github.com/justmatt18">My Github</a>
        </p>
        <p>
          <a href="https://svelte.dev/">Svelte JS</a>
        </p>
        <p>
          <a href="https://vuejs.org">Vue JS</a>
        </p>
        <p>
          <a href="https://justmatt18.github.io/">Porfolio</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="contact col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="deep-purple accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <i class="fa fa-home mr-3"></i> Davao City, Philippines</p>
        <p>
          <i class="fa fa-envelope mr-3"></i> marcomat4@gmail.com</p>
        <p>
          <i class="fa fa-phone mr-3"></i> + 63 918 230 8008</p>
        <p>
          <i class="fa fa-print mr-3"></i> + 63 918 230 8008</p>

      </div>
      <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="/"> WorldWideMeals</a>
    </div>
    <!-- Copyright -->

  </footer>
<!-- Footer -->
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Roboto+Mono&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
#nav {
  font-family: 'Roboto Mono', monospace;
  background: transparent;
  padding: 15px;
  background-color: #8bc34a;

  .brand-name {
    font-size: 38px;
    color: #42b983;
    .brand-logo {
      height: 10vh;
      width: auto;
    }
  }

  a {
    font-size: 18px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
.page-footer {
  color: #ffffff;
}
.light-green-bg {
  background-color: #689f38;
}
.footer-copyright {
  background-color: #33691e;

  .text-gray {
    color: #e0e0e0;
  }
  
  a {
    color: #ffffff;
  }
}
.technologies, .useful-links, .contact {
  a {
    text-decoration: none;
    color: inherit;

  }
  a:hover {
    color: #673ab7;
    text-decoration: none;
  }
}
.social-networks, .footer-copyright {
  a {
    text-decoration: none;
    color: inherit;

  }
  a:hover {
    color: #689f38;
    text-decoration: none;
  }
}
</style>
