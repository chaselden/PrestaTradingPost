const ReactDOM = require('react-dom')
const React = require('react')
const Backbone = require('backbone')
const SingleView = require('./single-view.js')
const MultiView = require('./multi-view.js')
const ProfileView = require('./profile-view.js')
const AppViewController = require('./component-viewcontroller.js')
const OopsView = require('./oops-view.js')
const ACTIONS = require('./actions.js')
const SignOutView = require('./signout-view.js')
const GoogleMap = require ('google-map-react')

const AppRouter = Backbone.Router.extend({

    routes: {
      "confirm-rentalview" : "showConfirmRentalView",
      "aboutus" : "showAboutUsView",
      "category/:catName" : "showCatName",
      "logout" : "showSignOutView",
      "oops" : "showOopsView",
      "profileview" : "showProfileView",
      "authview" : "showAuthView",
      "singleview/:itemId" : "showSingleView",
      "*path" : "showMultiView",
    },

    showMultiView: function(){
      ReactDOM.render( <AppViewController routedFrom="MultiView"/>, document.querySelector('#app-container') )
    },

    showSingleView: function(itemId){
      ReactDOM.render( <AppViewController routedFrom="SingleView" itemId={itemId} />, document.querySelector('#app-container') )
    },
    showConfirmRentalView: function(){
      ReactDOM.render( <AppViewController routedFrom="ConfirmRentalView" />, document.querySelector('#app-container') )
    },

    showAuthView: function(){
      ReactDOM.render(<AppViewController routedFrom="AuthView"/>, document.querySelector('#app-container') )
    },

    showProfileView: function(){
      ReactDOM.render(<AppViewController routedFrom="ProfileView"/>, document.querySelector('#app-container') )
    },

    showOopsView: function(){
      ReactDOM.render(<AppViewController routedFrom="OopsView"/>, document.querySelector('#app-container') )
    },

    showSignOutView: function(){
      ReactDOM.render(<AppViewController routedFrom="SignOutView"/>, document.querySelector('#app-container') )
    },

    showCatName: function(catName){
      ReactDOM.render(<AppViewController routedFrom="MultiView" catName={catName}/>, document.querySelector('#app-container') )
    },

    showAboutUsView: function(){
      ReactDOM.render(<AppViewController routedFrom="AboutUsView"/>, document.querySelector('#app-container') )
    },

      initialize: function() {
      Backbone.history.start()
    }
})

new AppRouter()
