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
            <div className="col-8 bg-warning">
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
