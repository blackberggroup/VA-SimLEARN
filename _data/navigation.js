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
      url: `${pathPrefix}news-and-media/`, 
      submenu: null 
    },
    {
      label: "Portfolios",
      megaMenu: [
        {
          title: "SimLEARN",
          description: "Simulation Validation, Evaluation, and Testing",
          url: `${pathPrefix}portfolio/simlearn/`
        },
        {
          title: "REdI",
          description: "Resuscitation Education and Innovation",
          url: `${pathPrefix}portfolio/redi/`
        },
        {
          title: "LM",
          description: "Learning Management",
          url: `${pathPrefix}portfolio/lm/`
        },
        {
          title: "ACO",
          description: "Assessment, Collaboration and Outreach",
          url: `${pathPrefix}portfolio/aco/`
        },
        {
          title: "CTE",
          description: "Clinical Training and Engagement",
          url: `${pathPrefix}portfolio/cte/`
        },
        {
          title: "SO",
          description: "Support Operations",
          url: `${pathPrefix}portfolio/so/`
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
