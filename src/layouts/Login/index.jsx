import './index.css'
import { Outlet } from "react-router-dom"

export default function LoginLayout() {
  return (
        <div className='login__layout'>
            <main>
                <Outlet />
            </main>
        </div>  )
}
