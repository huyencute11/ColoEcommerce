 const allProduct = [
  {
    id: 1,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp",
    name: "FEAR OF GOD FOG ESSENTIALS",
    price: "520",
    sale: "-$20%",
    bestSaler: true,
    genner: "women",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 2,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_10-300x300.png",
    name: "Curabitur finibus sapien",
    price: "620",
    new: true,
    genner: "men",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 3,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp",
    name: "Amirilo Logo Check Crew Yellow",
    price: "120",
    bestSaler: true,
    genner: "women",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 4,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.WBUe9pni_n.webp",
    name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
    price: "410",
    new: true,
    genner: "women",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 5,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.qi-sJ2HPdI.webp",
    name: "Annanas",
    price: "180",
    new: true,
    bestSaler: true,
    genner: "women",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 6,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.zZ9BU77Jfy.webp",
    name: "Glasses",
    price: "120",
    bestSaler: true,
    genner: "men",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 7,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.zX5uOkWPYV.webp",
    name: "Wallet",
    price: "320",
    isSale: true,
    genner: "men",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 8,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.I5FJ0ewNHX.webp",
    name: "Cadigan",
    price: "640",
    bestSaler: true,
    genner: "men",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 9,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_11-300x300.png",
    name: "Vivamus et massa massa",
    price: "920",
    genner: "men",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 10,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_12-300x300.png",
    name: "Nulla nibh sagittis augue",
    price: "350",
    isSale: true,
    genner: "women",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 11,
    img: "https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp",
    name: "Silt LV",
    price: "520",
    sale: "30%",
  },
  {
    id: 12,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_2-300x300.png",
    name: "Curabitur finibus sapien",
    price: "760",
  },
  {
    id: 13,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_8-300x300.png",
    name: "Curabitur finibus sapien",
    price: "760",
  },
];

localStorage.setItem("Products",JSON.stringify(allProduct));