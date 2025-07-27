import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTabs } from '../../Slices/tabSlice';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';


import Section from "../TopAlbums/section"


export default function TabsComponent() {
    const dispatch = useDispatch();

    const topAlbums = useSelector((state) => state.topAlbums.topAlbums);
    const tabsLabelRaw = useSelector((state) => state.tabs.tabs);
    const tabsLabel = React.useMemo(() => {
        return [...tabsLabelRaw, { label: 'All' }];
    }, [tabsLabelRaw]);


    console.log("Tabs in component", tabsLabel);

    const [value, setValue] = React.useState(0);
    // const [filterSongs, setFilterSongs] = React.useState([]);

    useEffect(() => {
        async function fetchingTabs() {
            console.log("Fetching tabs...");

            const result = await dispatch(fetchTabs());
            console.log("Result of fetchingTabs:", result);

            if (fetchTabs.fulfilled.match(result)) {
                console.log("Tabs loaded:", result.payload);
            } else {
                console.error("Error loading tabs:", result.error.message);
            }
        }
        fetchingTabs();
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log("Tab changed to:", value);
    };

    const filterSongs = React.useMemo(() => {
        if (!tabsLabel[value]) return [];

        const selectedLabel = tabsLabel[value].label;
        let songs = topAlbums.map((albums) => albums.songs).flat();

        return selectedLabel === 'All'
            ? songs
            : songs.filter(song => song.genre.label === selectedLabel);
    }, [value, tabsLabel, topAlbums]);


    console.log('Filtered songs:', filterSongs);

    return (
        <div>
            <span>Hello Kaushik</span>
            <Box sx={ { width: '100%' } }>
                <TabContext value={ value }>
                    <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
                        <TabList onChange={ handleChange }>
                            { tabsLabel.map((tab, index) => (
                                <Tab key={ index } label={ tab.label } value={ index } />
                            )) }
                        </TabList>
                    </Box>

                    <TabPanel value={ value }>
                        <Section songs={ filterSongs } />
                    </TabPanel>

                </TabContext>
            </Box>
        </div >
    );
}
