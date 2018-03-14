const webapp=require('../webapp');
const global_controller=require('./global_controller');
module.exports=(webapp)=>{
    webapp.get('/json/global',global_controller.showinfo);
    webapp.get('/json/header',global_controller.getHeader);
    webapp.get('/json/lat',global_controller.getLat);
    webapp.put('/json/global/:named/:contentd',global_controller.changeGlobald);
    webapp.put('/json/header/:linknamed/:paramd/:vald',global_controller.updateLink);
    webapp.put('/json/latup/:linknamed/:paramd/:vald',global_controller.updateLat);
    webapp.post('/json/headercrt/:linknamed/:linkd',global_controller.createHlink);
    webapp.post('/json/latcrt/:linknamed',global_controller.createLlink);
    webapp.delete('/json/headerdlt/:linknamed',global_controller.deleteHlink);
    webapp.delete('/json/latdlt/:linknamed',global_controller.deleteLlink);
    webapp.put('/json/headerdlts/:linknamed/:sublinkd',global_controller.deleteSubLink);
    webapp.put('/json/latdlts/:linknamed/:sublinkd',global_controller.deleteSubPart);
    webapp.put('/json/header/:linknamel/:sublinkl/:paraml/:vall',global_controller.updateSubLink);
    webapp.put('/json/lat/:linknamel/:sublinkl/:paraml/:vall',global_controller.updateSubPart);
    webapp.put('/json/headeradd/:linknamel/:named/:directd',global_controller.addSubLink);
    webapp.put('/json/latadd/:linknamel/:named/:directd',global_controller.addSubPart);
    webapp.post('/json/placedstudent/:studentname/:companyname/:package',global_controller.createPlaced);
}