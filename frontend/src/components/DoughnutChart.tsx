import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data_objet = {"results":[{"_id":"matin","nb_objets_trouves":5442}, {"_id":"apres-midi","nb_objets_trouves":4558}]}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: "Nombre d'objet trouver matin/soir",
    },
  },
};



export function DoughnutChart() {
  const data = {
    labels: ['matin', 'soir'],
    datasets: [
      {
        label: 'objet',
        data: [data_objet.results[0].nb_objets_trouves, data_objet.results[1].nb_objets_trouves],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
}
