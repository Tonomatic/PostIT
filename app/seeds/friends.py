from app.models import db, Friend, User
from faker import Faker
import random
faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_friends():

    friend1 = Friend(userId=1, username= 'James')
    friend2 = Friend(userId=1, username= 'Zach')
    friend3 = Friend(userId=1, username= 'Tony')
    friend4 = Friend(userId=2, username= 'Tony')
    friend5 = Friend(userId=2, username= 'Steve')

    for i in range(3, 13):
        another = Friend(userId=i, username= faker.name())
        db.session.add(another)

    db.session.add(friend1)
    db.session.add(friend2)
    db.session.add(friend3)
    db.session.add(friend4)
    db.session.add(friend5)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_friends():
    db.session.execute('TRUNCATE friends RESTART IDENTITY CASCADE;')
    db.session.commit()
