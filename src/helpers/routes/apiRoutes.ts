const apiRoutes = {
    auth:{
        getCity:"/states",
        signup:"/users/Signup",
        getCodeSignup:"/auth/newUser/VerificationCode",
        login:"/auth",
        checkCodeSignup:"/auth/VerificationCode",
        checkCodeLogin:"/auth/login/VerificationCode"
    }
};

export default apiRoutes;
