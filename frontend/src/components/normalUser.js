import './normalUser.css';

const NormalUserHome = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));

    return(
        <div className='body'>
            {user.firstname}
            {user.lastname}
        </div>
    )
}

export default NormalUserHome;