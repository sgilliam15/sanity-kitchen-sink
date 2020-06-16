export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee91282500712019c9e3061',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qstbubmy',
                  apiId: 'f31c14a4-9638-4c18-bd13-27509df2e73b'
                },
                {
                  buildHookId: '5ee912827720ef960cb4ac83',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-izo63zbk',
                  apiId: 'b9fd5ade-a8a9-4da9-a295-1466b4a08076'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgilliam15/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-izo63zbk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
