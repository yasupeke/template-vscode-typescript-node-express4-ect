import * as Express from 'express';

var router = Express.Router();

/* GET home page. */
router.get('/', (req: Express.Request, res: Express.Response, next: Function) => {
  res.render('index', { title: 'Express' });
});

export = router;
