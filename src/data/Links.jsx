export const links = [
  {
    linkName: "Home",
    linkTo: "/"
  },
  {
    linkName: "Rooms",
    linkTo: "about",
    submenu: true,
    sublinks: [
      {
        sublinkName: "Restaurants",
        sublinkTo: "about"
      },
      {
        sublinkName: "FAQ",
        sublinkTo: "faq"
      },
      {
        sublinkName: "Galery",
        sublinkTo: "galery"
      },
      {
        sublinkName: "Services",
        sublinkTo: "services"
      },
      {
        sublinkName: "Page 404",
        sublinkTo: "page404"
      }
    ]
  },
  {
    linkName: "Gallery",
    linkTo: "rooms",
    submenu: true,
    sublinks: [
      {
        sublinkName: "Room List",
        sublinkTo: "room"
      },
      {
        sublinkName: "FAQ",
        sublinkTo: "faq"
      },
      {
        sublinkName: "Check Availability",
        sublinkTo: "availability"
      },
      {
        sublinkName: "Create Account",
        sublinkTo: "account"
      }
    ]
  },
  {
    linkName: "Restaurant",
    linkTo: "restaurant",
    submenu: true,
    sublinks: [
      {
        sublinkName: "Our Restaurant",
        sublinkTo: "restaurant"
      },
      {
        sublinkName: "Menu",
        sublinkTo: "menu"
      },
      {
        sublinkName: "Galery",
        sublinkTo: "galery"
      }
    ]
  },
  {
    linkName: "Sign Up",
    linkTo: "blog",
    submenu: true,
    sublinks: [
      {
        sublinkName: "Blog List",
        sublinkTo: "blog-list"
      },
      {
        sublinkName: "Blog Post",
        sublinkTo: "blog-post"
      }
    ]
  },
  {
    linkName: "Login",
    linkTo: "shop",
    submenu: true,
    sublinks: [
      {
        sublinkName: "Shop",
        sublinkTo: "shop"
      },
      {
        sublinkName: "Cart",
        sublinkTo: "cart"
      },
      {
        sublinkName: "Checkout",
        sublinkTo: "checkout"
      },
      {
        sublinkName: "Product single",
        sublinkTo: "product"
      }
    ]
  },
  {
    linkName: "Contact",
    linkTo: "contact"
  }
];
