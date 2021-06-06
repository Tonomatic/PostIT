from flask_wtf import FlaskForm
from wtforms import IntegerField

class FriendsForm(FlaskForm):
    friendId = IntegerField('friendId')
