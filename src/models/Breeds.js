const BreedSchema = (sequelize, DataTypes) => {
  const Breed = sequelize.define('Breed', {
    name: DataTypes.STRING,
  }, {
    tableName: 'Breeds',
    timestamps: false,
  });

  Breed.associate = ({ Dog }) => {
    Breed.hasMany(Dog);
  };

  return Breed;
};

module.exports = BreedSchema;
