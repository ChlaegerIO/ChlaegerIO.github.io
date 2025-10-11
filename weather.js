  console.log("weather.js loaded");

  function changePeriod(form) {
      console.log('Period changed...');
      // change grafana diagram attribute
      if(document.getElementById("day_form").checked) {
        // potential fix for google chrome, but it does only work in debuggin mode
        // document.getElementById("temperatur_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=6"');
        // document.getElementById("wind_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=8"'); 
        // document.getElementById("rain_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=14"');
        // document.getElementById("pressure_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=12"');
        // document.getElementById("windDir_grafana").outerHTML.replace(/data="(.+?)"/, 'data="https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=10"');

          document.getElementById("temperatur_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-1');
          document.getElementById("wind_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-7');
          document.getElementById("rain_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-3');
          document.getElementById("pressure_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-2');
          // document.getElementById("windDir_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=10');
          document.getElementById("current_grafana_temp").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_hum").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_wind").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_rain").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
      }
      else if(document.getElementById("week_form").checked) {
          document.getElementById("temperatur_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-1');
          document.getElementById("wind_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-7');
          document.getElementById("rain_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-3');
          document.getElementById("pressure_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-2');
          // document.getElementById("windDir_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=10');
          document.getElementById("current_grafana_temp").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_hum").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_wind").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_rain").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
      }
      else if(document.getElementById("month_form").checked) {
          document.getElementById("temperatur_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-1');
          document.getElementById("wind_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-7');
          document.getElementById("rain_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-3');
          document.getElementById("pressure_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-2');
          // document.getElementById("windDir_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=10');
          document.getElementById("current_grafana_temp").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_hum").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_wind").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_rain").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
      }
      else if(document.getElementById("year_form").checked) {
          document.getElementById("temperatur_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-1');
          document.getElementById("wind_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-7');
          document.getElementById("rain_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-3');
          document.getElementById("pressure_grafana").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-2');
          // document.getElementById("windDir_grafana").setAttribute('data', 'https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?from=now-365d&to=now&theme=light&panelId=10');
          document.getElementById("current_grafana_temp").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_hum").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_wind").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
          document.getElementById("current_grafana_rain").setAttribute('data', 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
      }
      return false;
    }
  
  