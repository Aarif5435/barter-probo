import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation'; // Import the plugin
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export const CustomChart = () => {
  const options: any = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        grid: {
          color: '#e5e5e5',
          borderColor: '#333',
        },
        ticks: {
          color: '#000',
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#000',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      annotation: {
        annotations: {
          startLine: {
            // type: 'line',
            xMin: '19:10',
            xMax: '19:10',
            borderColor: 'black',
            borderWidth: 1,
            label: {
              content: 'Start',
              enabled: true,
              position: 'top',
            },
          },
          endLine: {
            // type: 'line',
            xMin: '19:15',
            xMax: '19:15',
            borderColor: 'black',
            borderWidth: 1,
            label: {
              content: 'End',
              enabled: true,
              position: 'top',
            },
          },
        },
      },
    },
    
  };

  const data = {
    labels: ['19:10', '19:11', '19:12', '19:13', '19:14', '19:15'],
    datasets: [
      {
        type: 'line' as const,
        label: 'Price Trend',
        data: [70, 72, 68, 75, 80, 85],
        borderColor: '#4c78a8',
        backgroundColor: 'rgba(76, 120, 168, 0.5)',
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'Trade Volume',
        data: [3.2, 4.5, 3.0, 6.8, 5.5, 7.2],
        backgroundColor: (context: any) => {
          return context.dataIndex % 2 === 0 ? '#add8e6' : '#ffb6b9';
        },
        yAxisID: 'y1',
      },
    ],
  };

  return <Chart className='mt-5' type="bar" data={data} options={options} />;
};

