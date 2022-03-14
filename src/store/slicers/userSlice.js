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
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setUser, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;