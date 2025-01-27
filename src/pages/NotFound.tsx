import AppButton from '@/components/Button'
import { ArrowLeft01Icon } from 'hugeicons-react'
import React from 'react'
import { useNavigate, useParams } from 'react-router'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)
  const redirect = (path: string) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-8 md:mb-0 md:mr-12">
          <img
            src="/404-illustration.svg"
            alt="404 Illustration"
            className="max-w-xs md:max-w-md !text-main-bluish"
          />
        </div>

        <div className="space-y-4 flex flex-col items-center ">
          <span className="text-[15rem] font-bold text-main-dark">404</span>
          <p className="text-lg text-main-bluish">Page Not Found</p>
          <p className="text-slate-600">
            Sorry, the page you{`’`}re looking for doesn{`’`}t exist or has been
            moved.
          </p>
          <AppButton
            text="Go to Home"
            onClick={() => redirect('/')}
            icon={<ArrowLeft01Icon size={15} />}
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
