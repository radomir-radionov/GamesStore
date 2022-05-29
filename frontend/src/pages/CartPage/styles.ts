import styled from "styled-components";
import { colors } from "styles";

export const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 110vh;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 25px;
  border-radius: 50px;
  background: ${colors.BOX_SHADOW};
`;

export const Title = styled.h2`
  padding-left: 24px;
  margin-bottom: 10px;
  color: ${colors.WHITE};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 12px;
`;

export const Table = styled.table``;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  padding: 10px;
  border-bottom: 1px solid ${colors.WHITE};
`;

export const Th = styled.th`
  padding: 20px 30px;
`;
