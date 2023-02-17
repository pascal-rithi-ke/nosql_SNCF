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

const data_objet = [ {'_id': 2018, 'nb': 4675}, {'_id': 2019, 'nb': 5325}]

const lab = data_objet.map(el => el._id)
const count = data_objet.map(el => el.nb)

export function LineChart() {
  const labels = lab;

  const data = {
    labels,
    datasets: [
      {
        label: 'Object trouvé',
        data: count,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
