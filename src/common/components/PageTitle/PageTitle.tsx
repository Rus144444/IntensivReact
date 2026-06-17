type Props = {
    title: string
    style:  React.CSSProperties
}

export const PageTitle = ({title, style}: Props) => {
    return <h1 className="title" style={style}>{title}</h1>
}