(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0a5d":function(t,n,e){"use strict";var i=e("cec1"),o=e.n(i);o.a},"36e0":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{constructor(t){this.active=t.active,this.activePerOneMillion=t.activePerOneMillion,this.cases=t.cases,this.casesPerOneMillion=t.casesPerOneMillion,this.continent=t.continent,this.continentInfo=t.continentInfo,this.countries=t.countries,this.critical=t.critical,this.criticalPerOneMillion=t.criticalPerOneMillion,this.deaths=t.deaths,this.deathsPerOneMillion=t.deathsPerOneMillion,this.population=t.population,this.recovered=t.recovered,this.recoveredPerOneMillion=t.recoveredPerOneMillion,this.tests=t.tests,this.testsPerOneMillion=t.testsPerOneMillion,this.todayCases=t.todayCases,this.todayDeaths=t.todayDeaths,this.todayRecovered=t.todayRecovered,this.updated=t.updated}}},"81f6":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("2b0e");const o=new i["default"]},b108:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i={all:"/covid-19/all",continents:"/covid-19/continents",countries:"/covid-19/countries"}},bb51:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",{staticClass:"home",attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{sm:"12",md:"3",lg:"3",xl:"3"}},[e("glance")],1),e("b-col",{attrs:{sm:"12",md:"9",lg:"9",xl:"9"}},[t.continents?e("b-nav",t._l(t.continents,(function(n,i){return e("b-nav-text",{key:i,class:t.isActive(n),on:{click:function(e){return t.getContinent(n)}}},[e("span",{class:t.getIcon(n)}),e("span",[t._v(t._s(n.continent))])])})),1):t._e(),e("b-overlay",{attrs:{show:t.isLoading,rounded:"sm",opacity:"0.85",variant:"transparent",blur:"0.75em"}},[t.continent?e("continent",{attrs:{continent:t.continent}}):t._e()],1)],1)],1)],1)},o=[],s=e("b108"),c=e("36e0"),a=e("81f6"),r={name:"Home",components:{Glance:()=>e.e("glance").then(e.bind(null,"7426")),Continent:()=>e.e("continent").then(e.bind(null,"5d2b"))},data:()=>({continents:null,continent:null,world:null,isLoading:!1}),created(){a["a"].$on("world",t=>{const n={...t,countries:[].concat.apply([],this.continents.map(t=>t.countries).sort()),continent:"World",continentInfo:null};this.world=new c["a"](n),this.continents.unshift(this.world),this.continent=this.continents[0]})},mounted(){this.getContinents()},methods:{async getContinents(){this.isLoading=!0;const{data:t}=await this.$http.get(""+s["a"].continents);this.continents=t.map(t=>String(t.continent).includes("/")?new c["a"]({...t,continent:t.continent.split("/")[1]}):new c["a"](t)).sort((t,n)=>t.continent>n.continent?1:-1),this.continent=this.continents[0],setTimeout(()=>{this.isLoading=!1},500)},getContinent(t){this.continent=t},isActive(t){return this.continent&&t.continent===this.continent.continent?"border-danger":null},getIcon(t){switch(t.continent){case"Africa":return"fad fa-globe-africa";case"Asia":return"fad fa-globe-asia";case"Europe":return"fad fa-globe-europe";case"North America":return"fad fa-globe-americas";case"Oceania":return"fad fa-globe-europe";case"South America":return"fad fa-globe-americas";case"World":return"fad fa-globe";default:return"fad fa-globe"}}},metaInfo:{title:"Home"}},l=r,d=(e("0a5d"),e("2877")),u=Object(d["a"])(l,i,o,!1,null,"1df3e468",null);n["default"]=u.exports},cec1:function(t,n,e){}}]);
//# sourceMappingURL=home.730b24cc.js.map