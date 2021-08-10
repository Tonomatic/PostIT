from app.models import db, Answer
from faker import Faker
import random
from ..data import answers

faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_answer():
    y = answers()
    answer1 = Answer(content="The answer is 4", userId=1)
    answer2 = Answer(content="The answer is probably 5", userId=1)
    answer3 = Answer(content="The answer is probably 10", userId=1)
    answer4 = Answer(content="The answer is of course 20", userId=2)
    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    # for i in range(5, 20):
    #     another = Answer(content=faker.word(), userId=i)
    #     db.session.add(another)
    for i in range(5, len(y)):
        another = Answer(content=y[i], userId=random.randrange(1, 30))
        db.session.add(another)

    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_answer():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
