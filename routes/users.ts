import * as Express from 'express';

var router = Express.Router();

/* GET users listing. */
router.get('/', (req: Express.Request, res: Express.Response, next: Function) => {
    res.send('respond with a resource');
});

export = router;
