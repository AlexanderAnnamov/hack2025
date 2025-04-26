import React from "react";

interface ProfileInfoProps {
  name: string | undefined,
  mail: string | undefined,
  photo?: string
}

const containerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const photoStyles: React.CSSProperties = {
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: '#8D8D8D'
}

const nameStyles: React.CSSProperties = {
  marginTop: 6
}

const mailStyles: React.CSSProperties = {
  marginTop: 4,
  fontWeight: 300,
  color: '#6B6B6B'
}

export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return <div style={containerStyles}>
    <div style={photoStyles}>
      {props.photo}
    </div>
    <h2 style={nameStyles}>{props.name}</h2>
    <p style={mailStyles}>{props.mail}</p>
  </div>
}