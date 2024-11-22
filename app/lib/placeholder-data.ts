// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const alcohol = [
  {
    name: "Asahi / Kirin / Sapporo Beer",
    price_small: 6,
    price_large: 9,
    description: null,
    image_url: "https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2021/05/25125746/592447169.asd_.25oz.can_-768x768.png",
  },
  {
    name: "Plum Wine",
    price_small: 6,
    price_large: null,
    description: null,
    image_url: "https://media.istockphoto.com/id/1291170323/photo/close-up-of-tables-tableware-and-a-cup-of-plum-wine-in-a-japanese-restaurant.jpg?s=2048x2048&w=is&k=20&c=Nb69rXe0TA5HZFOfczoIPjX2gUJhKUjZKhzRAjmZukU=",
  },
  {
    name: "Red or White Wine",
    price_small: 8,
    price_large: null,
    description: null,
    image_url: "/images/alcohol/red-white-wine.jpg",
  },
  {
    name: "Otokoyama Sake",
    price_small: 16,
    price_large: null,
    description: "Served in Traditional Sake box",
    image_url: "/images/alcohol/otokoyama-sake.jpg",
  },
  {
    name: "Harushika Sake",
    price_small: 14,
    price_large: null,
    description: "Super Dry Sake",
    image_url: "https://www.truesake.com/cdn/shop/products/JG132-02_HarushikaJunmaiGinjo_720ml_WM_1036x1555.png?v=1675378984",
  },
  {
    name: "Nigori Sake",
    price_small: 14,
    price_large: null,
    description: "Sweet Unfiltered Rice Sake",
    image_url: "https://nomageddon.com/wp-content/uploads/2017/04/Nigori-Sake-2.jpg",
  },
  {
    name: "Nama Organic Sake",
    price_small: 16,
    price_large: null,
    description:
      "An unpasteurized sake that captures the esence of fresh, natural flavors, offering a crips and vibrant taste with every sip.",
    image_url: "https://shop.takarasake.com/cdn/shop/products/D_SCB_20Organic_20Nama_20300ml_p20_l_p20_z1000.png?v=1708427682",

  },
  {
    name: "House Hot Sake",
    price_small: 6,
    price_large: 8,
    description: null,
    image_url: "https://media.istockphoto.com/id/1297277631/photo/sake-pouring-traditional-distilled-and-fermented-alcohol-from-japan-served-hot-black.jpg?s=2048x2048&w=is&k=20&c=DqY0DSx9CmudCuiplBJHoT4tZdROUac_45LTSKEFm0s=",

  },
];

const appetizers = [
  {
    name: "Edamame",
    price: 6,
    description:
      "Experience the delightful crunch of our fresh, tender edamame, lightly salted for the perfect, savory snack.",
    image_url: "/images/appetizers/edamame.jpg",
  },
  {
    name: "Seaweed Salad",
    price: 6,
    description:
      "A refreshing mix of tender seaweed, crisp vegetables, and a tangy sesame dressing",
    image_url: "/images/appetizers/seaweed-salad.jpg",
  },
  {
    name: "Agadashi Tofu",
    price: 9,
    description:
      "Savor our lightly crispy agadashi tofu, served in a delicate dashi broth, garnished with green onions and grated daikon for a touch of umami perfection.",
    image_url: "/images/appetizers/agadashi-tofu.jpg",
  },
  {
    name: "Gyoza",
    price: 8,
    description:
      "Filled with a perfect blend of juicy pork and fresh vegetables, pan-fried to crispy perfection and served with a tangy dipping sauce",
    image_url: "/images/appetizers/gyoza.jpg",
  },
  {
    name: "Chicken Karage",
    price: 9,
    description:
      "Marinated to perfection and deep-fried for a golden, crispy finish, served with a zesty lemon wedge",
    image_url: "/images/appetizers/chicken-karage.jpg",
  },
  {
    name: "Daimonji Wings",
    price: 8,
    description:
      "Try our irresistible chicken wings, perfectly crispy and coated in a tangy, spicy sauce that will keep you coming back for more",
    image_url: "/images/appetizers/chicken-wings.jpg",
  },
  {
    name: "Fried Oysters",
    price: 10,
    description:
      "Treat yourself to our golden fried oysters, perfectly breaded and crispy, served with a tangy dipping sauce for an irresistible bite",
    image_url: "/images/appetizers/fried-oysters.jpg",
  },
  {
    name: "Ika (Squid Salad)",
    price: 8,
    description:
      "Savor our refreshing squid salad, featuring tender squid mixed with crisp vegetables and a tangy dressing for a burst of flavor in every bite",
    image_url: "/images/appetizers/squid-salad.jpg",
  },
  {
    name: "Miso Soup",
    price: 4,
    description:
      "Warm up with our comforting miso soup, featuring a savory broth infused with miso paste, tofu cubes, and wakame seaweed, garnished with fresh green onions",
    image_url: "/images/appetizers/miso-soup.jpg",
  },
  {
    name: "Veggie Tempura",
    price: 10,
    description:
      "A crispy assortment of seasonal vegetables, lightly battered and fried to golden perfection. A classic favorite that pairs perfectly with our tangy dipping sauce",
    image_url: "/images/appetizers/veggie-tempura.jpg",
  },
  {
    name: "Okonomiyaki (Japanese Pancake)",
    price: 16,
    description:
      "A Japanese pancake loaded with fresh ingredients like cabbage, green onions, and tender pork or seafood, all topped with tangy okonomiyaki sauce, creamy mayo, and a sprinkle of bonito flakes. It’s a flavor explosion on your plate!",
    image_url: "/images/appetizers/okonomiyaki.jpg",
  },
];

const bento = [
  {
    name: "Makunouchi",
    price: 29,
    description:
      "Chefs choice of sushi & sashimi, chicken cutlet, assorted tempura & edamame",
    image_url: "/images/bento/makunouchi.jpg",
  },
  {
    name: "Georgetown",
    price: 28,
    description:
      "Grilled salmon, assorted tempura, shrimp tempura roll & edamame",
    image_url: "/images/bento/georgetown.jpg",
  },
  {
    name: "Seattle",
    price: 26,
    description: "Chefs choice of sashimi, teriyaki salmon & chicken & edamame",
    image_url: "/images/bento/seattle.jpg",
  },
];

const chirashi = [
  {
    name: "Salmon Don",
    price: 23,
    description: "Fresh salmon and Ikura on sushi rice",
    image_url: "https://media.istockphoto.com/id/1431526155/photo/spicy-salmon-don.jpg?s=1024x1024&w=is&k=20&c=WYfAtIeSk2UGpbRUVK3Ofg_iu-EsTuEFhNYTZppxqnk=",
  },
  {
    name: "Tuna Don",
    price: 23,
    description: "Fresh tuna on sushi rice",
    image_url: "https://cdn.pixabay.com/photo/2017/08/01/08/48/sashimi-2563650_1280.jpg",
  },
  {
    name: "Poke Don",
    price: 22,
    description: "Mixed diced marinated fish on sushi rice",
    image_url: "/images/chirashi/Poke-don.jpg",
  },
  {
    name: "Unagi Don",
    price: 25,
    description: "Broiled fresh water eel on rice and avocado",
    image_url: "https://cdn.pixabay.com/photo/2023/04/27/04/08/unagi-7953712_1280.jpg",
  },
  {
    name: "Daimonji Deluxe",
    price: 28,
    description: "Seasonal Chefs choice over rice",
    image_url: "/images/chirashi/Deluxe-bowl.jpg",
  },
];

const drinks = [
  {
    name: "Coke / Diet Coke / Sprite",
    price: 2.5,
    image_url: "https://cdn.pixabay.com/photo/2015/10/13/21/12/soft-drink-986803_1280.jpg",
  },
  {
    name: "Green Tea",
    price: 2.5,
    image_url: "https://cdn.pixabay.com/photo/2017/05/30/12/21/tea-2356770_1280.jpg",
  },
  {
    name: "Lemonade / Apple Juice",
    price: 3,
    image_url: "https://cdn.pixabay.com/photo/2019/07/15/18/48/lemonade-4340174_1280.jpg",
  },
];

const handrolls = [
  {
    name: "Salmon Avocado",
    price: 6,
    description:
      "Succulent Salmon and Creamy Avocado, all wrapped in Nori and vinegared rice",
    image_url: "https://cdn.pixabay.com/photo/2018/05/26/18/53/avocado-3432007_1280.jpg",
  },
  {
    name: "Four Season",
    price: 8.5,
    description: "Tuna, Salmon, Yellowtail, Albacore, Green Onions",
    image_url: "https://cdn.pixabay.com/photo/2024/05/02/18/08/rolls-8735316_1280.jpg",
  },
  {
    name: "Spicy Tuna",
    price: 6,
    description:
      "Tender Tuna meets a kick of spice, wrapped with Vinegared Rice and Nori",
    image_url: "/images/roll/spicy-tuna.jpg",
  },
  {
    name: "Eel Avocado",
    price: 7,
    description:
      "Tender Eel and Creamy Avocado, wrapped with Vinegared Rice and Nori",
    image_url: "/images/roll/eel-avocado.jpg",
  },
];

const nigiri = [
  {
    name: "Maguro (Tuna)",
    price_nigiri: 7.5,
    price_sashimi: 15,
    image_url: "/images/roll/tuna.jpg",
    market_price: null,
  },
  {
    name: "Hamashi (Yellow Tail)",
    price_nigiri: 8,
    price_sashimi: 16,
    image_url: "/images/roll/yellowtail.jpg",
    market_price: null,
  },
  {
    name: "Sake (Atlantic Salmon)",
    price_nigiri: 6,
    price_sashimi: 12,
    image_url: "/images/roll/salmon.jpg",
    market_price: null,
  },
  {
    name: "Shiro Maguro (Albacore)",
    price_nigiri: 7.5,
    price_sashimi: 15,
    image_url: "/images/roll/albacore.jpg",
    market_price: null,
  },
  {
    name: "Ebi (Shrimp)",
    price_nigiri: 5,
    price_sashimi: 10,
    image_url: "/images/roll/ebi-shrimp.jpg",
    market_price: null,
  },
  {
    name: "Unagi (Freshwater Eel)",
    price_nigiri: 7.5,
    price_sashimi: 15,
    image_url: "/images/roll/unagi.jpg",
    market_price: null,
  },
  {
    name: "Wild Sockeye Salmon",
    price_nigiri: 8,
    price_sashimi: 16,
    image_url: "/images/roll/wild-salmon.jpg",
    market_price: null,
  },
  {
    name: "Amaebi (Shrimp)",
    price_nigiri: 10,
    price_sashimi: 20,
    image_url: "/images/roll/amaebi.jpg",
    market_price: null,
  },
  {
    name: "Ikura (House Cured Salmon Roe)",
    price_nigiri: 10,
    price_sashimi: 20,
    image_url: "/images/roll/ikura.jpg",
    market_price: null,
  },
  {
    name: "Tobiko (Flying Fish Egg)",
    price_nigiri: 6,
    price_sashimi: 12,
    image_url: "/images/roll/tobiko.jpg",
    market_price: null,
  },
  {
    name: "Tamago (House Egg Omelette)",
    price_nigiri: 5.5,
    price_sashimi: 11,
    image_url: "/images/roll/tamago.jpg",
    market_price: null,
  },
  {
    name: "Inari (Fried Bean Cured)",
    price_nigiri: 5,
    price_sashimi: 10,
    image_url: "/images/roll/inari.jpg",
    market_price: null,
  },
  {
    name: "Fish of the Day",
    price_nigiri: null,
    price_sashimi: null,
    image_url: "/images/roll/fish-of-day.jpg",
    market_price: "MP",
  },
];

const noodles = [
  {
    name: "Tonkotsu Ramen",
    price: 14,
    description: "Savory pork broth, housemade chasu, egg, and seawweed",
    image_url: "https://cdn.pixabay.com/photo/2022/05/10/18/50/ramen-7187810_1280.jpg",
  },
  {
    name: "Tempura Udon",
    price: 16,
    description: "Savory broth, udon, shrimp, and veggie tempura",
    image_url: "https://cdn.pixabay.com/photo/2019/03/19/10/12/udon-noodles-4065311_1280.jpg",
  },
  {
    name: "Beef Sukiyaki",
    price: 19,
    description:
      "Rich broth, thinly sliced beef, soft tofu, udon, veggies, and rice",
    image_url: "https://cdn.pixabay.com/photo/2022/01/11/11/51/dish-6930432_1280.jpg",
  },
  {
    name: "Yakisoba",
    price: 14,
    description: "Stir fry noodles with a choice of beef, chicken, or veggie",
    image_url: "https://cdn.pixabay.com/photo/2021/07/12/06/15/yakisoba-6405452_1280.jpg",
  },
];

const rolls = [
  {
    name: "Four Season",
    price: 14,
    description: "Tuna, Salmon, Yellowtail, Albacore, & Green Onions",
    image_url: "/images/roll/four-season.jpg",
  },
  {
    name: "Daimonji",
    price: 16,
    description: "California Roll topped with Spicy Tuna & Crunchies",
    image_url: "/images/roll/daimonji.jpg",
  },
  {
    name: "Spider",
    price: 13,
    description: "Soft Shell Crab, Cucumber, Avocado & Tobiko",
    image_url: "/images/roll/spider.jpg",
  },
  {
    name: "Ebi Temp",
    price: 13,
    description: "Fried Shrimp, Avocado, Cucumber",
    image_url: "/images/roll/ebi-temp.jpg",
  },
  {
    name: "Tekka Tuna Maki",
    price: 8,
    description: "Fresh tuna wrapped in a vinegared rice and seaweed roll",
    image_url: "/images/roll/tekka-tuna-maki.jpg",
  },
  {
    name: "Salmon Maki",
    price: 8,
    description: "Salmon with vinegared rice, wrapped in seaweed",
    image_url: "/images/roll/salmon-maki.jpg",
  },
  {
    name: "Seattle",
    price: 10,
    description: "Salmon, Crab, Avocado, Mint Leaf",
    image_url: "/images/roll/seattle.jpg",
  },
  {
    name: "Negi Hama",
    price: 11,
    description: "Yellowtail, Green Onion",
    image_url: "/images/roll/negi-hama.jpg",
  },
  {
    name: "Eel Avocado",
    price: 12,
    description: "Freshwater Eel & Avocado",
    image_url: "/images/roll/eel-avocado.jpg",
  },
  {
    name: "Salmon Skin",
    price: 9,
    description: "Crispy Salmon Skin & Cucumber",
    image_url: "/images/roll/salmon-skin.jpg",
  },
  {
    name: "Rosanna",
    price: 14,
    description: "Scallop, Crab, Fish Roe, Avocado, Mayo",
    image_url: "/images/roll/rosanna.jpg",
  },
  {
    name: "Red Devil",
    price: 22,
    description:
      "Extra Spicy Tuna, Avocado, Cucumber, topped with more Tuna, Peppers & Jalapeno",
    image_url: "/images/roll/red-devil.jpg",
  },
  {
    name: "Mad Tiger",
    price: 22,
    description:
      "California Roll topped with Tuna, Salmon, Eel, Avocado with Mad Sauce",
    image_url: "/images/roll/mad-tiger.jpg",
  },
  {
    name: "California Roll",
    price: 8,
    description: "Crab, Avocado, Mayo, Cucumber, Roe",
    image_url: "/images/roll/california-roll.jpg",
  },
  {
    name: "Futomaki",
    price: 10,
    description: "Freshwater Eel, Avocado, Egg, Inari",
    image_url: "/images/roll/futomaki.jpg",
  },
  {
    name: "Happy",
    price: 15,
    description: "Wild Sockeye Salmon, Avocado, Ikura & Shiso",
    image_url: "/images/roll/happy.jpg",
  },
  {
    name: "Allison",
    price: 18,
    description:
      "Crab, Avocado, Cucumber, topped with Albacore, Fish Roe, Green Onion, Roe",
    image_url: "/images/roll/allison.jpg",
  },
  {
    name: "Caterpillar",
    price: 10,
    description: "Freshwater Eel, Avocado, Cucumber",
    image_url: "/images/roll/caterpillar.jpg",
  },
  {
    name: "Lucky",
    price: 16,
    description: "California Topped Seared Salmon served with Fried Onion",
    image_url: "/images/roll/lucky.jpg",
  },
  {
    name: "Dragon",
    price: 10,
    description:
      "Tempura Prawn & Cucumber, topped with Freshwater Eel & Avocado",
    image_url: "/images/roll/dragon.jpg",
  },
  {
    name: "Spicy Crazy Dragon",
    price: 22,
    description: "Tempura Prawn & Cucumber topped with Salmon & Freshwater Eel",
    image_url: "/images/roll/spicy-crazy-dragon.jpg",
  },
];

const signatureCombo = [
  {
    name: "Daimonji Sampler",
    price: 27,
    description:
      "Chef choice sashimi (6pc). Nigiri (3pc), spicy tuna, hand roll, and miso soup",
    image_url: "/images/roll/daimonji-sampler.jpg",
  },
  {
    name: "Sushi Combo",
    price: 25,
    description:
      "Tuna, salmon, yellowtail, albacore, ebi shrimp, tamago egg, spicy tuna roll, and miso soup",
    image_url: "/images/roll/sushi-combo.jpg",
  },
  {
    name: "Sashimi Combo",
    price: 28,
    description: "Yellowtail, salmon, tuna, albacore, ebi, and miso soup",
    image_url: "/images/roll/sashimi-combo.jpg",
  },
];

const signatureDishes = [
  {
    name: "Curry Katsu Donburi",
    price: 16.5,
    description: "Chicken or Pork with house curry over rice",
    image_url: "https://cdn.pixabay.com/photo/2015/10/01/14/29/curry-967086_1280.jpg",
  },
  {
    name: "Nikku Beef Donburi",
    price: 17,
    description: "Simmered beef & onions on bowl of rice",
    image_url: "https://cdn.pixabay.com/photo/2021/07/07/19/10/donburi-6395130_1280.jpg",
  },
  {
    name: "Kasuzuke Black Cod (2 Pieces)",
    price: 28,
    description: "House marinated Alaskan black cod with rice & salad",
    image_url: "https://cdn.pixabay.com/photo/2018/11/19/05/37/food-3824648_1280.jpg",
  },
  {
    name: "Saba Shio",
    price: 18.5,
    description: "Grilled mackerel with sea salt & pepper with rice & salad",
    image_url: "https://cdn.pixabay.com/photo/2018/04/28/16/09/mackerel-3357565_1280.jpg",
  },
  {
    name: "Teriyaki Chicken or Beef",
    price: 17.5,
    description: "Teriyaki sauce with onions and rice",
    image_url: "https://cdn.pixabay.com/photo/2022/06/07/21/00/chicken-7249273_1280.jpg",
  },
  {
    name: "Teriyaki Salmon",
    price: 19.5,
    description: "Grilled Atlantic salmon with rice & salad",
    image_url: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
  },
  {
    name: "Tempura Dinner",
    price: 19,
    description: "Assorted shrimp, yam, squash, green beans & rice",
    image_url: "https://cdn.pixabay.com/photo/2020/04/20/07/28/japan-food-5066736_1280.jpg",
  },
  {
    name: "Daimonji Dinner Combo",
    price: 30,
    description:
      "Chefs choice sushi, assorted tempura, rice, salad, miso soup, and one choice of the following item: 1) Teriyaki Chicken or Beef 2) Grilled Saba (Macakerel) 3) Teriyaki Salmon (2pc) 4) Black Cod Kasuzake (add $4)",
    image_url: "/images/roll/daimonji-dinner-combo.jpg",
  },
];

const veggieRoll = [
  {
    name: "Avocado",
    price: 6,
    description: "Creamy Avocado slices wrapped in Vinegared Rice and Nori",
    image_url: "https://cdn.pixabay.com/photo/2017/08/07/21/53/sushi-2608281_1280.jpg",
  },
  {
    name: "Cucumber",
    price: 6,
    description: "Crunchy Cucumber wrapped in Vinegared Rice and Nori",
    image_url: "https://cdn.pixabay.com/photo/2015/04/10/15/59/maki-716432_1280.jpg",
  },
  {
    name: "Cucumber Avocado",
    price: 8,
    description:
      "Crisp Cucumber and Creamy Avocado combine with Vinegared Rice and Nori",
    image_url: "https://cdn.pixabay.com/photo/2017/03/02/20/53/sushi-2112350_1280.jpg",
  },
  {
    name: "Ume Shiso",
    price: 6,
    description:
      "Tangy Pickled Plum and fragrant Shiso Leaf, wrapped with Vinegared Rice and Nori",
    image_url: "/images/roll/ume-shiso.jpg",
  },
  {
    name: "Yummy",
    price: 10,
    description: "Shiso Leaf, Avocado, Inari, Kaiware",
    image_url: "/images/roll/yummy.jpg",
  },
  {
    name: "Veggie Tempura",
    price: 10,
    description:
      "Crispy Tempura Vegetables, wrapped with Vinegared Rice and Crisp Nori",
    image_url: "/images/roll/veggie-tempura.jpg",
  },
];

export {
  alcohol,
  appetizers,
  bento,
  chirashi,
  drinks,
  handrolls,
  nigiri,
  noodles,
  rolls,
  signatureCombo,
  signatureDishes,
  veggieRoll,
};
