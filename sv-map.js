Papa.parse('data/sv-map-data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        const df = results.data;

        function yearSlider(year) {
            const filteredDf = df.filter(item => item.year == year)

            const data = {
                type: 'scattermap',
                lon: filteredDf.map(item => parseFloat(item.longitude_jitter)),
                lat: filteredDf.map(item => parseFloat(item.latitude_jitter)),
                marker: {
                    color: '#f72641',
                    size: 5,
                    opacity: 0.9
                },
                customdata: filteredDf.map(item => [
                    item.fatalities,
                    item.notes_wrapped
                ]),
                hovertemplate: "%{customdata[1]}<br><br>Fatalities: %{customdata[0]}"
            }

            const layout = {
                map: {
                    style: 'carto-positron',
                    center: {lat: 31.888, lon: 35.2},
                    zoom: 8.7
                },
                margin: {t: 0, b: 0, l: 0, r: 0},
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgba(0,0,0,0)',
            };

            const config = {
                scrollZoom: false
            }

            Plotly.newPlot('sv-map', [data], layout, config);
        }

        yearSlider(2016);

        const slider = document.getElementById('year-slider');
        const label = document.getElementById('year-label');

        slider.addEventListener('input', function() {
            label.textContent = this.value;
            yearSlider(this.value);
        });

    }   
})