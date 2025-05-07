import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

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
      <div className="bg-primary d-grid"></div>
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
                <div className="bg-primary"></div>
                <div className="bg-secondary"></div>
              </div>
              {/* Pie Charts Row 2 */}
              <div
                className="bg-danger d-grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3px",
                }}
              >
                <div className="bg-primary"></div>
                {/* Pie Chart 3 */}
                <div className="bg-light">
                  <PieChart />
                </div>
              </div>
            </div>
            {/* React Flow Diagram */}
            <div className="bg-success"></div>
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
          <div className="bg-success"></div>
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
