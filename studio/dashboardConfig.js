export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '625eec669cd2213b569bd3dc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-csqb91uu',
                  apiId: 'b4db1b49-45b5-4841-bede-e8208ac9f494'
                },
                {
                  buildHookId: '625eec665dd1e83cc00667da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9udpqr49',
                  apiId: 'f7f9b1e0-7132-457e-b2f2-e1279d3f7d2d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YashShiroya/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9udpqr49.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
