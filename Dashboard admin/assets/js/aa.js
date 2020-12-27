// Charte : Nombre de personnes vaccinés par jour

google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
  
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Jour', 'Nombre de gens vaccinés'],
            ['2 Avril',  185],
            ['3 Avril',  93],
            ['4 Avril',  264],
            ['5 Avril',  315],
            ['6 Avril',  291],
            ['7 Avril',  508],
            ['8 Avril',  468],
            ['9 Avril',  477],
            ['10 Avril',  435],
          ]);
  
          var options = {
            //title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
          };
  
          var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  
          chart.draw(data, options);
        }