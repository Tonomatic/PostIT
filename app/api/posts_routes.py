from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import User, Post, db, friends
from app.forms import PostForm

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/<int:id>')
def posts(id):
    posts = Post.query.filter(Post.userId == id).all()
    return {"posts": [post.to_dict() for post in posts]}

##This will create a post(question)
# @posts_routes
# def createPosts(id):
#     form =

@posts_routes.route('/home')
def friendsPosts():
    # posts = Post.query.all()
    '''
    GOING TO GET ALL POSTS FOR NOW, LATER TRY TO
    MAKE IT SO IT FILTERS BY THE FRIEND RELATIONSHIP
    BEING TRUE
    '''
    posts = Post.query.all()
    # friends = current_user.friends
    # return {"posts": [user.to_dict() for user in friends]}
    return {"posts": [post.to_dict() for post in posts]}

@posts_routes.route('<int:id>', methods=['POST'])
def makePost(id):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.data['userId'] = id

    if form.validate_on_submit():
        post = Post(
            content = form.data['content'],
            userId = id
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return



@posts_routes.route('<int:id>', methods=['DELETE'])
def deletePost(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return {'message': 'Post Has Been Deleted!'}

'''
Gets all the answers from a specific post.
Can be used to query on the 'Answers' tab
'''
@posts_routes.route('<int:id>')
def answerToPost(id):
    #if it doesn't work try using answerId
    posts = Post.answers.query.filter(Post.userId == id).all()
    return {"posts": [post.to_dict() for post in posts]}
