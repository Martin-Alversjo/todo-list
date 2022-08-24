import React from "react"

type CheckboxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isChecked: boolean
}

const Checkbox = ({ onChange, isChecked }: CheckboxProps) => {
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
    </div>
  )
}

export default Checkbox
