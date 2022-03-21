import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "expo-constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slicers/userSlice";

function useRegistrationStep() {
    const [step, setStep] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const d = useSelector((state) => state.user.registerData);
    const dispatch = useDispatch();

    useEffect(async () => {
        const t = await AsyncStorage.getItem("token");
        setToken(t);
        await axios.get(Constants.manifest.extra.api_url + "user", {
            headers: {
                Authorization: "Bearer " + token, //the token is a variable which holds the token
            },
        }).then(async (res) => {
            if (res.data.success) {
                dispatch(addUser(res.data.user));
                setUser(res.data.user);
                if(user.password){
                    setStep("verify");
                } else {
                    setStep("password");
                }
                setStep(res.data.user.registration_step);
            } else {
                console.log("Error", res);
            }
        }).catch((err) => {
            console.log("Error1", err);
        });
    }, []);
}