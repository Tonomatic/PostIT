from flask import Blueprint, session, request
from app.models import User, db, friends
from app.forms import FriendsForm
from flask_login import current_user
#import user from flask login
friend_routes = Blueprint('friends', __name__)

@friend_routes.route('/')
def friend():
   ## May want ot use current_user
   # so friends = current_user.friends for easier time
   friends = current_user.friends
   # friends = User.friends.friendId.query.filter(User.id == id).all()
   return {"friends": [user.to_dict() for user in friends]}


'''
ADDS A FRIEND RELATIONSHIP. RIGHT NOW, THERE'S AN ISSUE
WHERE A FRIEND CAN ADD THE SAME USER MULTIPLE TIMES.
'''
@friend_routes.route('/', methods=["POST"])
def addFriend():
   form = FriendsForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   form.data['userId'] = current_user.id
   user = User.query.get(current_user.id)

   if form.validate_on_submit():
      friend = User.query.get(form.data['friendId'])
      user.friends.append(friend)
      db.session.add(user)
      db.session.commit()
      return friend.to_dict()
   return

@friend_routes.route('/<int:id>', methods=['DELETE'])
def deleteFriend(id):
   user = User.query.get(current_user.id)
   friend = User.query.get(id)
   user.friends.remove(friend)
   # db.session.delete(user.friends[friend])

   db.session.commit()
   return {'message': 'Friend has been unfollow'}
