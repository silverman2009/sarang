const apiRoutes = {
    auth: {
        getCity: "/states",
        signup: "/users/Signup",
        getCodeSignup: "/auth/newUser/VerificationCode",
        login: "/auth",
        checkCodeSignup: "/auth/VerificationCode",
        checkCodeLogin: "/auth/login/VerificationCode",
        forgetPass: "/auth/resetPassword",
        me: "/user",
    },
    driver: {
        getDriverByCityNumber: "/driver",
    },
    fare: "/fares",
    user: {
        trip: "/trips/user",
    },
};

export default apiRoutes;
