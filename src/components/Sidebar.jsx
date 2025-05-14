import React from "react";
import LifeEnergyEquivalents from "./LifeEnergyEquivalents";
import InfoCard from "./InfoCard";
import Heading from "./Heading";

function Sidebar({environmentData, solarData, yearlySolarData}) {
  console.log(environmentData)
  return (
    <divs
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
            value={environmentData?.pm1_0_ug_m3 ?? 0}
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
  );
}

export default Sidebar;
