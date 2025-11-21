  console.log("weather.js loaded");

function updateGrafanaPanel(id, url) {
    const timestamp = Date.now();
    const newUrl = url + "&_t=" + timestamp;
    const element = document.getElementById(id);
    if (element) {
        element.setAttribute('data', newUrl);
    }
}

function changePeriod(form) {
    console.log('Period changed...');
    
    if(document.getElementById("day_form").checked) {
        updateGrafanaPanel("temperatur_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-1');
        updateGrafanaPanel("wind_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-7');
        updateGrafanaPanel("rain_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-3');
        updateGrafanaPanel("pressure_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=panel-2');
        
        updateGrafanaPanel("current_grafana_temp", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_hum", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_wind", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_rain", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-24h&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
    }
    else if(document.getElementById("week_form").checked) {
        updateGrafanaPanel("temperatur_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-1');
        updateGrafanaPanel("wind_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-7');
        updateGrafanaPanel("rain_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-3');
        updateGrafanaPanel("pressure_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=panel-2');
        
        updateGrafanaPanel("current_grafana_temp", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_hum", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_wind", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_rain", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-7d&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
    }
    else if(document.getElementById("month_form").checked) {
        updateGrafanaPanel("temperatur_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-1');
        updateGrafanaPanel("wind_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-7');
        updateGrafanaPanel("rain_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-3');
        updateGrafanaPanel("pressure_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=panel-2');
        
        updateGrafanaPanel("current_grafana_temp", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_hum", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_wind", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_rain", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-30d&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
    }
    else if(document.getElementById("year_form").checked) {
        updateGrafanaPanel("temperatur_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-1');
        updateGrafanaPanel("wind_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-7');
        updateGrafanaPanel("rain_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-3');
        updateGrafanaPanel("pressure_grafana", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=panel-2');
        
        updateGrafanaPanel("current_grafana_temp", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-11&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_hum", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-13&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_wind", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-12&__feature.dashboardSceneSolo=true');
        updateGrafanaPanel("current_grafana_rain", 'https://wetter.timokleger.com/d-solo/adk6z49/wetter?orgId=1&from=now-365d&to=now&timezone=browser&theme=light&panelId=panel-15&__feature.dashboardSceneSolo=true');
    }
    return false;
}

// Trigger reload on page load
window.addEventListener('load', function() {
    // Default to day if nothing selected
    if (!document.querySelector('input[name="period"]:checked')) {
        const dayForm = document.getElementById("day_form");
        if (dayForm) dayForm.checked = true;
    }
    changePeriod();
});
  
  