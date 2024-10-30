import React, { useState } from 'react'
import SignUp from './SignUp'
import { Box, Typography } from '@mui/material';
import SignIn from './SignIn';

//Authentication 컴포넌트
// : 사용자가 로그인 또는 회원가입 화면을 전환 할 수 있는 기능을 제공
export default function Authentication() {

const [view, setView] = useState<'sign-in'|'sign-up'>('sign-in');


const toggleView = () => {
 setView((prevView) => (prevView === 'sign-in' ? 'sign-up' : 'sign-in'));
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Typography variant="h4" textAlign="center">
        {view === 'sign-in' ? '로그인' : '회원가입'}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        {view === 'sign-in' ? <SignIn /> : <SignUp />}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography sx={{ cursor: 'pointer' }} onClick={toggleView}>
          {view === 'sign-in' ? '회원가입 화면으로 전환' : '로그인 화면으로 전환'}
        </Typography>
      </Box>
    </Box>
  );
}