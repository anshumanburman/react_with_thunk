
export function IsMobileNumber(txtMobId) {
    console.log("mobile txtMobId :::::: ",txtMobId);
    console.log("mobile validation :::::: ",txtMobId.props.value);
    
    var mob = /^[1-9]{1}[0-9]{9}$/;
    //var txtMobile = document.getElementById(txtMobId);
    if (txtMobId.props.value === "") {
        //toast("Mobile number must not be blank.");
        alert("Mobile number must not be blank.");
        return false;
    } else if (mob.test(txtMobId.props.value) == false) {
       // toast("Please enter valid mobile number.");
       alert("Please enter valid mobile number.");
        txtMobId.focus();
        return false;
    }
    return true;
}

export function isValidLogin(login, password) {
    if (login==='') {
        alert("Login can not be blank.");
        return false
    } else if(password==='') {
        alert("password can not be blank.")
        return false
    }
    return true
}