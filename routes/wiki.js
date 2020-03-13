const router = require('express').Router()
const { Page, User } = require('../models')
const { main, addPage, wikiPage} = require('../views')

//get wiki
router.get('/', async (req, res, next) => {
    try {
    const pages = await Page.findAll()
    res.send(main(pages))
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    if(req.body.title === ''){
       res.redirect(`/wiki/`);
    }
    else{
        const page = new Page({
            title: req.body.title,
            content: req.body.content,
        });
        const user = new User({
            name: req.body.author_name,
            email: req.body.author_email
        });
    
    
    try {
        
        await page.save();
        await user.save();
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) { next(error) }
    }
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

router.get("/:slug", async (req, res, next) => {
    try {
    const page = await Page.findOne({
        where: {
            slug: req.params.slug
        }
      });
    const author = await User.findOne({
        where: { 
            id: page.id
        }
    })
   
res.send(wikiPage(page, author));
    } catch (error) { next(error) }
});



module.exports = router;