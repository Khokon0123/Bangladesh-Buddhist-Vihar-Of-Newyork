/**
 * Navigation Data
 * CMS-ready structure for menu items
 */

import { NavItem } from "@/lib/types/content";

export const navigationItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    type: "link",
    order: 1,
  },
  {
    id: "learn-buddhism",
    label: "Learn Buddhism",
    href: "/learn-buddhism",
    type: "link",
    order: 2,
  },
  {
    id: "venerable-introduction",
    label: "Venerable Introduction",
    href: "/venerable-introduction",
    type: "link",
    order: 3,
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
    type: "link",
    order: 4,
  },
  {
    id: "events",
    label: "Events",
    href: "/events",
    type: "link",
    order: 5,
  },
  {
    id: "book",
    label: "Book",
    href: "/book",
    type: "link",
    order: 6,
  },
  {
    id: "practices",
    label: "Practices",
    type: "dropdown",
    order: 7,
    items: [
      {
        id: "dhamma-school",
        label: "Dhamma School",
        href: "/practices/dhamma-school",
        order: 1,
      },
      {
        id: "meditation",
        label: "Meditation",
        href: "/practices/meditation",
        order: 2,
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    type: "link",
    order: 8,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    type: "link",
    order: 9,
  },
];

