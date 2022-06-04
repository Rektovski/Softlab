import css from './HeaderCSS.css'

function Header(){
    const foto=require('./images/png-transparent-macbook-pro-laptop-apple-imac-vintage-computer-angle-electronics-computer.png');
    return (
        <header className="row mb-2">
            <div className="col-6 col-sm-12 col-lg-6 text-center">
                <img style={css} className="text-center" src={foto} alt={"foto"}/>
            </div>
            <div  className="col-6 col-sm-12 col-lg-6">
                <h1 className="text-center ">My Website!</h1>
            </div>
        </header>
    );
}

export default Header;