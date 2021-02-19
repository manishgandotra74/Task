import API from "../apis/note-apis";
import {Types} from "../constants/note-type" 

export function add_bucket(search) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.addBucket(search);
    dispatch({ type: Types.ADD_BUCKET,payload: resp.data});
    
    } catch (e) {
      return { "error": true };
    }
  };
}
export function get_bucket(search) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getbucket(search);
    dispatch({ type: Types.GET_BUCKET,payload: resp.data});
    
    } catch (e) {
      return { "error": true };
    }
  };
}

export function add_note( data) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.addNote(data);
    dispatch({ type: Types.ADD_NOTE,payload: resp.data});
    
    } catch (e) {
      return { "error": true };
    }
  };
}

export function get_note( data) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getNote(data);
    dispatch({ type: Types.GET_NOTE,payload: resp.data});
    
    } catch (e) {
      return { "error": true };
    }
  };
}
export function update_note(id,  data) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.updatenote(id ,data);
    dispatch({ type: Types.UPDATE_NOTE,payload: resp.data});
    
    } catch (e) {
      return { "error": true };
    }
  };
}
export function update_bucket(id,  data) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.updatebucket(id ,data);
    dispatch({ type: Types.UPDATE_BUCKET,payload: resp.data});
    
    } catch (e) {
      return { "error": true };
    }
  };
}