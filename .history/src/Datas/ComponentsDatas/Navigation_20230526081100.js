const Navigation = {
  MenuDatas: [
    {
      classLevel1: "col-1 col-xxl-1 col-md-1 col-sm-1 col-lg-1 side-bar",
      classLevel2: "d-flex flex-column flex-shrink-0 p-3 menu-background",
      classLogo: "logo-container",
      img: [
        {
          component: "img",
          src: "/images/masterk.svg",
          title: "logo MasterK",
        },
      ],
      ulClass: "nav nav-pills flex-column mb-auto",
      liClass: "nav-item",
    },
  ],
  MenuAdmin: [
    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/home/Dashboard",
      icon: "fa-solid fa-house-user",
      title: "Accueil",
      acces: "all",
      backgroundColor:
        "background-image:linear-gradient(45deg,rgba(var(--gradient-accueil1), 1), rgba(var(--gradient-accueil2), 1));",
    },
    // {
    //     classIconMenu: 'icon-menu-container',
    //     classRond: 'rond-icon',
    //     classRouterLink: 'link-menu-container nav-link',
    //     route: "/call",
    //     icon: "fa-solid fa-list",
    //     title: "Appels",
    //     acces: "all",
    //     backgroundColor: 'background-image:linear-gradient(45deg,rgba(var(--gradient-appel1), 1), rgba(var(--gradient-appel2), 1));'
    // },
    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/allSites",
      icon: "fa-solid fa-building",
      title: "Sites",
      acces: "all",
      backgroundColor:
        "background: linear-gradient(45deg,rgba(var(--gradient-site1), 1), rgba(var(--gradient-site2), 1));",
    },
    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/administration",
      icon: "fa-solid fa-gears",
      title: "Panel",
      acces: "dev",
      backgroundColor:
        "background: linear-gradient(45deg,#36929b 0%,#34c2d0 100%);",
    },
    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/logout",
      icon: "fa-solid fa-arrow-up-from-bracket",
      title: "Logout",
      backgroundColor:
        "background: linear-gradient(45deg,rgba(var(--gradient-logout1), 1), rgba(var(--gradient-logout2), 1));",
    },
  ],
  MenuUser: [
    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/home/Dashboard",
      icon: "fa-solid fa-house-user",
      title: "Accueil",
      acces: "all",
      backgroundColor:
        "background-image:linear-gradient(45deg,rgba(var(--gradient-accueil1), 1), rgba(var(--gradient-accueil2), 1));",
    },
    // {
    //     classIconMenu: 'icon-menu-container',
    //     classRond: 'rond-icon',
    //     classRouterLink: 'link-menu-container nav-link',
    //     route: "/call",
    //     icon: "fa-solid fa-list",
    //     title: "Historique d'appels",
    //     acces: "all",
    //     backgroundColor: 'background-image:linear-gradient(45deg,rgba(var(--gradient-appel1), 1), rgba(var(--gradient-appel2), 1));'

    // },
    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/allSites",
      icon: "fa-solid fa-building",
      title: "Mes sites",
      // acces: "all",
      backgroundColor:
        "background: linear-gradient(45deg,rgba(var(--gradient-logout1), 1), rgba(var(--gradient-logout2), 1));",
    },
    // {
    //   classIconMenu:'',
    //   classRond:'rond-icon',
    //   classRond: 'rond-icon',
    //   route: "/allClients",
    //   icon: "fa-solid fa-users",
    //   title: "Client",
    //   acces: "all",
    // },

    {
      classIconMenu: "icon-menu-container",
      classRond: "rond-icon",
      classRouterLink: "link-menu-container nav-link",
      route: "/logout",
      icon: "fa-solid fa-arrow-up-from-bracket",
      title: "Logout",
      backgroundColor:
        "background: linear-gradient(45deg,rgba(var(--gradient-logout1), 1), rgba(var(--gradient-logout2), 1));",
    },
  ],
};

export default Navigation;
