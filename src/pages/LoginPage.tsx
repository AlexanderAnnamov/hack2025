import { useState } from 'react';
import {useLoginMutation} from "../redux/api/authApi.ts";
import {useAppDispatch, useAppSelector} from "../redux/hooks/useRedux.ts";
import {setUser} from "../redux/slices/authReducer.ts";

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user)

  console.log('user', user)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login({ email, password });
    if ('data' in result) {
      dispatch(setUser(result.data!));
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  );
};

