import * as Utils from '../utility';



export function peopleListAction(data) {
    console.log("peopleListAction :::: ",data);
    
    return {
        type: Utils.ApiTypes.PEOPLE_LIST_METHOD,
        payload: data,
        //method:"GET"
    }
}

export function loginAction(data) {
    return {
        type: Utils.ApiTypes.LOGIN_METHOD,
        payload: data
    }
}