import profilePic from './assets/profile.jpeg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Phyo T. Oo</h2>
            <p className="card-text">I make Youtube videos and play video games.</p>
        </div>
    )
}

export default Card