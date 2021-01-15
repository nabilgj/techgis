import React from "react";

import {
  FaKeycdn,
  FaGripfire,
  FaHouzz,
  FaDocker,
  FaPiedPiperAlt,
  FaAirFreshener,
} from "react-icons/fa";

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
      "Technology based data companies will shape the future of our Planet. Syed Irtazah Ali",
    buttonText: "Check Inside",
    buttonLink: "/services",
    techgisText: "Know GIS",
    techgisLink: "/knowgis",
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
    techgisLink: "/knowgis",
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
    techgisLink: "/knowgis",
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
    techgisLink: "/knowgis",
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
    techgisLink: "/knowgis",
    color: "#2DAAC2",
  },
];

// into Service details
export const ServiceLists1 = [
  {
    id: "utilities-",
    imgUrl: "service-01.jpg",
    icon: <FaKeycdn />,
    title: "UTILITIES",
    pro: [
      {
        id: 1,
        p:
          "Thermal Mapping of Wind Turbines, Towers, Solar Panels & Power Lines",
      },
      {
        id: 2,
        p: "Rust Inspection of Towers, Turbines, Panels & Lines",
      },
      {
        id: 3,
        p: "2D, 3D Drawing",
      },
      {
        id: 4,
        p: "Monitoring & Surveillance for inspection",
      },
    ],
    description:
      "Telecommunication Towers, Power Transmission and Distribution lines and systems such as towers and sub-stations require periodic maintenance for prevention of break-down.",
  },
  {
    id: "agriculture-",
    imgUrl: "service-03.jpg",
    icon: <FaGripfire />,
    title: "AGRICULTURE",
    pro: [
      {
        id: 1,
        p:
          "Thermal Mapping of Wind Turbines, Towers, Solar Panels & Power Lines",
      },
      {
        id: 2,
        p: "Rust Inspection of Towers, Turbines, Panels & Lines",
      },
      {
        id: 3,
        p: "2D, 3D Drawing",
      },
      {
        id: 4,
        p: "Monitoring & Surveillance for inspection",
      },
    ],
    description:
      "Geo-spatial technology has shown promising results in agriculture with data-driven integrated pest management, fertilizer application and crop health analysis.",
  },
  {
    id: "civil-infrastructure",
    imgUrl: "service-05.jpg",
    icon: <FaHouzz />,
    title: "CIVIL & INFRASTRUCTURE",
    pro: [
      {
        id: 1,
        p: "Digital Elevation Model",
      },
      {
        id: 2,
        p: "Topographic Survey",
      },
      {
        id: 3,
        p: "As-built Drawings",
      },
      {
        id: 4,
        p: "2D Orthomosaic Maps, 3D Maps/ Models",
      },
      {
        id: 5,
        p: "Point Cloud Imagery, Contour Lines",
      },
      {
        id: 6,
        p: "Surveying & Mapping (Digitized Cadastral)",
      },
      {
        id: 7,
        p: "Project Progress Monitoring",
      },
      {
        id: 8,
        p: "GDPS Ground Surveillance",
      },
      {
        id: 9,
        p: "Development of Spatial Data Infrastructure",
      },
      {
        id: 10,
        p: "Infrastructure Planning & Management",
      },
      {
        id: 11,
        p: "Statistics & Digital Data Archiving",
      },
    ],
    description:
      "TECHGIS provides 2D Maps, 3D Maps, Topographical surveillance, Engineering drawings and mapping of civil infrastructure that results in helping the client make a better execution plan.",
  },
  {
    id: "ports-shipping",
    imgUrl: "service-07.jpg",
    icon: <FaDocker />,
    title: "PORTS & SHIPPING AND OIL & GAS",
    pro: [
      {
        id: 1,
        p: "Thermal Mapping of Inventory, Lines",
      },
      {
        id: 2,
        p: "Asset Management",
      },
      {
        id: 3,
        p: "Rust Inspection of metal assemblyt",
      },
      {
        id: 4,
        p: "2D, 3D Drawing",
      },
      {
        id: 5,
        p: "Monitoring & Surveillance for inspection",
      },
    ],
    description:
      "Scrutiny for piping infrastructure and metal assembly can be effectively managed through TECHGIS UAV surveillance through data acquisition, data processing, data analysis and data sharing.",
  },
  {
    id: "mining-exploration",
    imgUrl: "service-09.jpg",
    icon: <FaPiedPiperAlt />,
    title: "MINING & EXPLORATION",
    pro: [
      {
        id: 1,
        p: "Methane check & safety of miners",
      },
      {
        id: 2,
        p: "Pipeline monitoring",
      },
      {
        id: 3,
        p: "Volumetric Stock-pile Analysis",
      },
      {
        id: 4,
        p: "Water & Sediment Flow",
      },
      {
        id: 5,
        p: "Assessment pre-drilling and post-drilling and blasting ",
      },
    ],
    description:
      "Geo-spatial technology in mining improve the overall efficiency of large mine site and quarry management by providing accurate and comprehensive data, detailing site conditions in a very short time.",
  },
  {
    id: "environment-management",
    imgUrl: "service-11.jpg",
    icon: <FaAirFreshener />,
    title: "ENVIRONMENT MANAGEMENT",
    pro: [
      {
        id: 1,
        p: "Plant & Tree Count",
      },
      {
        id: 2,
        p: "Vegetation Index",
      },
      {
        id: 3,
        p: "Air Quality Measurement",
      },
      {
        id: 4,
        p: "Geo-referenced water reservoirs",
      },
      {
        id: 5,
        p: "Geo-referenced wild life monitoring",
      },
      {
        id: 6,
        p: "Oxygen Levels, Carbon Levels",
      },
    ],
    description:
      "Climate change is a global phenomenon with a high probability to greatly impact many countries. TECHGIS believes in developing technological solutions for a safer and sustainable environment.",
  },
];
// into Service details
export const ServiceLists2 = [
  {
    id: "utilities-",
    imgUrl2: "service-101.png",
    imgUrl3: "service-102.png",
    icon: <FaKeycdn />,
    title: "UTILITIES",
    description:
      "Tech-GIS provides inspection services based on thermal imagery for better inspection and maintenance purpose.",
  },
  {
    id: "agriculture-",
    imgUrl2: "service-103.png",
    imgUrl3: "service-104.png",
    icon: <FaGripfire />,
    title: "AGRICULTURE",

    description:
      "Satellite based farm management E-portal helps the farmer in making intelligent data driven smart decisions timely.",
  },
  {
    id: "civil-infrastructure",
    imgUrl2: "service-101.png",
    imgUrl3: "service-102.png",
    icon: <FaHouzz />,
    title: "CIVIL & INFRASTRUCTURE",

    description:
      "Orthomosaic Tiles, Point Cloud Imagery, data processing, data management, data translation and data sharing, with an in-house built solution architecture for end clients.",
  },
  {
    id: "ports-shipping",
    imgUrl2: "service-101.png",
    imgUrl3: "service-102.png",
    icon: <FaDocker />,
    title: "PORTS & SHIPPING AND OIL & GAS",

    description:
      "Remote Sensing and GIS finds useful applications in Port & Shipping as well as Oil & Gas sector. An online web-portal keep track of operations and asset management becomes easier.",
  },
  {
    id: "mining-exploration",
    imgUrl2: "service-101.png",
    imgUrl3: "service-102.png",
    icon: <FaPiedPiperAlt />,
    title: "MINING & EXPLORATION",

    description:
      "Tech-GIS geo-spatial services and applications can provide volumetric analysis at site, thereby helping the mining company in determining the true logistics as well as asset management which results in an efficient management of the mining operations",
  },
  {
    id: "environment-management",
    imgUrl2: "service-101.png",
    imgUrl3: "service-102.png",
    icon: <FaAirFreshener />,
    title: "ENVIRONMENT MANAGEMENT",
    description:
      "Tech-GIS provides geo-spatial applications for environment management such as",
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
