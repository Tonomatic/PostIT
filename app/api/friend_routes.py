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

# @friend_routes.route('/<')
