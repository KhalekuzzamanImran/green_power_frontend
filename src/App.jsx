import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import InfoCard from "./components/InfoCard";
import Legends from "./components/Legends";
import LifeEnergyEquivalents from "./components/LifeEnergyEquivalents";
import PieChart from "./components/PieChart";
import ReactFlowDiagram from "./components/ReactFlowDiagram";
import StatusCard from "./components/StatusCard";
import WeatherWidget from "./components/WeatherWidget";
import WebClock from "./components/WebClock";

function App() {
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
      <div
        className=" d-grid"
        style={{
          gridTemplateColumns: "2fr 6fr 2fr",
          gap: "10px",
        }}
      >
        {/* Web Clock */}
        <div className="">
          <WebClock />
        </div>
        <div className=" d-flex justify-content-center align-items-center gap-2">
          <WeatherWidget />
          <StatusCard title={`Solar Irradiation`} />
          <StatusCard title={`Location`} />
          <StatusCard title={`Project Highlights`} />
        </div>
        {/* Logo Section */}
        <div className=" d-flex justify-content-center align-items-center">
          <img
            src="/images/logo.png"
            alt="Green Power"
            style={{
              width: "100%",
              height: "70px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      {/* Main Content Section */}
      <div
        className=" d-grid"
        style={{
          gridTemplateColumns: "9fr 4fr",
          gap: "7px",
        }}
      >
        {/* Left Content(Main) */}
        <div
          className="d-grid"
          style={{
            gridTemplateRows: "1fr 12fr",
            gap: "2px",
            // boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
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
            className=" d-grid"
            style={{
              gridTemplateColumns: "4.5fr 7.5fr",
            }}
          >
            {/* Pie Charts Container */}
            <div
              className=" d-grid"
              style={{
                grieTemplateRows: "1fr 1fr",
                gap: "3px",
                boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
              }}
            >
              {/* Pie Charts Row 1 */}
              <div
                className=" d-grid"
                style={{
                  gridTemplateColumns: "3fr 7fr",
                  gap: "3px",
                }}
              >
                {/* Pie Charts Legend */}
                <div className="">
                  <Legends />
                </div>
                {/* Pie Chart 1 */}
                <div
                  className=" d-grid"
                  style={{
                    gridTemplateRows: "4fr 1fr",
                    gap: "3px",
                  }}
                >
                  <div className=" d-flex justify-content-start align-items-end">
                    <PieChart title="Daily" />
                  </div>
                  <div className="">
                    <h6
                      className="text-start fw-semibold"
                      style={{ fontSize: "14px", marginLeft: "60px" }}
                    >
                      Daily
                    </h6>
                  </div>
                </div>
              </div>
              {/* Pie Charts Row 2 */}
              <div
                className=" d-grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3px",
                }}
              >
                {/* Pie Chart 2 */}
                <div
                  className=" d-grid"
                  style={{
                    gridTemplateRows: "4fr 1fr",
                    gap: "3px",
                  }}
                >
                  <div className=" d-flex justify-content-center align-items-center">
                    <PieChart title="Current Month Cumulative" />
                  </div>
                  <div className="">
                    <h6
                      className="text-center fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Current Month Cumulative
                    </h6>
                  </div>
                </div>
                {/* Pie Chart 3 */}
                <div
                  className=" d-grid"
                  style={{
                    gridTemplateRows: "4fr 1fr",
                    gap: "3px",
                  }}
                >
                  <div className=" d-flex justify-content-center align-items-center">
                    <PieChart title="Till Date Cumulative" />
                  </div>
                  <div className=" ">
                    <h6
                      className="text-center fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Till Date Cumulative
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* React Flow Diagram */}
            <div className="">
              <ReactFlowDiagram />
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
        <divs
          className="d-grid"
          style={{
            gridTemplateRows: "1fr 12fr",
            gap: "2px",
            boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)",
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
            className=" d-grid"
            style={{
              gridTemplateRows: "4fr 2fr 4fr 2fr 13fr",
              padding: "5px 15px 0px 15px",
            }}
          >
            {/* Supplimentary Info */}
            <div
              className=" d-grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "3px",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
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
                icon={`taka`}
              />
            </div>

            {/* Air Quality heading */}
            {/* <div
              className=" fw-bold d-flex justify-content-center align-items-end"
              style={{ fontSize: "14px", paddingTop: "0px" }}
            >
              Air Quality Index
            </div> */}
            <div
              className="#007a92 text-center  rounded text-dark fs-6 fw-bold"
              style={{
                // backgroundColor: "#007a92",
                letterSpacing: "2px",
                marginTop: "5px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
              }}
            >
              Air Quality Index
            </div>
            {/* Air Quality Info */}
            <div
              className=" d-grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "3px",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
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
            {/* Life Energy Equivalent Heading */}
            {/* <div
              className=" fw-bold d-flex justify-content-center align-items-end"
              style={{ fontSize: "14px", paddingTop: "0px" }}
            >
              Life Energy Equivalents
            </div> */}
            <div
              className="#007a92 text-center fw-bold rounded text-dark fs-6"
              style={{
                // backgroundColor: "#007a92",
                letterSpacing: "2px",
                marginTop: "5px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
              }}
            >
              Life Energy Equivalents
            </div>
            {/* Life Energy Equivalent */}
            <div
              className=" d-grid"
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
        </divs>
      </div>
      {/* Footer Section */}
      <div
        className=" d-grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "7px",
        }}
      >
        {/* Bar Chart */}
        <div
          className=" d-grid"
          style={{
            gridTemplateRows: "1fr 6fr",
            boxShadow: "4px 0 6px -1px rgba(0,0,0,0.1)",
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
          <div className="">
            <BarChart />
          </div>
        </div>
        {/* Area Chart */}
        <div
          className=" d-grid"
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
          <div className="">
            <AreaChart />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
