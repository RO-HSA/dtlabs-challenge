type Props = {
  width: string
  height: string
  bgColor: string
  className?: string
}

const Separator: React.FC<Props> = ({
  width,
  height,
  bgColor,
  className
}: Props) => {
  return (
    <div
      className={className}
      style={{ width, height, backgroundColor: bgColor }}
    ></div>
  )
}

export default Separator
