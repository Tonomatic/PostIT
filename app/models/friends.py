from .db import db

friends = db.Table(
    "friends",
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("friendId", db.Integer, db.ForeignKey("users.id"))
)
