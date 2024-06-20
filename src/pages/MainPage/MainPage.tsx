import { showLogo } from '../../store/reducers/root-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

import { MainContainer } from './MainPage.style';

export const MainPage = () => {
  // const dispatch = useAppDispatch();
  // const state = useAppSelector<any>(state => state);
  // const showLogoFunc = () => {
  //   dispatch(showLogo({ isShowed: true }));
  // };

  return (
    <MainContainer>
      <div>Header</div>
      <div>Content</div>
    </MainContainer>
  );
};
