<script setup>
import HelloWorld from "./components/Home.vue";
</script>

<template>
  <head>
  <!-- ... other head elements -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
  <div id="app">
    <!-- Navigation Panel -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img
            src="https://hondensteps.nl/wp-content/uploads/Review-logo.png"
            alt="Site Logo"
            class="me-2"
            style="max-height: 30px"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <a href="/categories" class="nav-link">Categories</a>
            </li>
            <li class="nav-item">
              <a href="/top-reviews" class="nav-link">Top Reviews</a>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- serve file -->
    <router-view />

    <!-- Footer -->
    <footer class="footer py-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">&copy; 2024 Review Site. All rights reserved @StreetCoder.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a
                  href="https://github.com/KevinStreetCoder"
                  target="_blank"
                  class="text-white1"
                >
                  <i class="fab fa-github fa-lg"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="tagram.com/i_help_student_in_coding_assg/"
                  target="_blank"
                  class="text-white1"
                >
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://twitter.com/Street_coderKe"
                  target="_blank"
                  class="text-white1"
                >
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2px;
  background-image: radial-gradient(circle at 99% 33%, hsla(235, 0%, 48%, 0.03) 0%, hsla(235, 0%, 48%, 0.03) 37%, transparent 37%, transparent 100%),
radial-gradient(circle at 46% 16%, hsla(235, 0%, 48%, 0.03) 0%, hsla(235, 0%, 48%, 0.03) 43%, transparent 43%, transparent 100%),
radial-gradient(circle at 99% 25%, hsla(235, 0%, 48%, 0.03) 0%, hsla(235, 0%, 48%, 0.03) 22%, transparent 22%, transparent 100%),
radial-gradient(circle at 57% 88%, hsla(235, 0%, 48%, 0.03) 0%, hsla(235, 0%, 48%, 0.03) 86%, transparent 86%, transparent 100%),
radial-gradient(circle at 82% 78%, hsla(235, 0%, 48%, 0.03) 0%, hsla(235, 0%, 48%, 0.03) 22%, transparent 22%, transparent 100%),
linear-gradient(387deg, rgb(0, 0, 0), rgb(0, 0, 0));
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  align-items: center;
}
</style>

./components/Home.vue
