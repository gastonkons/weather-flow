import styled from 'styled-components'

export const AsideSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4em;
  padding: 1em;
  & > h2 {
    font-size: 1em;
  }

  & > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    margin-top: 10px;
  }

  & > ul > li {
    margin: 0.5em 0;
    padding: 0.8em;
    border-radius: 10px;
    background-color: #eee;
    font-size: 0.8em;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #57DFB7;
    }
  }

  @media (max-width: 1180px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    width: 100%;
    overflow: hidden;

    & > h2 {
      font-size: 0.8em;
      margin-right: 0px;
    }

    & > ul {
      display: block;
      margin: 0px;
      margin-top: 10px;
      padding: 0px;
      padding-bottom:5px;
      overflow: auto;
      white-space: nowrap;
      text-align: center;
    }


    & > ul::-webkit-scrollbar  {
      background: #57DFB7;
      height:2px;
    }

    & > ul > li {
      display: inline-block;
      margin: 0 0.5em;
    }
  }
`
