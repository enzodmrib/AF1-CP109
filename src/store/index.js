import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 1,
        name: "Angular",
        imageSrc: "https://w7.pngwing.com/pngs/620/322/png-transparent-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-angle-triangle-logo.png",
      },
      {
        id: 2,
        name: "React",
        imageSrc: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        id: 3,
        name: "Ember",
        imageSrc: "https://emberjs.com/images/brand/ember-4c.svg",
      },
      {
        id: 4,
        name: "Meteor",
        imageSrc: "https://assets.website-files.com/5dd3f8176674eb0829f184d5/5dd41eb9049df81f8773946e_meteor-logo.svg",
      },
      {
        id: 5,
        name: "Mithril",
        imageSrc: "https://miro.medium.com/max/580/1*RaHKi0hV80bK6iJZ6edKQQ.jpeg",
      },
      {
        id: 6,
        name: "Node.js",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      },
      {
        id: 7,
        name: "Polymer",
        imageSrc: "https://web-components-resources.appspot.com/assets/images/a-quick-polymer-intro.png",
      },
      {
        id: 8,
        name: "Aurelia",
        imageSrc: "https://seeklogo.com/images/A/aurelia-logo-9E30F60D7E-seeklogo.com.png",
      },
      {
        id: 9,
        name: "Backbone.js",
        imageSrc: "https://lh3.googleusercontent.com/proxy/PphALRWOLLUwnCEXhI_Ng8Bgu22WkLsKvmr9C-Z1iuBoNcGyhpqWF4CjKgPzpHtqpsBw7yOKqWKZF-DDkIl9R_kU3dqpDw5dSMT-nXw7",
      }
    ], loading: false
  },
  mutations: {
    async addFrameworkByID(state, frameworkID) {
      const frameworkData = [
        { id: 10, 
          name: "Svelte",
          imageSrc: "https://res.cloudinary.com/practicaldev/image/fetch/s--kPA4Qalw--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/2122og107osp0klb5h10.png"
        },
        { id: 11, 
          name: "Jquery",
          imageSrc: "https://brandlogos.net/wp-content/uploads/2014/10/jquery-logo-vector-download.jpg"
        },
        { id: 12, 
          name: "Sencha Ext JS",
          imageSrc: "https://www.sencha.com/wp-content/uploads/2018/11/icon-product-ExtJS.png"
        }
      ]

      console.log(frameworkData)

      state.list.push({
        id: frameworkID,
        name: frameworkData.name || '',
        imageSrc: frameworkData.imageSrc
      })
    },
  },
  actions: {
    addRandomFramework: ({ commit }) => {
      const min = 100, max = 120;
      const randomId = '' + Math.floor(Math.random() * (max - min) + min);

      commit('addFrameworkByID', randomId);
    }
  },
  modules: {
  }
})
