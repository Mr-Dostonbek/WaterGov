import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import RoomIcon from '@mui/icons-material/Room';
import './style.css';
import {useT} from '../../custom/hooks/useT';

const Footer = () => {

    const { t, lang } = useT();

    return (
        <footer className='main-footer'>
            <div className="container ptb">
                <div className='row justify-content-between'>
                    <div className='col-lg-3 col-md-6'>
                        <h4 className='footer-title'>{t(`footerSmap.${lang}`)}</h4>
                        <ul>
                            <li>
                                <Link to="boshqarma">{t(`bHaqidaTitle1.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="News">{t(`Yangiliklar.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="Fotogalereya">{t(`Mediagalereya.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="datas">{t(`Malumotlar.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="Hujjatlar">{t(`Hujjatlar.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="Interaktive">{t(`Interaktiv.${lang}`)}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-5 col-md-6 mt-4 mt-lg-0'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6064.445469975147!2d70.9263!3d40.536668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6a092642bef45223!2zNDDCsDMyJzEyLjAiTiA3MMKwNTUnMzQuNyJF!5e0!3m2!1suz!2s!4v1645180463732!5m2!1suz!2s" width="100%" height="100%"
                            style={{ border: "0", minHeight: "270px" }}
                            allowFullScreen loading="lazy"></iframe>

                    </div>
                    <div className='col-lg-3 col-md-6 mt-5 mt-md-0'>
                        <h4 className='footer-title'>{t(`Boglanish.${lang}`)}</h4>
                        <ul>
                            <li>
                                <a href='tel:998 73 542 21 28'> <PhoneIcon /> + 998 73 542 21 28</a>
                            </li>
                            <li>
                                <a href='#'> <EmailIcon /> Sox_Oqtepa@mail.ru</a>
                            </li>
                            <li>
                                <a href='#'> <TelegramIcon /> + 998 73 542 21 28</a>
                            </li>
                            <li>
                                <RoomIcon /> {t(`tAddress.${lang}`)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bot'>
                <div className='container-fluid footer-bottom text-black'>
                    <div className='row pt-1 pb-1'>
                        <div className='col-md-6 col-lg-4 d-flex align-items-center'>
                            <img src='/img/firma.jpg' width="150px" alt='iFraganus' />
                            iFraganus IT & Design Group
                        </div>
                        <div className='col-md-6 col-lg-6 d-flex align-items-center'>
                            {t(`iFraganus.${lang}`)}
                        </div>
                        <div className='col-md-6 col-lg-2 d-flex align-items-center'>
                            <a className='text-black' href='tel:998909256308 '>+998 90 925 63 08 </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
