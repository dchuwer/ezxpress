
var Sequelize = require('sequelize');

class DataAccess  {

  constructor() {  
      debugger
      this.connection = new Sequelize('sql7255176', 'sql7255176', 'iZl2vQC7er', {
        host: 'sql7.freemysqlhosting.net',
        dialect: 'mysql',

           
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        define: {
          timestamps: false
        }
      });    
     
  }
}
const DA = new DataAccess() ;
module.exports =   DA;


//password
//gKA6erG2f53$RV1g