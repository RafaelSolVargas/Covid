module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define(
        'Data',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            bairro: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            sexo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tosse: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            obito: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false, // Cria as colunas updatedAt e createdAt
        },
    );

    return Data;
};
