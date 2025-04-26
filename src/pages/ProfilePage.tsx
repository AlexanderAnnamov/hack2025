import {LanguageSwitcher} from "../components/light/LanguageSwitcher.tsx";
import {ProfileInfo} from "../components/light/ProfileInfo.tsx";
import {LinksMenu, paramsLinks, personalInfoLinks} from "../components/light/LinksMenu.tsx";
import {editInfoLinks} from "../components/light/LinksMenu.tsx";
import {useAppSelector} from "../redux/hooks/useRedux.ts";

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
  const user = useAppSelector(state => state.auth.user)

  return <>
    <div style={containerLanguageStyle}>
      <LanguageSwitcher/>
    </div>
    <div style={containerInfoStyle}>
      <ProfileInfo name={user?.name} mail={user?.email}/>
    </div>
    <div style={containerLinkStyle}>
      <LinksMenu links={editInfoLinks}/>
      <LinksMenu links={personalInfoLinks}/>
      <LinksMenu links={paramsLinks}/>
    </div>
  </>
}