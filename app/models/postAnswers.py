from .db import db

posts_answers = db.Table(
    "usersServers",
    db.Column(
        "postId",
        db.Integer,
        db.ForeignKey("posts.id"),
        primary_key=True
    ),
    db.Column(
        "answerId",
        db.Integer,
        db.ForeignKey("answers.id"),
        primary_key=True
    )
)
