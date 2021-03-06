import { t } from 'i18next';
import React from 'react';
import {useT} from '../../../custom/hooks/useT'

const BoshqarmaTuzilmasi = () => {

    const { t, lang } = useT()

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`bTuzilmaTitle1.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        {/* <h5 className='mt-3 mb-3'>{t(`bTuzilmaTitle2.${lang}`)}</h5> */}
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col mb-5 pr-5 pl-5 mr-5 ml-5'>
                        <img src='/img/struktura.png' width="100%" alt='struktura image' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoshqarmaTuzilmasi;
