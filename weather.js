function changePeriod() {
    // Get the value of the input field
    var period = document.querySelector("input[name=period]").value;
  
    // Switch on the value of the input field
    switch (period) {
      case "day":
        document.querySelector("form").action = "https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-24h&to=now&theme=light&panelId=6";
        break;
      case "week":
        document.querySelector("form").action = "https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-7d&to=now&theme=light&panelId=6";
        break;
      case "month":
        document.querySelector("form").action = "https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-30d&to=now&theme=light&panelId=6";
        break;
      case "year":
        document.querySelector("form").action = "https://kleger.vsos.ethz.ch/d-solo/NKXNbOk4z/main-weather-parameters?orgId=1&refresh=30s&from=now-365d&to=now&theme=light&panelId=6";
        break;
      default:
        return null;
    }
  }