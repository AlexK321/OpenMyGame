import { showLogo } from '../../store/reducers/root-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { GameBlock } from '../../templates/GameBlock';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  // const dispatch = useAppDispatch();
  // const state = useAppSelector<any>(state => state);
  // const showLogoFunc = () => {
  //   dispatch(showLogo({ isShowed: true }));
  // };

  return (
    <MainWrapper>
      <MainContent>
        <GameBlock />
      </MainContent>
    </MainWrapper>
  );
};
