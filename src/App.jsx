import Footer from "./components/Footer";
import Header from "./components/Header";
import Heading from "./components/Heading";
import PieChartsContainer from "./components/PieChartsContainer";
import ReactFlowDiagram from "./components/ReactFlowDiagram";
import Sidebar from "./components/Sidebar";
import useLatestData from "./hooks/useLatestData";

function App() {
  const { environmentData, gridData, solarData, loading, error } =
    useLatestData();
  console.log(environmentData, gridData, solarData);
  return (
    <main
      className="container-fluid d-grid"
      style={{
        height: "100vh",
        gridTemplateRows: ".75fr 3.25fr 1.5fr",
        gap: "5px",
      }}
    >
      {/* Header Section */}
      <Header />
      {/* Main Content Section */}
      <div
        className="d-grid"
        style={{
          gridTemplateColumns: "9fr 4fr",
          gap: "7px",
        }}
      >
        {/* Left Content(Main) */}
        <div
          className="d-grid border border-2 border-secondary rounded"
          style={{
            gridTemplateRows: "1fr 12fr",
            gap: "2px",
            // boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            backgroundColor: "rgba(209, 248, 253, 1)",
          }}
        >
          {/* Left Content Heading */}
          <Heading title="Source - Generation - Consumption" />
          {/* Pie Chart and React Flow Container */}
          <div
            className=" d-grid"
            style={{
              gridTemplateColumns: "4.5fr 7.5fr",
            }}
          >
            {/* Pie Charts Container */}
            <PieChartsContainer />
            {/* React Flow Diagram */}
            <div className="">
              <ReactFlowDiagram />
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
        <Sidebar />
      </div>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}

export default App;
