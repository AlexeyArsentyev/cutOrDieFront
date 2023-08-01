import { FooterStyles } from './Footer.styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import vertical from '../../assets/images/vertical.svg';
import LanguageIcon from '@mui/icons-material/Language';
import coin from '../../assets/images/coin.svg';
import hryvnia from '../../assets/images/hryvnia.svg';
import euro from '../../assets/images/euro.svg';
import dollar from '../../assets/images/dollar.svg';

const footerLangs = {
  en: {
    contacts: 'Contacts',
    about: 'About me',
    termsofUse: 'Terms of Use',
    refund: 'Refund policy',
    privacy: 'Privacy policy',
  },
  ua: {
    contacts: 'Контакти',
    about: 'Про мене',
    termsofUse: 'Умови користування',
    refund: 'Політика повернень',
    privacy: 'Політика конфідеційності',
  },
};

export const Footer = (props: any) => {
  const footerInfoGenerator = (lang: string) => {
    if (lang === 'en') {
      return footerLangs.en;
    } else {
      return footerLangs.ua;
    }
  };

  const footerTranslated = footerInfoGenerator(props.language);

  return (
    <div className='footer-section' style={FooterStyles.wrapper}>
      <div style={FooterStyles.footerSection}>
        <div className='logo_part' style={FooterStyles.logoPart}>
          <img
            src={require('../../assets/images/footerLogo.png')}
            alt='logo'
            width={250}
            height={183}
          />
          <p style={{ color: '#808080', fontSize: '15px' }}>
            &copy; 2023 Cut or die. All rights reserved.
          </p>
        </div>
        <div className='info_part' style={{ width: '80%' }}>
          <ul style={FooterStyles.footerInfo}>
            <li className='contacts' style={FooterStyles.infoItem}>
              <p style={{ margin: 0 }}>{footerTranslated.contacts}</p>
              <p style={{ margin: 0 }}>{footerTranslated.about}</p>
              <p style={{ margin: 0 }}>FAQ</p>
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='policy' style={FooterStyles.infoItem}>
              <p style={{ margin: 0 }}>{footerTranslated.termsofUse}</p>
              <p style={{ margin: 0 }}>{footerTranslated.refund}</p>
              <p style={{ margin: 0 }}>{footerTranslated.privacy}</p>
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='social_networks' style={FooterStyles.socialNetworks}>
              <InstagramIcon sx={{ fontSize: '41px' }} />
              <YouTubeIcon sx={{ fontSize: '41px' }} />
            </li>
            <img src={vertical} alt='line' height={190} />
            <li className='currency_language' style={{ width: '15%' }}>
              <div style={FooterStyles.currency}>
                <img src={coin} alt='coin' width={35} />
                <img src={hryvnia} alt='hryvnia' height={28} width={28} />
                <img src={euro} alt='euro' height={25} width={25} />
                <img src={dollar} alt='dollar' height={30} width={30} />
              </div>
              <div style={FooterStyles.language}>
                <LanguageIcon sx={{ fontSize: '37px' }} />
                <button
                  onClick={() => {
                    props.changeLangHandler('ua');
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '23px',
                    color: props.language === 'ua' ? 'white' : '#808080',
                  }}
                >
                  UA
                </button>
                <button
                  onClick={() => {
                    props.changeLangHandler('en');
                  }}
                  style={{
                    marginBlockStart: '1em',
                    marginBlockEnd: '1em',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '23px',
                    color: props.language === 'en' ? 'white' : '#808080',
                  }}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
