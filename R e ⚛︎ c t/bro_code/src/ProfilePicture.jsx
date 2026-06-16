function ProfilePicture() {
  const imageUrl = "./src/assets/profile.jpeg";
  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt="profile picture" />
  );
}

export default ProfilePicture;
