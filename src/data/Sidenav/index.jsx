import { homeRun } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sidenav = {
  items: [
    {
      label: "Dashboard",
      icon: <img src={homeRun} alt="Master Data Management" />,
      href: "/dashboard",
    },
    {
      label: "Master Data Management",
      icon: (
        <FontAwesomeIcon
          className="font-awesome-sidenav"
          icon="fa-solid fa-briefcase"
        />
      ),
      href: "/",
      items: [
        {
          label: "Standard Mark-Up",
          href: "/standard-mark-up",
        },
        {
          label: "Standard Service Fee",
          href: "/standard-service-fee",
        },
        {
          label: "Fee Type",
          href: "/fee-type",
        },
        {
          label: "Freequent Traveler Program",
          href: "/freequent-traveler-program",
        },
        {
          label: "Standard Ancillar Fee",
          href: "/standard-ancillar-fee",
        },
        {
          label: "Rating Type",
          href: "/rating-type",
        },
        {
          label: "Setup Flight Comission",
          href: "/setup-flight-comission",
        },
        {
          label: "Special Dates",
          href: "/special-dates",
        },
        {
          label: "Corporate Rating",
          href: "/corporate-rating",
        },
      ],
    },
  ],
};

export default sidenav;
