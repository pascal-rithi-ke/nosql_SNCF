import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: "Nombre d'objet trouver par ans",
    },
  },
};



export function LineChart() {
  const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Object trouvé',
        data: labels.map(() => Math.floor(Math.random() * (1000000 - 1000 + 1) + 1000)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
