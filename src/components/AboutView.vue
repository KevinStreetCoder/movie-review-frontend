<template>
    <div class="app">
        <!-- Navigation Panel -->
        <!--<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
                  <a href="#" class="nav-link">Top Reviews</a>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>-->

        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title mb-4 text-center">About Our Movie Review Site</h1>
                            <p class="card-text mb-4">
                                Welcome to our review site, where we provide honest and unbiased
                                reviews of various movies. Our team of experts
                                carefully evaluates each item, considering factors such as
                                quality, performance, and value for money.
                            </p>
                            <p class="card-text mb-4">
                                Our mission is to help you make informed decisions by providing
                                comprehensive and detailed reviews. We strive to offer a
                                trustworthy platform where you can find reliable information and
                                recommendations.
                            </p>
                            <h3 class="mb-3">Our Process</h3>
                            <p class="card-text mb-4">
                                Our review process involves rigorous testing and evaluation by
                                our team of experts. We thoroughly examine each product or
                                service, taking into account various aspects such as design,
                                functionality, durability, and user experience. We also consider
                                customer feedback and industry standards to ensure our reviews
                                are well-rounded and objective.
                            </p>
                            <h3 class="mb-3">Our Team</h3>
                            <p class="card-text mb-4">
                                Our team consists of passionate individuals with diverse
                                backgrounds and expertise in various fields. We have product
                                specialists, tech enthusiasts, lifestyle gurus, and industry
                                veterans who bring a wealth of knowledge and experience to the
                                table. Together, we strive to provide you with the most accurate
                                and insightful reviews possible.
                            </p>
                            <div class="text-center">
                                <router-link to="/" class="btn btn-primary">Back to Home</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <!--<footer class="footer bg-dark py-3">
          <div class="container-fluid">
            <p class="text-center text-white mb-0">
              &copy; 2024 Review Site. All rights reserved.
            </p>
          </div>
        </footer>-->
    </div>
</template>

<script>
    export default {
        name: "AboutView",
    };
</script>

<style scoped>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .card {
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-title {
        font-size: 2rem;
        font-weight: bold;
    }

    .card-text {
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .btn-primary {
        background-color: #333;
        border-color: #333;
    }

        .btn-primary:hover {
            background-color: #555;
            border-color: #555;
        }

    .footer {
        margin-top: auto;
    }
</style>
