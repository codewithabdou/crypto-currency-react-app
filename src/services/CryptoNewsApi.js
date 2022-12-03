import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_API_KEY;


const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url)=> ({url,headers : cryptoNewsApiHeaders});

export const CryptoNewsApi = createApi({
    reducerPath : 'CryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptosNews : builder.query({
            query : ({newsCategory,count}) => createRequest(`news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&sortBy=Date&count=${count}`)
        })
    })

})

export const {
    useGetCryptosNewsQuery,
} = CryptoNewsApi;
