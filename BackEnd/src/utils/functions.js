const { User } = require('../models');

module.exports = {
    // Verifica se uma string possui somente letras
    isOnlyLetters: async (name) => {
        const arrayName = name.trim().split(' ');
        let isCorrect = true;
        await Array.prototype.forEach.call(arrayName, (word) => {
            if (word.search(/[^A-zÁ-ù]/) !== -1) { isCorrect = false; }
        });
        return isCorrect;
    },
};
