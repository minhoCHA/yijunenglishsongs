import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 24 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>아이를 위한 맞춤형 노래 서비스</PricingHeading>
          <PricingContainer>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>베이직 패키지</PricingCardPlan>
                <PricingCardCost>9,900원</PricingCardCost>
                <PricingCardLength>/월</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>✔️ 이름이 들어간 노래 메들리 5곡 제공</PricingCardFeature>
                  <PricingCardFeature>✔️ 유튜브 비공개 재생목록을 통해 제공 (구독 기간 동안 무제한 감상)</PricingCardFeature>
                  <PricingCardFeature>✔️ 매월 새로운 노래 1곡 업데이트</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>프리미엄 패키지</PricingCardPlan>
                <PricingCardCost>월 19,900원</PricingCardCost>
                <PricingCardLength>/월</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>✔️ 이름이 들어간 노래 5곡 + 맞춤형 영상 제공</PricingCardFeature>
                  <PricingCardFeature>✔️ 유튜브 비공개 재생목록 또는 다운로드 가능</PricingCardFeature>
                  <PricingCardFeature>✔️ 기념일 맞춤곡 (첫돌, 생일, 크리스마스 등 특별한 순간을 위한 노래 추가)</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>맞춤 제작 패키지</PricingCardPlan>
                <PricingCardCost>1곡당 14,900원</PricingCardCost>
                <PricingCardLength>/1곡</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>✔️ 부모가 원하는 스타일과 테마로 완전 맞춤 제작</PricingCardFeature>
                  <PricingCardFeature>✔️ 특별한 날(첫돌, 크리스마스, 어린이날) 테마 적용 가능</PricingCardFeature>
                  <PricingCardFeature>✔️ 부모님, 형제, 조부모의 목소리를 추가할 수 있는 AI 음성 합성 기능 제공</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing