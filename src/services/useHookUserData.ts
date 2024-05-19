import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './ApiService';

interface Props {
  tokens: {
    access: string;
    refresh: string;
  };
  user: {
    created: string;
    id: number;
    is_active: boolean;
    modified: string;
    role: string;
    type: string;
    name: string;
    email: string;
    avatar:  {
      id: string,
      high: string,
      medium: string,
      low: string
    }
  };
}

interface UserDataProps {
  name: string;
  email: string;
  avatar:  {
    id: string,
    high: string,
    medium: string,
    low: string
  }
}

const useHookUserData = () => {
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await axios.post('/auth/login/',
        {
           email,
           password
        },
        {
          headers: {
            Accept: 'application/json;version=v1_web',
            'Content-Type': 'application/json',
          },
        },
      );

      const loginResponse: Props = await response.data;
      const loggedUserToken = loginResponse.tokens.access;

      localStorage.setItem('loggedUserToken', loggedUserToken);

    } catch (error) {
      setErrorLogin(true)
      setTimeout(()=>{
        setErrorLogin(false)
      }, 2000)
    } finally {
      setLoading(false);
    }
  };
  const reloadLogin = (token: string | null) => {
    if (token) {
      navigate('/profile');
    }
  };

  const searchUserData = async (token: string | null) => {
    try {
      setLoading(true);
      if (!token) {
        navigate('/');
        return null;
      }

      const response = await axios.get('/auth/profile/',
        {
          headers: {
            Accept: 'application/json;version=v1_web',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const userData: UserDataProps = await response.data;
      return userData;
      
    } catch (error) {
     
    } finally {
      setLoading(false);
    }
  };

  return { searchUserData, loading, login, reloadLogin, errorLogin };
};

export default useHookUserData;