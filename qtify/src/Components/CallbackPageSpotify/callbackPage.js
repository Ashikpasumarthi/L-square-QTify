import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUserToken } from '../../Slices/userTokenSlice';
import { useNavigate } from "react-router-dom";
export default function CallbackPage() {
    let url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (code) {
            dispatch(fetchUserToken(code))
                .unwrap()
                .then(() => navigate('/')) // redirect home after success
                .catch((error) => {
                    console.error("Error fetching user token:", error);
                });
        }
    }, [dispatch, code, navigate]);

    return (
        <>
            <div>Callback Page</div>
        </>
    )
}
