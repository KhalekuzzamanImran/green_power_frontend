import React from "react";
import LifeEnergyEquivalents from "./LifeEnergyEquivalents";
import InfoCard from "./InfoCard";
import Heading from "./Heading";

function Sidebar({ environmentData, solarData, yearlySolarData }) {
  const latestData = solarData?.[solarData?.length - 1];
  const todayLiveGeneration =
    (latestData?.energy_consumption[0] -
      solarData?.[0]?.energy_consumption?.[0]) /
    1000;
  const solarEnergyConsumptionInKWh = yearlySolarData / 1000;

  return (
    <div
      className="d-grid border border-2 border-secondary rounded"
      style={{
        gridTemplateRows: "1fr 12fr",
        gap: "2px",
        boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)",
        backgroundColor: "rgba(209, 248, 253, 1)",
      }}
    >
      {/* Sidebar Heading */}
      <Heading title="Solar System Supplimentary Info" />
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
            value={Number(todayLiveGeneration?.toFixed(2)) || 0}
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
            value={Number((yearlySolarData ?? 0) / 1000).toFixed(2) || 0}
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
            value={`${((yearlySolarData / 1000) * 13).toFixed(0)}` || 0}
            icon={`taka`}
            flag={`taka`}
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
            value={environmentData?.pm1_0_ug_m3 ?? 0}
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
            value={environmentData?.pm2_5_ug_m3 ?? 0}
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
            title={`PM 10.0`}
            value={environmentData?.pm10_0_ug_m3 ?? 0}
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
            value={
              environmentData?.hum_percent
                ? environmentData.hum_percent.toFixed(2)
                : "0"
            }
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
                <span className="fw-bold">
                  {(solarEnergyConsumptionInKWh * 0.997).toFixed(0)} kg
                </span>{" "}
                of CO₂.
              </>
            }
          />
          <LifeEnergyEquivalents
            iconName="Coal"
            title={
              <>
                Equivalent to saving at least{" "}
                <span className="fw-bold">
                  {(0.4 * solarEnergyConsumptionInKWh)?.toFixed(0)} kg
                </span>{" "}
                of Standard Coal.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
