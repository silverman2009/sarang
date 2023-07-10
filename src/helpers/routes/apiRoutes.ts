const apiRoutes = {
    auth:{
        getCity:"/states",
        signup:"/users/Signup",
        getCodeSignup:"/auth/newUser/VerificationCode",
        login:"/auth",
        checkCodeSignup:"/auth/VerificationCode",
        checkCodeLogin:"/auth/login/VerificationCode",
        forgetPass:"/auth/resetPassword"
    }
};

export default apiRoutes;
