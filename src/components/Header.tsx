import { Button } from '@mui/material'
import "styles/header.scss"

const Header = () => (
    <div className='header d-flex align-items-center justify-content-between'>
        <span>Eventbux</span>
        <div className='buttons'>
            <Button variant="text">Login</Button>
            <Button variant="contained" color="primary">
                Sign Up
            </Button>
        </div>
    </div>
)

export default Header