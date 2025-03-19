import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  MapIcon,
  BoltIcon,
  FireIcon,
  CloudIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import generateSlug from "../../../context/Functions/generateSlug";
// console.log("hello");

const aboutListMenuItems = [
  {
    title: "Who We Are",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    pageName: "/about",
    section: "whoWeAre",
  },
  {
    title: "Mission And Vision",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    pageName: "/about",
    section: "missionAndVision",
  },
  {
    title: "Values",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    pageName: "/about",
    section: "values",
  },
  {
    title: "MHCEG With Numbers",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    pageName: "/about",
    section: "MHCEGWithNumbers",
  },
  {
    title: "Services",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    pageName: "/about",
    section: "services",
  },
];
const industryListMenuItems = [
  {
    title: "Structural & Architectural Engineering",
    icon: BuildingOfficeIcon, // Represents buildings and construction
    pageName: "/industries",
    section: "structural",
  },
  {
    title: "Urban Planning & Infrastructure",
    icon: MapIcon, // Represents maps and city planning
    pageName: "/industries",
    section: "urban",
  },
  {
    title: "Energy & Industrial Solutions",
    icon: BoltIcon, // Represents electricity and energy
    pageName: "/industries",
    section: "energy",
  },
  {
    title: "Oil & Gas Engineering",
    icon: FireIcon, // Represents fuel and combustion
    pageName: "/industries",
    section: "oil",
  },
  {
    title: "Environmental & Sustainability Consulting",
    icon: FireIcon, // Represents nature and sustainability
    pageName: "/industries",
    section: "environmental",
  },
];
const sustainabilityListMenuItems = [
  {
    title: "Green Building Technologies",
    icon: BuildingOfficeIcon, // Represents eco-friendly buildings
    pageName: `/sustainability/${generateSlug("Green Building Technologies")}`,
  },
  {
    title: "Carbon Reduction Programs",
    icon: CloudIcon, // Represents air quality and carbon footprint
    pageName: `/sustainability/${generateSlug("Carbon Reduction Programs")}`,
  },
  {
    title: "Digital Twin & BIM Modeling",
    icon: CubeTransparentIcon, // Represents 3D modeling and digital twin
    pageName: `/sustainability/${generateSlug("Digital Twin & BIM Modeling")}`,
  },
  {
    title: "Renewable Energy Integration",
    icon: CubeTransparentIcon, // Represents solar and renewable energy
    pageName: `/sustainability/${generateSlug("Renewable Energy Integration")}`,
  },
  {
    title: "Sustainable Water Management",
    icon: CubeTransparentIcon, // Represents water conservation and management
    pageName: `/sustainability/${generateSlug("Sustainable Water Management")}`,
  },
];

function NavListMenu({ ListMenuItems, headTitle }) {
  const handleNavigate = (pageName, section) => {
    console.log(pageName);

    navigate(pageName, { state: { scrollTo: section } });
  };
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = ListMenuItems.map(
    ({ icon, title, pageName, section }, key) => (
      <div onClick={() => handleNavigate(pageName, section)} key={key}>
        <MenuItem className="flex items-center gap-3  rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50  p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              paragraph="large"
              color="blue-gray"
              className="flex items-center  font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </div>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Link to={headTitle.link}>
            <Typography as="div" variant="paragraph" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={false}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {headTitle.text}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>{" "}
          </Link>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-none w-[99.9%] !m-auto  rounded-xl lg:block">
          <ul className="grid grid-cols-5 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="paragraph"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu
        headTitle={{
          text: "About",
          link: "/about",
        }}
        ListMenuItems={aboutListMenuItems}
      />
      <NavListMenu
        headTitle={{
          text: "industries",
          link: "/industries",
        }}
        ListMenuItems={industryListMenuItems}
      />
      <NavListMenu
        headTitle={{
          text: "Sustainability & Innovatio",
          link: "/sustainability",
        }}
        ListMenuItems={sustainabilityListMenuItems}
      />
      <Typography
        as="a"
        href="/career"
        variant="paragraph"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Career
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contactUs"
        variant="paragraph"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full overflow-hidden max-w-none py-2 fixed top-0 left-0 !z-[99999] !bg-opacity-100 bg-white border-none !text-black shadow-md rounded-none ">
      <div className="w-11/12 m-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img
            className="w-[40%] md:w-[12%]"
            src="/shared/logo2.png"
            alt="MHCEG logo"
          />
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </div>
    </Navbar>
  );
}
