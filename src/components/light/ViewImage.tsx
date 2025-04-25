interface ViewImageProps {
  imageUrl: string
}

const imageStyles: React.CSSProperties = {
  width: '100%',
}

export const ViewImage: React.FC<ViewImageProps> = (props) => {
  return <img style={imageStyles} src={props.imageUrl} alt=""/>
}