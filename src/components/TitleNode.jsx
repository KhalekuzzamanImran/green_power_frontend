import useLatestData from "../hooks/useLatestData";

const TitleNode = ({ id }) => {
  const { generatorData, energyData, solarData, error } = useLatestData();

  if (error) {
    return <p style={{ color: "red" }}>Error loading data</p>;
  }

  const getDisplayValues = () => {
    switch (id) {
      case "solar_title":
        // return { power: "0", current: "0.00" };
        return {
          power: (
            (solarData?.power?.[0] ?? 0) +
            (solarData?.power?.[1] ?? 0) +
            (solarData?.power?.[2] ?? 0)
          ).toFixed(2),
          current: (
            (solarData?.current?.[0] ?? 0) +
            (solarData?.current?.[1] ?? 0) +
            (solarData?.current?.[2] ?? 0)
          ).toFixed(2),
        };
      case "generator_title":
        return {
          power: generatorData?.zyggl ?? 0,
          current: (
            (generatorData?.ia ?? 0) +
            (generatorData?.ib ?? 0) +
            (generatorData?.ic ?? 0)
          ).toFixed(2),
        };
      case "home_title":
        return {
          power: (
            (generatorData?.pa ?? 0) +
            (energyData?.zyggl ?? 0) +
            (solarData?.power?.[0] ?? 0) +
            (solarData?.power?.[1] ?? 0) +
            (solarData?.power?.[2] ?? 0)
          ).toFixed(2),
          current: (
            (generatorData?.ia ?? 0) +
            (energyData?.ia ?? 0) +
            (energyData?.ib ?? 0) +
            (energyData?.ic ?? 0) +
            (solarData?.current?.[0] ?? 0) +
            (solarData?.current?.[1] ?? 0) +
            (solarData?.current?.[2] ?? 0)
          ).toFixed(2),
        };
      case "pdb_title":
        return {
          power: (energyData?.zyggl ?? 0).toFixed(2),
          current: (
            (energyData?.ia ?? 0) +
            (energyData?.ib ?? 0) +
            (energyData?.ic ?? 0)
          ).toFixed(2),
        };
      default:
        return { power: "-", current: "-" };
    }
  };

  const { power, current } = getDisplayValues();

  return (
    <div className=" d-flex flex-column justify-content-center align-items-start">
      <div className="px-2 fs-3 fw-semibold">
        <span className="me-2">{power}</span>
        <span className="fw-bold">kW</span>
      </div>
      <div className="px-2 fs-3 fw-semibold">
        <span className="me-2">{current}</span>
        <span className="fw-bold">A</span>
      </div>
    </div>
  );
};

export default TitleNode;
