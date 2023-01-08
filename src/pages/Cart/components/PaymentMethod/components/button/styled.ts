import styled from "styled-components";
interface IBaseButton {
  isSelect: boolean;
}
export const BaseButton = styled.button<any>`
  display: flex;
  align-items: center;
  width: 11.1rem;
  height: 3.1rem;
  border-radius: 6px;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.isSelect ? props.theme["purple-light"] : props.theme["base-button"]};
  border: ${(props) =>
    props.isSelect ? `2px solid ${props.theme.purple}` : 0};
  font-size: 0.75rem;

  &:focus {
    box-shadow: none;
  }
`;
