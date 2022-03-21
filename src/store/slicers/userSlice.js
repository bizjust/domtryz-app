import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLoggedIn: false,
    registerStep: 0,
    registerData: {
        email: '',
        password: '',
        mobile: '',
        verificationCode: '',
        country_id: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        addRegisterCountry_id: (state, action) => {
            state.registerData.country_id = action.payload;
        },
        addRegisterEmail: (state, action) => {
            state.registerData.email = action.payload;
        },
        addRegisterPassword: (state, action) => {
            state.registerData.password = action.payload;
        },
        addRegisterMobile: (state, action) => {
            state.registerData.mobile = action.payload;
        },
        addRegisterVerificationCode: (state, action) => {
            state.registerData.verificationCode = action.payload;
        },
    },
});

export const { addUser, addIsLoggedIn, addRegisterCountry_id, addRegisterEmail, addRegisterPassword, addRegisterMobile, addRegisterVerificationCode  } = userSlice.actions;

export default userSlice.reducer;