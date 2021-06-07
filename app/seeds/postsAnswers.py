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
    answer3 = Answer.query.get(3)
    answer4 = Answer.query.get(4)
    answer5 = Answer.query.get(5)
    answer6 = Answer.query.get(6)
    answer7 = Answer.query.get(7)

    post1 = Post.query.get(1)
    post2 = Post.query.get(2)
    post6 = Post.query.get(6)
    post8 = Post.query.get(8)


    answer1.posts.append(post1)
    answer2.posts.append(post1)
    answer3.posts.append(post1)
    answer7.posts.append(post6)
    answer5.posts.append(post8)
    answer4.posts.append(post8)
    answer6.posts.append(post2)

    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.add(answer6)
    db.session.add(answer7)


    db.session.commit()

def undo_postans():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
