import {LanguageSwitcher} from "../components/light/LanguageSwitcher.tsx";
import {ProfileInfo} from "../components/light/ProfileInfo.tsx";
import {LinksMenu, paramsLinks, personalInfoLinks} from "../components/light/LinksMenu.tsx";
import {editInfoLinks} from "../components/light/LinksMenu.tsx";

const containerLanguageStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  padding: 20
}

const containerInfoStyle: React.CSSProperties = {
  paddingBottom: 20
}

const containerLinkStyle: React.CSSProperties = {
  padding: '0 16px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10
}


export const ProfilePage = () => {
  return <>
    <div style={containerLanguageStyle}>
      <LanguageSwitcher/>
    </div>
    <div style={containerInfoStyle}>
      <ProfileInfo name='Алена Егорова' mail="skb@mail.ru"/>
    </div>
    <div style={containerLinkStyle}>
      <LinksMenu links={editInfoLinks}/>
      <LinksMenu links={personalInfoLinks}/>
      <LinksMenu links={paramsLinks}/>
    </div>
  </>
}

