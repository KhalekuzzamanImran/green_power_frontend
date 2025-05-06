import "./App.css";
import PieChart from "./components/PieChart";
import PieChartsContainer from "./components/PieChartsContainer";
import ReactFlowDiagram from "./components/ReactFlowDiagram";

function App() {
  return (
    <main
      className="bg-secondary container-xxl d-grid"
      style={{
        height: "100vh",
        gap: "5px",
        gridTemplateRows: "1fr 3fr 1.5fr",
      }}
    >
      {/* Header Section */}
      <div className="bg-warning">Header</div>

      {/* Content Section */}
      <div
        className="bg-primary"
        style={{
          display: "grid",
          gridTemplateColumns: "7fr 3fr",
          gap: "7px",
        }}
      >
        {/* Left Column: Contains Pie Charts and React Flow */}
        <div
          className="bg-danger d-grid"
          style={{
            gridTemplateRows: "1fr 9fr",
            gap: "0px",
          }}
        >
          {/* Left Column Heading */}
          <div className="bg-warning">
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
          <div
            className="bg-primary d-grid"
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
                gap: "5px",
              }}
            >
              {/* Row 1: Pie Chart Legends and Pie Chart */}
              <div
                className="d-grid"
                style={{
                  gridTemplateColumns: "3fr 7fr",
                  gap: "7px",
                }}
              >
                <div className="bg-primary">Pie Charts Legends</div>
                <div className="bg-light">Pie Chart 1</div>
              </div>

              {/* Row 2: Two Pie Charts */}
              <div
                className="d-grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "7px",
                }}
              >
                <div className="bg-light">Pie Chart 3</div>
                <div className="bg-primary">Pie Chart 4</div>
              </div>
            </div>

            {/* React Flow Section */}
            <div className="bg-warning">React Flow Diagram</div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div
          className="bg-warning d-grid"
          style={{
            gridTemplateRows: "1fr 9fr",
            gap: "5px",
          }}
        >
          {/* Sidebar Heading */}
          <div className="bg-danger">
            <h1
              className="text-center border border-2 rounded text-light fs-6 p-1"
              style={{
                backgroundColor: "#007a92",
                letterSpacing: "2px",
                height: "30px",
              }}
            >
              Solar System Supplimentary Info
            </h1>
          </div>
          <div className="bg-success"></div>
        </div>
      </div>

      {/* Footer Section: Split into two equal columns */}
      <div
        className="bg-success d-grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "7px",
        }}
      >
        {/* Bar Chart */}
        <div
          className="bg-warning d-grid"
          style={{
            gridTemplateRows: "1fr 6fr",
          }}
        >
          {/* Bar Chart Heading */}
          <div className="bg-danger">
            <h1
              className="text-center border border-2 rounded text-light fs-6"
              style={{
                backgroundColor: "#007a92",
                letterSpacing: "2px",
                padding: "2px 0px",
              }}
            >
              Solar Generation Curve
            </h1>
          </div>
          <div className="bg-primary"></div>
        </div>
        {/* Area Chart */}
        <div
          className="bg-danger d-grid"
          style={{
            gridTemplateRows: "1fr 6fr",
          }}
        >
          {/* Area Chart Heading */}
          <div className="bg-warning">
            <h1
              className="text-center border border-2 rounded text-light fs-6"
              style={{
                backgroundColor: "#007a92",
                letterSpacing: "2px",
                padding: "2px 0px",
              }}
            >
              Solar Generation Curve
            </h1>
          </div>
          <div className="bg-light"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
