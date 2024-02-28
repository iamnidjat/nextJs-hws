import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props: any) => {
    switch (props.variant) {
      case 'filled':
        return 'blue';
      case 'primary':
        return 'green';
      case 'secondary':
        return 'gray';
      case 'success':
        return 'green';
      case 'danger':
        return 'red';
      case 'warning':
        return 'orange';
      case 'info':
        return 'lightblue';
      case 'disabled':
        return 'lightgray';
      default: // outlined
        return 'yellow';
    }
  }};
  border: 2px solid black;
  padding: 5px;
  margin: 10px;
  cursor: ${(props: any) => (props.variant === 'disabled' ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props: any) => (props.variant !== 'disabled' ? 'green' : null)};
  }
`;

export { Button };
