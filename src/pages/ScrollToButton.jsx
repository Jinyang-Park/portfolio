import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleShowButton = () => {
    const { scrollY } = window;
    scrollY > 200 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleShowButton);

    return () => {
      window.removeEventListener('scroll', toggleShowButton);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} showButton={showButton}>
      <Arrow>
        <ArrowSvg
          width='21'
          height='16'
          viewBox='0 0 21 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-v-64da5e37=''
        >
          <ArrowPath
            d='M13.216 0H11.474C11.942 3.12 13.554 5.772 15.998 7.124L0 7.046V8.736L15.998 8.658C13.554 10.01 11.942 12.662 11.474 15.782H13.216C13.762 11.804 16.57 8.58 20.626 8.58V7.202C16.57 7.202 13.762 3.978 13.216 0Z'
            fill='#222222'
            data-v-1e2ff580=''
          ></ArrowPath>
        </ArrowSvg>
      </Arrow>
    </Button>
  );
};

export default ScrollToTopButton;
export const Button = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  position: fixed;
  right: 32px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  transition: opacity 300ms ease-in-out;
  background-color: #eeff04;

  &:hover {
    opacity: 0.8;
  }
`;

export const Arrow = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin-left: 2px;

  transform: rotate(270deg);
`;
export const ArrowSvg = styled.svg``;
export const ArrowPath = styled.path``;
