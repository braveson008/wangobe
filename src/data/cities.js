const cities = [
  {
    name: "New York City",
    areas: [
      {
        name: "Manhattan",
        pricingStrategy: "fixedRate",
        parameters: { rate: 5 },
      },
      {
        name: "Brooklyn",
        pricingStrategy: "fixedRate",
        parameters: { rate: 4 },
      },
    ],
  },
  {
    name: "Washington",
    areas: [
      {
        name: "Downtown",
        pricingStrategy: "timeBasedRate",
        parameters: { dayStart: 8, dayEnd: 20, dayRate: 2, nightRate: 5 },
      },
      { name: "Suburb", pricingStrategy: "fixedRate", parameters: { rate: 3 } },
    ],
  },
];

module.exports = cities;
