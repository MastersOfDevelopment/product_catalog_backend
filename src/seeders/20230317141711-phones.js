/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

const phones = [];
const jsonsInDir = fs
  .readdirSync('../public/phones')
  .filter((file) => path.extname(file) === '.json');

jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path
    .join('../public/phones', file));
  const json = JSON.parse(fileData.toString());

  phones.push(json);
});

module.exports = {
  up: async(queryInterface, Sequelize) => {
  
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await Promise.all(
        phones.map(async(phone) => {
          const descString = JSON.stringify(phone.description);

          await queryInterface.bulkInsert('phones', [
            {
              id: phone.id,
              namespaceId: phone.namespaceId,
              name: phone.name,
              capacityAvailable: phone.capacityAvailable,
              capacity: phone.capacity,
              priceRegular: phone.priceRegular,
              priceDiscount: phone.priceDiscount,
              colorsAvailable: phone.colorsAvailable,
              color: phone.color,
              images: phone.images,
              description: descString,
              screen: phone.screen,
              resolution: phone.resolution,
              processor: phone.processor,
              ram: phone.ram,
              camera: phone.camera,
              zoom: phone.zoom,
              cell: phone.cell,
            },
          ]);
        })
      );
      await transaction.commit();
    } catch(error) {
      await transaction.rollback();
      console.log(error);
      throw error;
    }
  },
  down: async(queryInterface, Sequelize) => {
    return Promise.resolve();
  }
};