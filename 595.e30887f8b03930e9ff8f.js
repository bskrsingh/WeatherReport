(self.webpackChunkweather_forecast=self.webpackChunkweather_forecast||[]).push([[595],{595:(t,e,n)=>{"use strict";n.r(e),n.d(e,{TodayModule:()=>m});var i=n(462),o=n(116),a=n(319),s=n(619),r=n(693),c=n(190);function d(t,e){1&t&&(s.TgZ(0,"div",10),s._UZ(1,"i",11),s.qZA())}function p(t,e){1&t&&(s.TgZ(0,"div",10),s._UZ(1,"i",12),s.qZA())}function h(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",3),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().showReocrds(e.name)}),s.YNc(1,d,2,0,"div",4),s.YNc(2,p,2,0,"div",4),s.TgZ(3,"div",5),s._UZ(4,"i",6),s.qZA(),s.TgZ(5,"div"),s.TgZ(6,"div",7),s._uU(7),s.qZA(),s.TgZ(8,"div",8),s._uU(9),s.qZA(),s.TgZ(10,"div",8),s._uU(11),s.qZA(),s.TgZ(12,"div",9),s._uU(13),s.qZA(),s.TgZ(14,"div",8),s._uU(15),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit;s.MGl("routerLink","/future/",t.name,""),s.xp6(1),s.Q6J("ngIf",t.isDay),s.xp6(1),s.Q6J("ngIf",!t.isDay),s.xp6(5),s.hij(" ",(t.main.temp-273.15).toFixed(0),"\xb0"),s.xp6(2),s.AsE("",(t.main.temp_min-273.15).toFixed(0),"\xb0 / ",(t.main.temp_max-273.15).toFixed(0),"\xb0"),s.xp6(2),s.hij("Feels Like: ",(t.main.feels_like-273.15).toFixed(0),"\xb0"),s.xp6(2),s.Oqu(t.name),s.xp6(2),s.hij("Humidity: ",t.main.humidity,"%")}}let g=(()=>{class t{constructor(t,e,n,i){this.http=t,this.forecast=e,this.router=n,this.actRouter=i,this.showDatas=[],this.isDay=!0,this.username="",this.keys=["er"]}ngOnInit(){this.WeatherData={main:{},isDay:!0},this.param=["London","Moscow","Berlin","madrid","Rome"],this.WeatherDataCity(this.param,this.keys)}WeatherDataCity(t,e){t.forEach(t=>{this.sub=this.forecast.getWeatherData(t).subscribe(t=>{this.showDatas.push(t),this.WeatherData=t,this.dayNightdsp()})})}dayNightdsp(){this.sunriseTime=new Date(1e3*this.WeatherData.sys.sunrise).toISOString(),this.sunsetTime=new Date(1e3*this.WeatherData.sys.sunset).toISOString();let t=new Date;"er"==this.keys[0]&&t.toLocaleString(),this.WeatherData.isDay=t.getTime()<this.sunsetTime}showReocrds(t){this.forecast.getWeather(t)}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.eN),s.Y36(c.E),s.Y36(a.F0),s.Y36(a.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-today"]],decls:5,vars:1,consts:[[1,"foreCast"],[1,"container"],["id","divWeatherMain",3,"routerLink","click",4,"ngFor","ngForOf"],["id","divWeatherMain",3,"routerLink","click"],["class","weatherWidgetRow",4,"ngIf"],[1,"weatherWidgetRow","cloudDiv"],[1,"fa","fa-cloud","fa-3x","cloud"],[1,"weatherWidgetRow",2,"font-size","32px","margin-top","5px"],[1,"weatherWidgetRow",2,"font-size","12px"],[1,"weatherWidgetRow",2,"font-size","25px","margin-top","10px"],[1,"weatherWidgetRow"],[1,"fa","fa-sun-o","fa-3x","sun"],[1,"fa","fa-moon-o","fa-3x","moon"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"span"),s._uU(2," Forecast Weather Report For 5 European city "),s.qZA(),s.qZA(),s.TgZ(3,"div",1),s.YNc(4,h,16,9,"div",2),s.qZA()),2&t&&(s.xp6(4),s.Q6J("ngForOf",e.showDatas))},directives:[o.sg,a.rH,o.O5],styles:["#divWeatherMain[_ngcontent-%COMP%]{display:inline-block;border-radius:10px;width:200px;padding:15px;background:#000;background:linear-gradient(180deg,#000,#08072a 75%,#080a3f);color:#fff;margin:15px;cursor:pointer;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.weatherWidgetRow[_ngcontent-%COMP%]{display:block;margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sun[_ngcontent-%COMP%]{color:#ff0;filter:drop-shadow(1px 1px 10px yellow)}.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%]{margin-top:10px}.moon[_ngcontent-%COMP%]{color:#fff;filter:drop-shadow(1px 1px 10px white)}.cloudDiv[_ngcontent-%COMP%]{margin-top:-40px}.cloud[_ngcontent-%COMP%]{color:#68afc5;filter:drop-shadow(1px 1px 5px rgb(104,175,197));animation-name:cloudMovement;animation-iteration-count:infinite;animation-duration:10s;animation-timing-function:ease-in-out;animation-direction:alternate}.cityName[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:1px solid #e3e3e3;box-shadow:none;font-size:12px;padding:5.5px}.cityName[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{box-shadow:none}.cityName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid #e3e3e3;padding:0 3px;background-color:#de8d39;line-height:28px;margin:0;display:inline-block;font-size:13px}.cityName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{background:#fff;color:#000;cursor:pointer}@keyframes cloudMovement{0%{margin-left:-55px}to{margin-left:65px}}@media only screen and (max-width:600px){#divWeatherMain[_ngcontent-%COMP%]{width:100%;margin:10px auto}.foreCast[_ngcontent-%COMP%]{text-align:center}.foreCast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:10px 0}}"]}),t})();const u=[{path:"",component:g},{path:"today",component:g}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,i.u5,f]]}),t})()}}]);