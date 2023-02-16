import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Top 3 des gares d'objet trouver",
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};



export function BarChart() {
  const labels = ['Tours', 'Strasbourg', 'Monparnass'];
  let min = 100;
  let max = 1000;

  const data = {
    labels,
    datasets: [
      {
        label: 'Object trouvé',
        data: labels.map(() => Math.floor(Math.random() * (max - min + 1) + min)),
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
