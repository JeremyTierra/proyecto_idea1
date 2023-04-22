import img from "../assets/post1.jpg"
export default function Login() {
    return (
        <div className="py-6 h-screen flex items-center">
            <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl w-full">
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-center text-2xl font-semibold text-gray-700">Brand</h2>
                    <p className="text-center text-xl text-gray-600">Welcome back!</p>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="w-1/5 border-b lg:w-1/4"></span>
                        <a href="#" className="text-center text-xs uppercase text-gray-500">login with email</a>
                        <span className="w-1/5 border-b lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm font-bold text-gray-700">Email Address</label>
                        <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="mb-2 block text-sm font-bold text-gray-700">Password</label>
                        </div>
                        <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="password" />
                    </div>
                    <div className="mt-8">
                        <button className="w-full rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">Login</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="w-1/5 border-b md:w-1/4"></span>
                        <a href="#" className="text-xs uppercase text-gray-500">or sign up</a>
                        <span className="w-1/5 border-b md:w-1/4"></span>
                    </div>
                </div>
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage:`url(${img})`}}></div>

            </div>
        </div>

    )
}
