const menu = [
  {
    id: 1,
    title: "Banjalučki čevapi",
    category: "hrana",
    price: "5.00",
    img: "/assets/slike-video/ba-cevapi.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Plošča stara pumpa",
    category: "hrana",
    price: "25.00",
    img: "/assets/slike-video/Plosca.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Leskovački čevapi",
    category: "hrana",
    price: "6.80",
    img: "/assets/slike-video/cevapcici.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Leskovački špikani čevapi",
    category: "hrana",
    price: "7.80",
    img: "/assets/slike-video/spikani.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Pleaskavica",
    category: "hrana",
    price: "6.80",
    img: "/assets/slike-video/pleskavica.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Pleaskavica špikana",
    category: "hrana",
    price: "7.80",
    img: "/assets/slike-video/pleskavica-punjena.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "hamburger",
    category: "hrana",
    price: "5.50",
    img: "/assets/slike-video/burger.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "pikantna klobasa",
    category: "hrana",
    price: "7.00",
    img: "/assets/slike-video/klobasa.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 9,
    title: "dimljena vešalica",
    category: "hrana",
    price: "8.50",
    img: "/assets/slike-video/vešalica.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 10,
    title: "mešano meso",
    category: "hrana",
    price: "10.00",
    img: "/assets/slike-video/mešano-meso.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 11,
    title: "puranji zrezek",
    category: "hrana",
    price: "7.50",
    img: "/assets/slike-video/puranji-zrezek.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 12,
    title: "pommes fries",
    category: "hrana",
    price: "2.90",
    img: "/assets/slike-video/fries.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 14,
    title: "Prebranac",
    category: "hrana",
    price: "3.50",
    img: "/assets/slike-video/pasulj.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "Šopska solata",
    category: "solate",
    price: "3.50",
    img: "/assets/slike-video/Šopska-solata.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 14,
    title: "pečena paprika",
    category: "solate",
    price: "3.10",
    img: "/assets/slike-video/crvene-paprike.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 15,
    title: "kislo zelje",
    category: "solate",
    price: "3.00",
    img: "/assets/slike-video/kiseli-kupus.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 16,
    title: "jogurtova torta z breskvami",
    category: "sladice",
    price: "2.10",
    img: "/assets/slike-video/jogurtova.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 16,
    title: "torta z vsem",
    category: "sladice",
    price: "2.70",
    img: "/assets/slike-video/torta-vsem.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 16,
    title: "cokoladna",
    category: "sladice",
    price: "2.70",
    img: "/assets/slike-video/cokoladna.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  imenik(menu);
  displayMenuButtons();
});

function imenik(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}/>
    <div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price"> ${item.price}€</h4>
    </header>
    <p clas="item-info">
    ${item.desc}
    </p>
    </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (value, item) {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["hrana"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCatagory = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem;
        }
      });
      if (category == "hrana") {
        imenik(menu);
      } else {
        imenik(menuCatagory);
      }
    });
  });
}
