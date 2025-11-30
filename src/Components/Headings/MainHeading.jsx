export default function MainHeading({ heading = "Z-TAS", children, className = "" }){

    return (
    <div>
      <h1 className={ `text-white font-bold text-6xl sm:text-7xl text-center 
      leading-tight drop-shadow-[0_0_20px_#007BFF]
         ${className}` }>

        {children ?? heading}

      </h1>
    </div>

    )
}
