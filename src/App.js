import "./App.css";
import ChatGPTIntegration from "./chatgpt";
import bgImage from "./assets/images/bgImg.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <ChatGPTIntegration />
    </div>
  );
}

export default App;
