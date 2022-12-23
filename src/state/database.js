import axios from "axios";
import Mock from "./mock";

const database = {
  menu: [
    {
      name: "English",
      url: "/home",
    },
    {
      name: "Forum",
      url: "/forum",
    },
    {
      name: "Support",
      url: "/support",
    },
    {
      name: "Trips",
      url: "/trips",
    },
  ],
  users: [{Username: "admin",
           Password: "1234",
           Email: "testmail@gmail.com",
           firtName: "Mo",
           lastName: "Z"},
           {Username: "sakr",
           Password: "56789",
           Email: "testmail1@gmail.com",
           firtName: "ahmed",
           lastName: "sakr"},
           {Username: "sasa",
           Password: "12345",
           Email: "testmail2@gmail.com",
           firtName: "ahmed",
           lastName: "mostafa"}],
  owners: [{}],
  properties: [{}]
};


Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});

