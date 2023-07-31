import { useEffect, useState } from 'react'

const useForm = (initial = {}) => {
  const [fields, setFields] = useState(initial)
  const initialValues = Object.values(initial).join('')

  const handleChange = e => {
    let { name, value } = e.target

    setFields(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleReset = () => setFields(initial)

  useEffect(
    () => {
      setFields(initial)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialValues]
  )

  return {
    fields,
    handleChange,
    handleReset,
  }
}

export default useForm
