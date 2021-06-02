from .db import db
from .postAnswers import posts_answers

class Answer(db.Model):
  __tablename__ = 'answers'

  id = db.Column(db.Integer, primary_key = True)
  content = db.Column(db.String(40), nullable = False)
  userId = db.Column(db.String(40), db.ForeignKey("users.id"), nullable = False)

  #data coming in
  user = db.relationship("User", back_populates="answer")

  #many to many relationship

  posts = db.relationship(
        "Post",
        secondary=posts_answers,
        back_populates="answers"
  )

  def to_dict(self):
      return {
          "id": self.id,
          "content": self.content,
          "userId": self.userId,
      }
