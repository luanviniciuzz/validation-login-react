import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useHookUserData from '../services/useHookUserData';

interface DataProps {
  name: string;
  email: string;
  avatar: {
    id: string;
    high: string
    medium: string;
    low: string;
  } | null;
}

export default function Profile() {

  const [data, setData] = useState<DataProps>({
    name: '',
    email: '',
    avatar: {
      id: '',
      high: '',
      medium: '',
      low: ''
    }
  })

  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('loggedUserToken');
    navigate('/');
  }

  const { searchUserData, loading } = useHookUserData()
  useEffect(() => {
    const fetchData = async () => {
    const token = localStorage.getItem('loggedUserToken');
    const dataUser = await searchUserData(token);
    if (dataUser){
      console.log(dataUser)
      setData({
        name: dataUser.name,
        email: dataUser.email,
        avatar: dataUser.avatar, 
      });
    };
  };

    fetchData();
   
  }, []);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-white">
        <div className="flex items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3">
                {/* Conteúdo à esquerda, se houver */}
            </div>
            <div className="flex items-center space-x-3">
                {/* Conteúdo à direita, se houver */}
                <button className="w-[272px] h-[44px] rounded-[6px] flex justify-center items-center bg-blueb2bit px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={logout}
                    type="submit"
                >
                    Logout
                </button>
              </div>
          </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-whitebackgroundprofile">
        <div className="bg-whitecardprofile md:w-[356px] h-min-[315px] shadow-[0_0_60px_0_rgba(0,0,0,0.25)] mx-auto p-8 rounded-3xl">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-lg block font-bold font-body leading-6 text-black">
            Profile picture
          </h1>
          {loading ? (
            <div
              className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
              role="status"
            ></div>
          ) : (
            <img
              className="rounded-lg w-[56px] h-[56px]"
              src={data.avatar ? data.avatar.high : ''}
              alt="profile image"
            />
          )}
        </div>

        <div className="space-y-6"> 
              <div>
                <label htmlFor="email" className="text-lg block font-bold font-body leading-6 text-black">
                  Your Name
                </label>
                <div className="bg-background_placeholder block w-full h-[54px] rounded-[9px] border-0 py-1.5 text-gray-900 flex items-center px-5">
                  <p>
                    {loading ? 'carregando...' : data.name}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-lg font block font-bold font-body leading-6 text-black" >
                    Your E-mail
                  </label>
                </div>
                
                <div className="bg-background_placeholder block w-full h-[54px] rounded-[9px] border-0 py-1.5 text-gray-900 flex items-center px-5">
                  <p>
                    {loading ? 'carregando...' : data.email}
                  </p>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
