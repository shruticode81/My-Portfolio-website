const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/ProjectController')
router.get('/',(req,res)=>{
    const data = req.context //this data will render object from land.json as {page: }
    const projectCtr = new ProjectController()
    projectCtr.get()
    .then(projects => {
        //console.log('projects:'+JSON.stringify(projects))
        data['projects']=projects
        res.render('landing',data)
    })
    .catch(err =>{
        res.send('OOps!!'+err.message)
    })
    
})
module.exports = router