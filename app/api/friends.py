# from flask import Blueprint, session, request
# from app.models import User, db, friends
# from app.forms import FriendsForm
# from flask_login import current_user
# #import user from flask login
# friend_routes = Blueprint('friends', __name__)

# @friend_routes.route('/<int:id>')
# def friend(id):
#    friends = User.friends.friendId.query.filter(User.id == id).all()
#    return {"friends": [friend.to_dict for friend in friends]}

# # @friend_routes.route('/<')
