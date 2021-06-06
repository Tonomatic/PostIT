from flask import Blueprint, session, request
from app.models import User, db, friends
from app.forms import FriendsForm
from flask_login import current_user
#import user from flask login
friend_routes = Blueprint('friends', __name__)

@friend_routes.route('/<int:id>')
def friend(id):
   ## May want ot use current_user
   # so friends = current_user.friends for easier time
   friends = current_user.friends
   # friends = User.friends.friendId.query.filter(User.id == id).all()
   return {"friends": [user.to_dict() for user in friends]}

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
