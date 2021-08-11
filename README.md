# PostIt

<!-- ![GoodMovieDetailPage](https://user-images.githubusercontent.com/74742629/114240701-efd64900-9955-11eb-8caa-d01c9d3706be.png) -->


## Summary

[PostIt](https://gopostit.herokuapp.com/login) is a single-page web application using Python, Flask, PostgreSQL and React/Redux. PostIt allows users to

* Create an account
* Log in / Log out
* Create Friend links between other users
* Delete Friend from your friends list
* Create/Post Questions
* Delete Questions
* Leave answers to Friends Questions
* Delete Answers posted to Questions

## Overall Structure

#### Database Schema
<!-- ![DatabaseSchema](./planning/db-schema.png) -->
<!-- #### Back end -->
The application was built using Javascript with a postgreSQL database and PUG templating. Backend structure is RESTful and all data requests use AJAX and are fullfilled with a mixture of a JSON API and PUG rendering.

#### Front end 
The front end is built using PUG templates, CSS, and DOM maninuplation. Vanilla JS was used where possible to minimize page reloading.

<!--  -->
#### Libraries

Good Reads uses:
- express
  - express session
  - express validator
<!-- - sequelize -->
- bcrypt
- pug

## Primary Components
<!--  -->
#### User Authorization
User authorization is handled in JavaScript using BCrypt for password hashing. These hashed passwords are saved to the database instead of the plain-text passwords. Upon login, the password that a user enters is rehashed and checked against the hashed password in the database to verify credentials.

<!-- ![sign-in](https://user-images.githubusercontent.com/74742629/114245089-bc97b800-995d-11eb-9903-05bbeb7e4ba3.png) -->


#### CsrfAuth
PostIt uses Csrf Authentication to allow users to sign in. 

#### User 
<!-- ![user-profile](https://user-images.githubusercontent.com/74742629/114245017-9540eb00-995d-11eb-9f6a-6aabbdf91620.png) -->

The users accounts have a right side full of movie lists, 2 of which are permanent. These lists can be created as well as edited, and are used to store any movies you want. 



#### Home Page
<!-- ![home-page](https://user-images.githubusercontent.com/74742629/114245120-d0dbb500-995d-11eb-8a98-c7880a17342e.png) -->

The homepage Highlights 20 movies, which are laid out in a row of recently added and highest rated.

#### Movies
<!-- ![movies](https://user-images.githubusercontent.com/74742629/114244841-3b402580-995d-11eb-9f68-fdf835644e18.png) -->

The movies page, allows users to browse through a wide selection of over 900 movies, arranged by sets of 50.
The search feature allows users to look up certain movies based on keywords and lists them all out.




