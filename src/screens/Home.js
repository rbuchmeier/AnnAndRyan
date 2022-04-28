import Main from "../components/Main";
import butte from "../Butte.jpg";

function Home() {
  return (
    <div className="App-body">
      <img style={{width:"100%", marginTop:"20px"}} src={butte} alt="Butte" />
      <Main></Main>
    </div>
  )
}

export default Home;