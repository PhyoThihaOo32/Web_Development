function UserCard({ user }) {
  return (
    <div>
      {user.name} {user.email}
    </div>
  );
}

export default UserCard;
