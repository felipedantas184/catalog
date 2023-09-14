import styled from "styled-components";
interface Props {
  background?: string;
  color?: string;
}

export const Container = styled.section<Props>`
  background-color: ${props => props.background};
  padding: 24px 0;
`
export const Wrapper = styled.div`
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 32px;
  font-weight: 600;
  text-transform: capitalize;
`
export const PageTitle = styled.h1`
  color: #13131A;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`
export const Subtitle = styled.h3`
  color: #44444A;
  font-size: 16px;
  font-weight: 500;
  max-width: 480px;
`
export const Text = styled.p`
  color: #13131A;
  font-size: 14px;
  font-weight: 400;
`
export const TextSemiBold = styled.p`
  color: #13131A;
  font-size: 14px;
  font-weight: 600;
`
export const Category16 = styled.h2`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`
export const Title16 = styled.h3`
  color: #13131A;
  font-size: 16px;
  font-weight: 400;
`
export const Price18 = styled.h4`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
`
export const Box = styled.div`
  flex: 1;
	
  display: flex;
	flex-direction: column;
	align-items: center;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 328px;
  height: 444px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
export const Grid2 = styled.div`
  padding: 0 8px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`
export const FlexColumn = styled.div`
  width: 100%;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const FlexRowSB = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Divider = styled.hr`
  width: 100%;
  margin-top: 8px;
  border-top: 1px solid #BBB;
`