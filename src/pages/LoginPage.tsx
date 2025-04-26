import {useState} from 'react';
import {useLoginMutation} from "../redux/api/authApi.ts";
import {useAppDispatch} from "../redux/hooks/useRedux.ts";
import {setUser} from "../redux/slices/authReducer.ts";
import preview from "../assets/img/preview.png";
import {CircularProgress, TextField} from "@mui/material";
import {Link} from "react-router"
import {setVisible} from "../redux/slices/toastReducer.ts";
import {useNavigate} from "react-router";


export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const [isLoading, setLoading] = useState(false)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    
    const result = await login({email, password});
    if ('data' in result) {
      setLoading(false)
      dispatch(setUser(result.data!));
      dispatch(setVisible({text: 'Вы успешно вошли!', severity: 'success'}))
      navigate('/')
    } else {
      setLoading(false)
      dispatch(setVisible({text: 'Упс, что-то пошло не так!', severity: 'error'}))
    }
  };

  if (isLoading) return <div style={{display: 'flex',
    alignItems: 'center', justifyContent: 'center', marginTop: '70%'}}>
    <CircularProgress/></div>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img style={{width: '100%'}} src={preview} alt=""/>
      </div>
      <h2 style={{padding: '8px 16px 0', fontWeight: 600}}>Вход</h2>
      <div style={{padding: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
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
        }}>Войти
        </button>
      </div>
      <div>
        <p style={{textAlign: 'center', marginTop: 20}}><Link style={{color: '#25c20c'}} to='/register'>Зарегестрируйтесь</Link>, если у вас нет аккаунта</p>
      </div>
    </form>

  );
};

