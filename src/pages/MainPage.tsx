import {TitlePage} from "../components/light/TitlePage.tsx";
import {ViewImage} from "../components/light/ViewImage.tsx";
import hackImg from '../assets/img/hack.png'
import {useState} from "react";

const containerTitleStyles = {
  padding: 20
}

const containerImageStyles = {
  padding: '0 20px'
}

const containerH3Styles = {
  color: '#25C20C',
  fontSize: 18,
  padding: '10px 20px',
  fontWeight: '700'
}

const containerDescriptionStyles = {
  padding: '0 20px'
}

const containerButtonsHelp = {
  flexGrow: 1,
}


const buttonSupportStyles = {
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 14,
  backgroundColor: '#25C20C',
  color: '#ffffff'
}

const buttonSupportVolumeStyles = {
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  border: '1px solid #25C20C',
  color: '#ffffff'
}

export const MainPage = () => {
  const [isVisibleHelpButtons, setVisibleHelpButtons] = useState(false)
  return <div style={{display: 'flex', flexDirection: 'column', height: '85vh'}}>
    <div style={containerTitleStyles}>
      <TitlePage text="IT-Джем «ИТы Герой»"/>
    </div>
    <div style={containerImageStyles}>
      <ViewImage imageUrl={hackImg}/>
    </div>
    <div style={containerH3Styles}>
      <p style={{fontWeight: '700'}}>Дата проведения: 25-26 апреля 2025</p>
    </div>
    <div style={containerDescriptionStyles}>
      <p>Джем – это мероприятие, похожее на хакатон, где студенты командами пытаются создать MVP за пару дней по
        определённому кейсу, который раскрывается перед началом джема. Название «ИТ джем» имеет музыкальные корни.
        Джем-сешн – это импровизация ради получения удовольствия и создания чего-то нового в непринуждённой
        обстановке</p>
    </div>
    <div style={containerButtonsHelp}>
    </div>
    <div style={{flexShrink: 0, display: 'flex', justifyContent: 'end', paddingRight: 20}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        {isVisibleHelpButtons && (<>
          <button style={buttonSupportVolumeStyles}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                stroke="#25C20C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
                stroke="#25C20C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </button>
          <button style={buttonSupportVolumeStyles}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#25C20C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#25C20C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </>)}

        <button onClick={() => setVisibleHelpButtons(!isVisibleHelpButtons)} style={buttonSupportStyles}>
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.375 13.625C18.375 14.0891 18.1906 14.5342 17.8624 14.8624C17.5342 15.1906 17.0891 15.375 16.625 15.375H6.125L2.625 18.875V4.875C2.625 4.41087 2.80937 3.96575 3.13756 3.63756C3.46575 3.30937 3.91087 3.125 4.375 3.125H16.625C17.0891 3.125 17.5342 3.30937 17.8624 3.63756C18.1906 3.96575 18.375 4.41087 18.375 4.875V13.625Z"
              stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  </div>
}