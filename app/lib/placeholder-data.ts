// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const alcohol = [
  {
    id: '1',
    name: 'Asahi / Kirin / Sapporo Beer',
    price_small: 6,
    price_large: 9,
    description: 'null',
    image_url: 'null'
  },
  {
    id: '2',
    name: 'Plum Wine',
    price_small: 6,
    price_large: 'null',
    description: 'nulls',
    image_url: 'null'
  },
  {
    id: '3',
    name: 'Red or White Wine',
    price_small: 8,
    price_large: 'null',
    description: 'null',
    image_url: 'null'
  },
  {
    id: '4',
    name: 'Otokoyama Sake',
    price_small: 16,
    price_large: 'null',
    description: 'Served in Traditional Sake box',
    image_url: 'null'
  },
  {
    id: '5',
    name: 'Harushika Sake',
    price_small: 14,
    price_large: 'null',
    description: 'Super Dry Sake',
    image_url: 'null'
  },
  {
    id: '6',
    name: 'Nigori Sake',
    price_small: 14,
    price_large: 'null',
    description: 'Sweet Unfiltered Rice Sake',
    image_url: 'null'
  },
  {
    id: '7',
    name: 'Nama Organic Sake',
    price_small: 16,
    price_large: 'null',
    description: 'An unpasteurized sake that captures the esence of fresh, natural flavors, offering a crips and vibrant taste with every sip.',
    image_url: 'null'
  },
  {
    id: '8',
    name: 'House Hot Sake',
    price_small: 6,
    price_large: 8,
    description: 'null',
    image_url: 'null'
  },
];

const appetizers = [
  {
    id: '1',
    name: 'Edamame',
    price: 6,
    description: 'Experience the delightful crunch of our fresh, tender edamame, lightly salted for the perfect, savory snack.',
    image_url: 'null'
  },
  {
    id: "2",
    name: "Seaweed Salad",
    price: 6,
    description: "A refreshing mix of tender seaweed, crisp vegetables, and a tangy sesame dressing",
    image_url: "null"
  },
  {
    id: "3",
    name: "Agadashi Tofu",
    price: 9,
    description: "Savor our lightly crispy agadashi tofu, served in a delicate dashi broth, garnished with green onions and grated daikon for a touch of umami perfection.",
    image_url: 'null'
  },
  {
    id: "4",
    name: "Gyoza",
    price: 8,
    description: "Filled with a perfect blend of juicy pork and fresh vegetables, pan-fried to crispy perfection and served with a tangy dipping sauce",
    image_url: 'null'
  },
  {
    id: "5",
    name: "Chicken Karage",
    price: 9,
    description: "Marinated to perfection and deep-fried for a golden, crispy finish, served with a zesty lemon wedge",
    image_url: 'null'
  },
  {
    id: "6",
    name: "Daimonji Wings",
    price: 8,
    description: "Try our irresistible chicken wings, perfectly crispy and coated in a tangy, spicy sauce that will keep you coming back for more",
    image_url: 'null'
  },
  {
    id: "7",
    name: "Fried Oysters",
    price: 10,
    description: "Treat yourself to our golden fried oysters, perfectly breaded and crispy, served with a tangy dipping sauce for an irresistible bite",
    image_url: 'null'
  },
  {
    id: "8",
    name: "Ika (Squid Salad)",
    price: 8,
    description: "Savor our refreshing squid salad, featuring tender squid mixed with crisp vegetables and a tangy dressing for a burst of flavor in every bite",
    image_url: "null"
  },
  {
    id: "9",
    name: "Miso Soup",
    price: 4,
    description: "Warm up with our comforting miso soup, featuring a savory broth infused with miso paste, tofu cubes, and wakame seaweed, garnished with fresh green onions",
    image_url: "null"
  },
  {
    id: "10",
    name: "Veggie Tempura",
    price: 10,
    description: "A crispy assortment of seasonal vegetables, lightly battered and fried to golden perfection. A classic favorite that pairs perfectly with our tangy dipping sauce",
    image_url: "null"
  },
  {
    id: "11",
    name: "Okonomiyaki (Japanese Pancake)",
    price: 16,
    description: "A Japanese pancake loaded with fresh ingredients like cabbage, green onions, and tender pork or seafood, all topped with tangy okonomiyaki sauce, creamy mayo, and a sprinkle of bonito flakes. It’s a flavor explosion on your plate!",
    image_url: "null"
  },
];

const bento = [
  {
    id: "1",
    name: "Makunouchi",
    price: 29,
    description: "Chefs choice of sushi & sashimi, chicken cutlet, assorted tempura & edamame",
    image_url: "null"
  },
  {
    id: "2",
    name: "Georgetown",
    price: 28,
    description: "Grilled salmon, assorted tempura, shrimp tempura roll & edamame",
    image_url: "null"
  },
  {
    id: "3",
    name: "Seattle",
    price: 26,
    description: "Chefs choice of sashimi, teriyaki salmon & chicken & edamame",
    image_url: "null"
  },
]

const chirashi = [
  {
    id: "1",
    name: "Salmon Don",
    price: 23,
    description: "Fresh salmon and Ikura on sushi rice",
    image_url: "null"
  },
  {
    id: "2",
    name: "Tuna Don",
    price: 23,
    description: "Fresh tuna on sushi rice",
    image_url: "null"
  },
  {
    id: "3",
    name: "Poke Don",
    price: 22,
    description: "Mixed diced marinated fish on sushi rice",
    image_url: "null"
  },
  {
    id: "4",
    name: "Unagi Don",
    price: 25,
    description: "Broiled fresh water eel on rice and avocado",
    image_url: "null"
  },
  {
    id: "5",
    name: "Daimonji Deluxe",
    price: 28,
    description: "Seasonal Chefs choice over rice",
    image_url: "null"
  },
]

const drinks = [
  {
    id: "1",
    name: "Coke / Diet Coke / Sprite",
    price: 2.5,
    image_url: "null"
  },
  {
    id: "2",
    name: "Gren Tea",
    price: 2.5,
    image_url: "null"
  },
  {
    id: "3",
    name: "Lemonade / Apple Juice",
    price: 3,
    image_url: "null"
  },
]

const handrolls = [
  {
    id: "1",
    name: "Salmon Avocado",
    price: 6,
    description: "Succulent Salmon and Creamy Avocado, all wrapped in Nori and vinegared rice",
    image_url: "null"
  },
  {
    id: "2",
    name: "Four Season",
    price: 8.5,
    description: "Tuna, Salmon, Yellowtail, Albacore, Green Onions",
    image_url: "null"
  },
  {
    id: "3",
    name: "Spicy Tuna",
    price: 6,
    description: "Tender Tuna meets a kick of spice, wrapped with Vinegared Rice and Nori",
    image_url: "null"
  },
  {
    id: "4",
    name: "Eel Avocado",
    price: 7,
    description: "Tender Eel and Creamy Avocado, wrapped with Vinegared Rice and Nori",
    image_url: "null"
  },
]

const nigiri = [
  {
    id: "1",
    name: "Maguro (Tuna)",
    price_nigiri: 7.5,
    price_sashimi: 15,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "2",
    name: "Hamashi (Yellow Tail)",
    price_nigiri: 8,
    price_sashimi: 16,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "3",
    name: "Sake (Atlantic Salmon)",
    price_nigiri: 6,
    price_sashimi: 12,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "4",
    name: "Shiro Maguro (Albacore)",
    price_nigiri: 7.5,
    price_sashimi: 15,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "5",
    name: "Ebi (Shrimp)",
    price_nigiri: 5,
    price_sashimi: 10,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "6",
    name: "Unagi (Freshwater Eel)",
    price_nigiri: 7.5,
    price_sashimi: 15,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "7",
    name: "Wild Sockeye Salmon",
    price_nigiri: 8,
    price_sashimi: 16,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "8",
    name: "Amaebi (Shrimp)",
    price_nigiri: 10,
    price_sashimi: 20,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "9",
    name: "Ikura (House Cured Salmon Roe)",
    price_nigiri: 10,
    price_sashimi: 20,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "10",
    name: "Tobiko (Flying Fish Egg)",
    price_nigiri: 6,
    price_sashimi: 12,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "11",
    name: "Tamago (House Egg Omelette)",
    price_nigiri: 5.5,
    price_sashimi: 11,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "12",
    name: "Inari (Fried Bean Cured)",
    price_nigiri: 5,
    price_sashimi: 10,
    image_url: "null",
    market_price: "null"
  },
  {
    id: "13",
    name: "Fish of the Day",
    price_nigiri: 'null',
    price_sashimi: 'null',
    image_url: "null",
    market_price: 'MP'
  },
]

const noodles = [
  {
    id: "1",
    name: "Tonkotsu Ramen",
    price: 14,
    description: "Savory pork broth, housemade chasu, egg, and seawweed",
    image_url: "null"
  },
  {
    id: "2",
    name: "Tempura Udon",
    price: 16,
    description: "Savory broth, udon, shrimp, and veggie tempura",
    image_url: "null"
  },
  {
    id: "3",
    name: "Beef Sukiyaki",
    price: 19,
    description: "Rich broth, thinly sliced beef, soft tofu, udon, veggies, and rice",
    image_url: "null"
  },
  {
    id: "4",
    name: "Yakisoba",
    price: 14,
    description: "Stir fry noodles with a choice of beef, chicken, or veggie",
    image_url: "null"
  },
]

const rolls = [
  {
    id: "1",
    name: "Four Season",
    price: 14,
    description: "Tuna, Salmon, Yellowtail, Albacore, & Green Onions",
    image_url: "null"
  },
  {
    id: "2",
    name: "Daimonji",
    price: 16,
    description: "California Roll topped with Spicy Tuna & Crunchies",
    image_url: "null"
  },
  {
    id: "3",
    name: "Spider",
    price: 13,
    description: "Soft Shell Crab, Cucumber, Avocado & Tobiko",
    image_url: "null"
  },
  {
    id: "4",
    name: "Ebi Temp",
    price: 13,
    description: "Fried Shrimp, Avocado, Cucumber",
    image_url: "null"
  },
  {
    id: "5",
    name: "Tekka Tuna Maki",
    price: 8,
    description: "Fresh tuna wrapped in a vinegared rice and seaweed roll.",
    image_url: "null"
  },
  {
    id: "6",
    name: "Salmon Maki",
    price: 8,
    description: "Salmon with vinegared rice, wrapped in seaweed",
    image_url: "null"
  },
  {
    id: "7",
    name: "Seattle",
    price: 10,
    description: "Salmon, Crab, Avocado, Mint Leaf",
    image_url: "null"
  },
  {
    id: "8",
    name: "Negi Hama",
    price: 11,
    description: "Yellowtail, Green Onion",
    image_url: "null"
  },
  {
    id: "9",
    name: "Eel Avocado",
    price: 12,
    description: "Freshwater Eel & Avocado",
    image_url: "null"
  },
  {
    id: "10",
    name: "Salmon Skin",
    price: 9,
    description: "Crispy Salmon Skin & Cucumber",
    image_url: "null"
  },
  {
    id: "11",
    name: "Rosanna",
    price: 14,
    description: "Scallop, Crab, Fish Roe, Avocado, Mayo",
    image_url: "null"
  },
  {
    id: "12",
    name: "Red Devil",
    price: 22,
    description: "Extra Spicy Tuna, Avocado, Cucumber, topped with more Tuna, Peppers & Jalapeno",
    image_url: "null"
  },
  {
    id: "13",
    name: "Mad Tiger",
    price: 22,
    description: "California Roll topped with Tuna, Salmon, Eel, Avocado with Mad Sauce",
    image_url: "null"
  },
  {
    id: "14",
    name: "California Roll",
    price: 8,
    description: "Crab, Avocado, Mayo, Cucumber, Roe",
    image_url: "null"
  },
  {
    id: "15",
    name: "Futomaki",
    price: 10,
    description: "Freshwater Eel, Avocado, Egg, Inari",
    image_url: "null"
  },
  {
    id: "16",
    name: "Happy",
    price: 15,
    description: "Wild Sockeye Salmon, Avocado, Ikura & Shiso",
    image_url: "null"
  },{
    id: "17",
    name: "Allison",
    price: 18,
    description: "Crab, Avocado, Cucumber, topped with Albacore, Fish Roe, Green Onion, Roe",
    image_url: "null"
  },
  {
    id: "18",
    name: "Catepillar",
    price: 10,
    description: "Freshwater Eel, Avocado, Cucumber",
    image_url: "null"
  },
  {
    id: "19",
    name: "Lucky",
    price: 16,
    description: "California Topped Seared Salmon served with Fried Onion",
    image_url: "null"
  },
  {
    id: "20",
    name: "Dragon",
    price: 10,
    description: "Tempura Prawn & Cucumber, topped with Freshwater Eel & Avocado",
    image_url: "null"
  },
  {
    id: "21",
    name: "Spicy Crazy Dragon",
    price: 22,
    description: "Tempura Prawn & Cucumber topped with Salmon & Freshwater Eel",
    image_url: "null"
  },
]

const signatureCombo = [
  {
    id: "1",
    name: "Daimonji Sampler",
    price: 27,
    description: "Chef choice sashimi (6pc). Nigiri (3pc), spicy tuna, hand roll, and miso soup",
    image_url: "null"
  },
  {
    id: "2",
    name: "Sushi Combo",
    price: 25,
    description: "Tuna, salmon, yellowtail, albacore, ebi shrimp, tamago egg, spicy tuna roll, and miso soup",
    image_url: "null"
  },
  {
    id: "3",
    name: "Sashimi Combo",
    price: 28,
    description: "Yellowtail, salmon, tuna, albacore, ebi, and miso soup",
    image_url: "null"
  },
]

const signatureDishes = [
  {
    id: "1",
    name: "Curry Katsu Donburi",
    price: 16.50,
    description: "Chicken or Pork with house curry over rice",
    image_url: "null"
  },
  {
    id: "2",
    name: "Nikku Beef Donburi",
    price: 17,
    description: "Simmered beef & onions on bowl of rice",
    image_url: "null"
  },
  {
    id: "3",
    name: "Kasuzuke Black Cod (2 Pieces)",
    price: 28,
    description: "House marinated Alaskan black cod with rice & salad",
    image_url: "null"
  },
  {
    id: "4",
    name: "Saba Shio",
    price: 18.50,
    description: "Grilled mackerel with sea salt & pepper with rice & salad",
    image_url: "null"
  },
  {
    id: "5",
    name: "Teriyaki Chicken or Beef",
    price: 17.50,
    description: "Teriyaki sauce with onions and rice",
    image_url: "null"
  },
  {
    id: "6",
    name: "Teriyaki Salmon",
    price: 19.50,
    description: "Grilled Atlantic salmon with rice & salad",
    image_url: "null"
  },
  {
    id: "7",
    name: "Tempura Dinner",
    price: 19,
    description: "Assorted shrimp, yam, squash, green beans & rice",
    image_url: "null"
  },
  {
    id: "8",
    name: "Daimonji Dinner Combo",
    price: 30,
    description: "Chefs choice sushi, assorted tempura, rice, salad, miso soup, and one choice of the following item: 1) Teriyaki Chicken or Beef 2) Grilled Saba (Macakerel) 3) Teriyaki Salmon (2pc) 4) Black Cod Kasuzake (add $4)",
    image_url: "null"
  },
]

const veggieRoll = [
  {
    id: "1",
    name: "Avocado",
    price: 6,
    description: "Creamy Avocado slices wrapped in Vinegared Rice and Nori",
    image_url: "null"
  },
  {
    id: "2",
    name: "Cucumber",
    price: 6,
    description: "Crunchy Cucumber wrapped in Vinegared Rice and Nori",
    image_url: "null"
  },
  {
    id: "3",
    name: "Cucumber Avocado",
    price: 8,
    description: "Crisp Cucumber and Creamy Avocado combine with Vinegared Rice and Nori",
    image_url: "null"
  },
  {
    id: "4",
    name: "Ume Shiso",
    price: 6,
    description: "Tangy Pickled Plum and fragrant Shiso Leaf, wrapped with Vinegared Rice and Nori",
    image_url: "null"
  },
  {
    id: "5",
    name: "Yummy",
    price: 10,
    description: "Shiso Leaf, Avocado, Inari, Kaiware",
    image_url: "null"
  },
  {
    id: "6",
    name: "Veggie Tempura",
    price: 10,
    description: "Crispy Tempura Vegetables, wrapped with Vinegared Rice and Crisp Nori",
    image_url: "null"
  }
]

export { alcohol, appetizers, bento, chirashi, drinks, handrolls, nigiri, noodles, rolls, signatureCombo, signatureDishes, veggieRoll };
