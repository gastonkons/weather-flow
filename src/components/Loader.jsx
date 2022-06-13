import { ReactComponent as LoaderIcon } from '../assets/icons/loader.svg'
import styled, { keyframes } from 'styled-components'

const Loader = ({ active }) => {
  if (!active) {
    return null
  }

  return (
    <LoaderContainer>
      <LoaderIcon className='LoaderSVG' />
    </LoaderContainer>
  )
}

const LoaderRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 100px;
    height: 100px;
    animation: ${LoaderRotation} 1s linear infinite;
  }
`

export default Loader
