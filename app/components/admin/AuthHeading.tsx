"use client";

interface AuthHeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}


const AuthHeading: React.FC<AuthHeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="font-normal text-neutral-500 mt-2">
            {subtitle}
        </div>
    </div>
  )
}

export default AuthHeading