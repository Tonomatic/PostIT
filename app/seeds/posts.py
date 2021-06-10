from app.models import db, Post
from faker import Faker
import random

faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_posts():

    question1 = Post(content="What is 2+2?", userId=1)
    question2 = Post(content="What is 10+10?", userId=1)
    question3 = Post(content="What is the powerhouse of the cell?", userId=2)
    question4 = Post(content="What is 20 * 5?", userId=1)
    question5 = Post(content="What does a CRUD app do?", userId=3)


    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)

    for i in range(5, 25):
        another = Post(content=faker.text() + "?", userId=i)
        db.session.add(another)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
