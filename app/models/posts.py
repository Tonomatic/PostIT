from .db import db
from .postAnswers import posts_answers

class Post(db.Model):
  __tablename__ = 'posts'

  id = db.Column(db.Integer, primary_key = True)
  content = db.Column(db.Text(), nullable = False)
  userId = db.Column(db.String(40), db.ForeignKey("users.id"), nullable = False)

  #references for data going out
  user = db.relationship("User", back_populates="post")

  #many to many relationship

  answers = db.relationship(
        "Answer",
        secondary=posts_answers,
        back_populates="posts"
  )


  def to_dict(self):
      return {
          "id": self.id,
          "content": self.content,
          "userId": self.userId,
      }
