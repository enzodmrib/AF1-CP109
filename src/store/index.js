import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listPokemon: [
      {
        id: 1,
        name:"angular",
        imageSrc: "https://w7.pngwing.com/pngs/620/322/png-transparent-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-angle-triangle-logo.png",
      },
      {
        id: 2,
        name:"react",
        imageSrc: "https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg",
      },
      {
        id: 3,
        name:"Ember",
        imageSrc: "https://w7.pngwing.com/pngs/531/388/png-transparent-ember-js-logo-javascript-library-software-framework-meetup-logo-love-text-logo.png",
      },
      {
        id: 4,
        name:"Meteor",
        imageSrc: "https://w7.pngwing.com/pngs/542/839/png-transparent-meteor-javascript-framework-node-js-real-time-web-framework-angle-text-logo.png",
      },
      {
        id: 5,
        name:"Mithril",
        imageSrc: "https://miro.medium.com/max/580/1*RaHKi0hV80bK6iJZ6edKQQ.jpeg",
      },
      {
        id: 6,
        name:"Node.js",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      },
      {
        id: 7,
        name:"Polymer",
        imageSrc: "https://cdn.imgbin.com/24/7/21/imgbin-polymer-javascript-library-web-components-javascript-framework-others-2LPMkkSv2rsHHAZkKBffxwhhn.jpg",
      },
      {
        id: 8,
        name:"Aurelia",
        imageSrc: "https://seeklogo.com/images/A/aurelia-logo-9E30F60D7E-seeklogo.com.png",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
