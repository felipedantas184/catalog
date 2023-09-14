import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 4px;
`
export const ImageWrapper = styled(Link)`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const TextWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Category = styled.h2`
  color: #13131A;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`
export const Title = styled.h3`
  color: #13131A;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`
export const Price = styled.h4`
  color: #13131A;
  font-size: 12px;
  font-weight: 600;
`