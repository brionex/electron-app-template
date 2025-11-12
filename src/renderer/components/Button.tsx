interface Props {
  children: React.ReactNode
  fn: () => void
}

export const Button = ({ children, fn }: Props) => {
  return (
    <button
      className="font-bold py-2 px-5 rounded-lg bg-blue-900 hover:bg-blue-700 cursor-pointer basis-32 text-nowrap"
      onClick={fn}
    >
      {children}
    </button>
  )
}
