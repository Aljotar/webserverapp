const { response } = require('express');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'C:/Users/jotar/OneDrive/Escritorio/datos.csv',
  header: [
    { id: 'dni', title: 'Numero de DNI', field: 'A' },   
    { id: 'grupo', title: 'Grupo', field: 'B' },
    { id: 'orden', title: 'Orden', field: 'C' }
  ]
});

const saveForm = (req, res = response) => {
  const { dni, grupo, orden } = req.body;

  const record = { dni: dni, grupo: grupo, orden: orden };

  csvWriter
    .writeRecords([record])
    .then(() => {
      res.send('Datos guardados correctamente');
    })
    .catch((error) => {
      console.log(error);
      res.send('Error al guardar los datos');
    });
};

module.exports = { saveForm };
