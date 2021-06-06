from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import User, Answer, Post, db
from app.forms import AnswerForm

answers_routes = Blueprint('answers', __name__)


'''
Gets all the answers from a specific user.
So a user's answers to any question
'''
@answers_routes.route('/<int:id>')
def answers(id):
    #this will take an id and find the user that is posting this answer
    #Need to figure out how what post's Id to post it too
    answers = Answer.query.filter(Answer.userId == id).all()
    return {"answers": [answer.to_dict() for answer in answers]}


@answers_routes.route('/<int:id>', methods=['POST'])
def makeAnswer(id):
    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.data['userId'] = id
    form.data['postId'] = 1

    if form.validate_on_submit():
        answer = Answer(
            content = form.data['content'],
            userId = id,
            postId = 1
        )
        db.session.add(answer)
        db.session.commit()
        return answer.to_dict()
    return "this did not work"
    

# May not need this. Query in posts routes prob can do it
# '''
# Gets all the answers from a specific post.
# Can be used to query on the 'Answers' tab
# '''
# @answers_routes.route('/<int:id>')
# def answersToPost(id):
#     answers = Answer.query.filter(Answer)