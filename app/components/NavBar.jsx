import NavItem from "./NavItem";

const navItems = [
  {
    label: "Why Cypress?",
    path: "/",
  },
  {
    label: "Overview",
    path: "/overview",
  },
  {
    label: "Fundamentals",
    path: "/fundamentals",
  },
  {
    label: "Forms",
    path: "/forms",
  },
  {
    label: "Examples",
    path: "/examples",
  },
  {
    label: "Component",
    path: "/component",
  },
  {
    label: "Best Practices",
    path: "/best-practices",
  },
];

export default function NavBar() {
  return (
    <ul className="nav-bar">
      {navItems.map((item) => (
        <NavItem
          data_test={item.path}
          key={item.label}
          label={item.label}
          path={item.path}
        />
      ))}
    </ul>
  );
}
