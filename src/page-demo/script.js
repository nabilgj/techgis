import React from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

export const portfolioSlick = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const projectSlick2 = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const slickDot = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const slideSlick = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  easing: "fade",
  adaptiveHeight: true,
};

// for demo page
export const SlideList = [
  {
    textPosition: "text-center",
    bgImage: "bg_image--21",
    title: "TechGIS",
    description:
      "We cater technological requirements of the GNSS and Geo Spatial Industry",
    buttonText: "Check Inside",
    buttonLink: "/services",
    techgisText: "Know GIS",
    techgisLink: "/about",
    color: "#2DAAC2",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--22",
    title: "Who We Are?",
    description:
      "With an amalgamation of expertise in Aerial Surveillance, Data-Management, Ergonomics and Artificial Intelligence.",
    buttonText: "Check Inside",
    buttonLink: "/services",
    techgisText: "Know GIS",
    techgisLink: "/about",
    color: "#2DAAC2",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--23",
    title: "What Can We Do?",
    description:
      "We provide highly advance top notch quality and phenomenal services to our customers!",
    buttonText: "Check Inside",
    buttonLink: "/services",
    techgisText: "Know GIS",
    techgisLink: "/about",
    color: "#2DAAC2",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--24",
    title: "Our Skilled Team!",
    description:
      "We are a team of qualified with profound knowledge of Geo-Spatial Technology and Business.",
    buttonText: "Check Inside",
    buttonLink: "/services",
    techgisText: "Know GIS",
    techgisLink: "/about",
    color: "#2DAAC2",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--25",
    title: "Seen Our Projects?",
    description:
      " We have an unbending devotion to provide unparalleled services with integrity and full support.",
    buttonText: "Check Inside",
    buttonLink: "/services",
    techgisText: "Know GIS",
    techgisLink: "/about",
    color: "#2DAAC2",
  },
];

// into Service
export const ServiceLists = [
  {
    id: "utilities-",
    imgUrl: "service-01.jpg",
    icon: <FiCast />,
    title: "Utilities",
    description:
      "Telecommunication Towers, Power Transmission and Distribution lines and systems such as towers and sub-stations require periodic maintenance for prevention of break-down.",
  },
  {
    id: "agriculture-",
    imgUrl: "service-01.jpg",
    icon: <FiLayers />,
    title: "AGRICULTURE",
    description:
      "Geo-spatial technology has shown promising results in agriculture with data-driven integrated pest management, fertilizer application and crop health analysis.",
  },
  {
    id: "civil-infrastructure",
    imgUrl: "service-01.jpg",
    icon: <FiUsers />,
    title: "CIVIL & INFRASTRUCTURE",
    description:
      "TECHGIS provides 2D Maps, 3D Maps, Topographical surveillance, Engineering drawings and mapping of civil infrastructure that results in helping the client make a better execution plan.",
  },
  {
    id: "ports-shipping",
    imgUrl: "service-01.jpg",
    icon: <FiMonitor />,
    title: "PORTS & SHIPPING AND OIL & GAS",
    description:
      "Scrutiny for piping infrastructure and metal assembly can be effectively managed through TECHGIS UAV surveillance through data acquisition, data processing, data analysis and data sharing.",
  },
  {
    id: "mining-exploration",
    imgUrl: "service-01.jpg",
    icon: <FiMonitor />,
    title: "MINING & EXPLORATION",
    description:
      "Geo-spatial technology in mining improve the overall efficiency of large mine site and quarry management by providing accurate and comprehensive data, detailing site conditions in a very short time.",
  },
  {
    id: "environment-management",
    imgUrl: "service-01.jpg",
    title: "ENVIRONMENT MANAGEMENT",
    description:
      "Climate change is a global phenomenon with a high probability to greatly impact many countries. TECHGIS believes in developing technological solutions for a safer and sustainable environment.",
  },
];
export const ServiceListVideos = [
  {
    id: "utilities-",
    video: "video-1608404717.mp4",
    videoImgUrl: "service-01.jpg",
    description:
      "Telecommunication Towers, Power Transmission and Distribution lines and systems such as towers and sub-stations require periodic maintenance for prevention of break-down.",
  },
  {
    id: "agriculture-",
    video: "video-1608404702.mp4",
    videoImgUrl: "service-01.jpg",
    description:
      "Geo-spatial technology has shown promising results in agriculture with data-driven integrated pest management, fertilizer application and crop health analysis.",
  },
  {
    id: "civil-infrastructure",
    video: "video-1608404692.mp4",
    videoImgUrl: "service-01.jpg",
    title: "CIVIL & INFRASTRUCTURE",
    description:
      "TECHGIS provides 2D Maps, 3D Maps, Topographical surveillance, Engineering drawings and mapping of civil infrastructure that results in helping the client make a better execution plan.",
  },
  {
    id: "ports-shipping",
    video: "video-1608404724.mp4",
    videoImgUrl: "service-01.jpg",
    description:
      "Scrutiny for piping infrastructure and metal assembly can be effectively managed through TECHGIS UAV surveillance through data acquisition, data processing, data analysis and data sharing.",
  },
  {
    id: "mining-exploration",
    video: "video-1608404717.mp4",
    videoImgUrl: "service-01.jpg",
    description:
      "Geo-spatial technology in mining improve the overall efficiency of large mine site and quarry management by providing accurate and comprehensive data, detailing site conditions in a very short time.",
  },
  {
    id: "environment-management",
    video: "video-1608404717.mp4",
    videoImgUrl: "service-01.jpg",
    description:
      "Climate change is a global phenomenon with a high probability to greatly impact many countries. TECHGIS believes in developing technological solutions for a safer and sustainable environment.",
  },
];

// into interior for contact us button on hero
export const ContactUs = [
  {
    textPosition: "text-center",
    category: "",
    title: "TechGIS",
    description: "Expert in Geo-Spatial Technology",
    buttonText: "Check us out",
    buttonLink: "/services",
    color: "#2DAAC2",
  },
];

// into interior for history - vision mission goal
export const HistoryList = [
  {
    title: "Vision",
    description:
      "To become global by entering into international markets and make the world a better place.",
  },
  {
    title: "Mission",
    description:
      "To be the symbol of echelon in geo-spatial technology and strive to create unparalleled value by providing reliable and efficient services, products and applications.",
  },
  {
    title: "Goals",
    description:
      "Implement and execute geo-spatial technology for diverse economies.",
    description2:
      "Sustain, support and enhance while building capacity for all relevant stakeholders.",
  },
];

export const ProjectList = [
  {
    image: "image-1",
    imageUrl: "portfolio-1",
    category: "Utilities",
    title: "Project 1",
  },
  {
    image: "image-2",
    imageUrl: "portfolio-2",
    category: "AGRICULTURE",
    title: "Project 2",
  },
  {
    image: "image-3",
    imageUrl: "portfolio-3",
    category: "CIVIL & INFRASTRUCTURE",
    title: "Project 3",
  },
  {
    image: "image-4",
    imageUrl: "portfolio-4",
    category: "CIVIL & INFRASTRUCTURE",
    title: "Project 4",
  },
  {
    image: "image-5",
    imageUrl: "portfolio-5",
    category: "OIL & GAS",
    title: "Project 5",
  },
  {
    image: "image-6",
    imageUrl: "portfolio-6",
    category: "MINING & EXPLORATION",
    title: "Project 6",
  },
  {
    image: "image-7",
    imageUrl: "portfolio-7",
    category: "ENVIRONMENT MANAGEMENT",
    title: "Project 7",
  },
];

// into PortfolioList inside elements portfolio
export const singleProjectList = [
  {
    image: "image-1",
    category: "Utilities",
    title: "Project 1",
  },
  {
    image: "image-2",
    category: "AGRICULTURE",
    title: "Project 2",
  },
  {
    image: "image-3",
    category: "CIVIL & INFRASTRUCTURE",
    title: "Project 3",
  },
  {
    image: "image-5",
    category: "OIL & GAS",
    title: "Project 5",
  },
  {
    image: "image-6",
    category: "MINING & EXPLORATION",
    title: "Project 6",
  },
  {
    image: "image-7",
    category: "ENVIRONMENT MANAGEMENT",
    title: "Project 7",
  },
];
