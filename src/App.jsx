import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import InfoCard from "./components/InfoCard";
import Legends from "./components/Legends";
import LifeEnergyEquivalents from "./components/LifeEnergyEquivalents";
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
            gridTemplateRows: "1fr 12fr",
            gap: "2px",
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
            gridTemplateRows: "1fr 12fr",
            gap: "2px",
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
              gridTemplateRows: "4fr 2fr 4fr 2fr 13fr",
              padding: "5px 20px 0px",
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
              <InfoCard
                title={
                  <>
                    Live
                    <br />
                    Generation
                  </>
                }
                value={`114.91`}
                icon={`liveGeneration`}
              />
              <InfoCard
                title={
                  <>
                    Cumulative
                    <br />
                    Generation
                  </>
                }
                value={`114.91`}
                icon={`cumulativeGeneration`}
              />
              <InfoCard
                title={
                  <>
                    Cumulative
                    <br />
                    Savings
                  </>
                }
                value={`114.91`}
                icon={`liveGeneration`}
              />
            </div>

            {/* Air Quality heading */}
            <div
              className="bg-danger fw-bold d-flex justify-content-center align-items-end"
              style={{ fontSize: "14px", paddingTop: "0px" }}
            >
              Air Quality Index
            </div>
            {/* Air Quality Info */}
            <div
              className="bg-primary d-grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "3px",
              }}
            >
              <InfoCard
                title={`PM 1.0`}
                value={`34`}
                icon={
                  <div
                    className="fw-semibold"
                    style={{
                      fontSize: "10px",
                      lineHeight: "11px",
                      textAlign: "start",
                    }}
                  >
                    <span>
                      {`< 10`}
                      <br />
                    </span>
                    <span>µg/m&sup3;</span>
                  </div>
                }
                flag="pm"
              />
              <InfoCard
                title={`PM 2.5`}
                value={`34`}
                icon={
                  <div
                    className="fw-semibold"
                    style={{
                      fontSize: "10px",
                      lineHeight: "11px",
                      textAlign: "start",
                    }}
                  >
                    <span>
                      {`< 15`}
                      <br />
                    </span>
                    <span>µg/m&sup3;</span>
                  </div>
                }
                flag={`pm`}
              />
              <InfoCard
                title={`PM 1.0`}
                value={`34`}
                icon={
                  <div
                    className="fw-semibold"
                    style={{
                      fontSize: "10px",
                      lineHeight: "11px",
                      textAlign: "start",
                    }}
                  >
                    <span>
                      {`< 45`}
                      <br />
                    </span>
                    <span>µg/m&sup3;</span>
                  </div>
                }
                flag={`pm`}
              />
              <InfoCard
                title={`Humidity`}
                value={`34`}
                icon={
                  <div
                    className="fw-semibold"
                    style={{
                      fontSize: "10px",
                      lineHeight: "11px",
                      textAlign: "start",
                    }}
                  >
                    <span>
                      {`30%-`}
                      <br />
                    </span>
                    <span>50%</span>
                  </div>
                }
                flag={`humidity`}
              />
            </div>
            <div
              className="bg-danger fw-bold d-flex justify-content-center align-items-end"
              style={{ fontSize: "14px", paddingTop: "0px" }}
            >
              Life Energy Equivalents
            </div>
            {/* Life Energy Equivalent */}
            <div
              className="bg-warning d-grid"
              style={{
                gridTemplateRows: "1fr 1fr 1fr",
                gap: "2px",
              }}
            >
              <LifeEnergyEquivalents
                iconName="Tree"
                title={
                  <>
                    Equivalent to saving at least{" "}
                    <span className="fw-bold">245</span> trees.
                  </>
                }
              />
              <LifeEnergyEquivalents
                iconName="CO₂"
                title={
                  <>
                    Equivalent to saving at least{" "}
                    <span className="fw-bold">1618 kg</span> of CO₂.
                  </>
                }
              />
              <LifeEnergyEquivalents
                iconName="Coal"
                title={
                  <>
                    Equivalent to saving at least{" "}
                    <span className="fw-bold">649 kg</span> of Standard Coal.
                  </>
                }
              />
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
