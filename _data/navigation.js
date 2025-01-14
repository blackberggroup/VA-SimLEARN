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
      submenu: [
        { label: "About SimLEARN", url: `${pathPrefix}about-us/` },
        { label: "SimLEARN Leadership Team", url: `${pathPrefix}about-us/simlearn-leadership/` },
      ]
    },
    { 
      label: "News & Media", 
      url: "/news-and-media/", 
      submenu: null 
    },
    {
      label: "Portfolios",
      megaMenu: [
        {
          title: "SimLEARN",
          description: "Simulation Validation, Evaluation, and Testing",
          url: "/portfolio/simlearn/"
        },
        {
          title: "REdI",
          description: "Resuscitation Education and Innovation",
          url: "/portfolio/redi/"
        },
        {
          title: "LM",
          description: "Learning Management",
          url: "/portfolio/lm/"
        },
        {
          title: "ACO",
          description: "Assessment, Collaboration and Outreach",
          url: "/portfolio/aco/"
        },
        {
          title: "CTE",
          description: "Clinical Training and Engagement",
          url: "/portfolio/cte/"
        },
        {
          title: "SO",
          description: "Support Operations",
          url: "/portfolio/so/"
        }
      ]
    },
    { 
      label: "Course Catalog", 
      url: "/course-catalog/", 
      submenu: null 
    },
    { 
      label: "Contact Us", 
      url: "/contact-us/", 
      submenu: null 
    },    
  ]
};
