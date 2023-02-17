import { BarChart } from "../components/BarChart";
import { BarChartn2 } from "../components/BarChartn2";
import { BarHorizotal } from "../components/BarHorizotal";
import { DoughnutChart } from "../components/DoughnutChart";
import { LineChart } from "../components/LineChart";
import { NavBar } from "../components/Navbar"

export const Analytic = () => {

  return (
    <>
      <NavBar />
      <h1>Analytic</h1>
      <div style={{ maxWidth: 700 }}>
        <BarChart  />
      </div>
      <div style={{ maxWidth: 700 }}>
        <LineChart  />
      </div>
      <div style={{ maxWidth: 700, height: 350 }}>
        <DoughnutChart  />
      </div>
      <div style={{ maxWidth: 700 }}>
        <BarHorizotal  />
      </div>
      <div style={{ maxWidth: 700 }}>
        <BarChartn2  />
      </div>
    </>
  )
}