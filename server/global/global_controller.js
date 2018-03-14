const mongoose=require('mongoose');
const Global=require('../models/global_model');
const HeaderLinks=require('../models/header_links_models');
const PlaceModel=require('../models/plinstudent_model');
const LatLinks=require('../models/latlink_model');
module.exports={
  showinfo(req,res){
    // Show about,mission,vision
    Global.find({})
          .then((globals)=>{
            return res.send(globals);
    })
  },

  changeGlobald(req,res,next){
    const namec=req.params.named;
    const contentc=req.params.contentd;
    Global.update({'name':namec},{'content':contentc})
          .then(()=>{
            return res.send({'m':'s'});
          })
          .catch(next);
  },

  getHeader(req,res){
    // show all links
    HeaderLinks.find({})
          .then((hedaer_links)=>{
            res.send(hedaer_links);
    })
  },

  updateLink(req,res,next){
    const linknameu=req.params.linknamed;
    const paramu=req.params.paramd;
    const valueu=req.params.vald;
    const param =paramu;
    const paramn = {};
    paramn[param] = valueu;
    HeaderLinks.update({'name':linknameu},paramn)
    .then(()=>{
      return res.send({'m':'d'});
    })
    .catch(next);
  },

  addSubLink(req,res,next){
    HeaderLinks.update({'name':req.params.linknamel},{$push:{
      'sublink':{
        'name':req.params.named,
        'link':req.params.directd
      }
    }})
    .then(()=>{
      return res.send({'a':'n'});
    })
    .catch(next);
  },

  deleteHlink(req,res,next){
      HeaderLinks.remove({'name':req.params.linknamed})
                  .then(()=>{
                    return res.send({'d':'s'});
                  })
                  .catch(next)
  },

  deleteSubLink(req,res,next){
    HeaderLinks.update({'sublink.name':req.params.sublinkd},{$pull:{'sublink':{'name':req.params.sublinkd}}})
                .then(()=>{
                  return res.send({'d':'s'});
                })
                .catch(next)
  },
  
  createHlink(req,res,next){
    const nlink=new HeaderLinks({
      name:req.params.linknamed,
      link:req.params.linkd,
      sublink:[],
    });
    nlink.save()
    .then(()=>{
      return res.send({'a':'n'});
    })
    .catch(next);
  },

  updateSubLink(req,res,next){
    const linknameus=req.params.linknamel;
    const sublinkuk=req.params.sublinkl;
    const paramu=req.params.paraml;
    const valueu=req.params.vall;
    const param ='sublink.$.'.concat(paramu);
    const paramn = {};
    paramn[param] = valueu;
    HeaderLinks.update({'sublink.name':sublinkuk},paramn)
              .then(()=>{
                return res.send({'m':'d'});
              })
              .catch(next);
  },

  getLat(req,res){
    // show all links
    LatLinks.find({})
          .then((data)=>{
            res.send(data);
    })
  },
  
  createLlink(req,res,next){
    const nlink=new LatLinks({
      name:req.params.linknamed,
      subpart:[],
    });
    nlink.save()
    .then(()=>{
      return res.send({'a':'n'});
    })
    .catch(next);
  },

  updateLat(req,res,next){
    const linknameu=req.params.linknamed;
    const paramu=req.params.paramd;
    const valueu=req.params.vald;
    const param =paramu;
    const paramn = {};
    paramn[param] = valueu;
    LatLinks.update({'name':linknameu},paramn)
    .then(()=>{
      return res.send({'m':'d'});
    })
    .catch(next);
  },

  deleteLlink(req,res,next){
    LatLinks.remove({'name':req.params.linknamed})
                .then(()=>{
                  return res.send({'d':'s'});
                })
                .catch(next)
  },

  addSubPart(req,res,next){
    LatLinks.update({'name':req.params.linknamel},{$push:{
      'subpart':{
        'name':req.params.named,
        'link':req.params.directd
      }
    }})
    .then(()=>{
      return res.send({'a':'n'});
    })
    .catch(next);
  },

  updateSubPart(req,res,next){
    const linknameus=req.params.linknamel;
    const sublinkuk=req.params.sublinkl;
    const paramu=req.params.paraml;
    const valueu=req.params.vall;
    const param ='subpart.$.'.concat(paramu);
    const paramn = {};
    paramn[param] = valueu;
    LatLinks.update({'subpart.name':sublinkuk},paramn)
              .then(()=>{
                return res.send({'m':'d'});
              })
              .catch(next);
  },

  deleteSubPart(req,res,next){
    LatLinks.update({'subpart.name':req.params.sublinkd},{$pull:{'subpart':{'name':req.params.sublinkd}}})
                .then(()=>{
                  return res.send({'d':'s'});
                })
                .catch(next)
  },
  
  createPlaced(req,res,next){
    const sname=new PlaceModel({
      name:req.params.studentname,
      companyname:req.params.companyname,
      package:req.params.package,
    });
    sname.save()
          .then(()=>{
            return res.send({'m':'successfull'});
          })
          .catch(next);
  }
}