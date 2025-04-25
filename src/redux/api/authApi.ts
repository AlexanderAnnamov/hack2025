// src/features/auth/authApi.ts
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase.ts';
import { User } from '../../models/map/User.ts'

interface RegisterArgs {
  email: string;
  password: string;
  fullName: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    register: builder.mutation<User, RegisterArgs>({
      async queryFn({ email, password, fullName }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          const userData: User = {
            id: user.uid,
            email: user.email!,
            name: fullName,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/6915/6915987.png'
          };

          await setDoc(doc(db, 'users', user.uid), userData);

          return { data: userData };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),

    login: builder.mutation<User, LoginArgs>({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          const docSnap = await getDoc(doc(db, 'users', user.uid));
          const userData = docSnap.data() as User;

          return { data: userData };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;