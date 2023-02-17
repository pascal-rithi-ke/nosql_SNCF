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
      text: "Nombre d'objet trouver par type",
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


const data_objet = [{"convRecup":[{"id_type":0,"name":"Bagagerie: sacs, valises, cartables","nb":3402},{"id_type":1,"name":"Appareils \u00e9lectroniques, informatiques, appareils photo","nb":1533},{"id_type":2,"name":"V\u00eatements, chaussures","nb":1189},{"id_type":3,"name":"Porte-monnaie / portefeuille, argent, titres","nb":1149},{"id_type":4,"name":"Pi\u00e8ces d'identit\u00e9s et papiers personnels","nb":747},{"id_type":5,"name":"Optique","nb":495},{"id_type":6,"name":"Cl\u00e9s, porte-cl\u00e9s, badge magn\u00e9tique","nb":456},{"id_type":7,"name":"Livres, articles de pap\u00e9terie","nb":216},{"id_type":8,"name":"Divers","nb":200},{"id_type":9,"name":"V\u00e9los, trottinettes, accessoires 2 roues","nb":142},{"id_type":10,"name":"Bijoux, montres","nb":109},{"id_type":11,"name":"Articles d'enfants, de pu\u00e9riculture","nb":107},{"id_type":12,"name":"Parapluies","nb":102},{"id_type":13,"name":"Articles de sport, loisirs, camping","nb":83},{"id_type":14,"name":"Articles m\u00e9dicaux","nb":50},{"id_type":15,"name":"Instruments de musique","nb":20}]},{"noRecup":[{"id_type":0,"name":"Bagagerie: sacs, valises, cartables","nb":1523},{"id_type":1,"name":"V\u00eatements, chaussures","nb":987},{"id_type":2,"name":"Appareils \u00e9lectroniques, informatiques, appareils photo","nb":820},{"id_type":3,"name":"Porte-monnaie / portefeuille, argent, titres","nb":651},{"id_type":4,"name":"Pi\u00e8ces d'identit\u00e9s et papiers personnels","nb":612},{"id_type":5,"name":"Optique","nb":435},{"id_type":6,"name":"Cl\u00e9s, porte-cl\u00e9s, badge magn\u00e9tique","nb":378},{"id_type":7,"name":"Livres, articles de pap\u00e9terie","nb":169},{"id_type":8,"name":"Divers","nb":146},{"id_type":9,"name":"Bijoux, montres","nb":102},{"id_type":10,"name":"V\u00e9los, trottinettes, accessoires 2 roues","nb":99},{"id_type":11,"name":"Parapluies","nb":97},{"id_type":12,"name":"Articles d'enfants, de pu\u00e9riculture","nb":90},{"id_type":13,"name":"Articles de sport, loisirs, camping","nb":67},{"id_type":14,"name":"Articles m\u00e9dicaux","nb":34},{"id_type":15,"name":"Instruments de musique","nb":11}]}]


// -------------------
const result:any = [];

data_objet.forEach(obj => {
  obj.convRecup?.forEach(convItem => {
    const existingItem = result?.find(item => item.name === convItem.name);
    if (existingItem) {
      existingItem.nb += convItem.nb;
    } else {
      result.push({
        name: convItem.name,
        nb: convItem.nb
      });
    }
  });

  obj.noRecup?.forEach(noRecupItem => {
    const existingItem = result?.find(item => item.name === noRecupItem.name);
    if (existingItem) {
      existingItem.nb += noRecupItem.nb;
    } else {
      result.push({
        name: noRecupItem.name,
        nb: noRecupItem.nb
      });
    }
  });
});

console.log(result);

const lab = result.map(el => el.name)
const count = result.map(el => el.nb)


// -------------


export function BarChartn2() {
  const labels = lab;

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


