from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class AnswerForm(FlaskForm):
    content = StringField('Answer', validators=[DataRequired()])
