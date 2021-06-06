from .db import db

friends = db.Table(
    "friends",
    db.Column("userId", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("friendId", db.Integer, db.ForeignKey("users.id"), primary_key=True)
)
