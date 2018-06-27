var Sequelize = require('sequelize');
var DA = require('./dataAccess');

class MotoBoy {
    constructor() {
        this.model = this.initMotoBoy();
    }
    initMotoBoy() {
        let motoboy = DA.connection.define('motoboys', {
            motoboyId: { type: Sequelize.INTEGER, primaryKey: true },
            idNumber: Sequelize.STRING,
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            rate: Sequelize.INTEGER,
            photo: Sequelize.STRING,
            latitude: Sequelize.FLOAT,
            longitude: Sequelize.FLOAT,
            active : Sequelize.BOOLEAN
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
        });

        return motoboy;
    }

    getAll() {
        return this.model.findAll();
    }

    getOneById(ID) {
        console.log(ID)
        return this.model.findAll({
            where: {
                motoboyId: ID
            }
        });
    }

    getMotoBoy(emailValue, passwordValue) {
        debugger;
        console.log(emailValue, passwordValue)
        return this.model.find( {where : {email : emailValue,
                                        password: passwordValue}
        });
    }

    create(data){
        return this.model.create(data);
    }

    update(newData,id){
        return this.model.update(newData,{where:{motoboyId: id}});
    }

    delete(id){
        return this.model.destroy({ where:{motoboyId: id} });
    }
}
const motoboy = new MotoBoy();

module.exports = motoboy;