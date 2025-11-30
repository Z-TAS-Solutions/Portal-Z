export default function FeatureDescription(
    text = "Bleh feature Bleh Description",
    className = "",
    children
){
    return (
        <p className={ `text-gray-300 mt-4 text-center max-w-2xl text-lg 
      opacity-90${className}` }>

            {text ?? children}

        </p>
    )
}