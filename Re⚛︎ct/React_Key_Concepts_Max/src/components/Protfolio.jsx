import cat from "./../assets/cat.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Personal Portfolio</h1>
      <img src={cat} alt="cat" />
      <h2>About Me</h2>
      <p>
        Hello! My name is Whiskers. I am a professional napper, expert mouse
        chaser, and part-time keyboard assistant.
      </p>

      <div className="skills">
        <h2 className="skills-header">My Skills</h2>
        <ul>
          <li>Sleeping in sunny places</li>
          <li>Climbing furniture</li>
          <li>Catching toy mice</li>
          <li>Knocking objects off tables</li>
          <li>Waking humans up at 5:00 AM</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">Cardboard Box Explorer</h3>
        <p>
          Tested different cardboard boxes to find the most comfortable one.
        </p>
      </div>

      <div className="project">
        <h3 className="project-title">Automatic Human Alarm</h3>
        <p>
          Developed a reliable system for waking my human whenever I need food.
        </p>
      </div>

      <div className="project">
        <h3 className="project-title">Laser Pointer Tracker</h3>
        <p>
          Practiced advanced speed, focus, and jumping techniques while chasing
          the mysterious red dot.
        </p>
      </div>

      <h2 className="contact">Contact Me</h2>
      <p>Email: whiskers@example.com</p>
    </div>
  );
}

export default Portfolio;
