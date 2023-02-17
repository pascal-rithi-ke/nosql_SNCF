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

const data_objet = {"results":[{"_id":"Paris Gare de Lyon","count":794},{"_id":"Paris Montparnasse","count":687},{"_id":"Paris Gare du Nord","count":620},{"_id":"Bordeaux Saint-Jean","count":489},{"_id":"Strasbourg","count":430}]}

const lab = data_objet.results.map((el) => el._id)
const count = data_objet.results.map((el) => el.count)

export function BarChart() {
  const labels = lab;
  let min = 100;
  let max = 1000;

  const data = {
    labels,
    datasets: [
      {
        label: 'Object trouvé',
        data: count,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
