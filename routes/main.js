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

router.get('/project/:slug',(req,res)=>{
    const data=req.context
    const projectSlug = req.params.slug
    const projectCtr = new ProjectController()
    projectCtr.get({slug:projectSlug})
    .then(projects=>{
        if(projects.length == 0){
            throw new Error('Project Not Found')
            return
        }
        const project = projects[0]
        data['project'] = project
        res.render('project',data)
    })
    .catch(err=>{
        res.send('OOps - '+err.message)
    })
})
module.exports = router