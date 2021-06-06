from app.models import db, User
from faker import Faker
import random
faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_friends():

    friend1 = User.query.get(1)
    friend2 = User.query.get(2)
    friend3 = User.query.get(3)
    friend4 = User.query.get(4)

    friend1.friends.append(friend2)
    friend4.friends.append(friend3)
    friend2.friends.append(friend1)
    friend3.friends.append(friend4)
    friend1.friends.append(friend3)
    friend1.friends.append(friend4)

    db.session.add(friend1)
    db.session.add(friend4)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_friends():
    db.session.execute('TRUNCATE friends RESTART IDENTITY CASCADE;')
    db.session.commit()
