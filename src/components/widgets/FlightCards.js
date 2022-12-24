async function prepareResults(){
    const response = await fetch("http://localhost:5000/searchresults");
    if(!response.ok){
      alert("error while featching flight data");
      return;
    }
    return await response.json();
     
  }

// const flights = [
//     {
//         id: 1,
//         time: "4:35pm - 8:20am",
//         destination: "Cairo (CAI) - London (LHR)",
//         airline: "Lufthansa",
//         duration: "17h 45m (1 stop)",
//         layoverTime: "11h 30m in Vienna (VIE)",
//         price: "$743",
//         tripPerTraveler: "Round trip per traveler",
//         included: "Carry-on included",
//     },
//     {
//         id: 2,
//         time: "4:35pm - 8:20am",
//         destination: "Cairo (CAI) - London (LHR)",
//         airline: "Lufthansa",
//         duration: "17h 45m (1 stop)",
//         layoverTime: "11h 30m in Vienna (VIE)",
//         price: "$743",
//         tripPerTraveler: "Round trip per traveler",
//         included: "Carry-on included",  
//     },
//     {
//         id: 3,
//         time: "4:35pm - 8:20am",
//         destination: "Cairo (CAI) - London (LHR)",
//         airline: "Lufthansa",
//         duration: "17h 45m (1 stop)",
//         layoverTime: "11h 30m in Vienna (VIE)",
//         price: "$743",
//         tripPerTraveler: "Round trip per traveler",
//         included: "Carry-on included",
//     }
// ];
export default prepareResults;