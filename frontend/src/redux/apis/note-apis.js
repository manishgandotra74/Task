import axios from "axios";
import * as config from "../../config"
const addBucket = data => {
  return axios.post(config.localweb_URL+config.base_PATH+"/todo/add-bucket/", data);
};
const getbucket = () => {
  return axios.get(config.localweb_URL+config.base_PATH+"/todo/get-bucket/");
};
const updatebucket = (id, data) => {
  return axios.put(config.localweb_URL+config.base_PATH+"/todo/update-bucket/"+id, data);
};
const addNote = data => {
  return axios.post(config.localweb_URL+config.base_PATH+"/todo/add-note/", data);
};
const getNote= id =>{
  return axios.get(config.localweb_URL+config.base_PATH+"/todo/get-note/"+ id);

}
const updatenote = (id, data) => {
  return axios.put(config.localweb_URL+config.base_PATH+"/todo/update-note/"+id, data);
};
export default {
    addBucket,
    getbucket,
    updatebucket,
    addNote,
    getNote,
    updatenote
};