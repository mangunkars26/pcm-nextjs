const menuItems = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Categories",
      children: [
        { title: "All Categories", href: "/categories" },
        { title: "Tech", href: "/categories/tech" },
        { title: "Lifestyle", href: "/categories/lifestyle" },
      ],
    },
    {
      title: "Tags",
      children: [
        { title: "Popular Tags", href: "/tags" },
        { title: "Tutorial", href: "/tags/tutorial" },
        { title: "News", href: "/tags/news" },
      ],
    },
    {
      title: "Authors",
      href: "/authors",
    },
    {
      title: "Search",
      href: "/search",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Register",
      href: "/register",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ];
  

  export default menuItems;