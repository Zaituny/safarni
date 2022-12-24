const flights = [
    {
        id: 1,
        time: "4:35pm - 8:20am",
        airline: "Lufthansa",
        duration: "17h 45m (1 stop)",
        layoverTime: "11h 30m in Vienna (VIE)",
        price: "$743",
        tripPerTraveler: "Round trip per traveler",
        included: "Carry-on included",
    },
    {
        id: 2,
        time: "4:35pm - 8:20am",
        airline: "Lufthansa",
        duration: "17h 45m (1 stop)",
        layoverTime: "11h 30m in Vienna (VIE)",
        price: "$743",
        tripPerTraveler: "Round trip per traveler",
        included: "Carry-on included",  
    },
    {
        id: 3,
        time: "4:35pm - 8:20am",
        airline: "Lufthansa",
        duration: "17h 45m (1 stop)",
        layoverTime: "11h 30m in Vienna (VIE)",
        price: "$743",
        tripPerTraveler: "Round trip per traveler",
        included: "Carry-on included",
    },
    {
      id: 4,
      time: "4:35pm - 9:35am",
      airline: "EgyptAir",
      duration: "5h 0m (1 stop)",
      layoverTime: "none",
      price: "$400",
      tripPerTraveler: "Round trip per traveler",
      included: "Carry-on included",
  }
];



export default ()=>{
  async function prepareResults(){
    const response = await fetch("http://localhost:5000/searchresults");
    if(!response.ok){
      alert("error while featching flight data");
      return;
    }
    return await response.json();
     
  }
  const flight = [prepareResults()];
  return flight;
};