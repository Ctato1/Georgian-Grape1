// all images imported from images directory
import product_01 from "https://www.topgeorgian.wine/wp-content/uploads/2022/11/WT0089-menabde-wines-khashmis-saperavi-2021.jpg";

import product_02 from "https://www.topgeorgian.wine/wp-content/uploads/2022/07/WT0076-khmelos-marani-shavkapito-kasris-2021.jpg";

import product_03 from "https://www.topgeorgian.wine/wp-content/uploads/2022/11/QV0138-niamori-chinuri-qvevri-2021-600x600.jpg";

import product_04 from "https://www.topgeorgian.wine/wp-content/uploads/2022/11/QV0139-niamori-rkatsiteli-qvevri-2021-600x600.jpg";

import product_05 from "https://www.topgeorgian.wine/wp-content/uploads/2022/11/QV0144-niamori-tavkveri-qvevri-2021-600x600.jpg";

const products = [
  {
    id: "01",
    title: "Khashmis Saperavi",
    geoName: "ხაშმის საფერავი",
    price: 27.0,
    imgUrl: product_01,

    category: "dry red",

    desc: `წითელი მშრალი ღვინო წითელი და შავი კენკრის ხილის, მაყვლის, მოცვის, ანწლის არომატებით და სუსტად გამოხატული სანელებლების ტონებით. რეკომენდირებულია მისი მირთმევა ნანადირევ ან წითელ ხორცთან, შესუნელებულ ღორის ხორცთან, საქონლის ხორცთან, ფრინველის შემწვარ ხორცთან და მაგარ ყველთან ერთად.`,
  },

  {
    id: "02",
    title: "Shavkapito",
    geoName: "შავკაპიტო",
    price: 25.0,
    imgUrl: product_02,

    category: "dry red",

    desc: `
    წითელი მშრალი კასრის ღვინო, მაყვლის, მოცხარის, ალუბლის, შავი კენკრის და შავი ქლიავის ჩირის არომატებით. რეკომენდირებულია მისი მირთმევა ხბოს ხორცთან, ფრინველის ხორცთან, ლორთან, ხამონთან, ნანადირევთან, პასტასთან და ყველთან ერთად.`,
  },

  {
    id: "03",
    title: "Chinuri",
    geoName: "ჩინური",
    price: 22.0,
    imgUrl: product_03,

    category: "dry white",

    desc: `
    თეთრი მშრალი ქვევრის ღვინო ატმის, მსხლის, თეთრი კენკროვანი ხილის, კომშის და ჩირების არომატებით. გემოზე სასიამოვნო დაბოლოებით. რეკომენდირებულია მისი მირთმევა ფრინველის ხორცთან, ზღვის პროდუქტებთან, ხილთან და მაგარ ყველთან ერთად.`,
  },

  {
    id: "04",
    title: "Rkatsiteli",
    geoName: "რქაწითელი",
    price: 18.0,
    imgUrl: product_04,

    category: "dry white",

    desc: `
    თეთრი მშრალი ქვევრის ღვინო ტროპიკური ხილის, მინდვრის ყვავილების, კომშის, ატმის, გულაბი მსხლის და ჩირების არომატებით. რეკომენდირებულია მისი მირთმევა თეთრ ხორცთან, თევზეულთან, ბოსტნეულთან და მაგარ ყველთან ერთად.`,
  },

  {
    id: "05",
    title: "Tavkveri",
    geoName: "თავკვერი",
    price: 18.0,
    imgUrl: product_05,

    category: "dry white",

    desc: `
წითელი მშრალი ქვევრის ღვინო წითელი ხილის, ჟოლოს, მოცვის, ალუბლის, კოწახურის და ბროწეულის ყვავილის არომატებით. რეკომენდირებულია მისი მირთმევა შემწვარ ფრინველის ხორცთან, ორაგულის სტეიკთან, ღორის ხორცთან და მაგარ ყველთან ერთად.`,
  },
];

export default products;
