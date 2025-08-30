
import AlbumDetail from './albumDetail';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Box, Button } from '@mui/material';
import { setSongsPage } from '../../Slices/pagination';
import { useDispatch } from 'react-redux';
const CardDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const navigate = useNavigate();   // useHistory is replated with useNavigate in react-router v6
    // console.log("CardDetail id:", id);
    const goBack = () => {
        navigate(-1)
        dispatch(setSongsPage(1))
    };
    return (
        <Box style={ { backgroundColor: 'black', color: 'white', } } >
            <Button onClick={ goBack } sx={ {
                position: 'relative',
                top: { xs: '0rem', sm: '1rem', md: '2rem' },
                left: { xs: '2rem', sm: '4rem', md: '4.3rem' },
                background: 'black',
                color: 'white',
                border: 'none',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            } }><FaArrowAltCircleLeft /></Button>
            <AlbumDetail id={ id } type={ type } />
        </Box>
    );

}

export default CardDetail;
