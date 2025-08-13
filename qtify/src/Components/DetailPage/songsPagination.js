import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../DetailPage/GlobalCssSlider.css';
import { setSongsPage } from '../../Slices/pagination';
import { useDispatch } from 'react-redux';


export default function PaginationSize({ songs, page, dataPerPage }) {
  const dispatch = useDispatch();

  const totalPages = Math.ceil(songs.length / dataPerPage);
  return (
    <Stack spacing={ 2 } >
      <Pagination
        count={ totalPages }
        size="small"
        page={ page }
        onChange={ (event, value) => dispatch(setSongsPage(value)) }
        sx={ {
          '& .MuiPaginationItem-root': {
            color: 'white',

            fontWeight: 500,
            borderRadius: '15px',  // ⬅ explicitly add this back
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#34C94B',
            color: '#fff',
            borderRadius: '15px',  // ⬅ keep same radius for selected
          },

          '& .MuiPaginationItem-previousNext': {
            borderRadius: '50%', // perfect circle
            background: 'white',
            color: "black"
          },
          '& .MuiPaginationItem-previousNext:hover': {
            background: 'white',
            color: "black"
          },
        } }
      />
    </Stack>
  );
}
