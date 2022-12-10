import React, { FC } from "react";

import Button from "@/components/Button";
import { IGetHospitalInfo } from "@/service/apis";
import Link from "next/link";
import TimeTable from "@/components/TimeTable";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface IInformationProps {
  hospitalData?: IGetHospitalInfo;
}

const Information: FC<IInformationProps> = ({ hospitalData }) => {
  const theme = useTheme();
  const keywords: string[] = [
    "카이로프랙틱",
    "척추",
    "운동병행",
    "치료복 구비",
    "재활",
    "운동프로그램",
  ];

  return (
    <HospitalInformationWrapper>
      <div>
        <Content>
          <div className="list">
            <div className="list-title">병원 소개</div>
            <div>{hospitalData?.introduction}</div>
          </div>
          <div className="list">
            <div className="list-title">치료 키워드</div>
            <ButtonWrapper>
              {keywords.map((keyword, i) => (
                <Button
                  key={i}
                  text={keyword}
                  backgroundColor={theme.colors.white}
                  color={theme.colors.black}
                  border={`0.1rem solid ${theme.colors.grey}`}
                />
              ))}
            </ButtonWrapper>
          </div>
          <div className="list">
            <div className="list-title">진료 시간</div>
            <TimeTable />
          </div>
          <div className="list">
            <div className="list-title">주소</div>
            <div>서울특별시 강남구 도산대로1길 4</div>
          </div>
          <div className="list">
            <div className="list-title">전화번호</div>
            <div className="phone-number">02-585-2231</div>
          </div>
        </Content>
      </div>
    </HospitalInformationWrapper>
  );
};

export default Information;

const HospitalInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Content = styled.div`
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
    font-size: ${(props) => props.theme.fontSizes.lg};
    line-height: ${(props) => props.theme.lineHeights.lg};

    &-title {
      color: ${(props) => props.theme.colors.purple};
      font-weight: 700;
    }
  }

  .phone-number {
    color: ${(props) => props.theme.colors.purple_light};
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
