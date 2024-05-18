import Logo from '../assets/img/B2BitLogo.png'

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white md:w-[438px] h-[534px] shadow-[0_0_60px_0_rgba(0,0,0,0.25)] mx-auto p-8 rounded-3xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-116 w-auto w-295"
              src={Logo}
              alt="Your Company"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="text-lg block font-bold font-body leading-6 text-black">
                  E-mail
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
                    Password
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

                <button
                  type="submit"
                  className="w-full h-[54px] rounded-[9px] flex justify-center items-center bg-blueb2bit px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
