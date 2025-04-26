import {NavLink, NavLinkRenderProps} from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import {useAppSelector} from "../redux/hooks/useRedux.ts";


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
  const user = useAppSelector(state => state.auth.user)
  return (
    <nav className="tab-bar" style={navStyle}>
      {
        user && <NavLink to="/route" style={linkStyle}>
              <LocationOnIcon fontSize="medium"/>
              <span>Карта</span>
          </NavLink>
      }

      <NavLink style={linkStyle} to="/">
        <HomeIcon fontSize="medium"/>
        <span>Мероприятие</span>
      </NavLink>

      {
        user && <NavLink style={linkStyle} to="/places">
              <LanguageIcon fontSize="medium"/>
              <span>Места</span>
          </NavLink>
      }

      <NavLink style={linkStyle} to={user ? '/profile' : '/login'}>
        <PersonIcon fontSize="medium"/>
        <span>Профиль</span>
      </NavLink>
    </nav>
  );
}
