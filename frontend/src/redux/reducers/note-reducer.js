import { Types } from '../constants/note-type';

const initialState = {
    savebucketmessage:"",
    bucketlist:[],
    savenotemessage:"",
    notelist:[],
    updateBucketMessage:'',
    updateNoteMessage:''
    
};
export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_BUCKET:
            return {...state, savebucketmessage: action.payload.message}
        case Types.GET_BUCKET:
        return {...state, bucketlist: action.payload.body}
        case Types.ADD_NOTE:
            return {...state, savenotemessage: action.payload.message}
        case Types.GET_NOTE:
            return {...state, notelist: action.payload.body}
        case Types.UPDATE_BUCKET:
            return {...state, updateBucketMessage: action.payload.message}
        case Types.UPDATE_NOTE:
            return {...state, updateNoteMessage: action.payload.message}
            default:
            return state;
    }
}