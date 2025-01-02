import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

const Scroll = () => {
    const scrollTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <div className='fixed right-28 bottom-16'>
        <div className=''>
            <IconButton style={{ backgroundColor: '#133', padding: 14, borderRadius: '50%' }} onClick={scrollTop}>
                <KeyboardArrowUpIcon style={{ color: 'white' }}/>
            </IconButton>
        </div>
    </div>
  )
}

export default Scroll