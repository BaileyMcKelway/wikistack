const router = require('express').Router()
const { Page, User } = require('../models')
const { userList, userPages} = require('../views')




router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.send(userList(users))
        } catch (error) {
            next(error)
        }
})

router.get('/:userId', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.userId
            }
        });
        const pages = await Page.findAll({
            where: {
                id: req.params.userId
            }
          });
    res.send(userPages(user, pages));
    } catch (error) { next(error) }    
})



module.exports = router;