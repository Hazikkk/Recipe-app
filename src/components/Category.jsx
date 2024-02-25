import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <Column>
        <SLink to={'./cuisine/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink to={'./cuisine/American'}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
      </Column>
      <Column>
        <SLink to={'./cuisine/Thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to={'./cuisine/Japanese'}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </SLink>
      </Column>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;

  @media (max-width: 480px) {
    flex-direction: column; /* Display columns for mobile devices */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 1rem; /* Add margin around each icon for better spacing */
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.5rem; /* Adjusted margin for better spacing */
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media (max-width: 480px) {
    width: 6rem; /* Keep the width consistent for all icons */
    height: 6rem; /* Keep the height consistent for all icons */
    margin: 1rem; /* Adjusted margin for better spacing */
    transform: scale(0.8);

    h4 {
      font-size: 0.8rem;
    }

    svg {
      font-size: 1.3rem;
    }
  }
`;

export default Category;
