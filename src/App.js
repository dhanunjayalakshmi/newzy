import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App w-full h-screen flex flex-col font-sans overflow-hidden bg-white">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
