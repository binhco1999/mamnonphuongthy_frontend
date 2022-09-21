import Header from './Header'
function HeaderOnly({children}:{children:any}) {
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly;