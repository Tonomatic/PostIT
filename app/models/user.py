from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .friends import friends

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  #reference for data going out
  answer = db.relationship("Answer", back_populates="user")
  post = db.relationship("Post", back_populates="user")

  #many to many relationship
  friends = db.relationship(
    "User",
    secondary=friends,
    primaryjoin=(friends.c.userId == id),
    secondaryjoin=(friends.c.friendId == id),
    # backref=db.backref("friend", lazy="dynamic"),
    lazy="dynamic"
  )


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict2(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
    }

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "friends": [f.to_dict2() for f in self.friends]
    }
