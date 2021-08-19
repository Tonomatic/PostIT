# PostIt

![image](https://user-images.githubusercontent.com/74742629/130109401-dc08c884-f8be-45fb-9618-35bf0ddc9633.png)

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
![image](https://user-images.githubusercontent.com/74742629/130112693-fc1e9dcb-fdde-4a38-895b-dce7299e0898.png)
<!-- #### Back end -->
The application was built using Python with a postgreSQL database and React.JS Front-End. Backend structure is RESTful and all data requests are handled through SQLAlchemy and are fullfilled with FLask.

#### Front end 
The front end is built using a React Libray, Redux Store and syled with regular CSS.

## Primary Components
<!--  -->
#### User Authorization
User authorization is handled in Python using werkzeug security for password hashing. These hashed passwords are saved to the database instead of the plain-text passwords. Upon login, the password that a user enters is rehashed and checked against the hashed password in the database to verify credentials.

<!-- ![sign-in](https://user-images.githubusercontent.com/74742629/114245089-bc97b800-995d-11eb-9903-05bbeb7e4ba3.png) -->

#### Home Page
<!-- ![home-page](https://user-images.githubusercontent.com/74742629/114245120-d0dbb500-995d-11eb-8a98-c7880a17342e.png) -->

The homepage Highlights 20 movies, which are laid out in a row of recently added and highest rated.

#### User 
<!-- ![user-profile](https://user-images.githubusercontent.com/74742629/114245017-9540eb00-995d-11eb-9f6a-6aabbdf91620.png) -->

The users homepage is filled with their friends posts, where they can leave an answer, edit an answer, or delete the post from their feed. 

#### Posts



#### Answers
<!-- ![movies](https://user-images.githubusercontent.com/74742629/114244841-3b402580-995d-11eb-9f68-fdf835644e18.png) -->

The movies page, allows users to browse through a wide selection of over 900 movies, arranged by sets of 50.
The search feature allows users to look up certain movies based on keywords and lists them all out.




