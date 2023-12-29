
// eslint-disable-next-line react/prop-types
export function Button ({ value, href, onClick }) {
    let Component = 'button'

    const props = {}

    if(href) {
        Component = 'a'
        props.href = href
    }

    if (onClick) {
        props.onClick = onClick
    }

    return (
        <Component {...props} className="py-1 px-2 bg-primary hover:bg-white hover:text-[#121212] border-[4px] border-primary text-white transition-all">
            {value}
        </Component>
    )
}