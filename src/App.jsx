import Footer from "./components/Footer";
import Header from "./components/Header";
import Heading from "./components/Heading";
import PieChartsContainer from "./components/PieChartsContainer";
import ReactFlowDiagram from "./components/ReactFlowDiagram";
import Sidebar from "./components/Sidebar";
import useData from "./hooks/useData";
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

  const { enyNowData, loading, error } = useEnyNowData({ timeRange: "TODAY" });
  const { enyNowData: enyNowMonthlyData } = useEnyNowData({
    timeRange: "LAST_30_DAYS",
  });

  const { enyNowData: enyNowYearlyData } = useEnyNowData({
    timeRange: "THIS_YEAR",
  });

  const { generatorData, solarData } = useData({
    timeRange: "TODAY",
  });

  const { generatorData: generatorMonthlyData, solarData: solarMonthlyData } =
    useData({
      timeRange: "LAST_30_DAYS",
    });

  const { generatorData: generatorYearlyData, solarData: solarYearlyData } =
    useData({
      timeRange: "THIS_YEAR",
    });

  // Grid Energy consumption
  let filteredGridEnergyConsumption = enyNowData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );

  const dailyEnergyData =
    filteredGridEnergyConsumption?.length >= 2
      ? (
          filteredGridEnergyConsumption[
            filteredGridEnergyConsumption.length - 1
          ]?.zygsz - filteredGridEnergyConsumption[0]?.zygsz
        )?.toFixed(2)
      : 0;

  filteredGridEnergyConsumption = enyNowMonthlyData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );

  const monthlyEnergyData =
    filteredGridEnergyConsumption?.length >= 2
      ? (
          filteredGridEnergyConsumption[
            filteredGridEnergyConsumption.length - 1
          ]?.zygsz - filteredGridEnergyConsumption[0]?.zygsz
        )?.toFixed(2)
      : 0;

  filteredGridEnergyConsumption = enyNowYearlyData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );

  const yearlyEnergyData =
    filteredGridEnergyConsumption?.length >= 2
      ? (
          filteredGridEnergyConsumption[
            filteredGridEnergyConsumption.length - 1
          ]?.zygsz - filteredGridEnergyConsumption[0]?.zygsz
        )?.toFixed(2)
      : 0;

  // Daily, Monthly, Yearly Generator Data
  let filteredGeneratorEnergyConsumption = generatorData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );

  const dailyGeneratorData =
    filteredGeneratorEnergyConsumption?.length >= 2
      ? (
          filteredGeneratorEnergyConsumption[
            filteredGeneratorEnergyConsumption.length - 1
          ]?.zygsz - filteredGeneratorEnergyConsumption[0]?.zygsz
        )?.toFixed(2)
      : 0;

  filteredGeneratorEnergyConsumption = generatorMonthlyData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );

  const monthlyGeneratorData =
    filteredGeneratorEnergyConsumption?.length >= 2
      ? (
          filteredGeneratorEnergyConsumption[
            filteredGeneratorEnergyConsumption.length - 1
          ]?.zygsz - filteredGeneratorEnergyConsumption[0]?.zygsz
        )?.toFixed(2)
      : 0;

  filteredGeneratorEnergyConsumption = generatorYearlyData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );

  const YearlyGeneratorData =
    filteredGeneratorEnergyConsumption?.length >= 2
      ? (
          filteredGeneratorEnergyConsumption[
            filteredGeneratorEnergyConsumption.length - 1
          ]?.zygsz - filteredGeneratorEnergyConsumption[0]?.zygsz
        )?.toFixed(2)
      : 0;

  // Daily, Monthly, Yearly Solar Data
  let filteredSolarEnergyConsumption = solarData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );
  const dailySolarData =
    filteredSolarEnergyConsumption?.length >= 2
      ? (
          filteredSolarEnergyConsumption[
            filteredSolarEnergyConsumption.length - 1
          ]?.energy_consumption?.[0] -
          filteredSolarEnergyConsumption[0]?.energy_consumption?.[0]
        )?.toFixed(2)
      : 0;

  filteredSolarEnergyConsumption = solarMonthlyData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );
  const monthlySolarData =
    filteredSolarEnergyConsumption?.length >= 2
      ? (
          filteredSolarEnergyConsumption[
            filteredSolarEnergyConsumption.length - 1
          ]?.energy_consumption?.[0] -
          filteredSolarEnergyConsumption[0]?.energy_consumption?.[0]
        )?.toFixed(2)
      : 0;

  filteredSolarEnergyConsumption = solarYearlyData?.filter((obj) =>
    Object.values(obj).every((value) => value !== null && value !== undefined)
  );
  const yearlySolarData =
    filteredSolarEnergyConsumption?.length >= 2
      ? (
          filteredSolarEnergyConsumption[
            filteredSolarEnergyConsumption.length - 1
          ]?.energy_consumption?.[0] -
          filteredSolarEnergyConsumption[0]?.energy_consumption?.[0]
        )?.toFixed(2)
      : 0;

  const dailyTotal =
    dailySolarData / 1000 + dailyGeneratorData + dailyEnergyData;
  const monthlyTotal =
    monthlySolarData / 1000 + monthlyGeneratorData + monthlyEnergyData;
  const yearlyTotal =
    yearlySolarData / 1000 + YearlyGeneratorData + yearlyEnergyData;

  const pieChartData = [
    {
      title: "Daily",
      data: [dailySolarData / 1000, dailyGeneratorData, dailyEnergyData],
      total: dailyTotal,
    },
    {
      title: "Current month cumulative",
      data: [monthlySolarData / 1000, monthlyGeneratorData, monthlyEnergyData],
      total: monthlyTotal,
    },
    {
      title: "Till Date cumulative",
      data: [yearlySolarData / 1000, YearlyGeneratorData, yearlyEnergyData],
      total: yearlyTotal,
    },
  ];

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
          solarData={solarData}
          yearlySolarData={yearlySolarData}
        />
      </div>
      {/* Footer Section */}
      <Footer solarData={solarData}/>
    </main>
  );
}

export default App;
