from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Answer, Post, db
from app.forms import AnswerForm

answers_routes = Blueprint('answers', __name__)


'''
Gets all the answers from a specific user.
So a user's answers to any question
'''
@answers_routes.route('/')
def answers():
    #this will take an id and find the user that is posting this answer
    #Need to figure out how what post's Id to post it too
    answers = Answer.query.filter(Answer.userId == current_user.id).all()
    return {"answers": [answer.to_dict() for answer in answers]}




@answers_routes.route('/<int:id>', methods=['POST'])
def makeAnswer(id):
    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.data['userId'] = current_user.id

    if form.validate_on_submit():
        answer = Answer(
            content = form.data['content'],
            userId = current_user.id,
        )
        post = Post.query.get(id)
        answer.posts.append(post)
        db.session.add(answer)
        db.session.commit()
        return answer.to_dict()
    return "this did not work"
