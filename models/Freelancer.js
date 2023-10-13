module.exports = (sequelize, DataTypes) => {
    const Freelancer = sequelize.define("freelancer", {
        fullname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        phonenumber: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
          }
     });

     return Freelancer;
}