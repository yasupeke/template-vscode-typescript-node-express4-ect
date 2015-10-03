import * as Express from 'express';
var router = Express.Router();

/* GET home page. */
router.get('/', function(req: Express.Request, res:Express.Response, next: Function) {
    var data = {
        title : 'Hello, world!',
        id : 'main',
        links: [
            { name : 'Google', url : 'http://google.com/' },
            { name : 'Facebook', url : 'http://facebook.com/' },
            { name : 'Twitter', url : 'http://twitter.com/' }
        ],
        upperHelper : function (string) {
            return string.toUpperCase();
        }
    }
    res.render('index', data);
});

export = router;
