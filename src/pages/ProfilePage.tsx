import {LanguageSwitcher} from "../components/light/LanguageSwitcher.tsx";
import {ProfileInfo} from "../components/light/ProfileInfo.tsx";

const containerLanguageStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  padding: 20
}

const containerInfoStyle: React.CSSProperties = {
  paddingBottom: 20
}


export const ProfilePage = () => {
  return <>
    <div style={containerLanguageStyle}>
      <LanguageSwitcher/>
    </div>
    <div style={containerInfoStyle}>
      <ProfileInfo name='Алена Егорова' mail="skb@mail.ru"/>
    </div>
  </>
}

