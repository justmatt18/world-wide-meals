<template>
  <div id="app">
    <b-navbar toggleable="lg" class="cyan-bg" id="nav" type="dark">
      <b-container>
      <b-navbar-brand to="/" class="brand-name">
        <img class="brand-logo" src="./assets/icon.png" alt="Brand Logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="px-md-2" to="/">Home</b-nav-item>
            <b-nav-item class="px-md-2" to="/category">Category</b-nav-item>
            <b-nav-item class="px-md-2" to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
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
      height: 13vh;
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
</style>
