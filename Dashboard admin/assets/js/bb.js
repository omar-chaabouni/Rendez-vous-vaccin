// Charte de Répartition de nombres de vaccins et des personnes vaccinées par gouvernorat

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
      var data = google.visualization.arrayToDataTable([
        ['Gouvernorat', 'Vaccins Disponibles', 'Personnes Vaccinées'],
        ['Tunis', 340000, 30569],
        ['Sfax', 250600, 30077],
        ['Ariana', 220000, 20546],
        ['Sousse', 200000, 35002],
        ['Kairouan', 152600, 22522]
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
      var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
    }