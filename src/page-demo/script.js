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
      "We cater technological requirements of the GNSS and Geo Spatial Industry",
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
        id: " Utility 1",
        p: [{ id: 1, p: "Power transmission lines" }],
      },
      {
        id: " Utility 2",
        p: [{ id: 1, p: " Sub-Stations" }],
      },
      {
        id: " Utility 3",
        p: [{ id: 1, p: "Cell Towers" }],
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
        id: " Agri 1",
        p: [{ id: 1, p: "Data-driven precise pesticide aerial spraying" }],
      },
      {
        id: " Agri 2",
        p: [{ id: 1, p: "Aerial seeding application " }],
      },
      {
        id: " Agri 3",
        p: [
          {
            id: 1,
            p:
              "Aerial fertilizer spreading results in effective farm management thus saving resources",
          },
        ],
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
        id: "2D Map",
        p: [
          { id: 1, p: "Project progress Planning & Monitoring" },
          { id: 2, p: "Insurance Land Parceling Damage &" },
          { id: 3, p: "condition detection" },
        ],
      },
      {
        id: "3D Map",
        p: [
          { id: 1, p: "Topographical Engineering Drawings" },
          { id: 2, p: "As-built Drawings" },
          { id: 3, p: "Digital Elevation Model" },
          { id: 4, p: "Contour lines" },
        ],
      },
      {
        id: "3D Measurements",
        p: [
          { id: 1, p: "Indoor & Outdoor 3D Measurements" },
          { id: 2, p: "Open pit excavation measurements" },
          { id: 3, p: "3D Models flythrough" },
        ],
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
        id: "Reason 1",
        p: [
          { id: 1, p: "Inspection of metal assembly through thermal imagery " },
        ],
      },
      {
        id: " Reason 2",
        p: [{ id: 1, p: "it becomes more effective, swift" }],
      },
      {
        id: " Reason 3",
        p: [{ id: 1, p: "and less hazardous & contains a digitized record" }],
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
        id: " Mining 1",
        p: [{ id: 1, p: "We provide volumetric analysis at site" }],
      },
      {
        id: " Mining 2",
        p: [
          {
            id: 1,
            p: "To help the mining companies in determining the true logistics",
          },
        ],
      },
      {
        id: " Mining 3",
        p: [
          {
            id: 1,
            p:
              "as well as asset management which results in an efficient management of the mining operations",
          },
        ],
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
        id: " Utility 1",
        p: [{ id: 1, p: "Calculation of oxygen level" }],
      },
      {
        id: " Utility 2",
        p: [{ id: 1, p: "Vegetation index" }],
      },
      {
        id: " Utility 3",
        p: [{ id: 1, p: "and soil" }],
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
    imgUrl2: "service-02.jpg",
    icon: <FaKeycdn />,
    title: "UTILITIES",
    pro: [
      {
        id: " Utility 1",
        p: [{ id: 1, p: "Power transmission lines" }],
      },
      {
        id: " Utility 2",
        p: [{ id: 1, p: " Sub-Stations" }],
      },
      {
        id: " Utility 3",
        p: [{ id: 1, p: "Cell Towers" }],
      },
    ],
    description:
      "Tech-GIS provides inspection services based on thermal imagery for better inspection and maintenance purpose.",
  },
  {
    id: "agriculture-",
    imgUrl2: "service-04.jpg",
    icon: <FaGripfire />,
    title: "AGRICULTURE",
    pro: [
      {
        id: " Agri 1",
        p: [{ id: 1, p: "Data-driven precise pesticide aerial spraying" }],
      },
      {
        id: " Agri 2",
        p: [{ id: 1, p: "Aerial seeding application " }],
      },
      {
        id: " Agri 3",
        p: [
          {
            id: 1,
            p:
              "Aerial fertilizer spreading results in effective farm management thus saving resources",
          },
        ],
      },
    ],
    description:
      "Satellite based farm management E-portal helps the farmer in making intelligent data driven smart decisions timely.",
  },
  {
    id: "civil-infrastructure",
    imgUrl2: "service-06.jpg",
    icon: <FaHouzz />,
    title: "CIVIL & INFRASTRUCTURE",
    pro: [
      {
        id: "2D Map",
        p: [
          { id: 1, p: "Project progress Planning & Monitoring" },
          { id: 2, p: "Insurance Land Parceling Damage &" },
          { id: 3, p: "condition detection" },
        ],
      },
      {
        id: "3D Map",
        p: [
          { id: 1, p: "Topographical Engineering Drawings" },
          { id: 2, p: "As-built Drawings" },
          { id: 3, p: "Digital Elevation Model" },
          { id: 4, p: "Contour lines" },
        ],
      },
      {
        id: "3D Measurements",
        p: [
          { id: 1, p: "Indoor & Outdoor 3D Measurements" },
          { id: 2, p: "Open pit excavation measurements" },
          { id: 3, p: "3D Models flythrough" },
        ],
      },
    ],
    description:
      "Orthomosaic Tiles, Point Cloud Imagery, data processing, data management, data translation and data sharing, with an in-house built solution architecture for end clients.",
  },
  {
    id: "ports-shipping",
    imgUrl2: "service-08.jpg",
    icon: <FaDocker />,
    title: "PORTS & SHIPPING AND OIL & GAS",
    pro: [
      {
        id: "Reason 1",
        p: [
          { id: 1, p: "Inspection of metal assembly through thermal imagery " },
        ],
      },
      {
        id: " Reason 2",
        p: [{ id: 1, p: "it becomes more effective, swift" }],
      },
      {
        id: " Reason 3",
        p: [{ id: 1, p: "and less hazardous & contains a digitized record" }],
      },
    ],
    description:
      "Remote Sensing and GIS finds useful applications in Port & Shipping as well as Oil & Gas sector. An online web-portal keep track of operations and asset management becomes easier.",
  },
  {
    id: "mining-exploration",
    imgUrl2: "service-10.jpg",
    icon: <FaPiedPiperAlt />,
    title: "MINING & EXPLORATION",
    pro: [
      {
        id: " Mining 1",
        p: [{ id: 1, p: "We provide volumetric analysis at site" }],
      },
      {
        id: " Mining 2",
        p: [
          {
            id: 1,
            p: "To help the mining companies in determining the true logistics",
          },
        ],
      },
      {
        id: " Mining 3",
        p: [
          {
            id: 1,
            p:
              "as well as asset management which results in an efficient management of the mining operations",
          },
        ],
      },
    ],
    description:
      "Tech-GIS geo-spatial services and applications can provide volumetric analysis at site, thereby helping the mining company in determining the true logistics as well as asset management which results in an efficient management of the mining operations",
  },
  {
    id: "environment-management",
    imgUrl2: "service-12.jpg",
    icon: <FaAirFreshener />,
    title: "ENVIRONMENT MANAGEMENT",
    pro: [
      {
        id: " Utility 1",
        p: [{ id: 1, p: "Calculation of oxygen level" }],
      },
      {
        id: " Utility 2",
        p: [{ id: 1, p: "Vegetation index, soil moisture levels" }],
      },
      {
        id: " Utility 3",
        p: [
          {
            id: 1,
            p:
              "air-pollution index, mapping of underground natural water reservoirs",
          },
        ],
      },
      {
        id: " Utility 3",
        p: [
          {
            id: 1,
            p: "and wild-life monitoring, plant & tree count",
          },
        ],
      },
    ],
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
