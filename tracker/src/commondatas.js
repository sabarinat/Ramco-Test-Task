import moment from "moment";

const getCurrentDate = ()=> {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

export default {
  getCurrentDate: getCurrentDate,
};