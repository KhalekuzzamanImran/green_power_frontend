import Footer from "./components/Footer";
import Header from "./components/Header";
import Heading from "./components/Heading";
import PieChartsContainer from "./components/PieChartsContainer";
import ReactFlowDiagram from "./components/ReactFlowDiagram";
import Sidebar from "./components/Sidebar";
import useData from "./hooks/useData";
import useEnergyData from "./hooks/useEnergyData";
import useEnyNowData from "./hooks/useEnyNowData";
import useLatestData from "./hooks/useLatestData";

function App() {
  const {
    environmentData: environmentLatestData,
    generatorData: generatorLatestData,
    energyData: energyLatestData,
    solarData: latestSolarData,
    loading: latestLoading,
    error: latestError,
  } = useLatestData();

  const { solarData, gridData, loading, error } = useData({
    timeRange: "TODAYS",
  });

  console.log(solarData, gridData);

  const {
    generatorEnergy: todayGenEnergy,
    solarEnergy: todaySolarEnergy,
    gridEnergy: todayGridEnergy,
  } = useEnergyData({
    timeRange: "TODAY",
  });

  const {
    generatorEnergy: monthlyGenEnergy,
    solarEnergy: monthlySolarEnergy,
    gridEnergy: monthlyGridEnergy,
  } = useEnergyData({
    timeRange: "LAST_30_DAYS",
  });

  const { generatorEnergy, solarEnergy, gridEnergy } = useEnergyData({
    timeRange: "THIS_YEAR",
  });

  const pieChartData = [
    {
      title: "Daily",
      data: [todaySolarEnergy / 1000, todayGenEnergy, todayGridEnergy],
    },
    {
      title: "Current month cumulative",
      data: [monthlySolarEnergy / 1000, monthlyGenEnergy, monthlyGridEnergy],
    },
    {
      title: "Till Date cumulative",
      data: [solarEnergy / 1000, generatorEnergy, gridEnergy],
    },
  ];

  return (
    <main
      className="container-fluid d-grid"
      style={{
        height: "100vh",
        gridTemplateRows: "1.5fr 6fr .5fr",
        gap: "5px",
        overflow: "hidden",
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
            // backgroundColor: "rgba(209, 248, 253, 1)",
            backgroundColor: "rgb(209 255 226)",
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
            <PieChartsContainer data={pieChartData} />
            {/* React Flow Diagram */}
            <div className="">
              <ReactFlowDiagram
                generatorData={generatorLatestData}
                energyData={energyLatestData}
                solarData={latestSolarData}
                loading={latestLoading}
                error={latestError}
              />
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
        <Sidebar
          environmentData={environmentLatestData}
          solarData={todaySolarEnergy}
          yearlySolarData={solarEnergy}
        />
      </div>
      {/* Footer Section */}
      <Footer solarData={[]} gridData={[]} />
    </main>
  );
}

export default App;
