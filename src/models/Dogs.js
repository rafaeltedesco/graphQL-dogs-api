
const DogSchema = (sequelize, DataTypes) => {
  const Dog = sequelize.define('Dog', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    tableName: 'Dogs',
    timestamps: false,
    underscored: true,
  })
  
  Dog.associate = ({ Breed }) => {
    Dog.belongsTo(Breed)
  }

  return Dog;
}

module.exports = DogSchema;