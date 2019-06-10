var loadeddata = {
  nodes : [
    {
      id: "Kreikka",
      name : "Kreikka",
      count : 123,
    },
    {
      id: "Kroatia",
      name : "Kroatia",
      count : 33,
    },
    {
      id: "Thaimaa",
      name : "Thaimaa",
      count : 22,
    },
    {
      id: "Albania",
      name : "Albaina",
      count : 32,
    },
  ],
  rules : [
    {
      source : "Kreikka",
      target : "Kroatia",
      support : 0.1,
      lift : 0.4
    },
    {
      source : "Kreikka",
      target : "Albania",
      support : 0.09,
      lift : 0.9
    },
    {
      source : "Kroatia",
      target : "Albania",
      support : 0.03,
      lift : 2.4
    },
    {
      source : "Kroatia",
      target : "Kreikka",
      support : 0.04,
      lift : 1.1
    },
    {
      source : "Thaimaa",
      target : "Kreikka",
      support : 0.02,
      lift : 0.3
    },
  ]
}
