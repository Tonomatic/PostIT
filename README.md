# GoodMovies

![GoodMovieDetailPage](https://user-images.githubusercontent.com/74742629/114240701-efd64900-9955-11eb-8caa-d01c9d3706be.png)


## Summary

[PostIt](https://gopostit.herokuapp.com/) is a single-page web application created using React Js, Python, and a PostgresSQL DataBase. PostIt allows users to:

* Create an account
* Log in / Log out
* Friend Users
* Un-Friend Users
* Create/Edit/Delete Posts
* Answer your Friend's Posts
* Find Answers to your Posts
* See a Feed filled with your Friend's Posts

## Overall Structure

#### Database Schema
![DatabaseSchema](./planning/db-schema.png)
#### Back end
The application was built using Javascript with a postgreSQL database and PUG templating. Backend structure is RESTful and all data requests use AJAX and are fullfilled with a mixture of a JSON API and PUG rendering.

#### Front end 
The front end is built using PUG templates, CSS, and DOM maninuplation. Vanilla JS was used where possible to minimize page reloading.


#### Libraries

Good Reads uses:
- express
  - express session
  - express validator
- sequelize
- bcrypt
- pug

## Primary Components

#### User Authorization
User authorization is handled in JavaScript using BCrypt for password hashing. These hashed passwords are saved to the database instead of the plain-text passwords. Upon login, the password that a user enters is rehashed and checked against the hashed password in the database to verify credentials.

![sign-in](https://user-images.githubusercontent.com/74742629/114245089-bc97b800-995d-11eb-9903-05bbeb7e4ba3.png)


#### CsrfAuth
GoodMovies uses Csrf Authentication to allow users to sign in. 

#### User 
![user-profile](https://user-images.githubusercontent.com/74742629/114245017-9540eb00-995d-11eb-9f6a-6aabbdf91620.png)

The users accounts have a right side full of movie lists, 2 of which are permanent. These lists can be created as well as edited, and are used to store any movies you want. 



#### Home Page
![home-page](https://user-images.githubusercontent.com/74742629/114245120-d0dbb500-995d-11eb-8a98-c7880a17342e.png)

The homepage Highlights 20 movies, which are laid out in a row of recently added and highest rated.

#### Movies
![movies](https://user-images.githubusercontent.com/74742629/114244841-3b402580-995d-11eb-9f68-fdf835644e18.png)

The movies page, allows users to browse through a wide selection of over 900 movies, arranged by sets of 50.
The search feature allows users to look up certain movies based on keywords and lists them all out.


# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit
