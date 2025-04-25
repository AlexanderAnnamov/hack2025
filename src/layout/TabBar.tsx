import {NavLink, NavLinkRenderProps} from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';


const linkStyle = (props: NavLinkRenderProps): React.CSSProperties => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
    fontWeight: props.isActive ? 700 : 400,
    color: props.isActive ? '#25C20C' : '#ccc',
  }
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: 20,
  position: "sticky",
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '13px 0 20px',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #25C20C',
}

export default function TabBar() {
  return (
    <nav className="tab-bar" style={navStyle}>
      <NavLink to="/route" style={linkStyle}>
        <LocationOnIcon fontSize="medium"/>
        <span>Карта</span>
      </NavLink>

      <NavLink style={linkStyle} to="/">
        <HomeIcon fontSize="medium"/>
        <span>Мероприятия</span>
      </NavLink>

      <NavLink style={linkStyle} to="/chats">
        <LanguageIcon fontSize="medium"/>
        <span>Чаты</span>
      </NavLink>

      <NavLink style={linkStyle} to="/profile">
        <PersonIcon fontSize="medium"/>
        <span>Профиль</span>
      </NavLink>
    </nav>
  );
}
