import { useState } from 'react';
import {setUser} from "../redux/slices/authReducer.ts";
import {useAppDispatch} from "../redux/hooks/useRedux.ts";
import {useRegisterMutation} from "../redux/api/authApi.ts";
export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await register({ email, password, fullName });
    if ('data' in result) {
      dispatch(setUser(result.data!));
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="ФИО" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

