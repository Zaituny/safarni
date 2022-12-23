const hotels = [
    {
        id: 1,
        name:"Hyatt Place London",
        star: [...Array(5)].map((e, i) => <i className="fa-solid fa-star" key={i}></i>),
        img:"https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg",
        description:"Consider a stay at Hyatt Place London Heathrow Airport and take advantage of dry cleaning/laundry services, a bar, and a gym. The onsite restaurant, Gallery Café, features British cuisine. Free in-room WiFi, with speed of 500+ Mbps.",
        rating:"9.0/10",
        reviews:"Wonderful (1,200 reviews)",
        price:"$121",
        payEvery:"per night",
    },
    {
        id: 2,
        name:"Hyatt Place London",
        star: [...Array(3)].map((e, i) => <i className="fa-solid fa-star" key={i}></i>),
        img:"https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg",
        description:"Consider a stay at Hyatt Place London Heathrow Airport and take advantage of dry cleaning/laundry services, a bar, and a gym. The onsite restaurant, Gallery Café, features British cuisine. Free in-room WiFi, with speed of 500+ Mbps.",
        rating:"9.0/10",
        reviews:"Wonderful (1,200 reviews)",
        price:"$121",
        payEvery:"per night",  
    },
    {
        id: 3,
        name:"Hyatt Place London",
        star: [...Array(2)].map((e, i) => <i className="fa-solid fa-star" key={i}></i>),
        img:"https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg",
        description:"Consider a stay at Hyatt Place London Heathrow Airport and take advantage of dry cleaning/laundry services, a bar, and a gym. The onsite restaurant, Gallery Café, features British cuisine. Free in-room WiFi, with speed of 500+ Mbps.",
        rating:"9.0/10",
        reviews:"Wonderful (1,200 reviews)",
        price:"$121",
        payEvery:"per night",
    }
];
export default hotels;