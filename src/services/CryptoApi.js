import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "7aec6e6f23msh9d600bd612ce068p1522bcjsn471e54def634",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url)=> ({url,headers : cryptoApiHeaders});

export const CryptoApi = createApi({
    reducerPath : 'CryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        })
    })

})

export const {
    useGetCryptosQuery,
} = CryptoApi;
