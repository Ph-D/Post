const poool = require("../../databasePool");
const TraitTable = require("../trait/table");

class DragonTraitTable {
  static storeDragonTrait({ dragonId, traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      TraitTable.getTraitId({ traitValue, traitValue }).then(({ traitId }) => {
        poool.query(
          'INSERT INTO dragonTrait("traitId","dragonId") VALUES($1, $2)',
          [traitId, dragonId],
          (error, response) => {
            if (error) return reject(error);

            resolve();
          }
        );
      });
    });
  }
}

module.exports = DragonTraitTable;
