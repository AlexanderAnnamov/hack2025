interface TitlePageProps {
  text: string
}

const titleStyles: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 500
}

export const TitlePage: React.FC<TitlePageProps> = (props) => {
  return <h2 style={titleStyles}>{props.text}</h2>
}