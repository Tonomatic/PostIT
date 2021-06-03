from flask.cli import AppGroup
from .users import seed_users, undo_users
from .answers import seed_answer, undo_answer
from .posts import seed_posts, undo_posts
from .postsAnswers import seed_postans, undo_postans
from .friends import seed_friends, undo_friends

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_answer()
    seed_friends()
    seed_posts()
    seed_postans()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_answer()
    undo_friends()
    undo_posts()
    undo_postans()
    # Add other undo functions here
