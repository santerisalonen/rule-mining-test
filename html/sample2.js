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
      id: "Albania",
      name : "Albania",
      count : 22,
    },
    {
      id: "Espanja",
      name : "Espanja",
      count : 22,
    },
  ],
  rules : [
    {
      source : "Kreikka",
      target : "Kroatia",
      support : 0.2,
      lift : 0.4
    },
    {
      source : "Espanja",
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
  ]
}
