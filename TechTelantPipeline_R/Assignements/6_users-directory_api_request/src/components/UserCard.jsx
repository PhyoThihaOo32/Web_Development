function UserCard({ user, onUserClick }) {
  return (
    <div id={user.id} onClick={() => onUserClick(user.id)}>
      {user.name} {user.email}
    </div>
  );
}

export default UserCard;
