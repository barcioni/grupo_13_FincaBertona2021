module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        //created_at: dataTypes.TIMESTAMP,
        //updated_at: dataTypes.TIMESTAMP,
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false,
        tableName: "brands"
    }
    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models) {
        Brand.hasMany(models.Product, { 
            as: "products", 
            foreignKey: "brand_id"
        })
    }

    return Brand
};