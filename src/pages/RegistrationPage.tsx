import {useState} from 'react';
import {setUser} from "../redux/slices/authReducer.ts";
import {useAppDispatch} from "../redux/hooks/useRedux.ts";
import {useRegisterMutation} from "../redux/api/authApi.ts";
import preview from '../assets/img/preview.png'
import { TextField} from "@mui/material";
import {Link, useNavigate} from "react-router";
import {CircularProgress} from "@mui/material";
import {setVisible} from "../redux/slices/toastReducer.ts";


const containerRegistrationStyles = {}

const previewImageStyles = {}

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setLoading] = useState(false)
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const result = await register({email, password, fullName});
    if ('data' in result) {
      dispatch(setUser(result.data! ));
      setEmail('')
      setPassword('')
      setFullName('')
      setLoading(false)
      dispatch(setVisible({text: 'Вы успешно прошли регистрацию!', severity: 'success'}))
      navigate('/')
    } else {
      setLoading(false)
      dispatch(setVisible({text: 'Упс, что-то пошло не так!', severity: "error"}))
    }
  };

  if (isLoading) return <div style={{display: 'flex',
    alignItems: 'center', justifyContent: 'center', marginTop: '70%'}}>
    <CircularProgress/></div>

  return (<div style={containerRegistrationStyles}>

      <form onSubmit={handleSubmit}>
        <div style={previewImageStyles}>
          <img style={{width: '100%'}} src={preview} alt=""/>
        </div>
        <h2 style={{padding: '8px 16px 0', fontWeight: 600}}>Регистрация</h2>
        <div style={{padding: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <TextField placeholder='Имя' value={fullName} onChange={(e) => setFullName(e.target.value)}
                     style={{width: '100%'}}/>
          <TextField placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                     style={{width: '100%'}}/>
          <TextField placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                     style={{width: '100%'}}/>
        </div>

        <div style={{padding: '0 16px'}}>
          <button type="submit" style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            padding: 12,
            color: '#ffffff',
            borderRadius: 8
          }}>Зарегистрироваться
          </button>
        </div>
        <div>
          <p style={{textAlign: 'center', marginTop: 20}}><Link style={{color: '#25c20c'}} to='/login'>Войдите</Link>,
            если у вас уже есть аккаунт</p>
        </div>
      </form>
    </div>

  );
};

