export default function() {
  return [
    {
      title: "Pacientes",
      to: "/pacientes",
      htmlBefore: '<i class="material-icons">person</i>',
    },
    {
      title: "Add-Pac",
      to: "/agregar-paciente",
      htmlBefore: '<i class="material-icons">person</i>',
    },
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    },
    {
      title: 'Teams',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: '/teams-list'
    },
    {
      title: 'Add Team',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/teams-form'
    }
  ];
}
