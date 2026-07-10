import UserCard from "./UserCard";

function UserList({ userLists, onUserClick }) {
  return userLists.map((user) => (
    <UserCard key={user.id} user={user} onUserClick={onUserClick}></UserCard>
  ));
}

export default UserList;
