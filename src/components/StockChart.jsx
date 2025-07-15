import React from 'react';
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale, 
         BarElement, 
         Title, 
         Tooltip, 
         Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Enregistrez les composants nécessaires de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StockChart() {
  // Données d'exemple (à remplacer par vos vraies données)
  const data = {
    labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'],
    datasets: [
      {
        label: 'Entrées',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: '#10B981', // Vert pour les entrées
      },
      {
        label: 'Sorties',
        data: [8, 15, 2, 4, 6, 8, 5],
        backgroundColor: '#EF4444', // Rouge pour les sorties
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Mouvements de stock sur 7 jours',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default StockChart;