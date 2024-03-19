let modeSwitch = document.querySelector(".mode_switch");
let toggle = modeSwitch.querySelector(".toggle");
let mode = 1; // 1 for light mode and 0 for dark mode

modeSwitch.addEventListener("click", () => {
  mode_change();
});
const mode_change = function () {
  toggle.style.left = mode * 60 + "%";
  mode = 1 - mode;

  let root = document.querySelector(":root");
  let rootStyles = getComputedStyle(root);
  let color1 = rootStyles.getPropertyValue("--color1");
  let color2 = rootStyles.getPropertyValue("--color2");
  let accent1 = rootStyles.getPropertyValue("--accent1");
  let accent2 = rootStyles.getPropertyValue("--accent2");
  let fontcolor1 = rootStyles.getPropertyValue("--fontcolor1");
  let fontcolor2 = rootStyles.getPropertyValue("--fontcolor2");
  let overlaycolor1 = rootStyles.getPropertyValue("--overlaycolor1");
  let overlaycolor2 = rootStyles.getPropertyValue("--overlaycolor2");

  root.style.setProperty("--color1", color2);
  root.style.setProperty("--color2", color1);
  root.style.setProperty("--accent1", accent2);
  root.style.setProperty("--accent2", accent1);
  root.style.setProperty("--fontcolor1", fontcolor2);
  root.style.setProperty("--fontcolor2", fontcolor1);
  root.style.setProperty("--overlaycolor1", overlaycolor2);
  root.style.setProperty("--overlaycolor2", overlaycolor1);
  localStorage.setItem("mode", JSON.stringify(mode));
  featured_loader(); // function to change the images in the featured section
};

products_list_heat = [
  // array of products type: heat
  {
    name: "jordan 1",
    src: "images/jordan_1.jpeg",
    id: 1,
    price: 175,
    sizes: [7, 8, 9, 10],
    review: 3,
  },
  {
    name: "yeezy spl 350",
    src: "images/yeezy_spl_350.webp",
    id: 2,
    price: 250,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
  {
    name: "new balance 550",
    src: "images/new_balance_550.webp",
    id: 3,
    price: 120,
    sizes: [7, 8, 9, 10],
    review: 5,
  },
  {
    name: "nike dunk",
    src: "images/nike_dunk.png",
    id: 4,
    price: 90,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
  {
    name: "adidas campus",
    src: "images/adidas_campus.png",
    id: 13,
    price: 100,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
  {
    name: "converse chuck taylor",
    src: "images/converse_chuck_taylor.webp",
    id: 14,
    price: 80,
    sizes: [7, 8, 9, 10],
    review: 3,
  },
  {
    name: "vans old skool",
    src: "images/vans_old_skool.webp",
    id: 15,
    price: 70,
    sizes: [7, 8, 9, 10],
    review: 5,
  },
  {
    name: "puma suede",
    src: "images/puma_suede.webp",
    id: 16,
    price: 90,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
];

products_list_merchandise = [
  // array of products type: merchandise
  {
    name: "hoodie",
    src: "images/hoodie.png",
    id: 5,
    price: 50,
    sizes: ["s", "m", "l", "xl"],
    review: 5,
  },
  {
    name: "t-shirt",
    src: "images/t_shirt.webp",
    id: 6,
    price: 25,
    sizes: ["s", "m", "l", "xl"],
    review: 4,
  },

  {
    name: "hat",
    src: "images/hat.png",
    id: 7,
    price: 20,
    sizes: ["s", "m", "l", "xl"],
    review: 3,
  },
  {
    name: "socks",
    src: "images/socks.webp",
    id: 8,
    price: 10,
    sizes: ["s", "m", "l", "xl"],
    review: 5,
  },
  {
    name: "shorts",
    src: "images/shorts.webp",
    id: 17,
    price: 30,
    sizes: ["s", "m", "l", "xl"],
    review: 4,
  },
  {
    name: "bag",
    src: "images/bag.png",
    id: 18,
    price: 40,
    sizes: ["s", "m", "l", "xl"],
    review: 4,
  },
  {
    name: "jacket",
    src: "images/jacket.webp",
    id: 19,
    price: 80,
    sizes: ["s", "m", "l", "xl"],
    review: 5,
  },
];
products_list_basketball = [
  // array of products type: basketball shoes
  {
    name: "lebron 20",
    src: "images/lebron_20.webp",
    id: 9,
    price: 200,
    sizes: [7, 8, 9, 10],
    review: 5,
  },
  {
    name: "kd 16",
    src: "images/kd_16.jpeg",
    id: 10,
    price: 150,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
  {
    name: "kobe 6",
    src: "images/kobe_6.jpg",
    id: 11,
    price: 180,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
  {
    name: "pg 6",
    src: "images/pg_6.png",
    id: 12,
    price: 120,
    sizes: [7, 8, 9, 10],
    review: 3,
  },
  {
    name: "curry 4",
    src: "images/curry_4.webp",
    id: 20,
    price: 160,
    sizes: [7, 8, 9, 10],
    review: 5,
  },
  {
    name: "kai 1",
    src: "images/kai_1.png",
    id: 21,
    price: 150,
    sizes: [7, 8, 9, 10],
    review: 4,
  },
];

let hero_items = [
  "images/hero_light.png",
  "images/merchandise_banner.png",
  "images/adidas_campus_banner.png",
  "images/jordan_1_banner.png",
];

const featured_loader = () => {
  // function to change the images in the featured section
  let merchandise = document.querySelector(".featured .merch img");
  let sale = document.querySelector(".featured .sale img");
  let latest = document.querySelector(".featured .latest img");
  if (mode === 1) {
    merchandise.src = "images/merch_dark.jpg";
    sale.src = "images/sale_dark.jpeg";
    latest.src = "images/latest_dark.jpeg";
  } else {
    merchandise.src = "images/merch_light.jpg";
    sale.src = "images/sale_light.jpg";
    latest.src = "images/latest_light.jpeg";
  }
};

featured_loader();

const product_loader = (products_array, html_list) => {
  // function to load the products in the product section
  for (let i = 0; i < products_array.length; i++) {
    let product = products_array[i];
    let product_html = `
      <div class="card" id="${product.id}">
            <div class="prod_img">
              <img src="${product.src}" alt="${product.name}" />
            </div>
            <div class="prod_details">
              <div class="info">
                <p>${product.name}</p>
                <p>$${product.price}</p>
              </div>
              <div class="wishlist_button_container">
              <svg
                class="add_to_cart"
                id=${product.id}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                ></path>
              </svg>
              <svg
                class="add_to_wishlist"
                id=${product.id}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
                ></path>
              </svg>
            </div>
            </div>
          </div>`;
    html_list.innerHTML += product_html;
  }
};

let heat_list = document.querySelector(".heat .prod_list"); // heat products container from html file
let merchandise_list = document.querySelector(".merchandise .prod_list"); // merchandise products container from html file
let basketball_list = document.querySelector(".basketball .prod_list"); // basketball products container from html file
product_loader(products_list_heat, heat_list); // loading the products in the heat section
product_loader(products_list_merchandise, merchandise_list); // loading the products in the merchandise section
product_loader(products_list_basketball, basketball_list); // loading the products in the basketball section

let back_to_top = document.querySelector(".back_to_top"); // back to top button
back_to_top.addEventListener("click", (e) => {
  // back to top button event listener
  e.stopPropagation();
  window.scrollTo(0, 0); // scroll to the top of the page
});

let logo = document.querySelector(".logo_nav");
logo.addEventListener("click", (e) => {
  // back to top button event listener
  e.stopPropagation();
  window.scrollTo(0, 0); // scroll to the top of the page
});

window.addEventListener("scroll", () => {
  // event listener for the scroll event to show the back to top button
  if (window.scrollY > 150) {
    back_to_top.style.setProperty("opacity", "0.8");
  } else {
    back_to_top.style.setProperty("opacity", 0);
  }
});

let menu = document.querySelector(".menu"); // menu container
let dropdown = document.querySelector(".menu_dropdown"); // dropdown button
dropdown.addEventListener("click", () => {
  // dropdown button event listener
  menu.style.setProperty("display", "flex"); // show the menu
  setTimeout(() => {
    // show the menu with a transition
    menu.style.setProperty("opacity", "1");
    menu.style.setProperty("top", "0px");
  });
});
const dropdown_close_function = () => {
  // function to close the dropdown menu
  menu.style.setProperty("opacity", "0"); // hide the menu with a transition
  menu.style.setProperty("top", "-300px");
  setTimeout(() => {
    menu.style.setProperty("display", "none"); // hide the menu
  }, 300);
};

let dropdown_close = document.querySelector(".dropdown_close"); // close button in the dropdown menu
dropdown_close.addEventListener("click", dropdown_close_function); // close button event listener

let overlay_close_function = (overlay) => {
  // function to close any overlay
  overlay.style.setProperty("opacity", "0");
  overlay.style.setProperty("transform", "translate(-50%,-50%) scale(0)");
  setTimeout(() => {
    overlay.style.setProperty("display", "none");
  }, 300);
};

let overlay_open_funtion = (overlay) => {
  // function to open any overlay
  overlay.style.setProperty("display", "flex");
  setTimeout(() => {
    overlay.style.setProperty("opacity", "1");
    overlay.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
  });
};

let wishlist_button = document.querySelector(".wishlist_button"); // wishlist overlay open button
let wishlist_overlay = document.querySelector(".wishlist"); // wishlist overlay
let wishlist_close = document.querySelector(".wishlist_close"); // wishlist overlay close button

wishlist_button.addEventListener("click", function (event) {
  // wishlist button event listener
  event.stopPropagation();
  overlay_close_function(cart_overlay); // close the cart overlay (if open)
  dropdown_close_function(); // close the dropdown menu (if open)
  overlay_open_funtion(wishlist_overlay);
});

wishlist_close.addEventListener("click", function (event) {
  // wishlist close button event listener
  event.stopPropagation();
  overlay_close_function(wishlist_overlay);
});

let set_wishlist_buttons = (wishlist_items_array) => {
  // function to set the wishlist button to red if the product is in the wishlist
  let add_to_wishlist_buttons = document.querySelectorAll(".add_to_wishlist"); // wishlist buttons array
  for (let i = 0; i < add_to_wishlist_buttons.length; i++) {
    let flag = false; // flag to check if the product is in the wishlist
    for (let j = 0; j < wishlist_items_array.length; j++) {
      if (
        parseInt(wishlist_items_array[j]) ==
        parseInt(add_to_wishlist_buttons[i].id)
      ) {
        flag = true;
      }
    }
    if (flag) {
      // if the product is in the wishlist
      add_to_wishlist_buttons[i].style.setProperty("fill", "red");
      add_to_wishlist_buttons[
        i
      ].innerHTML = `<path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>`;
    } else {
      // if the product is not in the wishlist
      add_to_wishlist_buttons[i].style.removeProperty("fill");
      add_to_wishlist_buttons[i].innerHTML = `<path
        d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
      ></path>`;
    }
  }
};

let reload_wishlist = () => {
  // function to reload the wishlist items in the wishlist overlay
  wishlist_items.innerHTML = ""; // clear the wishlist items
  if (wishlist_items_array.length === 0) {
    // if the wishlist is empty
    wishlist_items.innerHTML = `<p class="empty_wishlist empty">Your wishlist is empty</p>`;
  }
  let items_value = wishlist_items_array.length > 1 ? " items" : " item";
  wishlist_overlay.querySelector(".wishlist_count").innerHTML =
    wishlist_items_array.length + items_value; // set the wishlist count
  for (let i = 0; i < wishlist_items_array.length; i++) {
    // loop through the wishlist items array
    let product = products_list_heat.find(
      // find the product in the heat products array
      (product) => product.id == wishlist_items_array[i]
    );
    if (product === undefined) {
      product = products_list_merchandise.find(
        // find the product in the merchandise products array
        (product) => product.id == wishlist_items_array[i]
      );
    }
    if (product === undefined) {
      product = products_list_basketball.find(
        // find the product in the basketball products array
        (product) => product.id == wishlist_items_array[i]
      );
    }
    // add the product to the wishlist overlay
    wishlist_items.innerHTML += `<div class="wishlist_item item" > 
      <div class="prod_img">
        <img src="${product.src}" alt="${product.name}" />
      </div>
      <div class="details">
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <div class="buttons">
          <div class="add_to_cart_from_wishlist" id=${product.id}>
            <p>Add to cart</p>
          </div>
          <div class="remove_from_wishlist" id=${product.id}>
            <p>Remove from wishlist</p>
          </div>
        </div>
      </div>
    </div>`;
  }

  let remove_from_wishlist_buttons = document.querySelectorAll(
    // remove from wishlist buttons array
    ".remove_from_wishlist"
  );
  for (let i = 0; i < remove_from_wishlist_buttons.length; i++) {
    // remove from wishlist button event listener
    let remove_from_wishlist_button = remove_from_wishlist_buttons[i];
    remove_from_wishlist_button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      for (let j = 0; j < wishlist_items_array.length; j++) {
        if (wishlist_items_array[j] === remove_from_wishlist_button.id) {
          wishlist_items_array.splice(j, 1); // remove the product from the wishlist
          break;
        }
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist_items_array)); // save the wishlist in the local storage
      set_wishlist_buttons(wishlist_items_array); // set the wishlist buttons
      reload_wishlist(); // reload the wishlist items
    });
  }

  let add_to_cart_buttons = document.querySelectorAll(
    ".add_to_cart_from_wishlist"
  ); // add to cart buttons array
  for (let i = 0; i < add_to_cart_buttons.length; i++) {
    let add_to_cart_button = add_to_cart_buttons[i];
    add_to_cart_button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      for (let j = 0; j < wishlist_items_array.length; j++) {
        if (wishlist_items_array[j] === add_to_cart_button.id) {
          wishlist_items_array.splice(j, 1); // remove the product from the wishlist
          break;
        }
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist_items_array)); // save the wishlist in the local storage
      set_wishlist_buttons(wishlist_items_array); // set the wishlist buttons
      reload_wishlist(); // reload the wishlist items

      cart_items_array.push(add_to_cart_button.id); // add the product to the cart
      localStorage.setItem("cart", JSON.stringify(cart_items_array)); // save the cart in the local storage
      reload_cart(); // reload the cart items
    });
  }
};

let wishlist_items = document.querySelector(".wishlist_items"); // wishlist items container
let wishlist_items_array = []; // wishlist items array to store id of products inside the wishlist
if (localStorage.getItem("wishlist") !== null) {
  wishlist_items_array = JSON.parse(localStorage.getItem("wishlist")); // get the wishlist from the local storage
}
reload_wishlist(); // reload the wishlist items
set_wishlist_buttons(wishlist_items_array); // set the wishlist buttons

let add_to_wishlist_buttons = document.querySelectorAll(".add_to_wishlist"); //add to wishlist buttons array
for (let i = 0; i < add_to_wishlist_buttons.length; i++) {
  let add_to_wishlist_button = add_to_wishlist_buttons[i];
  add_to_wishlist_button.addEventListener("click", () => {
    // add to wishlist button event listener
    if (add_to_wishlist_button.style.fill === "red") {
      // if the product is in the wishlist remove it
      for (let j = 0; j < wishlist_items_array.length; j++) {
        if (
          parseInt(wishlist_items_array[j]) ===
          parseInt(add_to_wishlist_button.id)
        ) {
          //find the product in the wishlist array
          wishlist_items_array.splice(j, 1); // remove the product from the wishlist
          break;
        }
      }

      add_to_wishlist_button.innerHTML = `<path
        d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
      ></path>`;
      add_to_wishlist_button.style.removeProperty("fill");
    } else {
      // if the product is not in the wishlist add it
      wishlist_items_array.push(add_to_wishlist_button.id);
      add_to_wishlist_button.innerHTML = `<path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>`;
      add_to_wishlist_button.style.setProperty("fill", "red");
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_items_array)); // save the wishlist in the local storage
    reload_wishlist(); // reload the wishlist items
  });
}

let cart_button = document.querySelector(".cart_button"); // cart overlay open button
let cart_overlay = document.querySelector(".cart"); // cart overlay
let cart_close = document.querySelector(".cart_close"); // cart overlay close button

cart_button.addEventListener("click", function (event) {
  // cart button event listener
  event.stopPropagation();
  dropdown_close_function(); // close the dropdown menu (if open)
  overlay_close_function(wishlist_overlay); // close the wishlist overlay (if open
  overlay_open_funtion(cart_overlay);
});

cart_close.addEventListener("click", function (event) {
  // cart close button event listener
  event.stopPropagation();
  overlay_close_function(cart_overlay);
});

let cart_items_array = [];
if (localStorage.getItem("cart") !== null) {
  cart_items_array = JSON.parse(localStorage.getItem("cart"));
}

const reload_cart = () => {
  let cart_items = document.querySelector(".cart_items");
  let cart_footer = document.querySelector(".cart_footer");
  cart_items.innerHTML = "";
  if (cart_items_array.length === 0) {
    // if the cart is empty
    cart_items.innerHTML = `<p class="empty_cart empty">Your cart is empty</p>`;
    cart_footer.style.setProperty("display", "none");
  } else {
    cart_footer.style.setProperty("display", "flex");
  }
  let items_value = cart_items_array.length > 1 ? " items" : " item";
  cart_overlay.querySelector(".cart_count").innerHTML =
    cart_items_array.length + items_value; // set the wishlist count
  let cost = document.querySelector(".cost");
  cost.innerHTML = "";
  let total_price = 0;
  for (let i = 0; i < cart_items_array.length; i++) {
    let product = products_list_heat.find(
      (product) => product.id == cart_items_array[i]
    );
    if (product === undefined) {
      product = products_list_merchandise.find(
        (product) => product.id == cart_items_array[i]
      );
    }
    if (product === undefined) {
      product = products_list_basketball.find(
        (product) => product.id == cart_items_array[i]
      );
    }
    total_price += product.price;
    cart_items.innerHTML += `<div class="cart_item item">
    <div class="prod_img">
      <img src="${product.src}" alt="${product.name}" />
    </div>
    <div class="details">
      <p>${product.name}</p>
      <p>$${product.price}</p>
      <div class="buttons">
        <div class="add_to_wishlist_from_cart" id=${product.id}>
          <p>Move to wishlist</p>
        </div>
        <div class="remove_from_cart" id=${product.id}>
          <p>Remove from cart</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  cost.innerHTML = `$${total_price}`;
  let remove_from_cart_buttons = document.querySelectorAll(
    // remove from wishlist buttons array
    ".remove_from_cart"
  );
  for (let i = 0; i < remove_from_cart_buttons.length; i++) {
    // remove from wishlist button event listener
    let remove_from_cart_button = remove_from_cart_buttons[i];
    remove_from_cart_button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      for (let j = 0; j < cart_items_array.length; j++) {
        if (cart_items_array[j] === remove_from_cart_button.id) {
          cart_items_array.splice(j, 1); // remove the product from the wishlist
          break;
        }
      }
      reload_cart(); // reload the wishlist items
      localStorage.setItem("cart", JSON.stringify(cart_items_array)); // save the cart in the local storage
    });
  }

  let add_to_wishlist_buttons = document.querySelectorAll(
    ".add_to_wishlist_from_cart"
  ); // add to wishlist buttons array
  for (let i = 0; i < add_to_wishlist_buttons.length; i++) {
    let add_to_wishlist_button = add_to_wishlist_buttons[i];
    add_to_wishlist_button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      for (let j = 0; j < cart_items_array.length; j++) {
        if (cart_items_array[j] === add_to_wishlist_button.id) {
          cart_items_array.splice(j, 1);
          break;
        }
      }
      reload_cart();
      localStorage.setItem("cart", JSON.stringify(cart_items_array)); // save the cart in the local storage
      wishlist_items_array.push(add_to_wishlist_button.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist_items_array));
      set_wishlist_buttons(wishlist_items_array); // set the wishlist buttons
      reload_wishlist();
    });
  }
};

reload_cart();

let add_to_cart_buttons = document.querySelectorAll(".add_to_cart");
for (let i = 0; i < add_to_cart_buttons.length; i++) {
  let add_to_cart_button = add_to_cart_buttons[i];
  add_to_cart_button.addEventListener("click", () => {
    cart_items_array.push(add_to_cart_button.id);
    localStorage.setItem("cart", JSON.stringify(cart_items_array));
    reload_cart();
  });
}

let checkout_button = document.querySelector(".checkout");
checkout_button.addEventListener("click", () => {
  cart_items_array = [];
  localStorage.setItem("cart", JSON.stringify(cart_items_array));
  let order_successful = document.querySelector(".order_successful");
  order_successful.style.setProperty("display", "block");
  setTimeout(() => {
    order_successful.style.setProperty("opacity", "1");
    order_successful.style.setProperty(
      "transform",
      "translate(-50%,-50%) scale(1)"
    );
  });
  setTimeout(() => {
    order_successful.style.setProperty("opacity", "0");
    order_successful.style.setProperty(
      "transform",
      "translate(-50%,-50%) scale(0)"
    );
    setTimeout(() => {
      order_successful.style.setProperty("display", "hidden");
    }, 1000);
  }, 1000);

  reload_cart();
});

let login_but = document.querySelector(".login_button");
let login_overlay = document.querySelector(".login");
login_but.addEventListener("click", (e) => {
  e.stopPropagation();
  overlay_open_funtion(login_overlay);
  dropdown_close_function();
});

let login_submit = document.querySelector(".login_submit");
login_submit.addEventListener("click", () => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  if (username === "" || password === "") {
    alert("Please fill in the fields");
  } else {
    login_overlay.style.setProperty("background-color", "rgb(85, 255, 85)");
    login_submit.style.setProperty("opacity", "0");
    setTimeout(() => {
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
      login_submit.style.setProperty("opacity", "1");
      login_overlay.style.setProperty(
        "background-color",
        "rgba(var(--overlaycolor1))"
      );
      overlay_close_function(login_overlay);
    }, 1000);
  }
});

document.addEventListener("click", function (event) {
  // event listener to close the dropdown menu and  overlays when clicking outside them
  let isClickInsideMenu = menu.contains(event.target); // check if the click is inside the menu
  let isClickInsideWishlist = wishlist_overlay.contains(event.target); // check if the click is inside the wishlist overlay
  let isClickInsideCart = cart_overlay.contains(event.target); // check if the click is inside the cart overlay
  let isClickInsideLoginPage = login_overlay.contains(event.target); // check if the click is inside the login overlay
  if (!isClickInsideMenu && menu.style.opacity === "1") {
    // close the dropdown menu if the click is outside it
    dropdown_close_function();
  }

  if (!isClickInsideWishlist && wishlist_overlay.style.opacity === "1") {
    // close the wishlist overlay if the click is outside it
    overlay_close_function(wishlist_overlay);
  }

  if (!isClickInsideCart && cart_overlay.style.opacity === "1") {
    // close the cart overlay if the click is outside it
    overlay_close_function(cart_overlay);
  }

  if (!isClickInsideLoginPage && login_overlay.style.opacity === "1") {
    overlay_close_function(login_overlay);
  }
});
