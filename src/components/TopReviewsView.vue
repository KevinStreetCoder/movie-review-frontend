<template>
    <div class="app dark-theme">
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
        <!-- Search Functionality -->
        <div class="search-container">
            <div class="search-box">
                <input type="text"
                       placeholder="Search products..."
                       v-model="searchQuery" />
                <button class="search-btn" @click="filterPosts()">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>

        <h1>Top Movie Reviews</h1>

        <!-- Post List -->
        <div class="product-list">
            <div v-for="(post, index) in filteredPosts"
                 :key="post.id"
                 class="product-card"
                 @click="viewReview(post)">
                <div class="product-image">
                    <img :src="post.imageUrl" alt="Post Image" />
                </div>
                <div class="product-details">
                    <h2>{{ post.title }}</h2>
                    <p><strong>Category:</strong> {{ post.category }}</p>
                    <div class="review-stars">
                        <strong>Rating: </strong>
                        <span v-for="star in Math.round(post.rating)"
                              :key="star"
                              class="filled">&#9733;</span>
                        <span v-for="star in 5 - Math.round(post.rating)"
                              :key="`empty-${star}`"
                              class="empty">&#9733;</span>
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
    import api from "./api";

    export default {
        data() {
            return {
                posts: [],
                searchQuery: "",
                filteredPosts: [],
            };
        },
        created() {
            this.fetchTopReviews();
        },
        methods: {
            async fetchTopReviews() {
                try {
                    const response = await api.getPosts();
                    if (Array.isArray(response.data)) {
                        const topReviews = await Promise.all(
                            response.data
                                .filter((post) => post.acf.rating >= 4)
                                .sort((a, b) => b.acf.rating - a.acf.rating)
                                .map(async (post) => ({
                                    id: post.id,
                                    title: post.title.rendered,
                                    imageUrl: post.featured_media
                                        ? await this.getImageUrl(post.featured_media)
                                        : "https://via.placeholder.com/150",
                                    category: (await this.getCategories(post.categories))[0] || "Uncategorized",
                                    rating: post.acf.rating || 0,
                                    reviewId: post.id,
                                }))
                        );
                        this.posts = topReviews;
                        this.filterPosts();
                    } else {
                        console.error("Unexpected response data format:", response.data);
                        // Handle the error condition appropriately
                    }
                } catch (error) {
                    console.error("Error fetching posts:", error);
                }
            },
            async getImageUrl(featuredMediaId) {
                try {
                    const response = await api.getMedia(featuredMediaId);
                    return response.data.source_url;
                } catch (error) {
                    console.error("Error fetching featured media:", error);
                    return "https://via.placeholder.com/150";
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
                    console.error("Error fetching categories:", error);
                    return ["Uncategorized"];
                }
            },
            viewReview(post) {
                this.$router.push(`/review/${post.id}`);
            },
            filterPosts() {
                if (this.searchQuery === "") {
                    this.filteredPosts = [...this.posts];
                } else {
                    this.filteredPosts = this.posts.filter(
                        (post) =>
                            post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            post.category.toLowerCase().includes(this.searchQuery.toLowerCase())
                    );
                }
            },
        },
    };
</script>

<style scoped>
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

    .logo img {
        height: 40px;
        margin: 20px;
    }

    .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
    }

        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
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

    /* Search Functionality */
    .search-container {
        margin-top: auto;
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .search-box {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 20px;
        padding: 5px 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

        .search-box input {
            border: none;
            outline: none;
            font-size: 16px;
            padding: 8px;
            flex: 1;
        }

    .search-btn {
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

        .search-btn:hover {
            background-color: #555;
        }

        .search-btn i {
            font-size: 18px;
        }

    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
    }

    .product-card {
        width: 300px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.3s ease;
    }

        .product-card:hover {
            transform: translateY(-5px);
        }

    .product-image {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
    }

        .product-image img {
            width: 100%;
            height: auto;
        }

    .product-details {
        padding: 20px;
    }

        .product-details h2 {
            margin-top: 0;
            font-size: 1.5rem;
        }

    .review-stars {
        color: #ffc107;
    }

        .review-stars span {
            font-size: 1.2rem;
        }

        .review-stars .filled {
            color: #ffcd39;
        }

        .review-stars .empty {
            color: #e0e0e0; /* Gray color for empty stars */
        }
</style>
