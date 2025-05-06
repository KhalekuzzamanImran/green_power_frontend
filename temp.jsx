import "./App.css";
import PieChartsContainer from "./components/PieChartsContainer";
import ReactFlowDiagram from "./components/ReactFlowDiagram";

function App() {
  return (
    <div className="bg-secondary container-md h-100">
      <div className="row" style={{ height: "55vh" }}>
        <div className="bg-danger col-8">
          <div className="row" style={{ height: "8%" }}>
            <h1
              className="text-center border border-2 rounded text-light fs-6 p-1"
              style={{
                backgroundColor: "#007a92",
                letterSpacing: "2px",
                height: "30px",
              }}
            >
              Source - Generation - Consumption
            </h1>
          </div>

          <div className="row" style={{ height: "92%" }}>
            <div className="col-4 bg-primary">
              <PieChartsContainer />
            </div>
            <div
              className="col-8 h-100 border-start border-secondary border-2"
              style={{ backgroundColor: "#d1f8fd" }}
            >
              <ReactFlowDiagram />
            </div>
          </div>
        </div>
        <div className="bg-primary col-4"></div>
      </div>
    </div>
  );
}

export default App;



<div
          className="bg-danger d-grid"
          style={{
            gridTemplateColumns: "5fr 7fr",
            gap: "0px",
          }}
        >
          {/* Pie Charts Section: Contains 2 rows with two columns in each */}
          <div
            className="bg-success d-grid"
            style={{
              gridTemplateRows: "1fr 1fr",
              gap: "10px",
            }}
          >
            {/* Row 1: Pie Chart Legends and Pie Chart */}
            <div
              className="d-grid"
              style={{
                gridTemplateColumns: "3fr 7fr",
                gap: "10px",
              }}
            >
              <div className="bg-primary">Pie Charts Legends</div>
              <div className="bg-danger">Pie Chart 2</div>
            </div>

            {/* Row 2: Two Pie Charts */}
            <div
              className="d-grid"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div className="bg-danger">Pie Chart 3</div>
              <div className="bg-primary">Pie Chart 4</div>
            </div>
          </div>

          {/* React Flow Section */}
          <div className="bg-secondary">React Flow Diagram</div>
        </div>
