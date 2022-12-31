import axios from 'axios';

const domain = 'localhost:3000/';
async function getRows(entityName) {
  let data = [];
  try {
    data = (await axios.get(domain + entityName)).data;
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function deleteEntityRow(entityName, id) {
  let result;
  try {
    await axios.delete(`${domain + entityName}/${id}`);
    result = true;
  } catch (error) {
    result = false;
  }
  return result;
}
async function editEntityRow(entityName, rowObject, id = '') {
  try {
    await axios.post(`${domain + entityName}/${id}`, {
      data: rowObject,
    });
  } catch (error) {
    console.log(error);
  }
}
export default {
  getRows,
  deleteEntityRow,
  editEntityRow,
};
