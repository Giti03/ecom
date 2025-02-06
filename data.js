const organicProducts = [
  {
    productId: 101,
    productName: "Organic Almonds",
    category: "Nuts & Seeds",
    description: "100% organic almonds, sourced from organic farms, high in protein and fiber.",
    price: 750,
    stock: 150,
    rating: 4.8,
    supplier: "Nature's Best",
    productImageUrl:  "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxob25leXxlbnwwfHx8fDE2ODI5MDk2Nzc&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 102,
    productName: "Organic Honey",
    category: "Sweeteners",
    description: "Raw, unfiltered honey, rich in antioxidants and natural enzymes.",
    price: 500,
    stock: 200,
    rating: 4.7,
    supplier: "Honey Harvest",
    productImageUrl: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxob25leXxlbnwwfHx8fDE2ODI5MDk2Nzc&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 103,
    productName: "Organic Turmeric",
    category: "Spices",
    description: "High-quality turmeric powder with curcumin, harvested from organic farms.",
    price: 300,
    stock: 300,
    rating: 4.9,
    supplier: "Spice Valley",
    productImageUrl: "https://images.unsplash.com/photo-1577979749832-94ccf64a057e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHx0dXJtZXJpY3xlbnwwfHx8fDE2ODI5MDk3NTI&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 104,
    productName: "Organic Green Tea",
    category: "Beverages",
    description: "Loose-leaf green tea, grown without pesticides, promotes digestion.",
    price: 400,
    stock: 120,
    rating: 4.6,
    supplier: "Tea Time Organics",
    productImageUrl: "https://images.unsplash.com/photo-1603046891227-e3174d4bd77f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDM3fHx0ZWF8ZW58MHx8fHwxNjgyOTA5ODE4&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 105,
    productName: "Organic Coconut Oil",
    category: "Oils",
    description: "Cold-pressed virgin coconut oil, ideal for cooking, skincare, and haircare.",
    price: 600,
    stock: 100,
    rating: 4.5,
    supplier: "Pure Essence Organics",
    productImageUrl: "https://images.unsplash.com/photo-1621934488596-8f633cf0d1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI5fHxjb2NvbnV0fGVufDB8fHx8MTY4MjkwOTg4MA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 106,
    productName: "Organic Quinoa",
    category: "Grains & Cereals",
    description: "Gluten-free quinoa, high in protein, iron, and fiber.",
    price: 450,
    stock: 250,
    rating: 4.8,
    supplier: "Grain House",
    productImageUrl: "https://images.unsplash.com/photo-1546802743-132f3d74e35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQ1fHxxdWlub2F8ZW58MHx8fHwxNjgyOTA5OTMw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 107,
    productName: "Organic Brown Rice",
    category: "Grains & Cereals",
    description: "Whole-grain brown rice, low glycemic index, sourced from organic farms.",
    price: 350,
    stock: 180,
    rating: 4.7,
    supplier: "Eco Grain Farms",
    productImageUrl: "https://images.unsplash.com/photo-1605183267750-672f421d18d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxyaWNlfGVufDB8fHx8MTY4MjkxMDAwMw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 108,
    productName: "Organic Kale Chips",
    category: "Snacks",
    description: "Crunchy kale chips, dehydrated and seasoned with natural spices.",
    price: 200,
    stock: 300,
    rating: 4.4,
    supplier: "Green Leaf Snacks",
    productImageUrl: "https://images.unsplash.com/photo-1577916701545-2c66ab2422f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGthbGV8ZW58MHx8fHwxNjgyOTEwMTA3&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 109,
    productName: "Organic Avocados",
    category: "Fresh Produce",
    description: "Fresh, creamy avocados, rich in healthy fats, harvested from organic farms.",
    price: 80,
    stock: 500,
    rating: 4.9,
    supplier: "Fresh Fields",
    productImageUrl: "https://images.unsplash.com/photo-1579771792239-e7b42c6a7914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGF2b2NhZG98ZW58MHx8fHwxNjgyOTEwMTk4&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    productId: 110,
    productName: "Organic Chia Seeds",
    category: "Nuts & Seeds",
    description: "High in omega-3, organic chia seeds perfect for smoothies and baking.",
    price: 350,
    stock: 400,
    rating: 4.7,
    supplier: "Seed Superfoods",
    productImageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNoaWEgc2VlZHN8ZW58MHx8fHwxNjgyOTEwMjkw&ixlib=rb-4.0.3&q=80&w=1080"
  }
];
