from .db import db
from werkzeug.security import generate_password_hash, check_password_hash

class Friend(db.Model):
  __tablename__ = 'friends'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  username = db.Column(db.Text(), nullable = False)

  #references for data going out
  user = db.relationship("User", back_populates="friend")


  def to_dict(self):
      return {
          "id": self.id,
          "userId": self.userId,
          "usernames": self.usernames,
      }
