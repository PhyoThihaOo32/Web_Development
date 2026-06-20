function UserCard(props) {
  return (
    <div id={props.user.id}>
      {props.user.name} {props.user.email}
    </div>
  );
}

export default UserCard;
