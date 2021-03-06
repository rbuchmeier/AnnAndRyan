import butte from "../Butte.jpg";
import Section from "../components/Section";

function Home() {
  return (
    <div className="App-body">
      <img style={{width:"100%", marginTop:"20px"}} src={butte} alt="Butte" />
      <Section title="We are getting married!!">
        <h3>Welcome to our Wedding Website!</h3>
        <div className="Text-body">
          <p>We will be married on Memorial Day, May 30, 2022 at a small private ceremony in northern Wyoming. We wanted a small wedding, and we also wanted to celebrate with as many of our friends and family as would like to join us! So to compromise, we planned a private wedding followed by two receptions: a wedding celebration in Lander, WY on July 10, 2022, and a smaller, informal reception in the Chattanooga area, TN on October 9, 2022. The Lander one is the main event, and we added the Chattanooga one as an option to make travel easier for our eastern friends and family. RSVP to either one, or both! We can’t wait to hang out with you.</p>
        </div>
      </Section>
    </div>
  )
}

export default Home;
