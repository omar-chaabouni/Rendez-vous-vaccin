// charte de Répartition des demandes des personnes prioritaires par gouvernorat

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
      var data = google.visualization.arrayToDataTable([
        ['Gouvernorat', 'Demandeurs', 'Demandes prioritaires'],
        ['Tunis', 430000, 340000],
        ['Sfax', 400200, 250600],
        ['Ariana', 319000, 220000],
        ['Sousse', 300000, 200000],
        ['Kairouan', 200000, 152600]
      ]);

      

      var options = {
        //title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            auraColor: 'none',
            color: '#555'
          },
          boxStyle: {
            stroke: '#ccc',
            strokeWidth: 1,
            gradient: {
              color1: '#f3e5f5',
              color2: '#f3e5f5',
              x1: '0%', y1: '0%',
              x2: '100%', y2: '100%'
            }
          }
        },
        hAxis: {
          title: 'Statistiques',
          minValue: 0,
        },
        vAxis: {
          title: 'Ville'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }