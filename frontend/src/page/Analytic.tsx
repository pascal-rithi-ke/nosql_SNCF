import { BarChart } from "../components/BarChart";
import { BarHorizotal } from "../components/BarHorizotal";
import { DoughnutChart } from "../components/DoughnutChart";
import { LineChart } from "../components/LineChart";
import { NavBar } from "../components/Navbar"

export const Analytic = () => {

  return (
    <>
      <NavBar />
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
      <h1>Analytic</h1>
      <p>Nombre d'object trouver : 3535</p>
      <p>Nombre d'object Restitué : 1200</p>
      <p>Nombre d'object le matin : 650</p>
      <p>Nombre d'object le soir : 4500</p>
      <p>Top 5 gare avec le plus d'object trouver :</p>
      <p>Tours: 40</p>
      <p>Strasbourg: 30</p>
    </>
  )
}