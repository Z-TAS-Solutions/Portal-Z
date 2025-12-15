export default function TechDescription({ children, className = "" , text = "Bleh Bleh"}){

    return(
        <p className={`text-gray-300 text-sm md:text-base leading-relaxed 
            md:leading-loose text-center md:text-left font-light opacity-90 
            max-w-xl ${className}`}>

            {children ?? text}

        </p>
    )

}

