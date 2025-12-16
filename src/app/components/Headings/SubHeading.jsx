export default function SubHeading({text = "", children, className =""}){

    return (
        <>
            <p className= { `text-xs text-gray-500 uppercase tracking-[0.2em] font-mono ${className}` }>
                {children ?? text}
            </p>
        </>
    )

}