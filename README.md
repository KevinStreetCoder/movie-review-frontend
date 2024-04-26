# Movie Review Site

This is a movie review site built with Vue.js as the frontend framework and WordPress as the headless CMS. The site allows users to browse and read reviews of various movies, as well as search for specific reviews.

## Live Demo: 
 https://movie-review-frontend-eight.vercel.app/

## Features

- **Browse Movie Reviews**: Users can browse through a list of movie reviews, which are fetched from the WordPress API.

  ![Browse Movie Reviews](./images/home.png)

- **View Review Details**: Each movie review card provides a brief overview, including the movie title, category, rating, and a thumbnail image. Users can click on a review card to view the full review details.
 
   ![Review Details](./images/movie_detail2.png)
   ![Review Details](./images/movie_details.png)

- **Search Functionality**: Users can search for specific movie reviews by entering keywords in the search box. The search results will display reviews that match the title or category.

  ![Search Functionality](./images/search.png)

- **Top Reviews**: User can see the top reviewed movies.

   ![Top Reviews](./images/topview.png)

- **Movies Categories**: User can browse through the movies list, which are categorized according to movies category.
   ![Top Reviews](./images/category31.png)
   ![Top Reviews](./images/category1.png)
   ![Top Reviews](./images/category2.png)

- **About Page**: An "About" page provides information about the review site, its mission, and the team behind it.

  ![About Page](./images/about.png)

- **Responsive Design**: The site is designed to be responsive and provides an optimal viewing experience across different devices and screen sizes.

## Tech Stack

**Frontend**:
- Vue.js: A progressive JavaScript framework for building user interfaces.
- Bootstrap: A popular CSS framework used for styling and responsive layout.

**Backend**:
- WordPress: A flexible and powerful content management system (CMS) used as a headless CMS to store and manage movie review data.
- WordPress REST API: Provides a RESTful API for accessing and manipulating WordPress content.

## Installation

1. Clone the repository: git clone https://github.com/CodestarJt35/Movie-Review-Site-Frontend
2. Navigate to the project directory: cd movie-review-site
3. Install dependencies: npm install
4. Configure the WordPress API endpoint in `src/api.js`.
5. Start the development server: npm run serve

6. Open your browser and visit `http://localhost:8080` to see the movie review site in action.

