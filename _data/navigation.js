const pathPrefix = process.env.PATH_PREFIX || "/";

module.exports = {
  primaryLinks: [
    { 
      label: "Home", 
      url: `${pathPrefix}`, 
      submenu: null 
    },
    {
      label: "About Us",
      url: `${pathPrefix}about-us/`,
      submenu: [
        { label: "About SimLEARN", url: `${pathPrefix}about-us/` },
        { label: "SimLEARN Leadership Team", url: `${pathPrefix}about-us/simlearn-leadership/` },
      ]
    },
    { 
      label: "News & Media", 
      url: `${pathPrefix}news-and-media/`, 
      submenu: null 
    },
    {
      label: "Portfolios",
      url: `${pathPrefix}portfolio/`,
      megaMenu: [
        {
          title: "SimVET",
          description: "SimVET empowers the VHA’s modernization by rigorously testing and validating new healthcare technologies to enhance care and reduce risks.",
          url: `${pathPrefix}portfolio/simvet/`,
          icon: `${pathPrefix}assets/img/menu/simvet-menu-icon.webp`,
        },
        {
          title: "REdI",
          description: "REdI elevates resuscitation training by delivering standardized, simulation-based education that improves team performance and patient outcomes.",
          url: `${pathPrefix}portfolio/redi/`,
          icon: `${pathPrefix}assets/img/menu/redi-menu-icon.webp`,
        },
        {
          title: "LM",
          description: "LM transforms clinical simulation training with innovative, cost-effective educational solutions that boost Veteran outcomes and optimize clinician time.",
          url: `${pathPrefix}portfolio/lm/`,
          icon: `${pathPrefix}assets/img/menu/lm-menu-icon.webp`,
        },
        {
          title: "ACO",
          description: "ACO drives innovation in Veteran care by leveraging simulation-based training and collaborative practices to optimize resources and support hospital activations.",
          url: `${pathPrefix}portfolio/aco/`,
          icon: `${pathPrefix}assets/img/menu/aco-menu-icon.webp`,
        },
        {
          title: "CTE",
          description: "CTE enhances clinical practice and Veteran safety by providing expert simulation training and fostering interprofessional collaboration.",
          url: `${pathPrefix}portfolio/cte/`,
          icon: `${pathPrefix}assets/img/menu/cte-menu-icon.webp`,
        },
        {
          title: "SO",
          description: "SO ensures a seamless and safe training environment by expertly coordinating activities, maintaining equipment safety, and managing facility operations.",
          url: `${pathPrefix}portfolio/so/`,
          icon: `${pathPrefix}assets/img/menu/so-menu-icon.webp`,
        }
      ]
    },
    { 
      label: "Course Catalog", 
      url: `${pathPrefix}course-catalog/`, 
      submenu: null 
    },
    { 
      label: "Contact Us", 
      url: `${pathPrefix}contact-us/`, 
      submenu: null 
    },    
  ]
};
