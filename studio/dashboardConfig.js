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
                  buildHookId: '5f32dadb037994b4e630b88c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-12vi42cu',
                  apiId: 'f3d60038-9359-4723-954b-b825107cf916'
                },
                {
                  buildHookId: '5f32dadb35187de02a19698d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web',
                  apiId: 'b739fa04-bae6-4ce4-be6f-a231cd555ddd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rishikashyap099/sanity-kitchen-sink-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web.netlify.app', category: 'apps'}
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
