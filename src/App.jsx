import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import Legends from "./components/Legends";
import PieChart from "./components/PieChart";
import ReactFlowDiagram from "./components/ReactFlowDiagram";

function App() {
  return (
    <main
      className="bg-secondary container-xl d-grid"
      style={{
        height: "100vh",
        gridTemplateRows: "1fr 3fr 1.5fr",
        gap: "5px",
      }}
    >
      {/* Header Section */}
      <div
        className="bg-primary d-grid"
        style={{
          gridTemplateColumns: "2fr 6fr 2fr",
          gap: "10px",
        }}
      >
        <div className="bg-light"></div>
        <div className="bg-warning"></div>
        <div className="bg-danger"></div>
      </div>
      {/* Main Content Section */}
      <div
        className="bg-danger d-grid"
        style={{
          gridTemplateColumns: "7fr 3fr",
          gap: "7px",
        }}
      >
        {/* Left Content(Main) */}
        <div
          className="bg-primary d-grid"
          style={{
            gridTemplateRows: "1fr 10fr",
            gap: "3px",
          }}
        >
          {/* Left Content Heading */}
          <div
            className="#007a92 text-center border border-2 rounded text-light fs-6"
            style={{
              backgroundColor: "#007a92",
              letterSpacing: "2px",
              padding: "1px 0px",
            }}
          >
            Source - Generation - Consumption
          </div>
          {/* Pie Chart and React Flow Container */}
          <div
            className="bg-danger d-grid"
            style={{
              gridTemplateColumns: "5fr 7fr",
            }}
          >
            {/* Pie Charts Container */}
            <div
              className="bg-warning d-grid"
              style={{
                grieTemplateRows: "1fr 1fr",
                gap: "3px",
              }}
            >
              {/* Pie Charts Row 1 */}
              <div
                className="bg-danger d-grid"
                style={{
                  gridTemplateColumns: "3fr 7fr",
                  gap: "3px",
                }}
              >
                {/* Pie Charts Legend */}
                <div className="bg-primary">
                  <Legends />
                </div>
                <div className="bg-secondary">
                  <PieChart title="Daily" />
                  <h6
                    className="text-center fw-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    Daily
                  </h6>
                </div>
              </div>
              {/* Pie Charts Row 2 */}
              <div
                className="bg-danger d-grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3px",
                }}
              >
                {/* Pie Chart 2 */}
                <div className="bg-primary">
                  <PieChart title="Current Month Cumulative" />
                  <h6
                    className="text-center fw-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    Current Month Cumulative
                  </h6>
                </div>
                {/* Pie Chart 3 */}
                <div className="bg-light">
                  <PieChart title="Till Date Cumulative fw-semibold" />
                  <h6 className="text-center" style={{ fontSize: "14px" }}>
                    Till Date Cumulative
                  </h6>
                </div>
              </div>
            </div>
            {/* React Flow Diagram */}
            <div className="bg-light">
              <ReactFlowDiagram />
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
        <div
          className="bg-warning d-grid"
          style={{
            gridTemplateRows: "1fr 10fr",
            gap: "3px",
          }}
        >
          {/* Sidebar Heading */}
          <div
            className="#007a92 text-center border border-2 rounded text-light fs-6"
            style={{
              backgroundColor: "#007a92",
              letterSpacing: "2px",
              padding: "1px 0px",
            }}
          >
            Solar System Supplimentary Info
          </div>
          {/* Sidebar Content */}
          <div
            className="bg-success d-grid"
            style={{
              gridTemplateRows: "1fr 1fr 2fr",
              gap: "5px",
            }}
          >
            {/* Supplimentary Info */}
            <div
              className="bg-danger d-grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "3px",
              }}
            >
              <div className="bg-primary"></div>
              <div className="bg-warning"></div>
              <div className="bg-danger"></div>
            </div>
            {/* Air Quality Info */}
            <div
              className="bg-primary d-grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "3px",
              }}
            >
              <div className="bg-primary"></div>
              <div className="bg-warning"></div>
              <div className="bg-danger"></div>
              <div className="bg-warning"></div>
            </div>
            {/* Life Energy Equivalent */}
            <div
              className="bg-warning d-grid"
              style={{
                gridTemplateRows: "1fr 1fr 1fr",
                gap: "3px",
              }}
            >
              <div className="bg-warning"></div>
              <div className="bg-danger"></div>
              <div className="bg-warning"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div
        className="bg-warning d-grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "7px",
        }}
      >
        {/* Bar Chart */}
        <div
          className="bg-danger d-grid"
          style={{
            gridTemplateRows: "1fr 6fr",
          }}
        >
          {/* Bar Chart Heading */}
          <div
            className="#007a92 text-center border border-2 rounded text-light fs-6"
            style={{
              backgroundColor: "#007a92",
              letterSpacing: "2px",
              padding: "2px 0px",
            }}
          >
            Solar Generation Curve
          </div>
          {/* Bar Chart */}
          <div className="bg-light">
            <BarChart />
          </div>
        </div>
        {/* Area Chart */}
        <div
          className="bg-danger d-grid"
          style={{
            gridTemplateRows: "1fr 6fr",
          }}
        >
          {/* Area Chart Heading */}
          <div
            className="#007a92 text-center border border-2 rounded text-light fs-6"
            style={{
              backgroundColor: "#007a92",
              letterSpacing: "2px",
              padding: "2px 0px",
            }}
          >
            Day Load Curve
          </div>
          {/* Area Chart */}
          <div className="bg-danger">
            <AreaChart />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
