Papa.parse('data/sv-map-data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        const df = results.data;

        const data = {
            type: 'scattermap',
            lon: df.map(item => parseFloat(item.longitude_jitter)),
            lat: df.map(item => parseFloat(item.latitude_jitter)),
            marker: {
                color: 'red',
                size: 5,
                opacity: 0.5
            },
            customdata: df.map(item => [
                item.fatalities,
                item.notes_wrapped
            ]),
            hovertemplate: "%{customdata[1]}<br><br>Fatalities: %{customdata[0]}"
        }

        const layout = {
            map: {
                style: 'carto-positron',
                center: {lat: 31.95, lon: 35.2},
                zoom: 8.8
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
})