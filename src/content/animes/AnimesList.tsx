import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { myAnimeApi } from '../../helper/myAnimeApi';

const AnimesList = () => {

    const query = useQuery('topAnime', () => myAnimeApi.loadTopAnime(), 
    {
        onError: (error: any) => {
            console.log("error", error);
        },

        enabled: false
    })

    const topAnime = query.data
        
    console.log("topAnime", topAnime);
 
    const onGetData = () => {
        query.refetch()
    }



    return (
        <>
        <Button onClick={() => onGetData()}>Get Data</Button>
        <Box>AnimesSearchPage</Box>
        </>
    )

}

export default AnimesList