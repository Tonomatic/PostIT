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

# Primary Components
<!--  -->
## User Authorization
User authorization is handled in Python using werkzeug security for password hashing. These hashed passwords are saved to the database instead of the plain-text passwords. Upon login, the password that a user enters is rehashed and checked against the hashed password in the database to verify credentials.

<!-- ![sign-in](https://user-images.githubusercontent.com/74742629/114245089-bc97b800-995d-11eb-9903-05bbeb7e4ba3.png) -->

## Home Page
![Home](https://user-images.githubusercontent.com/74742629/130113387-53fa340d-0a7c-4960-9c8f-89e874ecfb29.png)

### The users homepage is filled with their friends posts, where they can leave an answer, edit an answer, or delete the post from their feed. 

## User 
![Friends1](https://user-images.githubusercontent.com/74742629/130114006-2ca87cfe-b1db-4209-9c1a-de1498b8298c.png)
![Friends2](https://user-images.githubusercontent.com/74742629/130114115-1789431f-8f96-4493-a258-903ac830d9a3.png)

### A user has a friends page, that allows that user to add/delete friends from their friend's list.

## Posts
![Posts](https://user-images.githubusercontent.com/74742629/130114225-8aece4d5-f920-47a8-9328-43122621043f.png)
![Posts2](https://user-images.githubusercontent.com/74742629/130114278-969f99b2-1ff4-4640-ba5d-bcbe35d7f0f4.png)

### A user is able to check on the posts they've made, as well as create a new post from the Navigation bar.

#### Answers
![Answers](https://user-images.githubusercontent.com/74742629/130113902-b153b4cb-a251-4ba6-89c2-193f3b705484.png)

## Users are able to post answers on specific question posts. They're also able to check any answers to any posts on the answers tab. 




