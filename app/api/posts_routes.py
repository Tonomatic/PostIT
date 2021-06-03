from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Post

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/<int:id>')
def posts(id):
    posts = Post.query.filter(Post.userId == id).all()
    return {"posts": [post.to_dict() for post in posts]}

##This will create a post(question)
# @posts_routes
# def createPosts(id):
#     form =
