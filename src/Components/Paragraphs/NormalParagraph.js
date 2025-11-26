export default function NormalParagraph({text= "Bleh bleh", children, className = ""}){
    return (
      <p className={ `text-gray-300 mt-4 text-center max-w-2xl text-lg 
      opacity-90 ${className}` }>

        {children ?? text}

      </p>
    )
}