export interface City {
  id: number;
  name: string;
  countryCode: string;
  top: string;
  left: string;
}

export const cities: City[] = [
  {
    id: 1,
    name: "بيروت، لبنان",
    countryCode: "LB",
    top: "6%",
    left: "10%",
  },
  {
    id: 2,
    name: "عمان، الأردن",
    countryCode: "JO",
    top: "22%",
    left: "13%",
  },
  {
    id: 3,
    name: "القاهرة، مصر",
    countryCode: "EG",
    top: "40%",
    left: "3%",
  },
  {
    id: 4,
    name: "الرياض، السعودية",
    countryCode: "SA",
    top: "20%",
    left: "38%",
  },
  {
    id: 5,
    name: "الكويت، الكويت",
    countryCode: "KW",
    top: "35%",
    left: "58%",
  },
  {
    id: 6,
    name: "بغداد، العراق",
    countryCode: "IQ",
    top: "15%",
    left: "80%",
  },
  {
    id: 7,
    name: "المنامة، البحرين",
    countryCode: "BH",
    top: "55%",
    left: "43%",
  },
  {
    id: 8,
    name: "الدوحة، قطر",
    countryCode: "QA",
    top: "55%",
    left: "75%",
  },
];
