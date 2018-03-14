const webapp=require('./server/webapp');

webapp.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server running on ${process.env.PORT || 8080}`);
});