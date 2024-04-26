<template>
    <div class="app">
        <!-- Navigation Panel -->
        <!--<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand d-flex align-items-center">
                    <img src="https://hondensteps.nl/wp-content/uploads/Review-logo.png"
                         alt="Site Logo"
                         class="me-2"
                         style="max-height: 30px" />
                </router-link>
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
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
        </nav>-->

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card product-card">
                        <div class="product-image">
                            <img :src="product.imageUrl"
                                 :alt="product.name"
                                 class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">{{ product.name }}</h2>
                            <p class="card-text">
                                <strong>Category: </strong> {{ product.categories.join(", ") }}
                            </p>
                            <div class="rating">
                                <strong>Rating: </strong>
                                <span v-for="star in Math.round(product.rating)"
                                      :key="star"
                                      class="filled">&#9733;</span>
                                <span v-for="star in 5 - Math.round(product.rating)"
                                      :key="`empty-${star}`"
                                      class="empty">&#9733;</span>
                            </div>
                            <hr />
                            <h4><strong>Review</strong></h4>
                            <div class="review-content" v-html="product.content"></div>
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn btn-primary" @click="goBack">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <!--<footer class="footer">
            <p>&copy; 2024 Review Site. All rights reserved.</p>
        </footer>-->
    </div>
</template>
<script>
    import api from './api';

    export default {
        data() {
            return {
                product: {}
            };
        },
        created() {
            // Fetch review details based on review ID
            const reviewId = this.$route.params.id;
            // Fetch review details from WordPress API
            this.fetchReviewDetails(reviewId);
        },
        methods: {
            async fetchReviewDetails(reviewId) {
                try {
                    const response = await api.getPost(reviewId);
                    const post = response.data;

                    this.product = {
                        name: post.title.rendered,
                        imageUrl: post.featured_media
                            ? await this.getImageUrl(post.featured_media)
                            : 'https://via.placeholder.com/150',
                        categories: await this.getCategories(post.categories),
                        rating: post.acf.rating || 0,
                        content: post.content.rendered
                    };
                } catch (error) {
                    console.error('Error fetching review details:', error);
                }
            },
            async getImageUrl(featuredMediaId) {
                try {
                    const response = await api.getMedia(featuredMediaId);
                    return response.data.source_url;
                } catch (error) {
                    console.error('Error fetching featured media:', error);
                    return 'https://via.placeholder.com/150';
                }
            },
            async getCategories(categoryIds) {
                try {
                    const categoryPromises = categoryIds.map(async (categoryId) => {
                        const response = await api.getCategory(categoryId);
                        return response.data.name;
                    });
                    const categories = await Promise.all(categoryPromises);
                    return categories;
                } catch (error) {
                    console.error('Error fetching categories:', error);
                    return ['Uncategorized'];
                }
            },
            goBack() {
                this.$router.push('/');
            }
        }
    };
</script>

<style scoped>
    .product-card {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        padding: 20px;
    }

    .product-image {
        max-width: 100%;
        height: 80%;
        overflow: hidden;
        object-fit: contain;
    }

    .rating {
        color: #ffc107;
    }

        .rating .filled {
            color: #ffc107;
        }

        .rating .empty {
            color: #e0e0e0;
        }

    .review-content > > > * {
        margin-top: 0;
    }

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .container-fluid {
        padding: 0;
    }

    .container {
        flex: 1;
        padding: 50px 0;
    }

    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: #fff;
        padding: 10px 0;
    }

    .nav-links {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

        .nav-links li {
            margin-left: 20px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

    .navbar-brand img {
        height: 30px;
        margin-right: 10px;
    }

    .footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
        margin-top: 20px;
    }

    .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
    }

        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }
</style>
