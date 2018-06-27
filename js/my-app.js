// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    modalTitle: 'Framework7',
	panel:{
		swipe:'left',
	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/shirts/',
    	url: 'shirts.html',
    	name: 'shirts',
  		},
		{
		path: '/drinks/',
    	url: 'drinks.html',
    	name: 'drinks',
  		},
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/info-ropa/',
    	url: 'info-ropa.html',
    	name: 'info-ropa',
  		},
		{
		path: '/women/',
    	url: 'women.html',
    	name: 'women',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

