import {Link} from 'react-router'
import routesLink from '../../assets/icons/arrow-icon.svg'
import rightArrowLink from '../../assets/icons/right-arrow.svg'
import messageSquareLink from '../../assets/icons/message-square.svg'
import editLink from '../../assets/icons/edit-icon.svg'
import todoLink from '../../assets/icons/todo-icon.svg'
import messageLink from '../../assets/icons/message-icon.svg'
import exitLink from '../../assets/icons/exit-icon.svg'
import {useAppDispatch} from "../../redux/hooks/useRedux.ts";
import {setUser} from "../../redux/slices/authReducer.ts";

interface EditLinkInfo {
  title: string,
  iconUrl: string,
  viewRightArrow: boolean,
  color: string,
  route: string,
  func?: () => void
}

interface LinksMenuProps {
  links: EditLinkInfo[]
}

export const editInfoLinks: EditLinkInfo[] = [
  {
    title: 'Маршруты',
    iconUrl: routesLink,
    viewRightArrow: true,
    color: '#080808',
    route: '/'
  },
  {
    title: 'Отзывы',
    iconUrl: messageSquareLink,
    viewRightArrow: true,
    color: '#080808',
    route: '/'
  },
  {
    title: 'Мероприятия',
    iconUrl: editLink,
    viewRightArrow: true,
    color: '#080808',
    route: '/'
  },
]

export const personalInfoLinks: EditLinkInfo[] = [
  {
    title: 'Личные данные',
    iconUrl: todoLink,
    viewRightArrow: true,
    color: '#080808',
    route: '/'
  }
]

export const paramsLinks: EditLinkInfo[] = [
  {
    title: 'Поддержка',
    iconUrl: messageLink,
    viewRightArrow: true,
    color: '#080808',
    route: '/'
  },
  {
    title: 'Выход',
    iconUrl: exitLink,
    viewRightArrow: false,
    color: '#ba2626',
    route: '/login',
  },
]

const containerLinks: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  overflow: 'hidden'
}

const linkMenuStyles = (color: string): React.CSSProperties => {
  return {
    padding: '12px 8px',
    backgroundColor: '#f7f7f7',
    color: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

const LinkMenu = (props: { link: EditLinkInfo, onClick?: () => void }) => {
  return <Link onClick={props.onClick} to={props.link.route} style={linkMenuStyles(props.link.color)}>
    <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
      <img src={props.link.iconUrl} alt=""/>{props.link.title}
    </div>
    {props.link.viewRightArrow && <img src={rightArrowLink} alt=""/>}
  </Link>
}

export const LinksMenu: React.FC<LinksMenuProps> = (props) => {
  const dispatch = useAppDispatch()
  return (
    <div style={containerLinks}>
      {props.links.map(link => {
        if (link.title === 'Выход') {
          return <LinkMenu onClick={() => dispatch(setUser(null))} link={link}/>
        }
        return <LinkMenu link={link}/>
      })}
    </div>
  )
}