import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Study from '@/components/study/StudyMain'
import WebStudy from '@/components/study/Web'
import DataStructure from '@/components/study/DataStructure'
import BookStudy from '@/components/study/Book'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/study',
      name: 'Study',
      component: Study,
      children:[        
        {
          path: 'ds',
          name: 'ds',
          component: DataStructure
        },
        {
          path: '',
          name: 'ds',
          component: DataStructure
        },
        {
          path: 'web',
          name: 'WebStudy',
          component: WebStudy
        },
        {
          path: 'book',
          name: 'WebStudy',
          component: BookStudy
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld       
    }
  ]
})
