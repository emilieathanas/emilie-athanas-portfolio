export default function AboutMe() {
  return (
    <div>
     
        <div className = "aboutme-container">
          <div className = "aboutme-border">
            <h2>About Me</h2>
          </div>
            <div className = "aboutmecontent-container">
              <h6 className = "myheader">My Life!</h6>
              <p className = "mytext">Hey there, my name is Emilie. I grew up in River Vale, New Jersey and attended Pascack Valley High School. While enrolled there, I discovered my passion for computer science after I took an honors course in Computer Science. I proceeded to take AP Computer Science while starting research outside the classroom. My hopes for the future are to build innovate projects with my knowledge of code.</p>
              <br></br>
              <hr />
              <br></br>
              <h6 className = "myheader">My Goals!</h6>
              <p className = "mytext">I am currently a freshman attending North Carolina State University! I am a Computer  Science major, with the intent of focusing on either software engineering, web development, or cybersecurity. There are many things I am hoping to achieve in my career in computer science. </p>
              <br></br>
              <p className = "mytext">Every day, I work towards being a better coder than I was the day before. I have taken several online coding courses for JavaScript, HTML, CSS, and Python. I will continue to pursue personal projects while I take on college computer science courses.</p>
              <img src = "/images/senior-portrait.jpg" className = "portrait"></img>
            </div>
        </div>
    </div>
  );
}