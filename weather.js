console.log("weather.js loaded");

function changePeriod(form) {
    console.log('Period changed...');
    // does not work
    if(!document.getElementById("temperatur_grafana")) 
        return false;
    // change grafana diagram attribute
    else if(document.getElementById("day_form").checked) {
        // this does not work for google chrome browser
        // document.getElementById("temperatur_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=6');
        // document.getElementById("wind_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=8');
        // document.getElementById("rain_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=14');
        // document.getElementById("pressure_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=12');
        // document.getElementById("windDir_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=10');
        document.getElementById("temperatur_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=6"');
        document.getElementById("wind_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=8"'); 
        document.getElementById("rain_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=14"');
        document.getElementById("pressure_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=12"');
        document.getElementById("windDir_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=10"');
    }
    else if(document.getElementById("week_form").checked) {
        document.getElementById("temperatur_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=6"');
        document.getElementById("wind_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30&from=now-7d&to=now&theme=light&panelId=8"');
        document.getElementById("rain_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&from=now-7d&to=now&theme=light&panelId=14"');
        document.getElementById("pressure_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-7d&to=now&theme=light&panelId=12"');
        document.getElementById("windDir_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-7d&to=now&theme=light&panelId=10"');
    }
    else if(document.getElementById("month_form").checked) {
        document.getElementById("temperatur_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=6"');
        document.getElementById("wind_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30&from=now-30d&to=now&theme=light&panelId=8"');
        document.getElementById("rain_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&from=now-30d&to=now&theme=light&panelId=14"');
        document.getElementById("pressure_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-30d&to=now&theme=light&panelId=12"');
        document.getElementById("windDir_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-30d&to=now&theme=light&panelId=10"');
    }
    else if(document.getElementById("year_form").checked) {
        document.getElementById("temperatur_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=6"');
        document.getElementById("wind_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30&from=now-365d&to=now&theme=light&panelId=8"');
        document.getElementById("rain_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&from=now-365d&to=now&theme=light&panelId=14"');
        document.getElementById("pressure_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-365d&to=now&theme=light&panelId=12"');
        document.getElementById("windDir_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-365d&to=now&theme=light&panelId=10"');
    }
    return false;
  }

