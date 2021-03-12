import React, { useState } from 'react'

import './Navbar.scss'

import logoIMG from '../../Assets/img/logo/shop.svg'

const Navbar = ({ panier}) => {

    const [top, setTop] = useState("-2000000%");
    const [event, setEvent] = useState('none');
    const [show, setShow] = useState(false);

    const [event2, setEvent2] = useState("none");
    const [right, setRight] = useState(-100000)

    const showSecondMenu = () => {
        setRight(0);
        setEvent2("auto");
    }

    const closeLogo = () => {
        setRight(-10000);
        setEvent2("none");
    }

    const showBasket = () => {
        if (show === true) {
            setTop("79%");
            setEvent('auto');
            setShow(false);
        } else {
            setTop("-2000000%");
            setEvent('none');
            setShow(true)
        }
    }

    const basketContent = () => {
        if (panier.length > 0) {
            return(
                <table className="table">
                    <thead className="thead">
                        <tr className="thead-tr">
                            <th className="thead-th">Nom</th>
                            <th className="thead-th">Quantité</th>
                            <th className="thead-th">Prix</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
            {panier.map((elem, index) =>
                <tr key= { index } className="tbody-tr">
                    <td className="tbody-td">{elem.titre}</td>
                    <td className="tbody-td">{elem.quantite}</td>
                    <td className="tbody-td">{elem.prix} €</td>
                </tr>
                )}
                </tbody>
            </table>
            )
        } else {
            return (
                <p>Il n'y a aucun article pour le moment</p>
            )
        }
    }


    return (
        <header className="navbarPrincipale">

            <div className="navbarPrincipaleWrapper">
                <div className="logo">
                    <img src={logoIMG} alt="" />
                    <h1>SHOPIZ</h1>
                </div>

                <div className="buttonMenu">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.6 511.6">
                        <path d="M475.4 72c-24.2-23.7-57.6-35.5-100.2-35.5-11.8 0-23.9 2-36.2 6.2a146 146 0 00-34.2 16.5c-10.6 7-19.7 13.5-27.3 19.6-7.6 6-14.8 12.6-21.7 19.4-6.8-6.8-14-13.3-21.7-19.4-7.6-6-16.7-12.6-27.3-19.6-10.5-7-22-12.4-34.2-16.5-12.3-4.1-24.3-6.2-36.1-6.2-42.7 0-76 11.8-100.2 35.4C12 95.5 0 128.3 0 170.2a125 125 0 006.7 39.4c4.5 13.5 9.6 25 15.3 34.5a294.6 294.6 0 0035.3 46.5c3.3 3.5 5.9 6 7.8 7.5l178.2 171.8c3.4 3.5 7.6 5.2 12.5 5.2s9.2-1.7 12.6-5.2l177.8-171.3c43.6-43.6 65.4-86.4 65.4-128.4s-12-74.7-36.2-98.3zm-54 199.8L255.8 431.4 90 271.5C54.3 236 36.5 202.1 36.5 170.2c0-15.5 2.1-29 6.2-40.9 4-11.8 9.3-21.1 15.7-28 6.4-7 14.1-12.7 23.3-17 9.1-4.5 18-7.4 26.8-9 8.8-1.4 18-2.2 28-2.2 9.9 0 20.5 2.4 32 7.3A146 146 0 01200 98.6c9.6 7.4 17.8 14.2 24.7 20.6 6.8 6.4 12.6 12.2 17.1 17.6 3.4 4.1 8.1 6.2 14 6.2 6 0 10.6-2 14-6.2 4.6-5.4 10.3-11.2 17.1-17.6 6.9-6.4 15.1-13.2 24.7-20.6a146 146 0 0131.6-18.2c11.4-4.9 22-7.3 32-7.3s19.2.8 28 2.3a103 103 0 0126.8 8.8c9.1 4.4 16.9 10 23.2 17 6.4 7 11.7 16.3 15.7 28.1 4.1 11.8 6.2 25.4 6.2 40.9 0 32-18 65.8-53.7 101.6z" />
                    </svg>

                    <svg viewBox="0 0 475.3 475.3" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }} onClick={showBasket}>
                        <path d="M475 178h-80L310 37a15 15 0 00-26 15l76 126H115l76-126a15 15 0 10-26-15L81 178H0v30h32l38 201c4 21 22 37 44 37h248c21 0 39-16 43-37l38-201h32v-30zm-99 226c-1 7-7 12-14 12H114c-7 0-14-5-15-12L62 208h351l-37 196z" />
                    </svg>

                    <svg className="buttonMenuMobile" viewBox="0 0 517.55 517.55" xmlns="http://www.w3.org/2000/svg" onClick={showSecondMenu}>
                        <path d="M499.06 240.29H18.48a18.48 18.48 0 000 36.97h480.59a18.48 18.48 0 000-36.97zM18.48 92.42h480.59a18.48 18.48 0 000-36.97H18.48a18.49 18.49 0 000 36.97zM499.06 425.13H18.48a18.48 18.48 0 100 36.97h480.59a18.48 18.48 0 000-36.97z" />
                    </svg>

                    <div className="basket-course"
                        style={{
                            top: top,
                            pointerEvents: event
                        }}>
                        <div className="basketContent">
                            {basketContent()}
                        </div>
                    </div>

                </div>


                <nav className="desktopMenu">
                    <ul>
                        <li>PROMO</li>
                        <li>BAGUES</li>
                        <li>CHAUSSURES</li>
                        <li>SACS A MAIN</li>
                    </ul>
                </nav>

                <ul className="secondNav" style={{ right: right, pointerEvents: event2 }}
                >
                    <span className="cross" onClick={closeLogo} >X</span>
                    <div className="logo">
                        <img src={logoIMG} alt="" />
                        <h1>SHOPIZ</h1>
                    </div>
                    <li className="scnd-nav-obj" id="news2"><span>Promo</span> <i className="fas fa-chevron-right"></i></li>
                    <li className="scnd-nav-obj" id="woman2"><span>Chaussures</span> <i className="fas fa-chevron-right"></i></li>
                    <li className="scnd-nav-obj" id="child2"><span>Bagues</span> <i className="fas fa-chevron-right"></i></li>
                    <li className="scnd-nav-obj" id="man2"><span>Sacs à main</span> <i className="fas fa-chevron-right"></i></li>
                </ul>


            </div>


        </header>
    )
}

export default Navbar
