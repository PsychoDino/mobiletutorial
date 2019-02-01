var app = new Framework7({
    
    //App root element 
    root: "#app", 
    routes: [
        
        {
        path: '/',
        url: 'index.html',
        },
        
        {
        path: '/page2/',
        url: 'Pages/page2.html',
        }
        
        
        
        ]/* this is the app element in html  */
    //... other parameters
    
});

var mainView = app.view.create('.view-main');