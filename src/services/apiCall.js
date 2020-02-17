
export default (method) => {
    console.log('calling api')
    
      return new Promise((resolve, reject) => {
        setTimeout( async() => {
            //let res = getPostApiCall(method);
            //console.log("in promises :::::: ",res);
            
            return resolve( await getPostApiCall(method));
        }, 100);
    })
    
}


async function getApiCall(url) {
    console.log('url :::: ', url)
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}


async function getPostApiCall(method) {
    console.log('request Data  :::: ',JSON.stringify(method.payload) + " " + method.method, method.type );
    
    if (method.method === "GET") {
        let getUrl = method.type + "/" + method.payload
        console.log("getUrl :::::: ",getUrl );
        let response = await fetch(getUrl)
        let responseJson = await response.json();
        return responseJson;
    }
    //console.log('url payload:::: ', method.payload);
    let formData = new FormData();
    try {
        for (const [key, value] of Object.entries(method.payload)) {
            //console.log(key, value);
            formData.append(`${key}`, value);
        }
        //console.log("formData :: ", formData);
        let response = await fetch(method.type, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'multipart/form-data'
            },
            body: formData//JSON.stringify(method.payload)
        })
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log('error ::::', error)
        //alert(error)
        alert(error.message);
    }
}