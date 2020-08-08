export class Continent {
  constructor(params) {
    this.active = params.active;
    this.activePerOneMillion = params.activePerOneMillion;
    this.cases = params.cases;
    this.casesPerOneMillion = params.casesPerOneMillion;
    this.continent = params.continent;
    this.continentInfo = params.continentInfo;
    this.countries = params.countries;
    this.critical = params.critical;
    this.criticalPerOneMillion = params.criticalPerOneMillion;
    this.deaths = params.deaths;
    this.deathsPerOneMillion = params.deathsPerOneMillion;
    this.population = params.population;
    this.recovered = params.recovered;
    this.recoveredPerOneMillion = params.recoveredPerOneMillion;
    this.tests = params.tests;
    this.testsPerOneMillion = params.testsPerOneMillion;
    this.todayCases = params.todayCases;
    this.todayDeaths = params.todayDeaths;
    this.todayRecovered = params.todayRecovered;
    this.updated = params.updated;
  }
}
