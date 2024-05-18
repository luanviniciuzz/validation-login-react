import Foto from '../assets/img/bitprof.png'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('loggedUserToken');
    navigate('/');
  }
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-white">
        <div className="flex items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3">
                {/* Conteúdo à esquerda, se houver */}
            </div>
            <div className="flex items-center space-x-3">
                {/* Conteúdo à direita, se houver */}
                <button
                    onClick={logout}
                    type="submit"
                    className="w-[272px] h-[44px] rounded-[6px] flex justify-center items-center bg-blueb2bit px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Logout
                </button>
              </div>
          </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-whitebackgroundprofile">
        <div className="bg-whitecardprofile md:w-[356px] h-min-[315px] shadow-[0_0_60px_0_rgba(0,0,0,0.25)] mx-auto p-8 rounded-3xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto w-295 w-[56px] h-[56px] object-cover rounded-[8px]"
              src={Foto}
              alt="Your Company"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="text-lg block font-bold font-body leading-6 text-black">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder='@gmail.com'
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-background_placeholder block w-full h-[54px] rounded-[9px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-background_placeholder placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellowb2bit sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-lg font block font-bold font-body leading-6 text-black" >
                    Your E-mail
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    placeholder='**********'
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-background_placeholder block w-full h-[54px] rounded-[9px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-background_placeholder placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellowb2bit sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
