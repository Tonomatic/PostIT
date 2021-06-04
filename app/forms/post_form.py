from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post, User


class PostForm(FlaskForm):
    content = StringField('Question', validators=[DataRequired()])
