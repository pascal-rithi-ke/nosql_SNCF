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

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: "Nombre d'object trouver / restitué",
    },
  },
};

const data_objet = {
  "results" : [
    {"_id": "nombre_objets_restitues", "count": 3779},
    {"_id": "nombre_objets_trouves", "count": 10000},
  ]
}

const lab = data_objet.results.map((el) => el._id)
const count = data_objet.results.map((el) => el.count)

export function BarHorizotal() {
  
  const labels = lab;
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: count,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
