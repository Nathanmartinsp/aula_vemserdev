import { TailSpin } from "react-loader-spinner";
import { useTheme } from 'styled-components'

export const TailSpinVSD = () => {
  const theme = useTheme()
  return (

  <TailSpin
    visible={true}
    height="80"
    width="80"
    color={[ theme.primary ]}
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    />
  
  )
}