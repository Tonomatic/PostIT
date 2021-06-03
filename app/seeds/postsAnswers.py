from app.models import db, Answer, Post
from faker import Faker
import random

faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_postans():

    # answer1 = Answer(content="The answer is probably pi", userId=1)
    # answer2 = Answer(content="The answer is probably 5", userId=1)
    # answer3 = Answer(content="The answer is probably 10", userId=1)
    # answer4 = Answer(content="The answer is of course 20", userId=2)
    answer1 = Answer.query.get(1)
    answer2 = Answer.query.get(2)
    post1 = Post.query.get(1)

    answer1.posts.append(post1)
    answer2.posts.append(post1)

    db.session.add(answer1)
    db.session.add(answer2)


    db.session.commit()

def undo_postans():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
