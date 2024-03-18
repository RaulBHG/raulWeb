import styled from 'styled-components'

export const Skill = styled.div`
  ${(props) => {
    return `background-color: ${props.bg_color};
            font-size: 18px;
            margin-right: 1em;
            margin-bottom: 1rem;
            color: white;
            border: 0;
            padding: 0.4em 0.6em;
            border-radius: 10px;
            font-weight: 600;
            width: min-content;
            box-shadow: 0 0 6px #10447c;`
  }}
`