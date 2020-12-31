//Name: Vuochlang Chang
//Date: 10/6/2020
//HW3: Underscore Functional Programming
//Data-Used: https://xinghuizhao.github.io/wsudata/wsudgrs.js
//Run with: https://jsfiddle.net/

console.log(wsudgrs.length);

function totalDegrees(data){
	return(	_.reduce(data,
  		function(memo,degree) {return memo+degree.AWARDS;},
          	0));
}
console.log("Total Degree= "+totalDegrees(wsudgrs));

function percentagePhD(data){
    let totalDegree=totalDegrees(data);
    let phdDegreeArray=_.filter(data, function(degree) {return degree.Level==="Doctoral";});
    let phdDegrees=totalDegrees(phdDegreeArray);
    return((phdDegrees/totalDegree)*100);
}
console.log("Percentage PhD (%)= "+percentagePhD(wsudgrs)+"%");

function totalDegreesByYear(data, year){
	let degreeByYear=_.filter(data, function(degree) {return degree.FISCAL_YEAR===year;});
  return totalDegrees(degreeByYear);
}
console.log("Total Degree By Year(2014)= "+totalDegreesByYear(wsudgrs,2014));

function listCampuses(data){
	let arrayOfListCampuses=_.uniq(data, true, "CAMPUS");
  return(_.pluck(arrayOfListCampuses,"CAMPUS"));
}
console.log("List of Campuses= "+listCampuses(wsudgrs));

function listCampusDegrees(data){
  let groupCampus=_.groupBy(data,"CAMPUS");
  return(_.mapObject(groupCampus,
      function(val, key) {return totalDegrees(val)}));
}
console.log(listCampusDegrees(wsudgrs));

function maxDegrees(data){
	let groupYear=_.groupBy(data,"FISCAL_YEAR");
  return(_.max(_.mapObject(groupYear, 
      function(val, key) {return totalDegrees(val)})));
}
console.log("Max Degree= "+maxDegrees(wsudgrs));
